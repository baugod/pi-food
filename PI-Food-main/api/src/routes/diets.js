const { Router } = require('express');
const {TypeDiet} = require ('../db');
const { getAllDiets } = require('../controller/controller.js');

const router = Router();

router.get('/', getAllDiets);

module.exports = router;
