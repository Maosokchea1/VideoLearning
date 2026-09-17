import React, { useState, useEffect } from 'react';
import { khmer } from '../Translate/khmer';
import { english } from '../Translate/English';

const HeroSection = ({ language }) => {
    // ផ្អែកលើភាសាដែលបានបញ្ជូនមក (ប្រសិនបើមិនបានបញ្ជូនទេ វាលំនាំដើមជា KH)
    const t = language === 'EN' ? english : khmer;

    // State សម្រាប់จำลองการพิมพ์โค้ดรត់ (Code Running Animation)
    const codes = [
        "const learn = () => {",
        "  console.log('Welcome to VideoLearing');",
        "  return <Success />;",
        "};",
        "// Let's build your future today 🚀"
    ];
    
    const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCodeIndex((prev) => (prev + 1) % codes.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [codes.length]);

    return (
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-32 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <span className="inline-block bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
                            {language === 'EN' ? 'Video Learning Platform' : 'វេទិកាការសិក្សាវីដេអូ'}
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            {language === 'EN' ? 'Master New Skills Through Video Lessons' : 'ស្វែងយល់ជំនាញថ្មីៗតាមរយៈវីដេអូមេរៀន'}
                        </h1>
                        
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
                            {language === 'EN' 
                                ? 'Explore high-quality video courses taught by expert instructors. Learn at your own pace, anytime and anywhere.' 
                                : 'ស្វែងរកវគ្គសិក្សាវីដេអូគុណភាពខ្ពស់ បង្រៀនដោយគ្រូជំនាញៗ។ សិក្សាដោយខ្លួនឯង គ្រប់ពេលវេលា និងគ្រប់ទីកន្លែង។'}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                            <a 
                                href="#lessons" 
                                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-red-500/30 transition-all text-center transform hover:-translate-y-0.5"
                            >
                                {t.startBtn}
                            </a>
                            <a 
                                href="#about" 
                                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold px-8 py-3.5 rounded-xl transition-all text-center border border-gray-200 dark:border-gray-700"
                            >
                                {t.exploreBtn}
                            </a>
                        </div>
                    </div>

                    {/* Right Graphic Illustration with Code Running Effect */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-lg bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl text-white border border-gray-700 overflow-hidden group">
                            
                            {/* Background Decorative Glow */}
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500"></div>
                            
                            {/* Top Window Bar (IDE Style) */}
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-700/60">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-xs font-mono text-gray-400 bg-gray-800/80 px-3 py-1 rounded-md border border-gray-700">
                                    VideoLearing.tsx
                                </span>
                            </div>

                            {/* Center Play Button with Animation */}
                            <div className="flex flex-col items-center justify-center my-6">
                                <div className="relative bg-gradient-to-tr from-red-600 to-rose-600 p-6 rounded-2xl mb-4 shadow-xl shadow-red-600/30 transform group-hover:scale-105 transition-transform duration-300 cursor-pointer">
                                    <svg 
                                        className="w-12 h-12 text-white drop-shadow-md ml-1 animate-pulse" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8 5v14l11-7z"></path>
                                    </svg>
                                </div>
                                <p className="text-xl font-extrabold tracking-tight text-white">Video Learing</p>
                                <p className="text-xs font-medium text-gray-400 mt-1">Interactive Coding & Video Lessons</p>
                            </div>

                            {/* Running Code Box at the Bottom */}
                            <div className="bg-gray-950/80 rounded-2xl p-4 font-mono text-xs sm:text-sm border border-gray-800 shadow-inner relative overflow-hidden">
                                <div className="flex items-center space-x-2 text-gray-500 mb-2 pb-1 border-b border-gray-800">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                                    <span className="text-[10px] uppercase tracking-wider">Live Code Execution</span>
                                </div>
                                <div className="text-emerald-400 h-8 flex items-center transition-all duration-300 animate-fadeIn">
                                    <code>{codes[currentCodeIndex]}</code>
                                    <span className="animate-pulse ml-1 w-2 h-4 bg-red-500 inline-block"></span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;