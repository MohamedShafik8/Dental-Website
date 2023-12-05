import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';
import SolutionSection from './components/SolutionSection/SolutionSection';
import GettingStartedSection from './components/GettingStartedSection/GettingStartedSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <SolutionSection />
      <GettingStartedSection />
      <Footer />
    </div>
  );
}

export default App;
