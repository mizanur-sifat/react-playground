import React, { useState } from 'react';

const FormManageByuseState = () => {

    let [FormObject, SetFormObject] = useState({fName: "", lName: "", city: "", gender: ""})

    const InputOnChange = (property, value) => {
        SetFormObject(prevObject => ({
            ...prevObject,
            [property]:value
        }))
    }

    const FormSubmit = (e) =>{
        e.preventDefault();
        console.log(FormObject);
    }

    return (
        <div className="container">
            {/* <p>{FormObject.fName}</p>
            <p>{FormObject.lName}</p> */}

            <form onSubmit={FormSubmit}>
                <input onChange={(e)=>{InputOnChange("fName", e.target.value)}} type="text" value={FormObject.fName} placeholder='First Name' /><br />
                <input onChange={(e)=>{InputOnChange("lName", e.target.value)}} type="text" value={FormObject.lName} placeholder='Second Name' /><br />

                <select onChange={(e)=>{InputOnChange("city", e.target.value)}} value={FormObject.city}>
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Barishal">Barishal</option>
                </select>
                <br />

                <input onChange={()=>{InputOnChange("gender", "Male")}} type="radio" checked={FormObject.gender=="Male"} name="gender" /> Male
                <input onChange={()=>{InputOnChange("gender", "Female")}} type="radio" checked={FormObject.gender=="Female"} name="gender" /> Female
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormManageByuseState;