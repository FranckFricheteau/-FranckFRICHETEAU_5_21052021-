const express = require('express');
const router = express.Router();

//Importation du controller user
const userCtrl = require('../controllers/user');

//importation du middleware passwordValidator
const passwordValidator = require('../middleware/passwordValidator');

//importation des routes signup & login
router.post('/signup', passwordValidator, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;