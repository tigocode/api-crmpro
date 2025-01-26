const express = require('express');
const router = express.Router();

const users = require('../controllers/user.controller');
const auth = require('../controllers/auth.controller');

router.post('/users', users.Create);
router.post('/login', auth.Create);

module.exports = router;
