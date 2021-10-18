const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const router = require("./router/router");
const app = express();
app.use('/',express.static('./public/'));
app.engine('html',require('express-art-template'));
app.use('/node_modules',express.static('./node_modules'))
//解析请求头为"application/x-www-form-urlencoded"的post请求参数
app.use(bodyParser.urlencoded({ extended: false }));
//解析请求头为 "application/json"的post请求参数
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/igeek',{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open',function(){连接成功的回调})
db.once('open', function() {
   console.log("已经连接数据库");
});
app.use('/',router)
app.get('*',(req,res)=>{
  res.send('访问资源不存在')
})
app.listen(8000, function () {
    console.log('xxxxxxxxx')
})