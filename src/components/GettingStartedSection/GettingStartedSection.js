import React from 'react';

function GettingStartedSection() {
  return (
    <div className="bg-black text-white flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-12">Getting Started Is a Breeze</h1>
        <div className="space-y-12">
          <div>
            <div className="mb-4">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white flex items-center justify-center">
                <span className="text-black font-bold">01</span>
              </div>
              <h2 className="text-2xl font-bold"> Step 1: Start a Consultation</h2>
            </div>
            <p className="text-lg">Simply chat with our AI bot about your dental problem.</p>
          </div>
          <div>
            <div className="mb-4">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white flex items-center justify-center">
                <span className="text-black font-bold">02</span>
              </div>
              <h2 className="text-2xl font-bold">Step 2: Upload X-Ray</h2>
            </div>
            <p className="text-lg">Add your dental X-ray for an in-depth analysis.</p>
          </div>
          <div>
            <div className="mb-4">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white flex items-center justify-center">
                <span className="text-black font-bold">03</span>
              </div>
              <h2 className="text-2xl font-bold">Step 3: Receive Treatment Plan</h2>
            </div>
            <p className="text-lg">Get a personalized treatment plan from our experts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GettingStartedSection;

