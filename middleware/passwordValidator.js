const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        return res.status(400).json({ error: 'Le mot de passe doit contenir entre 8 et 100 caractères, contenant au moins une majuscule, une minuscule et deux chiffres sans espaces' });
    }
    next();
}