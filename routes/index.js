//routes, index.js
const router = require('express').Router();
const apiRoutes = require('./apiRoutes.js/index.js');
const homeRoutes = require('./homeRoutes.js/homeRoutes.js')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);



router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;