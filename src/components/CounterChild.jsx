const CounterChild = ({ username }) => {
    return (
        //COUNTER
        // <div>
        //     <h3>CounterChild</h3>
        //     <p>Count is {count}</p>
        // </div>

        <div>
            <h3>StateChild</h3>
            <h4>Username: {username}</h4>
        </div>

    );
}

export default CounterChild;