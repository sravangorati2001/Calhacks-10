// import SearchBar from "../components/SearchBar";
// import { useState } from "react";

import { Link } from "react-router-dom";
import "./Home.css"


const Home = () => {

    return (
        <>
            <div className="home-body">
                <div className="filter-container">
                    
                </div>
                <div className="card-container">
                    <Link to="/newListing">
                        <button className="circular" id="create-new-listing">+</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;