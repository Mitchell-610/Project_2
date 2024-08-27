const express = require('express');
const router = express.Router();
const { Pet, User } = require('../../models');


router.get('/adopt-cat', async (req, res) => {
  try {
    const cats = await Pet.findAll({
      where: {
        species: 'cats'
      }
    });
    res.render('adopt-cat', { pets: cats });
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
    const cat = await Pet.findByPk(id);
    if (!cat) {
      return res.status(404).json({ message: 'Dog not found' });
    }
    res.status(200).json(cat);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

  module.exports = router;
