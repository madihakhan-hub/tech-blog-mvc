const router = require('express').Router();
const homeController = require('../../controllers/homeController');

// Home page route
router.get('/', homeController.getHomePage);

module.exports = router;
