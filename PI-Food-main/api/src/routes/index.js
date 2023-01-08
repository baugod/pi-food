// Importar todos los routers;
// Ejemplo: const authRouter = reqiure('./auth.js')
const {Router} = require('express');
const recipes = require('./recipes.js');
const recipe = require('./recipe.js');
const diets = require('./diets.js')
//const {getAllRecipes} = require ('../controller/controller')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipes)
router.use('/recipe', recipe)
router.use('/diets', diets)

module.exports = router;
