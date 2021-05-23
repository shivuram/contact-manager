const ContactCard = (props) => {
    const { name, email} = props.contact
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <hr />
        </div>
    )
}

export default ContactCard;