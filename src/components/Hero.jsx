
const Hero = (props) => {
    return (
        <div>
            {/* <img src="https://time.com/redesign/_next/image/?url=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2025%2F06%2Flondon-climate-week-finance-sustainability-2025.jpg%3Fquality%3D85&w=1920&q=75" alt="" /> */}
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>

        </div>
    );
};

export default Hero;