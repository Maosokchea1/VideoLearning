import React from 'react';
import { khmer } from '../../Translate/khmer';
import { english } from '../../Translate/English';
import { lessonList } from './CourseList'; // ✅ ហៅពី CourseList.jsx របស់អ្នក
import CourseCard from './CourseCard';     // ✅ ហៅពី CourseCard.jsx របស់អ្នក

const Course = ({ language }) => {
    const t = language === 'EN' ? english : khmer;

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
                        <CourseCard 
                            key={item.id} 
                            item={item} 
                            language={language} 
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Course;