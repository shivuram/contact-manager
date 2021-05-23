import ContactCard from './ContactCard'

const ContactList = (props) => {
    const renderContactList = props.contactData.map((contact) => {
       return (
           <ContactCard contact = {contact} />
       )
    })
    
    return (
        <div>
            {renderContactList}
        </div>
    )
}

export default ContactList;