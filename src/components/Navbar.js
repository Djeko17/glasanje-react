import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="sk">
                <Link to="/" className="active" id='h-nav'>Home</Link>
                <Link to="rezultati" className="active">Rezultati</Link>
            </div>
        </div>
    );
}

export default Navbar;