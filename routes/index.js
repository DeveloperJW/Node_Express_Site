const express = require('express');
const router = express.Router();

const {data} = require('../data/data.json');
const {projects} = data;

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        projects
    });
});

/* GET about page */
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
