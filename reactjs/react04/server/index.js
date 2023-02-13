const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('server');
});

app.post('/access', async (req, res) => {
  var access_token;
  await axios
    .post(
      'https://kauth.kakao.com/oauth/token',
      `grant_type=authorization_code&client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&code=${req.body.code}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    )
    .then((res) => {
      access_token = res.data.access_token;
    });
  await axios
    .get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
    .then((res) => console.log(res.data));
  res.send(access_token);
});

app.listen(port, () => console.log(port, '번 작동중'));
