
const ContactForm = () => {

    const postFormData = (event) => {
        event.preventDefault();
        alert('Form Submitted without page reload');
    }

    return (
        <div>
            <hr />
            <h4>Preventing form page reload for single page application</h4>
            <form onSubmit={postFormData}>
                <input type="text" placeholder="Name" />
                <button type="submit">Submit</button>
            </form>
            <hr />
        </div>
    );
};

export default ContactForm;