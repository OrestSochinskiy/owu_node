const fs = require('fs');
const path = require('path');
const users = require('./users');

/*-------------------------------------------------TASK---------------------------------------------------------------*/
// - у вас є масив юзрів (до 10), з такими полями наприклад - const users = [
//     { name: 'olya', gender: 'female', age: 20 }
//         ...
// ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olyya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках
/*--------------------------------------------------------------------------------------------------------------------*/

const namesOfFolders = ['manOlder20', 'manYounger20', 'womanOlder20', 'womanYounger20'];


const foldersCreator = (arrayOfNames) => {

    arrayOfNames.forEach(name => {
        let folderPath = path.join(__dirname, name)
        fs.mkdir(folderPath, {recursive: true}, err => {
            if (err) {
                console.log(err);
            }
        });
    });
}


const manOlder20Path = (fileName) => path.join(__dirname, 'manOlder20', fileName);
const manYounger20Path = (fileName) => path.join(__dirname, 'manYounger20', fileName);
const womanOlder20Path = (fileName) => path.join(__dirname, 'womanOlder20', fileName);
const womanYounger20Path = (fileName) => path.join(__dirname, 'womanYounger20', fileName);

const fileWriter = (filePath, data) => {
    fs.writeFile(filePath, data, err => {
        if (err) {
            console.log(`Some troubles with ${user.name}`, err);
        }
    });
}


const sortByAgeAndGender = (arrayOfUsers) => {
    arrayOfUsers.forEach(user => {
        if (user.age >= 20 && user.gender === 'male') {
            fileWriter(manOlder20Path(`${user.name}.txt`), JSON.stringify(user));
        } else if (user.age < 20 && user.gender === 'male') {
            fileWriter(manYounger20Path(`${user.name}.txt`), JSON.stringify(user));
        } else if (user.age >= 20 && user.gender === 'female') {
            fileWriter(womanOlder20Path(`${user.name}.txt`), JSON.stringify(user));
        } else {
            fileWriter(womanYounger20Path(`${user.name}.txt`), JSON.stringify(user));
        }
    });
}

foldersCreator(namesOfFolders);
sortByAgeAndGender(users);

