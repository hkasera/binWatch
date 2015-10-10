var map;
var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var binsPlaced = [];
function locateBins(bins){
  binsPlaced = bins;
  var infowindow, marker, i;

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: new google.maps.LatLng(12.9264849, 77.6050077),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    infowindow = new google.maps.InfoWindow();
    for (i = 0; i < bins.length; i++) {
       
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(bins[i].latitude, bins[i].longitude),
          map: map,
          icon: '/img/trash.png'
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
    var start = getPosition(bins[0].latitude,bins[0].longitude);
    
    var end =  getPosition(bins[bins.length-1].latitude,bins[bins.length-1].longitude);
    var waypts = [];
    for(i=1;i<=bins.length-2;++i){
      var pts = {
        location: getPosition(bins[i].latitude,bins[i].longitude),
        stopover: true
      }
      waypts.push(pts);
    }
    console.log(waypts);
    
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

$.when( $.ajax( "/bins" ) ).then(locateBins,handleError);
