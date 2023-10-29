import SearchBar from "../components/SearchBar";
import { useState } from "react";

import Navbar from "../components/Navbar";

const Home = () => {

    return (
        <>
            <Navbar 
                searchBar={<SearchBar />}/>

            <div className="home-body">
                <div className="filter-container">
                    
                </div>
                <div className="card-container">

                </div>
            </div>
        </>
    );
}

export default Home;