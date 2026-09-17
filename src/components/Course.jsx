import React from 'react';
import { khmer } from '../Translate/khmer';
import { english } from '../Translate/English';

const Course = ({ language }) => {
    // ផ្អែកលើភាសាដែលបានបញ្ជូនមក (លំនាំដើម KH ប្រសិនបើគ្មាន)
    const t = language === 'EN' ? english : khmer;

    // ទិន្នន័យមេរៀនវីដេអូគំរូ
    const lessonList = [
        {
            id: 1,
            titleKH: "មូលដ្ឋានគ្រឹះវីដេអូសិក្សា",
            titleEN: "Video Learning Basics",
            descKH: "ស្វែងយល់ពីរបៀបប្រើប្រាស់វេទិកា និងចាប់ផ្តើមមេរៀនវីដេអូដំបូងរបស់អ្នក។",
            descEN: "Learn how to navigate the platform and start your first video lesson.",
            icon: "🎥",
            badgeKH: "ថ្មី",
            badgeEN: "New",
            lessonsCount: language === 'EN' ? "12 Video Lessons" : "១២ វីដេអូមេរៀន"
        },
        {
            id: 2,
            titleKH: "វគ្គសិក្សាជំនាញកម្រិតខ្ពស់",
            titleEN: "Advanced Skill Courses",
            descKH: "សិក្សាអំពីបច្ចេកទេស និងជំនាញជាក់ស្តែងតាមរយៈវីដេអូគុណភាពខ្ពស់។",
            descEN: "Study practical techniques and skills through high-definition videos.",
            icon: "🎬",
            badgeKH: "សំខាន់",
            badgeEN: "Essential",
            lessonsCount: language === 'EN' ? "24 Video Courses" : "២៤ វគ្គវីដេអូ"
        },
        {
            id: 3,
            titleKH: "ការពិភាក្សា និងការអនុវត្ត",
            titleEN: "Practice & Discussion",
            descKH: "ពង្រឹងសមត្ថភាពរបស់អ្នកតាមរយៈកិច្ចការអនុវត្ត និងវីដេអូបណ្តុះបណ្តាល។",
            descEN: "Boost your abilities through hands-on exercises and tutorial videos.",
            icon: "💬",
            badgeKH: "ពេញនិយម",
            badgeEN: "Popular",
            lessonsCount: language === 'EN' ? "50+ Video Guides" : "៥០+ ការណែនាំតាមវីដេអូ"
        }
    ];

    return (
        <section id="lessons" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 text-sm font-bold px-4 py-1.5 rounded-full">
                        {t.lessons || (language === 'EN' ? "Video Lessons" : "វីដេអូមេរៀន")}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                        {language === 'EN' ? "Explore Our Video Lessons" : "ស្វែងយល់ពីវីដេអូមេរៀនរបស់យើង"}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        {language === 'EN' 
                            ? "Step-by-step structured video lessons designed to take you from beginner to expert."
                            : "មេរៀនវីដេអូត្រូវបានរៀបចំឡើងជាលំដាប់ថ្នាក់ ជួយឱ្យអ្នកសិក្សាចាប់ពីកម្រិតដំបូងរហូតដល់ជំនាញ។"}
                    </p>
                </div>

                {/* Lessons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lessonList.map((item) => (
                        <div 
                            key={item.id}
                            className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col justify-between group transform hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="w-16 h-16 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center text-3xl font-black group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">
                                        {language === 'EN' ? item.badgeEN : item.badgeKH}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                    {language === 'EN' ? item.titleEN : item.titleKH}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                    {language === 'EN' ? item.descEN : item.descKH}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                    {item.lessonsCount}
                                </span>
                                <button className="text-red-600 dark:text-red-400 font-bold text-sm flex items-center space-x-1 hover:underline">
                                    <span>{language === 'EN' ? "Watch Lesson" : "មើលមេរៀន"}</span>
                                    <span>&rarr;</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Course;