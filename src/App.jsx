// import { useQuery } from 'convex/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { api } from "../convex/_generated/api";

// Pages
import Home from './pages/Home';
import Landing from './pages/Landing';

import './App.css'

function App() {
  return (
    <>
      {/* temp links to different pages for development */}
      {/* Add the page components here as created */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />}>
            {/* <Route path="/home/isbn:" element={} /> */}
          </Route>
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
