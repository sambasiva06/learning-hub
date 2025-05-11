import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Courses from './components/courses';
import Certifications from './components/certifications';

import './App.css';

// Protected Route: Redirect if not authenticated



 
function App() {
  return (
   
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/certifications" element={<Certifications />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect to home for unknown routes */}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
