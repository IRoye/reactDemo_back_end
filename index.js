var express = require('express');
var mongoose = require('mongoose');
var Post = require('./models/posts');
var routes = require('./routes');
// 相当于是个log记录
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
// 引入markdown
markdown = require('markdown').markdown;



var app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
mongoose.Promise = global.Promise;
app.use(cors());


mongoose.connect('mongodb://localhost:27017/react-express-api');
var db = mongoose.connection;

db.on('error', console.log);

routes(app);
app.listen(3000, function(){
    console.log(' port : 3000');
})

