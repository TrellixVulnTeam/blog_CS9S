const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/courses.controller');

router.get('/search', coursesController.search);
router.get('/', coursesController.home);

module.exports = router;
