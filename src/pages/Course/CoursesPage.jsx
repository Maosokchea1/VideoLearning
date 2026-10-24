import React from 'react';
import { khmer } from '../../Translate/khmer';
import { english } from '../../Translate/English';
import { lessonList } from './CourseList'; 
import CourseCard from './CourseCard';     

const CoursesPage = ({ language }) => {
    const t = language === 'EN' ? english : khmer;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24 transition-colors duration-300">
            
            {/* Container ធំ */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                
                {/* ✅ Banner ថ្មីស្អាតជាងមុន (មាន Gradient និងពន្លឺស្រអាប់) */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 dark:from-primary-900 dark:via-gray-900 dark:to-gray-950 rounded-[2.5rem] py-16 mb-12 shadow-2xl shadow-primary-900/20 text-center">
                    
                    {/* រូបរាងស្រអាប់ៗ តុបតែងខាងក្រោយ (Decorative Blobs) */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-400/20 rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>
                    
                    <div className="relative z-10 px-4">
                        {/* បន្ថែម Badge តូចមួយនៅខាងលើ */}
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white text-sm font-bold mb-5 backdrop-blur-md border border-white/20 shadow-sm">
                            {language === 'EN' ? 'Course Library' : 'បណ្ណាល័យវគ្គសិក្សា'}
                        </span>
                        
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 drop-shadow-md">
                            {language === 'EN' ? "All Video Courses" : "វគ្គសិក្សាវីដេអូទាំងអស់"}
                        </h1>
                        
                        <p className="text-primary-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                            {language === 'EN' 
                                ? "Browse our complete library of video courses and start learning today." 
                                : "រកមើលបណ្ណាល័យវគ្គសិក្សាវីដេអូពេញលេញរបស់យើង ហើយចាប់ផ្តើមសិក្សាថ្ងៃនេះ។"}
                        </p>
                    </div>
                </div>

                {/* ✅ ចំណងជើងរង និងចំនួនវគ្គសិក្សា */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 px-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">
                        {language === 'EN' ? "Explore Courses" : "ស្វែងរកវគ្គសិក្សា"}
                    </h2>
                    <span className="bg-primary-50 dark:bg-gray-800 text-primary-600 dark:text-primary-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-primary-100 dark:border-gray-700">
                        {lessonList.length} {language === 'EN' ? 'Courses available' : 'វគ្គសិក្សាមាន'}
                    </span>
                </div>

                {/* ✅ Grid បង្ហាញកាតមេរៀន (បន្ថែម Animation) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {lessonList.map((item) => (
                        <CourseCard 
                            key={item.id} 
                            item={item} 
                            language={language} 
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CoursesPage;