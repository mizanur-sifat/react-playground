import React, { useRef } from 'react';

const CachingbyUseRef = () => {

    let APIdata = useRef(null);
    let Ptag = useRef();

    const fetchAPI = async ()  => {
        let response = await fetch("https://dummyjson.com/products")
        APIdata.current = await response.json();
        // console.log(APIdata.current);

    }

    const showAPI = ()  => {
        Ptag.current.innerText = JSON.stringify(APIdata.current)
    }

    return (
        <div>
            <p ref={Ptag}></p>
            <button onClick={fetchAPI}>Call API</button>
            <button onClick={showAPI}>Show API Data</button>
        </div>
    );
};

export default CachingbyUseRef;