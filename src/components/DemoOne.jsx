import React from 'react';

const DemoOne = (props) => {
    return (
        <div>
            <hr />
            <ul>
                <li>Name: {props.item['name']} </li>
                <li>Age: {props.item['age']}</li>
                <li>City: {props.item['city']}</li>
            </ul>
            <hr />
        </div>
    );
};

export default DemoOne;