const express = require('express');
const router = express.Router();

router.get('/home', function(req, res, next) {
    res.send("Home Router Test");
    //res.render('home', { title: 'Home' });
});
