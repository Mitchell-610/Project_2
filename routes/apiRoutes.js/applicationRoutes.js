const express = require('express');
const router = express.Router();
const { Pet, User } = require('../../models');


router.get('/application', async (req, res) => {
    try {
      const application = await User.findAll(applications);
      res.render('home', { application });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

  module.exports = router;
