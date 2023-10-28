import { useQuery } from 'convex/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { api } from "../convex/_generated/api";
import './App.css'

function App() {
  const tasks = useQuery(api.tasks.get);
  return (
    // Add the page components here as created
    <BrowserRouter>
      <Routes>
        <Route path="/" element={} />
        <Route path="/home" element={}>
          <Route path="/home/isbn:" element={} />
        </Route>
        <Route path="/user" element={}>
          <Route path="/user/settings" element={} />
          <Route path="/user/listing" element={} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
