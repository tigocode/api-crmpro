const express = require('express');
const router = express.Router();

const users = require('../controllers/user.controller');
const auth = require('../controllers/auth.controller');
const home = require('../controllers/home.controller');
const clients = require('../controllers/clients.controller');
const products = require('../controllers/products.controller');
const register = require('../controllers/register.controller');

router.post('/users', users.Create);
router.post('/login', auth.Create);
router.post('/home', home.Index);
router.post('/clients', clients.Create);
router.post('/products', products.Create);
router.post('/register', register.Create);

module.exports = router;
