import user from '../images/user.png';
import '../css/componentStyle.css';
import { Link} from 'react-router-dom';

const ContactDetail = (props) => {
    const { title, email} = props.location.state.contact;
    return (
        <div className="contactDetail">
            <h2>Contact Details</h2>
            <img src={user} alt='ssfds' />
            <p>{title}</p>
            <p>{email}</p>
            <Link to='/'>
            <button >Back to Contact List</button>
            </Link>
        </div>
    )
}

export default ContactDetail;