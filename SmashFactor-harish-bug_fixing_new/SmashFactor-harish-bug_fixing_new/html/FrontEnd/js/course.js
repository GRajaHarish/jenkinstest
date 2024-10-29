function initAutocomplete() {

    var myLatLng = {lat: 30.900965, lng: 75.857276};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: myLatLng
    });
    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
    });
    var infowindow = new google.maps.InfoWindow();
    /*Google Map Marker Click Function*/
    google.maps.event.addListener(marker, 'click', (function(marker) {
    return function() {
    $("#mapModal").modal('show');
    }
    })(marker));
    }
