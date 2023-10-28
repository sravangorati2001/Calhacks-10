import { useQuery } from 'convex/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { api } from "../convex/_generated/api";
import './App.css'

function App() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="App">
      {tasks?.map(({_id, text}) => (
        <div key={_id}>{text}</div>
      ))}
    </div>
  );
}

export default App
