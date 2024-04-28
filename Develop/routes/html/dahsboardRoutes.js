const router = require('express').Router();
const dashboardController = require('../../controllers/dashboardController');

// Dashboard page route
router.get('/dashboard', dashboardController.getDashboardPage);

module.exports = router;
