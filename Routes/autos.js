const express = require('express');
const router = express.Router();
const autosController = require('../Controller/autosController');
router.get('/', autosController.home);

router.get('/:marca', autosController.marca);

router.get('/:marca/:dato?', autosController.marcaDato);

module.exports = router;