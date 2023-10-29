// import { useQuery } from 'convex/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { api } from "../convex/_generated/api";

// Pages
import Home from './pages/Home';
import Landing from './pages/Landing';
import NewListing from './pages/NewListing';
import Navbar from './components/Navbar';

import './App.css';

function App() {

  return (
    <>
      {/* Add the page components here as created */}
      <BrowserRouter>
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="/home/key:" element={<Listing />} /> */}
          </Route>
          {/* Temp Routes*/}
          <Route path="/landing" element={<Landing />} />
          <Route path="/newListing" element={<NewListing />} />
          {/* <Route path="/user" element={}>
            <Route path="/user/settings" element={} />
            <Route path="/user/listing" element={} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
