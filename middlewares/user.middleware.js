const User = require('../dataBase/User');
const ErrorHandler = require('../errors/ErrorHandler');

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
    }
};
