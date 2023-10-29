import "./Navbar.css"

const Navbar = (props) => {
    return (
        <div className="nav-bar">
            <div className="name-container">
                <img 
                    src="../../public/logo.png" 
                    alt="EduCycle logo"
                    className="nav-logo"/>
                <p className="title">EduCycle</p>
            </div>
            <img 
                src="../../public/placeholder.svg" 
                alt="Female Avatar"
                className="profile-pic" />
        </div>
    );
}

export default Navbar;