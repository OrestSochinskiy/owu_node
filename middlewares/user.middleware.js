const User = require('../dataBase/User');
const ErrorHandler = require('../errors/ErrorHandler');
const { findAllUsers } = require('../services/user.service');

module.exports = {
    isUserExist: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const currentUser = await User.findById(user_id);

            if (!currentUser) {
                throw new ErrorHandler(404, 'User not found');
            }

            req.user = currentUser;
            next();
        } catch (e) {
            next(e);
        }
    },

    isEmailUsed: async (req, res, next) => {
        try {
            const { email } = req.body;

            const isEmailFound = await findAllUsers({ email });

            if (isEmailFound.length) {
                throw new ErrorHandler(409, `${email} -- is already in use`);
            }

            next();
        } catch (e) {
            next();
        }
    }
};
