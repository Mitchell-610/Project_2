const express = require('express');
const router = express.Router();
const { Pet } = require('../../models/pet');

// Home Route
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.findAll();
    res.render('home', { pets });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Adopt a pet Route
router.post('/adopt', async (req, res) => {
  try {
    const { name, owner, species, sex, birth } = req.body;
    await Pet.create({ name, owner, species, sex, birth });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;