const express = require('express');
const app = express.Router();


require('dotenv/config');


app.get('/', function(req, res){
	res.redirect('/enrolment')
})


app.get('/loadmandals', function(req,res){
	
	var sql = `SELECT mandal from enrolment GROUP BY mandal`
	
	//var sql = `SELECT rank from teachers WHERE opted_mandal = '' ORDER BY rank`;
	db.query(sql, function(err, mandals){
		if(err){
			req.flash('error', err.message)
			res.redirect('/errorpage')
		} else {
			res.send({mandals : mandals})
		}
		
	})
})


app.post('/loadschools', function(req,res){
	
	var mandal = req.body.mandal
	console.log(mandal)
	
	var sql = `SELECT schoolnamewithudisecode from enrolment where mandal='${mandal}'`
	
	//var sql = `SELECT rank from teachers WHERE opted_mandal = '' ORDER BY rank`;
	db.query(sql, function(err, schools){
		if(err){
			req.flash('error', err.message)
			res.redirect('/errorpage')
		} else {
			//console.log(schools)
			res.send({schools : schools})
		}
		
	})
})

app.get('/enrolment', function(req,res){
	res.render('schools')
})

app.post('/enrolment', function(req, res){
	var mandal = req.body.mandal;
	var school = req.body.school;
	
	var sql = `SELECT * from enrolment where mandal='${mandal}' and schoolnamewithudisecode= '${school}'`;
	
		db.query(sql, function(err, school){
			if(err){
				req.flash('error', err.message)
				res.redirect('/errorpage')
			} else {
				console.log(school)
				res.send({school : school})
			}
	})
	
})




module.exports = app;