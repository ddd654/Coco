const API_KEY = '0a0473366b1475d3be0c33fb1d02d6e3';

// geolocation 으로 지역 위치를 얻은 경우

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log('You live it', lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  // javascript가  fetch로 url을 불렀다
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector('#weather span:nth-child(1)');
      const city = document.querySelector('#weather span:nth-child(2)');
      // const name = data.name;
      // const weather = data.weather[0].main;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp
      )}`;
      // console.log(name, weather);
    })
  );
}
// 지역 정보를 얻지 못한 경우
// ex)위치 허용을 안했거나 등등
function onGeoError() {
  alert('위치 허용을 하면 날씨가 보여용');
}

// 지역 인식(성공, 실패, 옵션)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
