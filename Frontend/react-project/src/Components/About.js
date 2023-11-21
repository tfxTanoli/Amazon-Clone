import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer';
import './About.css';
const aboutUsStyles = {
    container: {
        background: 'linear-gradient(45deg, #007185, #00a8cc)',
        color: 'white',
        padding: '20px',
    },
    section: {
        background: 'white',
        padding: '40px 0',
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
    },
};

function About() {
    return (
        <div >
            <Navbar/>
            <section style={aboutUsStyles.container}>
                <div className="container">
                    <h2>About Us</h2>
                    <p style={aboutUsStyles.paragraph}>
                        Welcome to our company, where we're passionate about what we do. Our journey began in 2005 when a group of dedicated professionals came together to create something special. Since then, we've been committed to delivering high-quality products and services to our customers.
                    </p>
                    <p style={aboutUsStyles.paragraph}>
                        Our mission is to provide innovative solutions that enhance people's lives. We believe in the power of technology and design to make the world a better place. We're dedicated to creating products that are not only functional but also beautiful and user-friendly.
                    </p>
                </div>
            </section>
            <section style={aboutUsStyles.section}>
                <div className="container">
                    <h3 style={aboutUsStyles.header}>Our Mission</h3>
                    <p style={aboutUsStyles.paragraph}>
                        Our mission is to make a positive impact on the world through technology. We strive to create products that improve the way people live, work, and connect with one another. We're committed to sustainability and responsible business practices.
                    </p>
                </div>
            </section>
            <section style={aboutUsStyles.container}>
                <div className="container">
                    <h3 style={aboutUsStyles.header}>Our Team</h3>
                    <p style={aboutUsStyles.paragraph}>
                        Meet the dedicated team behind our success. We're a diverse group of professionals, each with unique skills and expertise. Together, we work tirelessly to bring our vision to life and serve our customers.
                    </p>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default About;