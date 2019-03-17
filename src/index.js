const getphone = require('./modulos/number'); // get number

const express = require('express');
const app = express();

app.get('/v1/phone/:number', (req, res) => {
  getphone(req.params.number)
    .then(info => res.send(info))
    .catch(err => res.send(err))
});

app.listen((process.env.PORT || 5000));
console.log(`Started on port: ${process.env.PORT || 5000}`);
exports = module.exports = app;
