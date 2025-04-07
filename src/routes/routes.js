const express = require('express');
const router = express.Router();

const users = require('../controllers/user.controller');
const auth = require('../controllers/auth.controller');
const home = require('../controllers/home.controller');
const clients = require('../controllers/clients.controller');
const products = require('../controllers/products.controller');
const register = require('../controllers/register.controller');
const license = require('../controllers/license.controller');

router.post('/users', users.Create);
router.patch('/users/:user_id', users.Update);

router.post('/license', license.Create);

router.post('/login', auth.Create);
router.patch('/changePassword', auth.Update);

router.post('/home', home.Index);

router.post('/clients', clients.Create);
router.get('/clients', clients.Index);
router.get('/clients/:user_id', clients.Index);
router.patch('/clients/:client_id', clients.Update);

router.post('/products', products.Create);
router.get('/products', products.Index);
router.get('/products/:user_id', products.Index);
router.patch('/products/:product_id', products.Update);

router.post('/register', register.Create);
router.get('/register', register.Index);
router.get('/register/:user_id', register.Index);

module.exports = router;
