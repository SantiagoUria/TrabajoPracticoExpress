const express = require('express');
const router = express.Router();
const marcasController = require('../Controller/marcasController');
router.get('/', marcasController.home);
router.get('/:marca', marcasController.marca);

module.exports = router;