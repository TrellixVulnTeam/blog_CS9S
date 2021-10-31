const course = require('../models/course.model');

class SiteController {
    // [GET] home
    home(req, res, next) {
        course
            .find({})
            .then((courses) => res.render('home'))
            .catch(next);
        // res.render("home");
    }

    // [GET] search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
