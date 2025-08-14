import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white border-b border-sky-200 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left section */}
        <Link to="/todo-add">
          <button className="bg-gradient-to-r from-cyan-400 to-sky-500 hover:brightness-110 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300">
            Add
          </button>
        </Link>

        {/* Center section */}
        <Link to="/todo-show">
          <button className="bg-gradient-to-r from-cyan-400 to-sky-500 hover:brightness-110 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300">
            Show
          </button>
        </Link>

        {/* Right section */}
        <Link to="/todo-done">
          <button className="bg-gradient-to-r from-cyan-400 to-sky-500 hover:brightness-110 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300">
            Done
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
