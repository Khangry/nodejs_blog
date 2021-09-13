const Course = require('../models/Course');
class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({}, function (error, courses) {
            if (!error) res.json(courses);
            res.status(400).json();
        });
        // res.render('home');
    }
    // [GET] /search

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
