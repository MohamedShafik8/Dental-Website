import React from 'react';

function SolutionSection() {
  return (
    <div className="bg-gray-300 px-4 py-12 w-full">

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Our Key Solutions for Your Dental Health</h1>
        <button className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">GET IN TOUCH</button>
      </div>
      <div className="flex justify-center items-stretch space-x-6 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-1/4">
          <img alt="AI-Powered Dental Consultation icon" className="mx-auto mb-4" height="100" src="/tooth.png" width="100"/>
          <h2 className="text-lg font-semibold mb-4">AI-Powered Dental Consultation</h2>
          <p>Chat with our AI bot about your dental issues for precise diagnosis.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-1/4">
          <img alt="Intelligent X-Ray Analysis icon" className="mx-auto mb-4" height="100" src="/dentalai.png" width="100"/>
          <h2 className="text-lg font-semibold mb-4">Intelligent X-Ray Analysis</h2>
          <p>Upload your dental X-ray for a comprehensive AI-powered diagnosis.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-1/4">
          <img alt="Always-on Assistance icon" className="mx-auto mb-4" height="100" src="/247img.jpg" width="100"/>
          <h2 className="text-lg font-semibold mb-4">Always-on Assistance</h2>
          <p>Our chatbot is available 24/7 for your dental queries and concerns.</p>
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;

