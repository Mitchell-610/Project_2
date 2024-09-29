const express = require('express');
const router = express.Router();
const { Pet } = require('../../models'); // Adjust the path to your models if needed

// Define your GET route for dogs
router.get('/', async (req, res) => {
  try {
    console.log('Fetching dogs...'); // This should log when the route is hit

    // Query the Pet model to find all pets where species is 'dog'
    const dogs = await Pet.findAll({
      where: { species: 'dog' } // Make sure this matches your DB column for species
    });

    // Log the dogs to ensure you're fetching the right data
    console.log('Dogs:', dogs);

    // Return the data as JSON for the client to consume
    res.json(dogs);
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