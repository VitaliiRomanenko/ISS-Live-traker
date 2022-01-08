import React, { useState } from 'react';
import styles from './ContactForm.module.css'
const ContactForm = ({ onSubmit, status }) => {
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const submit = (e) => {
        e.preventDefault()
        if (!email.trim() || !text.trim()) {
            alert('Fill all fields')
        }
        onSubmit(email, text)
        setEmail('')
        setText('')
    }
    function SandingHandler({ status }) {
        switch (status) {
            case "sending":
                return (
                    <div className="preloader-wrapper small active right">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                )
            case "OK":
                return (
                    <i className="small material-icons right" style={{ color: "#00e676" }}>done</i>
                )
            case "Error":
                return (
                    <i className="small material-icons right" style={{ color: "#b71c1c" }}>error</i>
                )
            default:
                return (
                    <button className="btn waves-effect waves-light right light-blue" type="submit" name="action">Send
                        <i className="material-icons right">send</i>
                    </button>
                )
        }
    }

    return (
        <form onSubmit={submit} className={styles.formBody + " z-depth-4"}>

            <div className="input-field">
                <input id="email" type="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="email" autocomplete="on">Email</label>
            </div>

            <div className="input-field">
                <textarea
                    id="textarea1"
                    className="materialize-textarea"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                ></textarea>
                <label htmlFor="textarea1">Share your opinion</label>
            </div>
            <div className='row'>
                <div className='col s12 m12 l12' style={{ marginBottom: "10px" }}>
                    <a href="mailto:iss.live.tracker@gmail.com?subject=Feedback" className='right'>Or use your email client</a>
                </div>

                <div className='col s12 m12 l12'>
                    <SandingHandler status={status} />
                </div>

            </div>

        </form>
    );
};

export default ContactForm;