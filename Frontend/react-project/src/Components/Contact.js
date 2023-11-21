import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer';

const contactStyles = {
    container: {
        background: 'linear-gradient(45deg, #007185, #00a8cc)',
        color: 'white',
        padding: '20px',
    },
    section: {
        background: 'white',
        padding: '40px',
        margin: '20px 0',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#007185',
    },
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color:"black"
    },
    contactInfo: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
    },
};
function Contact() {
    function handleSendMessage(){
        alert("Message Sent Successfully");
    }
    return (
        <div>
            <Navbar />
            <section style={contactStyles.container}>
                <div className="container">
                    <h1 style={{marginLeft:"510px"}}>Contact Us</h1>
                    <div style={contactStyles.contactInfo}>
                        <div style={contactStyles.section}>
                            <h3 style={contactStyles.header}>Our Location</h3>
                            <p style={contactStyles.paragraph}>
                                COMSATS University Islamabad<br />
                                Abbottabad Campue, Pakistan<br />
                                Zip Code: 22620
                            </p>
                        </div>
                        <div style={contactStyles.section}>
                            <h3 style={contactStyles.header}>Contact Information</h3>
                            <p style={{color:"black"}}>
                                Phone: +92 346 5671010<br />
                                Email: usman5194999@gmail.com<br />
                                Facebook: <a href=" https://web.facebook.com/IamluqmanHaider" target="_blank" rel="noopener noreferrer">Visit us on Facebook</a><br />
                                Instagram: <a href="https://www.instagram.com/tanoliusman140" target="_blank" rel="noopener noreferrer">Follow us on Instagram</a>
                            </p>
                        </div>
                    </div>
                    <div style={contactStyles.section}>
                        <h3 style={contactStyles.header}>Get in Touch</h3>
                        <div style={contactStyles.contactForm}>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <textarea placeholder="Your Message" rows="6" />
                            <button style={{ background: '#007185', color: 'white', padding: '10px 20px', border: 'none' }}onClick={handleSendMessage}>Send Message</button>
                        </div>
                    </div>
                </div>
            </section>
            <section style={contactStyles.container}>
                <div className="container">
                    <h3 style={contactStyles.header}>Customer Support</h3>
                    <p style={contactStyles.paragraph}>
                        Our dedicated customer support team is available 24/7 to assist you with any questions or concerns you may have. Feel free to contact us, and we'll get back to you as soon as possible.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Contact;