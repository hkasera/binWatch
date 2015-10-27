var map,
    directionDisplay,
    directionsService = new google.maps.DirectionsService(),
    binsPlaced = [],
    browserSupportFlag = false,
    initialLocation,
    myLat = 12.9264849,
    myLong = 77.6050077,
    defaultLocation = new google.maps.LatLng(myLat, myLong);

function init(){
  map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  //center: new google.maps.LatLng(12.9264849, 77.6050077),

  if(navigator.geolocation) {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
      myLat = position.coords.latitude;
      myLong = position.coords.longitude;
      initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(initialLocation);
      var url = "/get/bins/" + parseFloat(position.coords.latitude,10) + "/" + parseFloat(position.coords.longitude,10);
      $.when( $.ajax( url ) ).then(locateBins,handleError);
    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
  }
  // Browser doesn't support Geolocation
  else {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }
  initAutocomplete();
}

function initAutocomplete() {

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    if(places.length != 0){
      var location = places[0].geometry.location;
      var lat =  location.lat();
      var longi =  location.lng();
      $.when( $.ajax( "/get/bins/"+lat+"/"+longi ) ).then(locateBins,handleError);
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));
     

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}


function handleNoGeolocation(errorFlag) {
    
    $.when( $.ajax( "/get/bins/12/77" ) ).then(locateBins,handleError);
    map.setCenter(initialLocation);
}


function locateBins(bins){
  binsPlaced = bins;
  var infowindow, marker, i;

    
    
    infowindow = new google.maps.InfoWindow();
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(myLat, myLong),
      map: map,
    });

    

    for (i = 0; i < bins.length; i++) {
          var icon = "/img/trash.png";
        if(bins[i].fill > 70){
            icon = "/img/filledbin.png";
        }else if(bins[i].fill < 70 && bins[i].fill > 50){
          icon = "/img/half_fill_bin.png";
        }else{
          icon = "/img/empty_bin.png";
        }
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(bins[i].latitude, bins[i].longitude),
          map: map,
          icon: icon
      });
      
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          var contentString = "<div><a href='/bin/"+bins[i]._id+"'>"+bins[i].name+"</a></div>";
          infowindow.setContent(contentString);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
    //getDirections(bins);
}

function getPosition(latitude,longitude){
  return latitude+","+longitude;
}

function getDirections(){
  var bins = binsPlaced;
  if(bins.length == 0){
    return;
  }
  directionsDisplay = new google.maps.DirectionsRenderer();
  var myOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
  }
  directionsDisplay.setMap(map);
    var start = getPosition(myLat,myLong);
    
    var end =  getPosition(bins[bins.length-1].latitude,bins[bins.length-1].longitude);
    var waypts = [];
    for(i=0;i<=bins.length-2;++i){
      var pts = {
        location: getPosition(bins[i].latitude,bins[i].longitude),
        stopover: true
      }
      waypts.push(pts);
    }
    var url = "https://www.google.com/maps/dir";
    for(i=0;i<=bins.length-1;++i){
      url = url + "/" +getPosition(bins[i].latitude,bins[i].longitude);
    }
    
    var request = {
      origin:start, 
      waypoints: waypts,
      destination:end,
      optimizeWaypoints: true,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        var myRoute = response.routes[0];
        var txtDir = '';
        for (var i=0; i<myRoute.legs[0].steps.length; i++) {
          txtDir += myRoute.legs[0].steps[i].instructions+"<br />";
        }
      }
    });
}

$(".get-direction").on("click",function(){
    getDirections();
});

function handleError(){
  console.log("Ooops error");
}

init();


