var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
mongoose.connect("mongodb://angulardyma:a123123@ds245022.mlab.com:45022/angulardyma", (err)=>{
  if (err)
  {
    console.log(err);
  }
  else
  {
    console.log("succès");
  }
})

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
