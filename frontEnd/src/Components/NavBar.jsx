import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-2xl font-bold">
          Alwin
        </Link>
        <div className="flex items-center">
          {isLoggedIn && (
            <Link to="/dashboard" className="text-white mr-4 hover:text-gray-300">
              Dashboard
            </Link>
          )}
          <button
            onClick={handleAuth}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;