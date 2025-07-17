import React, { useState } from 'react';

const UseState1 = () => {
    let [number, setNumber] = useState(0);

    return (
        <div>
            <p>You have clicked:{number} times </p>
            <button onClick={() => setNumber(number+1)}>Increment</button>
        </div>
    );
};

export default UseState1;