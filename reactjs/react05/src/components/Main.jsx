import React from 'react';
import axios from 'axios';
import WEATHER_URL from '../services/Weather';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Main() {
  const [weather, setWeather] = useState([]);
  const [sky, setSky] = useState('');
  const [rain, setRain] = useState('');
  const [temp, setTemp] = useState('');

  useEffect(() => {
    axios.get(WEATHER_URL).then((res) => {
      //   console.log(res.data.response.body.items.item);
      let weatherArr = [];
      for (var i = 0; i < 9; i++)
        weatherArr.push(res.data.response.body.items.item[i * 6]);
      setWeather(weatherArr);
    });
  }, []);
  useEffect(() => {
    // console.log(weather);
    if (weather.length === 0) {
      console.log('빈값');
    } else {
      weather[1].fcstValue === '0'
        ? setRain('없음')
        : weather[1].fcstValue === '1'
        ? setRain('비')
        : weather[1].fcstValue === '2'
        ? setRain('비/눈')
        : weather[1].fcstValue === '3'
        ? setRain('눈')
        : weather[1].fcstValue === '5'
        ? setRain('빗방울')
        : weather[1].fcstValue === '6'
        ? setRain('빗방울눈날림')
        : setRain('눈날림');

      weather[3].fcstValue === '1'
        ? setSky('맑음')
        : weather[3].fcstValue === '3'
        ? setSky('구름많음')
        : setSky('흐림');

      setTemp(weather[4].fcstValue + '℃');
    }
  }, [weather]);
  return (
    <>
      {sky && <div>날씨: {sky}</div>}
      {temp && <div>기온: {temp}</div>}
      {rain && <div>강수: {rain}</div>}
    </>
  );
}
