/* eslint-disable react/prop-types */
import "./Navbar.css"

const Navbar = (props) => {
    return (
        <div className="nav-bar">
            <div className="name-container">
                <img 
                    src="/logo.png" 
                    alt="EduCycle logo"
                    className="nav-logo"/>
                <p className="title">EduCycle</p>
            </div>
            {props.searchBar ? props.searchBar : null}
            <img 
                src="/placeholder.svg" 
                alt="Female Avatar"
                className="profile-pic" />
        </div>
    );
}

export default Navbar;