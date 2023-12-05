import React from 'react';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-8"> {/* Increased vertical padding */}
        {/* Add other footer content here if needed */}
      </div>
      <div className="flex justify-between items-start pt-9"> {/* Align items to start */}
        <div className="flex items-start"> {/* Align items to start */}
          <img alt="Dental DiagnoBot logo" className="mr-2" height="50" src="diagno.png" width="50"/>
          <span className="font-semibold">Dental DiagnoBot</span>
        </div>
        <div className="flex items-start"> {/* Align items to start */}
          <a className="text-gray-700 mx-2 hover:text-gray-900" href="https://youtube.com">Youtube</a>
          <a className="text-gray-700 mx-2 hover:text-gray-900" href="https://linkedin.com">Linkedin</a>
          <a className="text-gray-700 mx-2 hover:text-gray-900" href="https://twitter.com">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


