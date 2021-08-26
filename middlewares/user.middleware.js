const User = require('../dataBase/User');
const ErrorHandler = require('../errors/ErrorHandler');
const { BAD_REQUEST, NOT_FOUND } = require('../configs/statusCodes.enum');
const {
    USER_NOT_FOUND,
    ALREADY_EXIST,
    EMPTY_FIELDS
} = require('../messages/messages');

module.exports = {
    isUserExist: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            const currentUser = await User.findById(user_id);

            if (!currentUser) {
                throw new ErrorHandler(NOT_FOUND, USER_NOT_FOUND);
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
                throw new ErrorHandler(BAD_REQUEST, `${email} ${ALREADY_EXIST}`);
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
                throw new ErrorHandler(BAD_REQUEST, EMPTY_FIELDS);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
