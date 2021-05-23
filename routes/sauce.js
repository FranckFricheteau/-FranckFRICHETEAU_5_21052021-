const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');

//Importer le Middleware de securiter auth
const auth = require('../middleware/auth');

//Importer multer
const multer = require('../middleware/multer-config');

router.get('/', auth, sauceCtrl.findSauces); //récupérer toutes les sauces
router.get('/:id', auth, sauceCtrl.findOneSauce) //récupérer une sauce
router.post('', auth, multer, sauceCtrl.createSauce); //créer une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce); //modifier une sauce
router.delete('/:id', auth, sauceCtrl.deleteSauce); // supprimer une sauce
router.post('/:id/like', auth, sauceCtrl.evaluateSauce); // noter une sauce

//Like Dislake de sauce
router.post('/sauces/:id/like', auth, multer, sauceCtrl.likeSauce);

module.exports = router;