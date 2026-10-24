import React from 'react';
import { Link } from 'react-router-dom';
import { khmer } from '../Translate/khmer';
import { english } from '../Translate/English';

const Course = ({ language }) => {
    const t = language === 'EN' ? english : khmer;

    const lessonList = [
        {
            id: 1,
            titleKH: "មូលដ្ឋានគ្រឹះវីដេអូសិក្សា",
            titleEN: "Video Learning Basics",
            descKH: "ស្វែងយល់ពីរបៀបប្រើប្រាស់វេទិកា និងចាប់ផ្តើមមេរៀនវីដេអូដំបូងរបស់អ្នក។",
            descEN: "Learn how to navigate the platform and start your first video lesson.",
            badgeKH: "ថ្មី",
            badgeEN: "New",
            lessonsCount: language === 'EN' ? "12 Video Lessons" : "១២ វីដេអូមេរៀន",
        },
        {
            id: 2,
            titleKH: "វគ្គសិក្សាជំនាញកម្រិតខ្ពស់",
            titleEN: "Advanced Skill Courses",
            descKH: "សិក្សាអំពីបច្ចេកទេស និងជំនាញជាក់ស្តែងតាមរយៈវីដេអូគុណភាពខ្ពស់។",
            descEN: "Study practical techniques and skills through high-definition videos.",
            badgeKH: "សំខាន់",
            badgeEN: "Essential",
            lessonsCount: language === 'EN' ? "24 Video Courses" : "២៤ វគ្គវីដេអូ",
        },
        {
            id: 3,
            titleKH: "ការពិភាក្សា និងការអនុវត្ត",
            titleEN: "Practice & Discussion",
            descKH: "ពង្រឹងសមត្ថភាពរបស់អ្នកតាមរយៈកិច្ចការអនុវត្ត និងវីដេអូបណ្តុះបណ្តាល។",
            descEN: "Boost your abilities through hands-on exercises and tutorial videos.",
            badgeKH: "ពេញនិយម",
            badgeEN: "Popular",
            lessonsCount: language === 'EN' ? "50+ Video Guides" : "៥០+ ការណែនាំតាមវីដេអូ",
        }
    ];

    return (
        <section id="lessons" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
                    <span className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 text-xs font-bold px-4 py-1.5 rounded-full border border-primary-200/50 dark:border-primary-900/50 shadow-xs uppercase tracking-wider">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{t.lessons || (language === 'EN' ? "Video Lessons" : "វីដេអូមេរៀន")}</span>
                    </span>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        {language === 'EN' ? (
                            <>Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Video Lessons</span></>
                        ) : (
                            <>ស្វែងយល់ពី <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">វីដេអូមេរៀន</span> របស់យើង</>
                        )}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        {language === 'EN' 
                            ? "Step-by-step structured video lessons designed to take you from beginner to expert."
                            : "មេរៀនវីដេអូត្រូវបានរៀបចំឡើងជាលំដាប់ថ្នាក់ ជួយឱ្យអ្នកសិក្សាចាប់ពីកម្រិតដំបូងរហូតដល់ជំនាញ។"}
                    </p>
                </div>

                {/* Course Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lessonList.map((item) => (
                        <div 
                            key={item.id}
                            className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 border border-gray-200/60 dark:border-gray-700 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
                        >
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
                                    {item.lessonsCount}
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
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Course;