// 1. 현재 날짜 세팅
const date = new Date();
const month =
  String(date.getMonth() + 1).length < 2
    ? 0 + String(date.getMonth() + 1)
    : String(date.getMonth() + 1);
const current_date =
  String(date.getFullYear()) + month + String(date.getDate());

// 2. 현재 시간 세팅
const current_time = String(date.getHours()) + String(date.getMinutes());

let WEATHER_URL =
  'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst';
WEATHER_URL +=
  '?' +
  encodeURIComponent('serviceKey') +
  `=${process.env.REACT_APP_SERVICE_KEY}`;
WEATHER_URL +=
  '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1');
WEATHER_URL +=
  '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('60');
WEATHER_URL +=
  '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON');
WEATHER_URL +=
  '&' +
  encodeURIComponent('base_date') +
  '=' +
  encodeURIComponent(`${current_date}`);
WEATHER_URL +=
  '&' +
  encodeURIComponent('base_time') +
  '=' +
  encodeURIComponent(`${current_time}`);
WEATHER_URL += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('55');
WEATHER_URL += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127');

export default WEATHER_URL;
