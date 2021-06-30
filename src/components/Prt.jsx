import ChlManager from './ChlManager';

const Prt = () => {
    const numVal = 30;
    const colourList = ["red", "pink", "green", "blue", "yellow", "orange", "white"];
    const penguinVal = {
        name: "Tony",
        flippers: true,
        age: 7
    }
    const penguinList = [
        {
            name: "Bob",
            flippers: true,
            age: 4
        },
        {
            name: "Richard",
            flippers: false,
            age: 3
        },
        {
            name: "Johny",
            flippers: true,
            age: 5
        }
    ]
    return (
        <div>
            <h3>Parent</h3>
            <ChlManager
                numProp={numVal}
                colorProp={colourList}
                penguinProp={penguinVal}
                penguinListProp={penguinList} />
        </div>
    );
}

export default Prt;