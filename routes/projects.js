const express = require('express');
const router = express.Router();
const {data} = require('../data/data.json');
const {projects} = data;
/* GET projects page. */

// the if statement is used to check if the /projects/id is valid url
// if the id is larger than the total number of projects, render error 404 not found page.
router.get('/:id', (req, res) => {
    if (req.params.id < projects.length) {
        res.render('project', {
            title: projects[req.params.id].project_name,
            description: projects[req.params.id].description,
            technologies: projects[req.params.id].technologies,
            liveDemo: projects[req.params.id].live_link,
            githubRepo: projects[req.params.id].github_link,
            image_urls: projects[req.params.id].image_urls
        });
    } else{
        const err = new Error('Page Not Found');
        err.status=404;
        res.render('error',{error:err});
    }
});

module.exports = router;
