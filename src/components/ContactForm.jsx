
const ContactForm = () => {
    return (
        <div>
            <input type="text" /> <br />
            <button onClick={ ()=>alert("Form Submitted") }
                style={
                    {color:'red'}
                }
            >Submit</button> 
        </div>
    );
};

export default ContactForm;