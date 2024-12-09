import "./Contact.css";


function Contact() {
    return (
        <section className="contact-section" id="contact">
            <h1 className="contact-header">Reach Me Out</h1>
            <div className="contact-buttons">
            <a href="mailto:ilakkiyanj03@gmail.com"  target="_blank" rel="noopener noreferrer">
                <div className="contact-button">
                    <img src="gmail.png" alt="Gmail Icon" className="icon" />
                    <span>G-Mail</span>
                </div>
                </a>
                <div className="divider"></div>
                <a href="https://www.linkedin.com/in/ilakkiyan-j/"  target="_blank" rel="noopener noreferrer">
                <div className="contact-button" style={{ marginLeft: "10px" }}>
                <img src="linkedin.png" alt="LinkedIn Icon" className="icon" />
                    <span>Linked In</span>
                </div>
                </a>
            </div>
        </section>
    );
}


export default Contact;