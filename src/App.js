import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
    
  );
}

export default App;
