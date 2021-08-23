const fs = require('fs');
const path = require('path');

const users = require('../db/users.json');

const usersPath = path.join(process.cwd(), 'db', 'users.json');

module.exports = {
    findAllUsers: () => users,

    findSingleUser: (userId) => users[userId],

    createUser: (usersArr) => {
        fs.writeFile(usersPath, JSON.stringify(usersArr), (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
};
