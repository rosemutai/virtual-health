import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App w-full h-screen bg-white md:pl-48 pt-8">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
  );
}

export default App;
