import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Header.js';
import About from './About.js';
import Resume from './Resume.js';
import Portfolio from './Portfolio.js';
import Home from './Home.js'
import DetailPage from './DetailPage.js';


function App() {
  return (
    <Router>
    <div className="App">
      <div className='app_container'>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
