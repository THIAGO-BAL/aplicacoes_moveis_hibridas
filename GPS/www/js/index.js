

    function onSucess(position)
    {

        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var myLatLng = new google.maps.LatLng(lat, long);
        var mapOptions = {zoom: 14, center: myLatLng};
        var map  = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var marker = new google.maps.Marker({position: myLatLng, map: map}); 

    }

    function onError(error) {
        alert(error.message);
    }

    function showLocation()
    {
        navigator.geolocation.getCurrentPosition(onSucess, onError, {enableHighAccuracy: true});
    }
