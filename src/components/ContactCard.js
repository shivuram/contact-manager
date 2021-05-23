import '../css/componentStyle.css'

const ContactCard = (props) => {
    const { title, email} = props.contact;
    return (
        <div className="card-container">
            <div className="row">
                <p className="row">{title}</p>
                <p className="row" >{email}</p>
            </div>
            <div className="column">
                <p className="edit">Edit</p></div>
            <p className="column">Delete</p>
        </div>
    )
}

export default ContactCard;