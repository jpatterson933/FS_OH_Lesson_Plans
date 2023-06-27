const router = require('express').Router();
const characters = require('./characterRoutes');

router.use('/characters', characters);

module.exports = router;