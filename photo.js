const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const photoController = require('../controllers/photoController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

router.post('/upload', upload.single('photo'), photoController.analyzeFace);

module.exports = router;
