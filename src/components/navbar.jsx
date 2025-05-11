import React from 'react';
  // Import Link for routing
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <a href="/" className="logo">Learning Hub</a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/quizzes">Quizzes</a></li>
          <li><a href="/tutorials">Resources</a></li>
        </ul>
        {/* <Link to="/signup" className="signup-button">Sign Up</Link> Make sure it's using Link */}
      </div>
    </nav>
  );
};

export default Navbar;
