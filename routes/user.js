// express pour crée un router
const express = require('express');
// Declarer le router
const router = express.Router();

// associer les fonction aux differente routes
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//exporter le router
module.exports = router;