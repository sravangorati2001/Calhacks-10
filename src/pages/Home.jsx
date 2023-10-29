/* eslint-disable react/prop-types */
// import SearchBar from "../components/SearchBar";
// import { useState } from "react";

import { Link } from "react-router-dom";
import Checkboxes from "../components/Checkboxes";
import Listing from "../components/Listing";
import FILTERS from "./filters";

import "./Home.css";

const filters = JSON.parse(FILTERS);

const Home = (props) => {
    const NoListing = () => {
        return (
            <Link to="/newListing" className="no-listings">
                <p className="no-listings-text">
                    There are no listings.
                    <br />
                    Create a new listing
                </p>
            </Link>
        );
    }

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
                    {props.cards && props.cards !== 0 ? props.cards.map((card, index) => {
                        return (
                            <Listing 
                                key={index}
                                bookName={card.bookName}
                                isbn={card.isbn}
                                condition={card.condition}
                                price={card.price}/>
                    )}) : <NoListing />}

                    <Link to="/newListing">
                        <button className="circular" id="create-new-listing">+</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;