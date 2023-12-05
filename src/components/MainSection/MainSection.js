import React from 'react';

function MainSection() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Flex container for the main content and the X-ray image */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-bold leading-tight mb-6">Transforming Dental Care with AI</h1>
          <p className="text-lg mb-6">Welcome to Dental DiagnoBot, a revolution in dental care. Leveraging advanced AI, our chatbot simplifies consultation and diagnosis. You can even add your panoramic X-ray for a comprehensive diagnosis.</p>
          <button className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-800">Start Your Consultation</button>
        </div>
        <div className="lg:w-1/2">
          <img alt="A panoramic dental X-ray showing upper and lower jaws with teeth" className="max-w-full h-auto" height="400" src="/xray1.jpg" width="600"/>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-semibold mr-4">Partners with Microsoft for Startups</h2>
        <img alt="Microsoft for Startups Logo" className="h-25 w-40" src="/microsoft.jpg"/>
      </div>
    </div>
  );
}

export default MainSection;

