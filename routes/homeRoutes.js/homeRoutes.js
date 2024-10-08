const express = require('express');
const router = express.Router();
const { Pet } = require('../../models');

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

router.get('/login', async (req, res) => {
  try {
    const pets = await Pet.findAll();
    res.render('login', { pets });

    res.render('login');

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