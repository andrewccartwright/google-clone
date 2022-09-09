import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import logo from './logo.svg';
import './css/App.css';
import Home from './components/home/Home';
import SearchResults from './components/search-results/SearchResults';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
