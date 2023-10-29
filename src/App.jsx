import { Routes, Route, useNavigate } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import NewListing from './pages/NewListing';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  const nav = useNavigate();

  const handleFormSubmit = (e) => {
    updateListings();
    nav("/");
  }

  const updateListings = () => {

  }

  return (
    <>
      {/* Add the page components here as created */}
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />}>
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
