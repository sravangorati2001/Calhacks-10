// import { useQuery } from 'convex/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { api } from "../convex/_generated/api";

// Pages
import Home from './pages/Home';
import Landing from './pages/Landing';
<<<<<<< HEAD
import UserSettings from './pages/UserSettings';
=======
import NewListing from './pages/NewListing';
>>>>>>> 3ec6d2b78c5dec638c2d8063819dee046cf4b4db

import './App.css'

function App() {
  const Temp = () => {
    return (
      <>
        <Link to="/home">Home</Link>
        <Link to="/landing">Landing</Link>
<<<<<<< HEAD
        <Link to="/userSettings">UserSettings</Link>
=======
        <Link to="/newListing">New Listing</Link>
>>>>>>> 3ec6d2b78c5dec638c2d8063819dee046cf4b4db
      </>
    );
  }

  return (
    <>
      {/* Add the page components here as created */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Temp />} />
<<<<<<< HEAD
          <Route path="/landing" element={<Landing />} />
          <Route path="/userSettings" element={<UserSettings />} />
=======
>>>>>>> 3ec6d2b78c5dec638c2d8063819dee046cf4b4db
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
