import React, { useState } from "react";
import { toast } from "react-toastify";
import '../CSS/popup.css'

const Popup = props => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.info("Message sent successfully!!",{autoClose:1500,toastId:'info'})
        setValues({
            name:"",
            email:"",
            message:""
        })
    }

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <div className="container" style={{ color: 'black' }}>
                    <h6 style={{ textAlign: 'center' }}>Leave a Message</h6>
                    <form className="leave-form" onSubmit={handleSubmit}>
                        <input className="my-3" placeholder="Enter your Name" type="text" value={values.name} onChange={handleChange} name="name" required />
                        <input placeholder="Enter your Email" type="email" name="email" value={values.email} onChange={handleChange} required />
                        <textarea placeholder="Enter your message" rows={5} className="my-3" value={values.message} name="message" onChange={handleChange} required />
                        <button className="btn btn-outline-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Popup;