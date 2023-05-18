// import React from 'react';
import { Link } from 'react-router-dom';
import errorPic from '../../assets/NotFound.svg';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={errorPic} alt="404 Error" className="h-1/2 w-1/2 object-cover" />
      <h1 className="text-4xl font-semibold mt-8">Oops! Page Not Found</h1>
      <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
