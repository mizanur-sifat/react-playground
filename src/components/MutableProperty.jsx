import React, { useRef } from 'react';

const MutableProperty = () => {
    let number = useRef(0); // this is mutable useRef so I didn't use it with html

    const change =() => {
        number.current++;
        console.log(number.current);
    }

    return (
        <div>
            <hr />
            <button onClick={change}>Click</button>
        </div>
    );
};

export default MutableProperty;