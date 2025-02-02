import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(0);
    return (
        <>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + increment)}>Arttır</button>
            <button onClick={() => setIncrement(3)}>+3</button>
            <button onClick={() => setIncrement(5)}>+5</button>
            <button onClick={() => setIncrement(10)}>+10</button>
        </>

    )
}

export default Counter