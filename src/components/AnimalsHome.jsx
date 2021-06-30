import AnimalsManager from './AnimalsManager';
import { useState } from 'react';

const AnimalsHome = () => {
    const [animals, setAnimals] = useState([
        {
            animalType: "wild",
            name: "Mouse",
            image: "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg",
            diet: ["Cheese", "Ham"],
            isCute: false,
        },
        {
            animalType: "wild",
            name: "Fox",
            image: "https://bloximages.chicago2.vip.townnews.com/heraldextra.com/content/tncms/assets/v3/editorial/8/ff/8ffc7aed-92e5-5b5e-8677-7e5074f94c9d/5e4ef74ec1b06.image.jpg?crop=1203%2C1203%2C0%2C0&resize=1203%2C1203&order=crop%2Cresize",
            diet: ["Meaty", "Meat"],
            isCute: true,
        },
        {
            animalType: "domestic",
            name: "Cat",
            image: "https://cms.bbcearth.com/sites/default/files/2021-02/2g24k0k80001000.png",
            diet: ["Milk", "Pedigree"],
            isCute: true,
        },
        {
            animalType: "wild",
            name: "Panda",
            image: "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/10/giant-panda-750x400.jpg",
            diet: ["Grass", "Leafes"],
            isCute: true,
        },
        {
            animalType: "wild",
            name: "Tiger",
            image: "https://www.cdc.gov/coronavirus/2019-ncov/images/daily-life-coping/tiger-medium.JPG",
            diet: ["Meaty", "Meat"],
            isCute: true,
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //prepare data to send as POST
        // const dataToSend = JSON.stringify({ username });

        const animal = {
            animalType: e.target.type.value,
            name: e.target.name.value,
            image: e.target.image.value,
            diet: e.target.diet.value.split(','),
            isCute: Boolean(e.target.iscute.value)
        }
        setAnimals([animal, ...animals]);
    }

    return (
        <div>
            <h1>Home of Animals</h1>
            <br />
            <h3>Add an animal</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="type">Animal Type </label>
                <input id="type" type="text" name="type" />
                <br />
                <label htmlFor="name">Name </label>
                <input id="name" type="text" name="name" />
                <br />
                <label htmlFor="image">Image URL </label>
                <input id="image" type="text" name="image" />
                <br />
                <label htmlFor="diet">Diet </label>
                <input id="diet" type="text" name="diet" />
                <br />
                <label htmlFor="iscute">isCute </label>
                <input id="iscute" type="text" name="iscute" />
                <br />
                <button type="submit">Add animal</button>
            </form>
            <br />
            <AnimalsManager animalsProp={animals} />
        </div>
    );
}

export default AnimalsHome;