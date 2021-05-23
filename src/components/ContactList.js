import ContactCard from './ContactCard'
import '../css/componentStyle.css'

const ContactList = (props) => {
    const renderContactList = props.contactData.map((contact) => {
       return (
           <ContactCard contact = {contact} />
       )
    })
    
    return (
        <div className="main-container">
            <div className="form-container">
            <form>
                <label>Name</label>
                <input type="text" placeholder="Enter Your Name" />
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email" />
                <button>Add</button>
            </form>
            </div>
            <h2>Contact List</h2>
            {renderContactList}
        </div>
    )
}

export default ContactList;