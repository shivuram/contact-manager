import '../css/componentStyle.css';
import user from '../images/user.png';
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
    const { title, email, id } = props.contact;
    return (
        <div className="card-container">
            <div className="row">
                <Link to={{pathname: `/contact/${id}`, state: {contact: props.contact}}}>
                <p className="row">{title}</p>
                <p className="row" >{email}</p>
                </Link>
            </div>
            <div className="column">
            {/* <p className="edit">Edit</p> */}
            <p className="column delete" onClick={() => props.removeHandler(id)}>Delete</p>
            </div>
        </div>
    )
}

export default ContactCard;