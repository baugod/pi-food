console.clear();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
//const dotenv = require("dotenv")
const {diets} = require ("./src/controller/Typediets.controller.js")
const {TypeDiet} = require ("./src/db.js")

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  diets.map(e => {
    TypeDiet.create({name: e.name})
  })
  server.listen(3001, () => {
    console.log('Listening at port 3001'); // eslint-disable-line no-console
  });
});