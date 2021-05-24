import '../css/componentStyle.css';
import user from '../images/user.png';

const ContactCard = (props) => {
    const { title, email} = props.contact;
    return (
        <div className="card-container">
            <div className="row">
                {/* <div className="imageClass">
                 <img src={user} alt="user"/>
                </div> */}
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