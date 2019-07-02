
function weather() {

  var location = document.getElementById("location");
  var apiKey = '2c4865225d7f009a3f807a1c7ca75b07'; 
  var url = 'https://api.forecast.io/forecast/';

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';

     $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      $('#temp').html(data.currently.temperature + '° F');
      $('#daily').html(data.daily.summary);
      $('#storm').html(data.currently.nearestStormDistance + ' miles away ');
    });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location. Please enable geolocation and try again.";
  }

  location.innerHTML = "Loading your location data...just a sec";
}

weather();
