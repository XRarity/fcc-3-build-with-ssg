// READ how to use links for Netlify, when we would use location f.e. fetching local weather


// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
  
  function success(pos) {
    var crd = pos.coords;

    // ! example how we would use this for fetch local weather
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metrics`
    // ! we change it to because netlify uses functions folder
    // const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metrics`

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  if(navigator.geolocation) {
  // removed options
//   let location = 
  navigator.geolocation.getCurrentPosition(success, error);
//   console.log(location)
}