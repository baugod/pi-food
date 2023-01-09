const { Router } = require('express');
const { getAllDiets } = require('../controller/controller.js');

const router = Router();

router.get('/diets', getAllDiets);

module.exports = router;
