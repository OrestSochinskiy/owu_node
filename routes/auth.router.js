const router = require('express').Router();

const { authController } = require('../controllers');

router.get('/', authController.getLogin);

router.post('/', authController.logIn);

router.get('/registration', authController.getRegistration);

module.exports = router;
