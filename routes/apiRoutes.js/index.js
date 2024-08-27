//api,index.js
const router = require('express').Router();
const dogRoutes = require('./dogRoutes');
const catRoutes = require('./catRoutes');
const login = require('./loginRoutes');


router.use('/dog', dogRoutes);
router.use('/cat', catRoutes);
router.use('/login', login);


module.exports = router;
