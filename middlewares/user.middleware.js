const User = require('../dataBase/User');
const ErrorHandler = require('../errors/ErrorHandler');

module.exports = {
    isUserExist: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const currentUser = await User.findById(user_id);

            if (!currentUser) {
                throw new ErrorHandler(404, 'User with id not found');
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
                throw new ErrorHandler(409, `${email} -- is already in use`);
            }
            next();
        } catch (e) {
            next(e);
        }
    }
};
