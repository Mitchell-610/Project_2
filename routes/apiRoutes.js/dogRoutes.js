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

  
// GET a single dog by id
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Ensure the ID is an integer
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    const dog = await Pet.findByPk(id);
    if (!dog) {
      return res.status(404).json({ message: 'Dog not found' });
    }
    res.status(200).json(dog);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

  module.exports = router;