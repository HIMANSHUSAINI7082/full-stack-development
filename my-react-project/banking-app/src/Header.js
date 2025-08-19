import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ padding: '10px', background: '#f5f5f5' }}>
      <Link to="/" style={{ marginRight: '20px', fontWeight: 'bold' }}>Home</Link>
      <Link to="/create-account" style={{ marginRight: '20px', fontWeight: 'bold' }}>Create Account</Link>
      <Link to="/login" style={{ fontWeight: 'bold' }}>Login</Link>
    </nav>
  );
}

export default Header;
