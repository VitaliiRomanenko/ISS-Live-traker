import React from 'react';
import ContactFormController from '../../controllers/ContactFormController';

import bg from '../../assets/contactBG.jpg'
const ContactPage = () => {

    return (
        <div style={{ 
            paddingTop: 100, 
            height: "77vh", 
            backgroundImage: `url(${bg})`, 
            backgroundSize: "cover", 
            display: "flex",
            justifyContent:'center',
            alignItems: "center"
            }}>
            <ContactFormController />
        </div>
    );
};

export default ContactPage;