require('./models/Location');
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connecté', () => {
    console.log(`Réussite de la connection ${process.env.DATABASE}`);
  })
  .on('erreur', (err) => {
    console.log(`Erreur de connection: ${err.message}`);
  });


require('./models/Location');
const app = require('./app');
const server = app.listen(3000, () => {
  console.log(`Express a démarré sur le port ${server.address().port}`);
});