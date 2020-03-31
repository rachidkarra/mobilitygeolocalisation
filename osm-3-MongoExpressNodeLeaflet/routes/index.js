const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Location = mongoose.model('Location');

router.get('/', (req, res) => {
  res.render('form', { title: 'Location Form' });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const location = new Location({ "nom": req.body.nom, "latlng": req.body.latlng.split(',') });
  location.save()
    .then(() => { res.send('Opération réussi'); console.log(error) })
    .catch((err) => { res.send('Echec de l\'opération'); console.log(err) });
});

router.get('/favoris', (req, res) => {
  Location.find().select('-__v -_id')
    .then((locations) => {
      res.render('index', { title: 'Mes favoris', locations }).json();
    })
    .catch(() => { res.send('Echec de l\'opération'); });
});

router.get('/getData', (req, res) => {
  Location.find().select('-__v -_id')
    .then((locations) => {
      res.json(locations)
    }).catch(() => { res.send('Echec de l\'opération'); });
});


module.exports = router;