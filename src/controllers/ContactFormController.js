import React, { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';

const ContactFormController = () => {
    const [status, setStatus] = useState('waiting')

    async function sendMessage (email, text) {
        setStatus("sending")
        let responce = await fetch('/feedback', {
            method: 'POST',
            body: JSON.stringify({ email, text }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        responce.ok ? setStatus("OK") : setStatus("Error")

        setTimeout(()=>{
            setStatus("waiting")
        }, 1000)
    }
    return <ContactForm onSubmit={sendMessage} status={status} />;
};

export default ContactFormController;