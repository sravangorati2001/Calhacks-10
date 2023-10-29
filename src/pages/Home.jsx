// import SearchBar from "../components/SearchBar";
// import { useState } from "react";

import { Link } from "react-router-dom";
import Checkboxes from "../components/Checkboxes";
import FILTERS from "./filters";

import "./Home.css";

const filters = JSON.parse(FILTERS);

const Home = () => {

    return (
        <>
            <div className="home-body">
                <div className="filter-container">
                    <Checkboxes 
                        filterList={filters.subject}
                        type="subject"
                        label="Subject"/>
                    <Checkboxes 
                        filterList={filters.condition}
                        type="condition"
                        label="Condition"/>
                    <Checkboxes 
                        filterList={filters.avalibility}
                        type="avalibility"
                        label="Avalibility"/>
                    <Checkboxes 
                        filterList={filters.price}
                        type="price"
                        label="Price"/>
                    
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