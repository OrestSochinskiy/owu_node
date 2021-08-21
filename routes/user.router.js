const router = require('express').Router();

const { userController } = require('../controllers');

router.post('/', userController.createUser);

router.get('/', (req, res) => {
    res.json('HELLO');
});

module.exports = router;
