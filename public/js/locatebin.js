function locateBins(bins){
 
  var map,infowindow, marker, i;

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
}

function handleError(){
  console.log("Ooops error");
}

$.when( $.ajax( "/bins" ) ).then(locateBins,handleError);
