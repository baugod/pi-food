const { Router } = require('express');
const {TypeDiet} = require ('../db');
const { getAllDiets } = require('../controller/controller');

const router = Router();

router.get('/diets', getAllDiets);

module.exports = router;
