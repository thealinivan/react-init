import CounterChild from './CounterChild';
import { useState } from 'react';
const CounterParent = () => {
    //COUNTER
    // const [count, setCount] = useState(0);

    // const updateCount = (op, num) => {
    //     op === "+" ? setCount(x => x + num)
    //         : op === "-" ? setCount(x => x - num)
    //             : op === "*" ? setCount(x => x * num)
    //                 : op === "/" ? setCount(x => x / num)
    //                     : setCount(x => x);
    // }

    // return (
    //     <div>
    //         <h3>CounterParent</h3>
    //         <button onClick={() => updateCount("+", 2)}>Add</button>
    //         <button onClick={() => updateCount("-", 2)}>Subtract</button>
    //         <button onClick={() => updateCount("*", 2)}>Multiply</button>
    //         <button onClick={() => updateCount("/", 2)}>Divide</button>
    //         <CounterChild count={count} />
    //         <h4>The current value of count is: {count}</h4>
    //     </div>
    // );

    const [username, setUsername] = useState("test");

    const handleSubmit = (e) => {
        e.preventDefault();
        //prepare data to send as POST
        // const dataToSend = JSON.stringify({ username });
        setUsername("");
    }

    return (
        <div>
            <h3>State</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username </label>
                <input id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <button type="submit" onClick={handleSubmit}>Reset</button>
            </form>
            <CounterChild username={username} />
        </div>
    );
}

export default CounterParent;