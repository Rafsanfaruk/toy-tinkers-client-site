// import React from 'react';
import logo from '../../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <img src={logo} alt="Website Logo" className="h-8 w-auto" />
            <p className="text-gray-400 text-sm mt-2">Your Website Tagline</p>
            <p className="text-gray-400 text-sm mt-2">&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 text-sm">
              Email: info@example.com<br />
              Phone: +1 123-456-7890
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <h4 className="text-white text-lg font-semibold mb-4">Connect with Us</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-200 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-gray-200 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-gray-200 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">123 Street, City, Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
