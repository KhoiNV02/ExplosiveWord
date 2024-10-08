var express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/homeController');
router.get('/join', homeController.getNewRoom);
// router.get('/data', homeController.database);
router.get('/', homeController.index);

module.exports = router;
