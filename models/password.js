var passwordValidator = require('password-validator'); // mot de passe fort

// Créer un schema
var passwordSchema = new passwordValidator();

// Ajouter des propriétés, restrictions
passwordSchema
    .is().min(8) // Minimum 8 caractères
    .is().max(100) // Maximum 100 caractères
    .has().uppercase() // Doit contenir au moins une majuscule
    .has().lowercase() // Doit contenir au moins une minuscule
    .has().digits(2) // Contient au moins 2 chiffres
    .has().not().spaces() // Ne contient pas d'espaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Interdit ou bloque ce type de mots de passe rentré par l'utilisateur


module.exports = passwordSchema;