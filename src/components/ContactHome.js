import ContactList from './ContactList'

const ContactHome = () => {
    const contactData = [
        {
            name: "Sivasubramanian",
            email: "Sivasubramanian.ram@gmail.com"
        },
        {
            name: "Sivasubramanian2",
            email: "Sivasubramanian.ram@gmail.com"
        },
        {
            name: "Sivasubramanian3",
            email: "Sivasubramanian.ram@gmail.com"
        }
    ]
    return (
        <div>
            <h2>Add Contacts</h2>
            <ContactList contactData={contactData} />
        </div>
    )
}

export default ContactHome;