const fs = require('fs');
const path = require('path');

const taskPath = path.join(__dirname, 'taskDir');
const femaleGroup = path.join(taskPath, '1800');
const maleGroup = path.join(taskPath, '2000');

// console.log(femaleGroup, 'female group');
// console.log(maleGroup, 'male group');


fs.readdir(femaleGroup, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }


    files.forEach(file => {
        fs.readFile(path.join(femaleGroup, file), (err1, data) => {
            if (err1) {
                console.log(err1);
                return;
            }

            const user = JSON.parse(data.toString());
            // console.log(user.gender);

            if (user.gender === 'male') {
                const oldPath = path.join(femaleGroup, file);
                const newPath = path.join(maleGroup, file);

                // console.log(oldPath, file, '-- old path');
                // console.log(newPath, file, '-- new path');

                fs.rename(oldPath, newPath, err2 => {
                    if (err2) {
                        console.log(err2);
                    }
                });
            }
        })
    });

});
