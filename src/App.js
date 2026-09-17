import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components 
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Course from './components/Course'; 
import AboutUs from './components/AboutUs';
import Conect from './components/Conect';         
import Footer from './components/Footer';

// Auth Components
import Login from './Auth/Login';     
import Register from './Auth/Register'; 

function App() {
  const [language, setLanguage] = useState('KH'); 
  const [showCourseStudy, setShowCourseStudy] = useState(false);

  return (
    <Router>
      <div className="App min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        <Header 
          language={language} 
          setLanguage={setLanguage} 
          showCourseStudy={showCourseStudy} 
          setShowCourseStudy={setShowCourseStudy} 
        />
        
        {showCourseStudy && (
          <div className="transition-all duration-300">
            <Course language={language} /> 
          </div>
        )}

        <Routes>
          <Route path="/" element={
            <>
              <HeroSection language={language} />
              <Course language={language} /> 
              <AboutUs language={language} />
              <Conect language={language} />
            </>
          } />

          <Route path="/login" element={<Login language={language} />} />
          <Route path="/register" element={<Register language={language} />} />
        </Routes>

        <Footer language={language} />

      </div>
    </Router>
  );
}

export default App;