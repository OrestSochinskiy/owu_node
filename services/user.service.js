const fs = require('fs');
const path = require('path');

const usersPath = path.join(process.cwd(), 'db', 'users.json');

module.exports = {
    findAllUsers: () => {
        const users = fs.readFile(usersPath);
        return JSON.parse(users.toString());
    },

    createUser: (usersArr) => {
        fs.writeFile(usersPath, JSON.stringify(usersArr), (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
};
