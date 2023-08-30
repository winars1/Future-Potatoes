const mongoose = require("mongoose");
const { faker } = require('@faker-js/faker');
const {potatoPics: potatoPictures} = require('./pictureFetcher.js');

const Potato = require("./models/PotatoModel");
const {potatoPics} = require("./pictureFetcher");

mongoose.connect('mongodb+srv://winars1:xkaB9JVMURGLRCmg@wildstory.sunthb6.mongodb.net/WildStory')
    .then(() => console.log('DB connection successful!'));

const mainFolder = 'Pictures';

const seedPotatoDB = async () => {
    await Potato.deleteMany({});
    //Get all pictures from cover dir
    let potatoPictures = potatoPics(mainFolder);
    console.log(potatoPictures)
    const potatoNames = ["Bronze", "Silver", "Diamond", "Emerald"];

    const potatoDescriptions = [
        "Near-Infinite Money",
        "Money instant",
        "Nice Money",
        "Incredible taste",
        "Makes you very happy",
        "Fixes boredom",
        "Super Big Money",
        "Money in 1 hour",
        "Nice Money",
        "Good taste",
        "Makes you happy",
        "Very Big Money",
        "Money today",
        "Nice Money",
        "Decent taste",
        "Big Money",
        "Money Tommorow",
        "Nice Money"
    ]

    for (let i = 0; i < potatoNames.length; i++){

        // console.log(images[faker.number.int({ min: 0, max: images.length - 1 })])


        let images = potatoPictures[i];

        // console.log(imageCover);
        let potatDescription = [];

        let j = 0;
        while(j < 3 + i ){
            let tempDesc = potatoDescriptions[faker.number.int({ min: 0, max: potatoDescriptions.length - 1 })];
            if(!potatDescription.includes(tempDesc))
            {
                potatDescription.push(tempDesc);
                j++;
            }

            console.log(potatDescription)
        }


        // for(let j = 0; j < 3 + i; j++){
        //     let tempDesc = potatoDescriptions[faker.number.int({ min: 0, max: potatoDescriptions.length - 1 })];
        //     if(potatDescription.includes(tempDesc))
        //     {
        //
        //     }
        //     potatDescription.push();
        // }

        let name = potatoNames[i];
        let price = faker.number.int({ min: 2 + (10 ** ( i+1 )), max: faker.number.int({ min: 100, max: 888 }) + (10 ** ( i+1 ))})



        const potato = new Potato({
            name: name,
            description: potatDescription,
            images: images,
            price: price,
        });
        await potato.save();
    }
}

seedPotatoDB();


