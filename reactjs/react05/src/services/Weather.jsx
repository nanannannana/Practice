// 1. 현재 날짜 세팅
const date = new Date();
const month =
  String(date.getMonth() + 1).length < 2
    ? 0 + String(date.getMonth() + 1)
    : String(date.getMonth() + 1);
const today_date =
  String(date.getDate()).length < 2
    ? 0 + String(date.getDate())
    : String(date.getDate());
const current_date = String(date.getFullYear()) + month + today_date;

// 2. 현재 시간 세팅
// 2-1) 30분 전 일 경우, 전 시간:30
// 2-1-1) 0 일경우, 23
// 2-1-2) 1~10일 경우, 0+(hour-1)
// 2-1-3) 11~24, hour

// 2-2) 30분 후 일 경우, 현 시간:30
// 2-2-1) 0 일경우, 00
// 2-2-2) 1~9일 경우, 0+hour
// 2-2-3) 10~24, hour
const hours =
  date.getMinutes() < 30
    ? date.getHours() === 0
      ? '23'
      : 0 < date.getHours() < 11
      ? 0 + String(date.getHours() - 1)
      : String(date.getHours())
    : date.getHours() === 0
    ? '00'
    : 0 < date.getHours() < 10
    ? 0 + String(date.getHours())
    : String(date.getHours());

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
  encodeURIComponent(`${hours + '30'}`);
WEATHER_URL += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('60');
WEATHER_URL += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('127');

export default WEATHER_URL;
