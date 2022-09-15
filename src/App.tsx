import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import logo from './logo.svg';
import './css/home/App.css';
import Home from './components/home/Home';
import SearchResults from './components/search-results/SearchResults';

function App() {
  const [searchQuery, setSearchQuery] = useState();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home setSearchQuery={setSearchQuery} />} />
          <Route path="/search" element={<SearchResults searchQuery={searchQuery != null ? searchQuery : ''} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
