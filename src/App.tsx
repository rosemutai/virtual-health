import React from 'react';
import './App.css';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Ad from './components/Ad';
import Feedback from './components/Feedback';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App w-full h-screen bg-white pt-8">
      <Navbar />
      <TopHeader />
      <Services />
      <Ad />
      <Feedback />
      <Articles />
      <Footer />
      
    </div>
  );
}

export default App;
