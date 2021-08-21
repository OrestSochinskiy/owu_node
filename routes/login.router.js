const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('need login');
});

module.exports = router;
