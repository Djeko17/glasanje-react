import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="sk">
                <Link to="/" className="active">Home</Link>
            </div>
        </div>
    );
}

export default Navbar;