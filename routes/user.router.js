const router = require('express').Router();

const { userController } = require('../controllers');
const { isUserExist, isEmailUsed } = require('../middlewares/user.middleware');

router.get('/', userController.getAllUsers);
router.post('/', isEmailUsed, userController.createUser);
router.get('/:user_id', isUserExist, userController.getUserById);
router.delete('/:user_id', isUserExist, userController.deleteUser);
// router.get('/:user_name', userController.getUserByName);

module.exports = router;
