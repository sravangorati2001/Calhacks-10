import { Routes, Route, useNavigate } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import NewListing from './pages/NewListing';
import Navbar from './components/Navbar';

import './App.css';
import { useState } from 'react';

function App() {
  const nav = useNavigate();

  const [listing, setListing] = useState([]);

  const handleFormSubmit = (e) => {
    updateListings();
    nav("/");
  }

  const updateListings = () => {
    const newListing = {
      bookName: '',
      isbn: '',
      condition: '',
      price: '',
      imgSrc: ''
    };

    setListing((prevListing) => [
      ...prevListing,
      newListing
    ])
  }

  return (
    <>
      {/* Add the page components here as created */}
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home cards={listing}/>}>
            {/* <Route path="/home/key:" element={<Listing />} /> */}
          </Route>
          {/* Temp Routes*/}
          <Route path="/newListing" element={<NewListing handleSubmit={handleFormSubmit}/>} />
          {/* <Route path="/user" element={}>
            <Route path="/user/settings" element={} />
            <Route path="/user/listing" element={} />
          </Route> */}
        </Routes>
    </>
  );
}

export default App
