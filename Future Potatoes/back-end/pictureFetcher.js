const fs = require('fs');
const path = require('path');

const mainFolder = 'Pictures';

function potatoDirz(mainFolder){

    let dirz = [];

    let files = fs.readdirSync(mainFolder, { withFileTypes: true });
        const directories = files.filter((file) => file.isDirectory());

        for (const directory of directories) {
            dirz.push(path.posix.join(mainFolder, directory.name))
        }
    // console.log("potatoDirz")
    return dirz;
}
let cabs = potatoDirz(mainFolder);
console.log(cabs)


function potatoPics(cabDir){
    const potatoPics = [];
    let files = fs.readdirSync(cabDir)

    const webpFiles = files.filter((file) => path.extname(file) === '.svg');

    for (const webpFile of webpFiles) {
        potatoPics.push(path.posix.join(cabDir, webpFile))
    }

    return potatoPics;
}
let bobo = potatoPics(mainFolder);
// console.log(bobo, "acaca");
module.exports  = {potatoDirz, potatoPics}