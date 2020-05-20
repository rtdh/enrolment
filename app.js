var express = require('express');
var dotenv = require('dotenv')
var bodyParser = require('body-parser');

//routes

var connectionRoutes = require('./routes/connection')
var schoolRoutes = require('./routes/schools')

require('dotenv/config');
const app = express();


//APP CONFIG
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(connectionRoutes);
app.use(schoolRoutes)

app.listen(process.env.PORT || 3000, function(){
	console.log('Enrolment Server has started!!! at port ' + 3000)
});