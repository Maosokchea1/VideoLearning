import React from 'react';
import { Link } from 'react-router-dom'; // ✅ បន្ថែម Link សម្រាប់ការផ្លាស់ទំព័រ
import { khmer } from '../Translate/khmer';
import { english } from '../Translate/English';

const Footer = ({ language = 'KH' }) => { // ✅ ដក darkMode prop ចេញ ព្រោះយើងប្រើ Tailwind dark: class វិញ
    const t = language === 'EN' ? english : khmer;

    return (
        // ✅ កែ Background ទៅជា bg-gray-100 និង dark:bg-gray-900
        <footer className="pt-16 pb-12 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 relative overflow-hidden">
            
            {/* Background Glow Effect (Primary Theme) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-24 bg-primary-600/5 blur-3xl pointer-events-none rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-200 dark:border-gray-800">
                    
                    {/* Brand / Logo Info */}
                    <div className="space-y-4 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="w-11 h-11 rounded-full flex items-center justify-center border transition-transform group-hover:scale-105 bg-primary-50 border-primary-100 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
                                {/* Graduation Cap / Video Icon matching Header */}
                                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-serif font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
                                    Video<span className="text-primary-600 dark:text-primary-400">Learning</span>
                                </span>
                                <span className="text-[11px] mt-1 font-medium text-gray-500 dark:text-gray-400">
                                    {language === 'EN' ? "Khmer Learning Platform" : "ថ្នាលសិក្សាភាសាខ្មែរ"}
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed pt-1 text-gray-600 dark:text-gray-400">
                            {language === 'EN' 
                                ? "Explore high-quality video courses taught by expert instructors. Learn at your own pace, anytime, anywhere."
                                : "ស្វែងរកវគ្គសិក្សាវីដេអូគុណភាពខ្ពស់ បង្រៀនដោយគ្រូជំនាញៗ។ សិក្សាដោយខ្លួនឯង គ្រប់ពេលវេលា និងគ្រប់ទីកន្លែង។"}
                        </p>
                    </div>

                    {/* Quick Links (Matched with Navbar) */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                            {language === 'EN' ? "Quick Links" : "តំណភ្ជាប់រហ័ស"}
                        </h4>
                        <ul className="space-y-2.5 text-sm font-medium text-gray-600 dark:text-gray-400">
                            <li>
                                <Link to="/" className="hover:text-primary-600 transition-colors flex items-center space-x-2">
                                    <span className="text-primary-500">›</span>
                                    <span>{t.home || (language === 'EN' ? "Home" : "ទំព័រដើម")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className="hover:text-primary-600 transition-colors flex items-center space-x-2">
                                    <span className="text-primary-500">›</span>
                                    <span>{t.courses || t.lessons || (language === 'EN' ? "Courses" : "វគ្គសិក្សា")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-primary-600 transition-colors flex items-center space-x-2">
                                    <span className="text-primary-500">›</span>
                                    <span>{t.about || (language === 'EN' ? "About Us" : "អំពីយើង")}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-primary-600 transition-colors flex items-center space-x-2">
                                    <span className="text-primary-500">›</span>
                                    <span>{t.contact || (language === 'EN' ? "Contact Us" : "ទាក់ទងយើង")}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources / Popular Courses */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                            {language === 'EN' ? "Resources" : "ធនធានសិក្សា"}
                        </h4>
                        <ul className="space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <Link to="/courses" className="hover:text-primary-600 transition-colors flex items-center space-x-2">
                                    <span className="text-primary-500">•</span>
                                    <span>{language === 'EN' ? "C & C++ Core" : "មូលដ្ឋានគ្រឹះ C & C++"}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className="hover:text-primary-600 transition-colors flex items-center space-x-2">
                                    <span className="text-primary-500">•</span>
                                    <span>{language === 'EN' ? "HD Video Lessons" : "វីដេអូមេរៀនគុណភាពខ្ពស់"}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className="hover:text-primary-600 transition-colors flex items-center space-x-2">
                                    <span className="text-primary-500">•</span>
                                    <span>{language === 'EN' ? "Expert Instructors" : "បង្រៀនដោយគ្រូជំនាញៗ"}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className="hover:text-primary-600 transition-colors flex items-center space-x-2">
                                    <span className="text-primary-500">•</span>
                                    <span>{language === 'EN' ? "Self-Paced Learning" : "សិក្សាដោយខ្លួនឯងគ្រប់ពេល"}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact or Social */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                            {language === 'EN' ? "Connect With Us" : "ទាក់ទងមកយើងខ្ញុំ"}
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            {language === 'EN' 
                                ? "Have questions? Feel free to reach out to our team." 
                                : "មានសំណួរ? សូមកុំស្ទាក់ស្ទើរក្នុងការទាក់ទងមកកាន់ក្រុមការងារយើងខ្ញុំ។"}
                        </p>
                        <div className="flex space-x-3 pt-2">
                            {/* Facebook Icon */}
                            <a 
                                href="https://facebook.com/share/1Djf3WjZWd?mibextid=wwXIfr" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 bg-primary-50 text-primary-600 dark:bg-gray-800 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white hover:shadow-md hover:shadow-primary-600/20" 
                                title="Facebook"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            
                            {/* Telegram Icon */}
                            <a 
                                href="https://t.me/sokcheamoa" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 bg-primary-50 text-primary-600 dark:bg-gray-800 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white hover:shadow-md hover:shadow-primary-600/20" 
                                title="Telegram - ម៉ៅ សុខជា"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.02-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.05-.78 4.1-1.79 6.84-2.97 8.22-3.54 3.91-1.63 4.72-1.92 5.25-1.93.12 0 .39.03.56.17.15.12.19.28.21.4-.01.06.01.24 0 .37z"/></svg>
                            </a>
                            
                            {/* YouTube Icon */}
                            <a 
                                href="#youtube" 
                                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 bg-primary-50 text-primary-600 dark:bg-gray-800 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white hover:shadow-md hover:shadow-primary-600/20" 
                                title="YouTube"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs space-y-4 sm:space-y-0 text-gray-500 dark:text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} VideoLearning ({language === 'EN' ? "Khmer Learning Platform" : "ថ្នាលសិក្សាភាសាខ្មែរ"}). {language === 'EN' ? "All rights reserved." : "រក្សាសិទ្ធិគ្រប់យ៉ាង។"}
                    </p>
                    <div className="flex space-x-6">
                        <a href="#privacy" className="hover:text-primary-600 transition-colors">{language === 'EN' ? "Privacy Policy" : "គោលការណ៍ឯកជនភាព"}</a>
                        <a href="#terms" className="hover:text-primary-600 transition-colors">{language === 'EN' ? "Terms of Service" : "លក្ខខណ្ឌសេវាកម្ម"}</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;