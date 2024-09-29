//routes, index.js
const router = require('express').Router();
const apiRoutes = require('./apiRoutes.js');
const homeRoutes = require('./homeRoutes.js/homeRoutes.js');
// const dogRoutes = require('./apiRoutes.js/dogRoutes.js');
// const catRoutes = require('./apiRoutes.js/catRoutes.js');
// const login = require('./apiRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/dog', dogRoutes);
// router.use('/cat', catRoutes);
// router.use('/login', login);




router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;