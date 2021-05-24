import Header from './Header'
import ContactList from './ContactList';
import AddContact from './AddContact';
import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
            <Router>
                <Header />
                <Switch>
                    <Route path="/add" render={props => (
                        <AddContact addContactHandler={addContactHandler} />
                    )}/>
                    <Route path="/" exact render={(props) => (
                        <ContactList {...props} contactData={contacts}  />
                    )} />  

                </Switch>
            </Router>
        </div>
    )
}

export default ContactHome;