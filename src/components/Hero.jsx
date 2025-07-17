import { useRef } from "react";

const Hero = (props) => {
    let heading = useRef();
    const change = ()=>{
        heading.current.classList.remove('text-success');
        heading.current.classList.add('text-danger');

    }

    return (
        <div>
            {/* <img src="https://time.com/redesign/_next/image/?url=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%
            2F2025%2F06%2Flondon-climate-week-finance-sustainability-2025.jpg%3Fquality%3D85&w=1920&q=75" alt="" /> */}
        <h1 className="text-success" ref={heading} >{props.title}</h1>
        <h2>{props.description}</h2>
        <button onClick={change}>Change</button>

        </div>
    ); 
};

export default Hero;