import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import './App.css'; // Make sure you have your CSS file imported here

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/products" element={<Productpage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
