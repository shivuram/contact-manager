import ContactList from './ContactList';
import React, { useState } from "react";

const ContactHome = () => {
    const [contacts, setContacts] = useState([]);

    // const contactData = [
    //     {
    //         name: "Sivasubramanian",
    //         email: "Sivasubramanian.ram@gmail.com"
    //     },
    //     {
    //         name: "Sivasubramanian2",
    //         email: "Sivasubramanian.ram@gmail.com"
    //     },
    //     {
    //         name: "Sivasubramanian3",
    //         email: "Sivasubramanian.ram@gmail.com"
    //     }
    // ]

    const addContactHandler = (contact) => {
        setContacts([...contacts, contact]);
    }
    return (
        <div>
            <h2>Add Contacts</h2>
            <ContactList contactData={contacts} addContactHandler={addContactHandler}/>
        </div>
    )
}

export default ContactHome;