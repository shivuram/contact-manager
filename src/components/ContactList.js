import ContactCard from './ContactCard'
import '../css/componentStyle.css'
import { Link } from 'react-router-dom'

const ContactList = (props) => {
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contactData.map((contact) => {
       return (
           <ContactCard contact = {contact} key={contact.id} removeHandler={deleteContactHandler}/>
       )
    })
    
    return (
        <div className="main-container">
            <Link to='/add'>
                <button>Add Contacts</button>
            </Link>
            <h2>Contact List</h2>
            {renderContactList}
        </div>
    )
}

export default ContactList;