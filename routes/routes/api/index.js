const router = require('express').Router();
const characters = require('./characterRoutes');

router.use('/character', characters);

module.exports = router;