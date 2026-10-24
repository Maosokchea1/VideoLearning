import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components 
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// Pages 
import Course from './pages/Course'; 
import AboutUs from './pages/AboutUs';
import Conect from './pages/Conect';        
import WatchLesson from './pages/WatchLesson'; 

// Auth Components 
import Login from './Auth/Login';    
import Register from './Auth/Register'; 
import ForgotPassword from './Auth/ForgotPassword'; // ✅ បន្ថែម Import នេះ

function App() {
  const [language, setLanguage] = useState('KH'); 

  return (
    <Router>
      <div className="App min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        {/* Header */}
        <Header language={language} setLanguage={setLanguage} />
        
        {/* Main Routes */}
        <Routes>
          {/* ទំព័រដើម (Home Page) */}
          <Route path="/" element={
            <>
              <HeroSection language={language} />
              <Course language={language} /> 
              <AboutUs language={language} />
              <Conect language={language} />
            </>
          } />

          {/* ទំព័រមើលវីដេអូមេរៀន (Watch Lesson Page) */}
          <Route path="/watch/:id" element={<WatchLesson language={language} />} />

          {/* ទំព័រ Auth (Login, Register, Forgot Password) */}
          <Route path="/login" element={<Login language={language} />} />
          <Route path="/register" element={<Register language={language} />} />
          <Route path="/forgot-password" element={<ForgotPassword language={language} />} /> {/* ✅ បន្ថែម Route នេះ */}
        </Routes>

        {/* Footer */}
        <Footer language={language} />

      </div>
    </Router>
  );
}

export default App;