// import React, { useState } from 'react';
import { useState } from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Perform login here
    setIsLoggedIn(true);
    setUsername('John Doe'); // Set the username after successful login
  };

  const handleLogout = () => {
    // Perform logout here
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Website Logo" className="h-8 w-auto" />
          </Link>
          <Link to="/" className="text-white text-lg font-semibold ml-2">
            Toy Tinkerers
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className="text-white hover:text-gray-300 ml-4">
            Home
          </Link>
          <Link to="/toys" className="text-white hover:text-gray-300 ml-4">
            All Toys
          </Link>
          {isLoggedIn && (
            <>
              <Link to="/my-toys" className="text-white hover:text-gray-300 ml-4">
                My Toys
              </Link>
              <Link to="/add-toy" className="text-white hover:text-gray-300 ml-4">
                Add A Toy
              </Link>
            </>
          )}
          <Link to="/blogs" className="text-white hover:text-gray-300 ml-4">
            Blogs
          </Link>
          {isLoggedIn ? (
            <div className="flex items-center ml-4">
              <img
                src=""
                alt="User Profile"
                className="h-8 w-8 rounded-full cursor-pointer"
                title={username ? `Welcome, ${username}` : ''}
              />
              <button
                className="text-white hover:text-gray-300 ml-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to='/login'
              className="text-white hover:text-gray-300 ml-4"
              onClick={handleLogin}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
