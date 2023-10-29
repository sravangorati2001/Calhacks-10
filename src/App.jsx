// import { useQuery } from 'convex/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { api } from "../convex/_generated/api";

// Pages
import Home from './pages/Home';
import Landing from './pages/Landing';
import NewListing from './pages/NewListing';

import './App.css'

function App() {
  const Temp = () => {
    return (
      <>
        <Link to="/home">Home</Link>
        <Link to="/landing">Landing</Link>
        <Link to="/newListing">New Listing</Link>
      </>
    );
  }

  return (
    <>
      {/* Add the page components here as created */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Temp />} />
          <Route path="/home" element={<Home />}>
            {/* <Route path="/home/isbn:" element={} /> */}
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
