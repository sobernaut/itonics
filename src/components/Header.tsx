import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link className="menu" to="/">Home</Link>
      <Link className="menu" to="/results">Results</Link>
    </div>
  )
}
