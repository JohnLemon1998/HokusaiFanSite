import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Header from './Header.js';
import About from './About.js';
import Resume from './Resume.js';
import Portfolio from './Portfolio.js';
import Home from './Home.js'

function App() {
  return (

    <Router>

    <div className="App">
      <Header />
      <Home />

      <About />
      <Resume />
      <Portfolio />

      <Routes>

      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
