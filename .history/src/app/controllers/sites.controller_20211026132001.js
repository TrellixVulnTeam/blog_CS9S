class SiteController {
    // [GET] home
    home(req, res) {
        courses.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR' });
            }
        });

        // res.render("home");
    }

    // [GET] search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
