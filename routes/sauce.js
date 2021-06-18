//Importation du framework Express
const express = require('express');

//Importation du router express
const router = express.Router();

//Importer le Middleware de securité auth
const auth = require('../middleware/auth')

//Importer multer
const multer = require('../middleware/multer-config');

//Importer controllers sauce
const sauceCtrl = require('../controllers/sauce');

router.get('/', auth, sauceCtrl.findSauces) // trouver toutes les sauces
router.get('/:id', auth, sauceCtrl.findOneSauce) // trouver une sauce
router.post('', auth, multer, sauceCtrl.createSauce); // créer une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce); // modifier une sauce
router.delete('/:id', auth, sauceCtrl.deleteSauce); // supprimer une sauce
router.post('/:id/like', auth, sauceCtrl.evaluateSauce); // noter une sauce

module.exports = router;