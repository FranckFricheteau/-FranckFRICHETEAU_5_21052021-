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

router.get('/', auth, sauceCtrl.findSauces) // Renvoie le tableau de toutes les sauces dans la base de données
router.get('/:id', auth, sauceCtrl.findOneSauce) // Renvoie la sauce avec l'ID fourni
router.post('', auth, multer, sauceCtrl.createSauce); // Capture et enregistre l'image, analyse la sauce en utilisant une chaîne de caractères et l'enregistre dans la base de données, en définissant correctement son image URL. 
router.put('/:id', auth, multer, sauceCtrl.modifySauce); // Met à jour la sauce avec l'identifiant fourni
router.delete('/:id', auth, sauceCtrl.deleteSauce); // Supprime la sauce avec l'ID fourni
router.post('/:id/like', auth, sauceCtrl.evaluateSauce); // Définit le statut "j'aime" pour userID fourni. Si j'aime = 1, l'utilisateur aime la sauce. Si j'aime = 0, l'utilisateur annule ce qu'il aime ou ce qu'il n'aime pas. Si j'aime =-1, l'utilisateur n'aime pas la sauce.

module.exports = router;