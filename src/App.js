import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';
import SolutionSection from './components/SolutionSection/SolutionSection';
import GettingStartedSection from './components/GettingStartedSection/GettingStartedSection';
import Footer from './components/Footer/Footer';
import './App.css';
import Iframe from "react-iframe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <SolutionSection />
      <GettingStartedSection />
      <div id="iframe-block" className=" bg-slate-200 relative h-screen">
            <Iframe
              url={"https://chat-liart-psi.vercel.app//"}
              width="100%"
              height="100%" // Adjust the height as needed
              display="initial"
              position="relative"
            />
          </div>
      <Footer />
    </div>
  );
}

export default App;
