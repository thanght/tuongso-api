const express = require('express');
const router = express.Router();
const tuongController = require('../controllers/tuongController');

router.get('/phan-tich', tuongController.phanTichTheoTen);
router.get('/kienthuc', tuongController.kienThuc);

module.exports = router;
