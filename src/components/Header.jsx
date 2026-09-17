import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { khmer } from '../Translate/khmer';
import { english } from '../Translate/English';
import logoImg from '../assets/image/Logo.png';

const Header = ({ language, setLanguage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false); 
    const [activeNav, setActiveNav] = useState('#home'); // State សម្រាប់កំណត់ Tab ដែលកំពុងជ្រើសរើស

    const t = language === 'KH' ? khmer : english;

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Function សម្រាប់ប្តូរភាសាទៅវិញទៅមក (Toggle)
    const toggleLanguage = () => {
        setLanguage(language === 'KH' ? 'EN' : 'KH');
    };

    return (
        <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex justify-between items-center h-20">
                    
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-2.5 cursor-pointer flex-shrink-0 group">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
                            <img 
                                src={logoImg} 
                                alt="Video Learning Logo" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div>
                            <span className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                                Video
                                <span className="text-primary-600 dark:text-primary-400 transition-colors duration-300">
                                    Learning
                                </span>
                            </span>
                            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-semibold">{t.subtitle}</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden xl:flex items-center space-x-1">
                        <Link 
                            to="/#home" 
                            onClick={() => {
                                setActiveNav('#home');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-base font-semibold transition-all ${
                                activeNav === '#home' 
                                    ? 'bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400' 
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400'
                            }`}
                        >
                            <svg className={`w-4 h-4 ${activeNav === '#home' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span>{language === 'KH' ? 'ទំព័រដើម' : t.home}</span>
                        </Link>
                        
                        <a 
                            href="#lessons" 
                            onClick={() => setActiveNav('#lessons')}
                            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-base font-semibold transition-all ${
                                activeNav === '#lessons' 
                                    ? 'bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400' 
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400'
                            }`}
                        >
                            <svg className={`w-4 h-4 ${activeNav === '#lessons' ? 'text-primary-600 dark:text-primary-400' : 'text-primary-500'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>{language === 'KH' ? 'វគ្គសិក្សា' : t.lessons}</span>
                        </a>

                        <a 
                            href="#about" 
                            onClick={() => setActiveNav('#about')}
                            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-base font-semibold transition-all ${
                                activeNav === '#about' 
                                    ? 'bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400' 
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400'
                            }`}
                        >
                            <svg className={`w-4 h-4 ${activeNav === '#about' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{language === 'KH' ? 'អំពីយើង' : t.about}</span>
                        </a>

                        <a 
                            href="#contact" 
                            onClick={() => setActiveNav('#contact')}
                            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-base font-semibold transition-all ${
                                activeNav === '#contact' 
                                    ? 'bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400' 
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400'
                            }`}
                        >
                            <svg className={`w-4 h-4 ${activeNav === '#contact' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>{language === 'KH' ? 'ទាក់ទងយើង' : 'Contact Us'}</span>
                        </a>
                    </nav>

                    {/* Right Controls */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        
                        {/* Dark / Light Mode Button */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200/60 dark:border-gray-700 transition-all"
                            title="Toggle Mode"
                        >
                            {darkMode ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                                </svg>
                            )}
                        </button>

                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200/60 dark:border-gray-700 flex items-center space-x-2 text-xs font-bold transition-all"
                            title="Switch Language"
                        >
                            {language === 'KH' ? (
                                <>
                                    <img src="https://flagcdn.com/w40/kh.png" alt="KH" className="w-5 h-3.5 object-cover rounded-2xs shadow-xs" />
                                    <span className="text-primary-600 dark:text-primary-400">ភាសាខ្មែរ</span>
                                </>
                            ) : (
                                <>
                                    <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-5 h-3.5 object-cover rounded-2xs shadow-xs" />
                                    <span className="text-primary-600 dark:text-primary-400">English</span>
                                </>
                            )}
                        </button>

                        {/* Mobile Menu Toggle Button */}
                        <div className="flex xl:hidden items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 focus:outline-none p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Login & Register Buttons (Balanced & Clean) */}
                        <div className="hidden sm:flex items-center space-x-3 flex-shrink-0">
                            <Link
                                to="/login"
                                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-50/80 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-gray-700 transition-all border border-primary-200/80 dark:border-gray-700 shadow-xs"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                <span>{language === 'KH' ? 'ចូល' : 'Login'}</span>
                            </Link>

                            <Link
                                to="/register"
                                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-500/20 transition-all"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                                <span>{language === 'KH' ? 'ចុះឈ្មោះ' : 'Register'}</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mobile / Tablet Menu */}
            {isMenuOpen && (
                <div className="xl:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 px-5 pt-4 pb-8 space-y-2.5 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
                    
                    {/* Mobile Login & Register Buttons */}
                    <div className="grid grid-cols-2 gap-2.5 pb-3 border-b border-gray-100 dark:border-gray-800">
                        <Link to="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400 font-bold border border-primary-200 dark:border-gray-700 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>{language === 'KH' ? 'ចូល' : 'Login'}</span>
                        </Link>
                        <Link to="/register" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm bg-primary-600 text-white font-bold shadow-md shadow-primary-500/20 transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            <span>{language === 'KH' ? 'ចុះឈ្មោះ' : 'Register'}</span>
                        </Link>
                    </div>

                    <Link 
                        to="/#home" 
                        onClick={() => { 
                            setIsMenuOpen(false); 
                            setActiveNav('#home'); 
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }} 
                        className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 font-bold transition-all"
                    >
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>{language === 'KH' ? 'ទំព័រដើម' : t.home}</span>
                    </Link>

                    <a href="#lessons" onClick={() => { setIsMenuOpen(false); setActiveNav('#lessons'); }} className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base text-gray-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 font-bold transition-all">
                        <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>{language === 'KH' ? 'វគ្គសិក្សា' : t.lessons}</span>
                    </a>

                    <a href="#about" onClick={() => { setIsMenuOpen(false); setActiveNav('#about'); }} className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 font-bold transition-all">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{language === 'KH' ? 'អំពីយើង' : t.about}</span>
                    </a>
                    
                    <a href="#contact" onClick={() => { setIsMenuOpen(false); setActiveNav('#contact'); }} className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800 hover:text-primary-600 font-bold transition-all">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{language === 'KH' ? 'ទាក់ទងយើង' : 'Contact Us'}</span>
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;