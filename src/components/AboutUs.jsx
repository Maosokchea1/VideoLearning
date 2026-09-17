import React from 'react';
import { khmer } from '../Translate/khmer';
import { english } from '../Translate/English';

const AboutUs = ({ language }) => {
    const t = language === 'EN' ? english : khmer;

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left: Illustration or Image Box */}
                    <div className="relative">
                        <div className="relative w-full h-[400px] bg-gradient-to-tr from-primary-600 via-rose-600 to-orange-500 rounded-3xl shadow-2xl flex items-center justify-center p-8 overflow-hidden group">
                            
                            {/* Background Decorative Glow */}
                            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>

                            {/* Center Content Box inside Graphic */}
                            <div className="text-center text-white space-y-4 z-10">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl mx-auto flex items-center justify-center text-4xl shadow-lg border border-white/20">
                                    🎥
                                </div>
                                <h3 className="text-2xl font-extrabold tracking-tight">
                                    {language === 'EN' ? "Interactive Video Learning" : "ការសិក្សាវីដេអូអន្តរកម្ម"}
                                </h3>
                                <p className="text-sm text-primary-100 max-w-xs mx-auto">
                                    {language === 'EN' 
                                        ? "Empowering learners worldwide to master new skills through high-definition video lessons." 
                                        : "ផ្តល់អំណាចដល់អ្នកសិក្សាជុំវិញពិភពលោកឱ្យស្វែងយល់ជំនាញថ្មីៗតាមរយៈវីដេអូមេរៀនគុណភាពខ្ពស់។"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <span className="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 text-sm font-bold px-4 py-1.5 rounded-full">
                            {t.about || (language === 'EN' ? "About Us" : "អំពីយើង")}
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                            {language === 'EN' 
                                ? "Dedicated to Making Video Learning Easy and Accessible" 
                                : "ប្តេជ្ញាចិត្តធ្វើឱ្យការសិក្សាតាមវីដេអូមានភាពងាយស្រួល និងអាចចូលរៀនបានគ្រប់ពេល"}
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                            {language === 'EN'
                                ? "VideoLearn is an interactive platform built for students of all levels. Whether you are a complete beginner starting with basics or looking to master advanced skills, our structured video courses are designed for you."
                                : "VideoLearn គឺជាវេទិកាអន្តរកម្មដែលបង្កើតឡើងសម្រាប់អ្នកសិក្សាគ្រប់កម្រិត។ មិនថាអ្នកទើបតែចាប់ផ្តើមពីកម្រិតមូលដ្ឋាន ឬចង់ស្វែងយល់ពីជំនាញកម្រិតខ្ពស់នោះទេ វគ្គសិក្សាវីដេអូរបស់យើងត្រូវបានរៀបចំឡើងយ៉ាងពិសេសសម្រាប់អ្នក។"}
                        </p>

                        {/* Feature Stats or Bullet points */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 text-center lg:text-left">
                                <p className="text-2xl font-black text-primary-600 dark:text-primary-400">100+</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                    {language === 'EN' ? "HD Video Lessons" : "វីដេអូមេរៀន HD"}
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 text-center lg:text-left">
                                <p className="text-2xl font-black text-primary-600 dark:text-primary-400">24/7</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                    {language === 'EN' ? "Access Anywhere" : "ចូលរៀនគ្រប់ពេលវេលា"}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutUs;