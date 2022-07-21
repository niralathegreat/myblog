/*
var express = require("express");

var app = express();

app.use(express.static('iPortfolio'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/iPortfolio/assets/css'));
app.use('/js', express.static(__dirname + '/iPortfolio/assets/js'));
app.use('/images', express.static(__dirname + '/iPortfolio/assets/img'));

app.get('/home', (req, res) => {
	res.sendfile("iPortfolio/home.html");
});
app.get('/about', (req, res) => {
	res.sendfile("iPortfolio/about.html", { title: 'Services' });
});
app.get('/resume', (req, res) => {
	res.sendfile("iPortfolio/resume.html");
});
app.get('/portfolio', (req, res) => {
	res.sendfile("iPortfolio/portfolio.html");
});
app.get('/services', (req, res) => {
	res.sendfile("iPortfolio/services.html");
});
app.get('/contact', (req, res) => {
	res.sendfile("iPortfolio/contact.html");
});

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
}); 
*/



var express = require("express");
var app = express();
app.use(express.static('iPortfolio'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/iPortfolio/assets/css'));
app.use('/js', express.static(__dirname + '/iPortfolio/assets/js'));
app.use('/images', express.static(__dirname + '/iPortfolio/assets/img'));

const path = require('path');
/* app.set('views', path.join(__dirname, '/iPortfolio/views'));
app.set('view engine', 'pug'); */
app.set('views', path.join(__dirname, '/iPortfolio/views/pages'));
app.set('view engine', 'ejs');

//app.use(express.static(path.join(__dirname, "assets/vendor/")));

app.get('/home', function(req, res, next) {    
    res.render('home', { title: 'Home' });
});

app.get('/about', function(req, res, next) {    
    res.render('about', { title: 'About' });
});

app.get('/contact', function(req, res, next) {    
    res.render('contact', { title: __dirname + '/iPortfolio/assets/css' });
});

app.get('/resume', function(req, res, next) {    
    res.render('resume', { title: 'Resume' });
});

app.get('/portfolio', function(req, res, next) {
	//users = ['geddy', 'neil', 'alex']; 
	users = {
		"name" : "Surya",
		"age" : 24
	}
    res.render('portfolio', { title: 'Portfolio', user: users });
});

app.get('/services', function(req, res, next) {    
    res.render('services', { title: 'Services' });
});

var server = app.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
}); 



