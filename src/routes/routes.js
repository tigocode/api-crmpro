const express = require('express');
const router = express.Router();

const users = require('../controllers/user.controller');
const auth = require('../controllers/auth.controller');
const home = require('../controllers/home.controller');

router.post('/users', users.Create);
router.post('/login', auth.Create);
router.post('/home', home.Index);

module.exports = router;
