import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components 
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// Pages
import Course from './pages/Course/Course'; 
import CoursesPage from './pages/Course/CoursesPage'; // ✅ បន្ថែម Import សម្រាប់ទំព័រវគ្គសិក្សាទាំងអស់
import AboutUs from './pages/About/AboutUs';       
import Contact from './pages/Contact/Contact';      
import WatchLesson from './pages/Video/WatchLesson'; 

// Auth Components 
import Login from './Auth/Login';    
import Register from './Auth/Register'; 
import ForgotPassword from './Auth/ForgotPassword'; 

function App() {
  const [language, setLanguage] = useState('KH'); 

  return (
    <Router>
      <div className="App min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        {/* Header */}
        <Header language={language} setLanguage={setLanguage} />
        
        {/* Main Routes */}
        <Routes>
          {/* ✅ ទំព័រដើម (Home Page) */}
          <Route path="/" element={
            <>
              <HeroSection language={language} />
              <Course language={language} /> 
            </>
          } />

          {/* ✅ បន្ថែម Route សម្រាប់ទំព័រវគ្គសិក្សាទាំងអស់ */}
          <Route path="/courses" element={<CoursesPage language={language} />} />

          {/* ✅ ទំព័រ About និង Contact */}
          <Route path="/about" element={<AboutUs language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />

          {/* ទំព័រមើលវីដេអូមេរៀន */}
          <Route path="/watch/:id" element={<WatchLesson language={language} />} />

          {/* ទំព័រ Auth */}
          <Route path="/login" element={<Login language={language} />} />
          <Route path="/register" element={<Register language={language} />} />
          <Route path="/forgot-password" element={<ForgotPassword language={language} />} />
        </Routes>

        {/* Footer */}
        <Footer language={language} />

      </div>
    </Router>
  );
}

export default App;