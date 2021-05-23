import ContactCard from './ContactCard'
import '../css/componentStyle.css'
import React, { useState } from "react";

const ContactList = (props) => {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');

    const renderContactList = props.contactData.map((contact) => {
       return (
           <ContactCard contact = {contact} />
       )
    })

    const clickHandler = (e) => {
        e.preventDefault();
        const contacts = {title, email}
        if (title === "" || email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        props.addContactHandler(contacts);
        setEmail('');
        setTitle('');
    }
    
    return (
        <div className="main-container">
            <div className="form-container">
            <form >
                <label>Name</label>
                <input type="text" placeholder="Enter Your Name" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={clickHandler}>Add</button>
            </form>
            </div>
            <h2>Contact List</h2>
            {renderContactList}
        </div>
    )
}

export default ContactList;