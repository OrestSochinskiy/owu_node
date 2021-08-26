const router = require('express').Router();

const { userController } = require('../controllers');
const {
    isUserExist,
    isEmailUsed,
    isUserValid
} = require('../middlewares/user.middleware');

router.get('/', userController.getAllUsers);
router.post('/', isUserValid, isEmailUsed, userController.createUser);
router.get('/:user_id', isUserExist, userController.getUserById);
router.put('/:user_id', isUserExist, isUserValid, userController.updateUser);
router.delete('/:user_id', isUserExist, userController.deleteUser);

module.exports = router;
