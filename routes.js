const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Example route
router.get('/hello', controller.sayHello);

module.exports = router; 