import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ item, language }) => {
    return (
        <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 border border-gray-200/60 dark:border-gray-700 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5">
            
            {/* Subtle Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent dark:from-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    {/* Play Button */}
                    <Link 
                        to={`/watch/${item.id}`}
                        className="w-14 h-14 bg-primary-50 dark:bg-gray-700 text-primary-600 dark:text-primary-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm cursor-pointer border border-primary-100 dark:border-gray-600"
                        title="Play Video"
                    >
                        <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </Link>
                    
                    {/* Badge */}
                    <span className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-600">
                        {language === 'EN' ? item.badgeEN : item.badgeKH}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
                    {language === 'EN' ? item.titleEN : item.titleKH}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
                    {language === 'EN' ? item.descEN : item.descKH}
                </p>
            </div>

            {/* Card Footer */}
            <div className="relative z-10 pt-5 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    {language === 'EN' ? item.lessonsCountEN : item.lessonsCountKH}
                </span>
                <Link 
                    to={`/watch/${item.id}`}
                    className="text-primary-600 dark:text-primary-400 font-bold text-sm flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform"
                >
                    <span>{language === 'EN' ? "Watch Lesson" : "មើលមេរៀន"}</span>
                    <span className="text-lg leading-none">&rarr;</span>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;