const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { projects } = data;
/* GET projects page. */

router.get('/:id', (req, res) => {
    res.render('project', {
        title: projects[req.params.id].project_name,
        description: projects[req.params.id].description,
        technologies: projects[req.params.id].technologies,
        liveDemo: projects[req.params.id].live_link,
        githubRepo: projects[req.params.id].github_link,
        image_urls: projects[req.params.id].image_urls
    });
});

module.exports = router;
