const { Router } = require('express');
const {TypeDiet} = require ('../db');
const {diets} = require ('../controller/Typediets.controller.js')

const router = Router();

router.get('/', async (req, res) => {
    diets.forEach(e=> {
        TypeDiet.findOrCreate({
            where: {name: e.name}
        })
    })
    const allTypes = await TypeDiet.findAll();
    res.send(allTypes.map(e => e.name))
})

module.exports = router;
