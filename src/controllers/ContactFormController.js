import React, { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import {sendEmail} from "../http/emailAPI";

const ContactFormController = () => {
    const [status, setStatus] = useState('waiting')

    async function sendMessage (email, text) {
        setStatus("sending")
        let responce = await sendEmail({email, text})
        responce === 200 ? setStatus("OK") : setStatus("Error")

        setTimeout(()=>{
            setStatus("waiting")
        }, 1000)
    }
    return <ContactForm onSubmit={sendMessage} status={status} />;
};

export default ContactFormController;