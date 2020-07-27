const express = require('express');
const router = express.Router();
const sucursalesController = require('../Controller/sucursalesController');

router.get('/', sucursalesController.home);
router.get('/:id', sucursalesController.sucursal);

module.exports = router;