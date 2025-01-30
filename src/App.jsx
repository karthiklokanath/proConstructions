import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
