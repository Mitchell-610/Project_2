const express = require('express');
const router = express.Router();
const { Pet, User } = require('../../models');


router.get('/', async (req, res) => {
    try {
      const dogs = await Pet.findAll({
        where: {
          species: 'dogs'  // Adjust 'type' and 'cat' to match your actual column name and value
        }
    });
      res.render('home', { pets: dogs });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

  module.exports = router;
