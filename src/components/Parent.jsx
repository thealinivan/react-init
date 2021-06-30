import Child from './Child';

const Parent = () => {
    const addFunc = (x, y) => {
        return x + y;
    }
    addFunc(2, 4);

    return (
        <div>
            {/* <h3>Data</h3>
            <img src="./resources/1.jpg" width={200} alt="" /> */}
            <Child type="Pepperoni" size={12} stuffedCrust={true} />
            <Child type="Margherita" size={15} stuffedCrust={false} />
        </div>
    )
}

export default Parent;