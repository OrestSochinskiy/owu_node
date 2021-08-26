const router = require('express').Router();

const { userController } = require('../controllers');
const { isUserExist } = require('../middlewares/user.middleware');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:user_id', isUserExist, userController.getUserById);
router.delete('/:user_id', userController.deleteUser);
// router.get('/:user_name', userController.getUserByName);

module.exports = router;
