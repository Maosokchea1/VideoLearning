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
                    <div className="space-y-8 text-center lg:text-left">
                        <span className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-primary-200/50 dark:border-primary-900/50 shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400 animate-pulse"></span>
                            <span>{language === 'EN' ? 'Video Learning Platform' : 'វេទិកាការសិក្សាវីដេអូ'}</span>
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.15] tracking-tight">
                            {language === 'EN' ? (
                                <>Master New Skills Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Video Lessons</span></>
                            ) : (
                                <>ស្វែងយល់ជំនាញថ្មីៗតាមរយៈ <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">វីដេអូមេរៀន</span></>
                            )}
                        </h1>
                        
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                            {language === 'EN' 
                                ? 'Explore high-quality video courses taught by expert instructors. Learn at your own pace, anytime and anywhere.' 
                                : 'ស្វែងរកវគ្គសិក្សាវីដេអូគុណភាពខ្ពស់ បង្រៀនដោយគ្រូជំនាញៗ។ សិក្សាដោយខ្លួនឯង គ្រប់ពេលវេលា និងគ្រប់ទីកន្លែង។'}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                            <a 
                                href="#lessons" 
                                className="group relative inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-primary-600/30 hover:shadow-primary-600/40 hover:-translate-y-0.5 transition-all duration-300 text-sm overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {t.startBtn}
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                            </a>
                            <a 
                                href="#about" 
                                className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold px-8 py-3.5 rounded-xl transition-all duration-300 text-sm border border-gray-200/80 dark:border-gray-700 hover:-translate-y-0.5"
                            >
                                {t.exploreBtn}
                            </a>
                        </div>
                    </div>

                    {/* Right Graphic Illustration: Clean IDE Workspace */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            
                            {/* Subtle Glow Background */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 to-primary-400/20 rounded-3xl blur-2xl"></div>
                            
                            {/* IDE Window Box */}
                            <div className="relative bg-gray-950 rounded-2xl p-5 shadow-2xl border border-gray-800 backdrop-blur-sm">
                                
                                {/* Window Header */}
                                <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-800/80">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-inner"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-inner"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-inner"></div>
                                    </div>
                                    <span className="text-xs font-mono text-gray-400 bg-gray-900/80 px-3 py-1 rounded-md border border-gray-800 flex items-center gap-1.5">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        main.cpp
                                    </span>
                                </div>

                                {/* Preview Grid Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                    <div className="bg-gray-900/80 rounded-xl p-3.5 border border-gray-800 hover:border-gray-700 transition-colors cursor-default">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-9 h-9 rounded-lg bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0 shadow-inner">
                                                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-100">C & C++ Core</p>
                                                <p className="text-[11px] text-gray-400 font-medium">Video Course</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-900/80 rounded-xl p-3.5 border border-gray-800 hover:border-gray-700 transition-colors cursor-default">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-inner">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-gray-100">Compiler Ready</p>
                                                <p className="text-[11px] text-gray-400 font-medium">GCC / Clang</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Clean Code Execution Terminal */}
                                <div className="bg-[#0d1117] rounded-xl p-4 font-mono text-sm border border-gray-800 shadow-inner">
                                    <div className="flex items-center justify-between text-[11px] text-gray-500 mb-2.5 pb-2 border-b border-gray-800/80">
                                        <span className="flex items-center space-x-2">
                                            <span className="relative flex h-2 w-2">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                            <span className="font-semibold tracking-wider">Terminal</span>
                                        </span>
                                        <span className="text-emerald-400/80 font-medium">Output</span>
                                    </div>
                                    {/* កំណត់កម្ពស់ថេរ (h-8) ដើម្បីកុំឱ្យ Layout លោតពេលអក្សរដូរ */}
                                    <div className="text-emerald-400 h-8 flex items-center text-[13px] overflow-hidden">
                                        <span className="text-gray-500 mr-2">$</span>
                                        <code className="whitespace-nowrap">{codes[currentCodeIndex]}</code>
                                        <span className="animate-pulse ml-1.5 w-2 h-4 bg-gray-400/80 inline-block"></span>
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