import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Privacy Policy</h1>

        <p style={styles.paragraph}>
          Your privacy and safety of your data are important to us. This Privacy Policy document describes the types of information that are or may be collected, used, or shared by Amazon when you visit, use, or make purchases.
          If you have any additional questions or require more information about our Privacy Policy or about how we handle user data and personal information, or wish to withdraw your consent for the continued collection, use, or disclosure of your Personal Information, please feel free to contact us. To withdraw your Cookie Consent, click here.
        </p>

        <h2 style={styles.subHeading}>Definitions</h2>
        <p style={styles.paragraph}>
          Amazon is operated by Amazon, Inc., San Francisco, CA 94107. (referred to as "I", "Me", "Our", "Us" or "We"). As a customer of this service, you're a "User," "Visitor," or "You" according to this agreement. The Website or any services offered by us will be referred to as "Website" or "Service". External services or integrations like will be referred to as Applications "External Provider" or "External Service".
        </p>

        <h2 style={styles.subHeading}>Data we collect</h2>
        <p style={styles.paragraph}>
          Following standard procedures of using log files, these files automatically log visits when you visit the Website. It may include information about your web browser, some of the cookies that are installed on your device, IP address, ISP, time zone and time stamp, referring/exit pages, number of clicks. The purpose of this information is for analyzing trends, administering this website, tracking users' movement on this website, and gathering demographic information, and it's not linked to any information that is personally identifiable. Additionally, as you browse the Website, we may collect information about subpages you view.
        </p>

        {/* Add the rest of your privacy policy content here */}

        <h2 style={styles.subHeading}>Consent</h2>
        <p style={styles.paragraph}>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f8f8',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden', // Remove overflow
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: '24px',
    color: '#333',
    marginTop: '20px',
  },
  paragraph: {
    lineHeight: '1.6',
    color: '#666',
  },
};

export default PrivacyPolicy;
