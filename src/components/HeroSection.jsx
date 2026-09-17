import React, { useState, useEffect } from 'react';
import { khmer } from '../Translate/khmer';
import { english } from '../Translate/English';

const HeroSection = ({ language }) => {
    const t = language === 'EN' ? english : khmer;

    // C and C++ Code Animation State
    const codes = [
        "#include <stdio.h>",
        "printf(\"Hello, Video Learning!\\n\");",
        "std::cout << \"Master C++ 🚀\" << std::endl;",
        "return 0; // Success!"
    ];
    
    const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCodeIndex((prev) => (prev + 1) % codes.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [codes.length]);

    return (
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-28 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <span className="inline-flex items-center space-x-2 bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-red-200/50 dark:border-red-900/50 shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400 animate-pulse"></span>
                            <span>{language === 'EN' ? 'Video Learning Platform' : 'វេទិកាការសិក្សាវីដេអូ'}</span>
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.15] tracking-tight">
                            {language === 'EN' ? 'Master New Skills Through Video Lessons' : 'ស្វែងយល់ជំនាញថ្មីៗតាមរយៈវីដេអូមេរៀន'}
                        </h1>
                        
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                            {language === 'EN' 
                                ? 'Explore high-quality video courses taught by expert instructors. Learn at your own pace, anytime and anywhere.' 
                                : 'ស្វែងរកវគ្គសិក្សាវីដេអូគុណភាពខ្ពស់ បង្រៀនដោយគ្រូជំនាញៗ។ សិក្សាដោយខ្លួនឯង គ្រប់ពេលវេលា និងគ្រប់ទីកន្លែង។'}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3.5 pt-2">
                            <a 
                                href="#lessons" 
                                className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-md shadow-red-600/20 transition-all text-center text-sm"
                            >
                                {t.startBtn}
                            </a>
                            <a 
                                href="#about" 
                                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold px-7 py-3.5 rounded-xl transition-all text-center text-sm border border-gray-200/80 dark:border-gray-700"
                            >
                                {t.exploreBtn}
                            </a>
                        </div>
                    </div>

                    {/* Right Graphic Illustration: Clean IDE Workspace */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md">
                            
                            {/* Subtle Glow Background */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-rose-600/20 rounded-2xl blur-xl"></div>
                            
                            {/* IDE Window Box */}
                            <div className="relative bg-gray-950 rounded-2xl p-4 shadow-xl border border-gray-800">
                                
                                {/* Window Header */}
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800/80">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <span className="text-[11px] font-mono text-gray-400 bg-gray-900/80 px-2.5 py-0.5 rounded border border-gray-800">
                                        main.cpp
                                    </span>
                                </div>

                                {/* Preview Grid Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                                    <div className="bg-gray-900/60 rounded-xl p-3 border border-gray-800/80">
                                        <div className="flex items-center space-x-2.5">
                                            <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-500 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-white">C & C++ Core</p>
                                                <p className="text-[10px] text-gray-400">Video Course</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-900/60 rounded-xl p-3 border border-gray-800/80 flex items-center space-x-2.5">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-white">Compiler Ready</p>
                                            <p className="text-[10px] text-gray-400">GCC / Clang</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Clean Code Execution Terminal */}
                                <div className="bg-gray-900 rounded-xl p-3 font-mono text-xs border border-gray-800">
                                    <div className="flex items-center justify-between text-[10px] text-gray-500 mb-2 pb-1 border-b border-gray-800/60">
                                        <span className="flex items-center space-x-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                                            <span>Terminal</span>
                                        </span>
                                        <span className="text-emerald-400/90 font-medium">Output</span>
                                    </div>
                                    <div className="text-emerald-400 h-6 flex items-center text-[11px]">
                                        <code>{codes[currentCodeIndex]}</code>
                                        <span className="animate-pulse ml-1 w-1.5 h-3 bg-red-500 inline-block"></span>
                                    </div>
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