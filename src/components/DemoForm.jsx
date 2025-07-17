import React, { useRef } from 'react';

const DemoForm = () => {
    let firstName, lastName = useRef();
    const change = ()=>{
        let fName= firstName.value;
        let lName= lastName.value;
        alert(fName +" "+lName);
    }

    return (
        <div>
            <input ref={(a)=>firstName=a} placeholder='First Name' /> <br /> <br />
            <input ref={(a)=>lastName=a} placeholder='Last Name' />
            <button onClick={change}>Save</button>
        </div>
    );
};

export default DemoForm;