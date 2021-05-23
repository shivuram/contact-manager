import '../css/componentStyle.css'

const ContactCard = (props) => {
    const { name, email} = props.contact;
    return (
        <div className="card-container">
            <div className="row">
                <p className="row">{name}</p>
                <p className="row" >{email}</p>
            </div>
            <div className="column">
                <p className="edit">Edit</p></div>
            <p className="column">Delete</p>
        </div>
    )
}

export default ContactCard;