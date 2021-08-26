const User = require('../dataBase/User');
const ErrorHandler = require('../errors/ErrorHandler');
const { BAD_REQUEST, NOT_FOUND } = require('../configs/statusCodes.enum');

module.exports = {
    isUserExist: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            const currentUser = await User.findById(user_id);

            if (!currentUser) {
                throw new ErrorHandler(NOT_FOUND, 'User with id not found');
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

            const isEmailFound = await User.findOne({ email });

            if (isEmailFound) {
                throw new ErrorHandler(BAD_REQUEST, `${email} -- is already in use`);
            }
            next();
        } catch (e) {
            next(e);
        }
    },

    isUserValid: (req, res, next) => {
        try {
            const { name, email } = req.body;

            if (!name || !email) {
                throw new ErrorHandler(BAD_REQUEST, 'empty fields');
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
