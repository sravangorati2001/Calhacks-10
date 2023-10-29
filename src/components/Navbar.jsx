import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
    return (
        <div className="nav-bar">
            <Link to="/" className="name-container">
                <img 
                    src="/logo.png" 
                    alt="EduCycle logo"
                    className="nav-logo"/>
                <p className="title">EduCycle</p>
            </Link>
            <img 
                src="/placeholder.svg" 
                alt="Female Avatar"
                className="profile-pic" />
        </div>
    );
}

export default Navbar;