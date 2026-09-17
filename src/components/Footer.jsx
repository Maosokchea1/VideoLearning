import React from 'react';
import { khmer } from '../Translate/khmer';
import { english } from '../Translate/English';

const Footer = ({ language = 'KH', darkMode = false }) => {
    const t = language === 'EN' ? english : khmer;

    return (
        <footer className={`pt-16 pb-12 border-t transition-colors duration-300 relative overflow-hidden dark:bg-slate-950 dark:border-slate-800 dark:text-slate-100 ${
            darkMode 
                ? 'bg-slate-950 border-slate-800 text-slate-100' 
                : 'bg-white border-slate-200 text-slate-800'
        }`}>
            
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-24 bg-primary/5 blur-3xl pointer-events-none rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className={`grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b ${
                    darkMode ? 'border-slate-800' : 'border-slate-100'
                }`}>
                    
                    {/* Brand / Logo Info */}
                    <div className="space-y-4 md:col-span-1">
                        <div className="flex items-center space-x-3">
                            <div className="bg-primary text-white w-10 h-10 rounded-2xl flex items-center justify-center shadow-md shadow-primary/25">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <span className={`text-xl font-extrabold tracking-tight ${
                                darkMode ? 'text-white' : 'text-slate-900'
                            }`}>
                                Video<span className="text-primary">Learning</span>
                            </span>
                        </div>
                        <p className={`text-sm leading-relaxed ${
                            darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                            {language === 'EN' 
                                ? "Your ultimate interactive video learning platform to master new skills easily and effectively."
                                : "វេទិកាអន្តរកម្មវីដេអូសិក្សាដ៏ល្អបំផុតរបស់អ្នក ក្នុងការស្វែងយល់ជំនាញថ្មីៗដោយងាយស្រួល និងមានប្រសិទ្ធភាព។"}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                            {language === 'EN' ? "Quick Links" : "តំណភ្ជាប់រហ័ស"}
                        </h4>
                        <ul className={`space-y-2.5 text-sm ${
                            darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                            <li><a href="#home" className="hover:text-primary transition-colors flex items-center space-x-1.5"><span>›</span> <span>{t.home || (language === 'EN' ? "Home" : "ទំព័រដើម")}</span></a></li>
                            <li><a href="#lessons" className="hover:text-primary transition-colors flex items-center space-x-1.5"><span>›</span> <span>{t.lessons || (language === 'EN' ? "Lessons" : "វីដេអូមេរៀន")}</span></a></li>
                            <li><a href="#vocabulary" className="hover:text-primary transition-colors flex items-center space-x-1.5"><span>›</span> <span>{t.vocabulary || (language === 'EN' ? "Vocabulary" : "វាក្យសព្ទ")}</span></a></li>
                            <li><a href="#practice" className="hover:text-primary transition-colors flex items-center space-x-1.5"><span>›</span> <span>{t.practice || (language === 'EN' ? "Practice" : "ការអនុវត្ត")}</span></a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors flex items-center space-x-1.5"><span>›</span> <span>{t.about || (language === 'EN' ? "About Us" : "អំពីយើង")}</span></a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                            {language === 'EN' ? "Resources" : "ធនធានសិក្សា"}
                        </h4>
                        <ul className={`space-y-2.5 text-sm ${
                            darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                            <li><a href="#lessons" className="hover:text-primary transition-colors flex items-center space-x-1.5"><span>•</span> <span>{language === 'EN' ? "HD Video Lessons" : "វីដេអូមេរៀន HD"}</span></a></li>
                            <li><a href="#lessons" className="hover:text-primary transition-colors flex items-center space-x-1.5"><span>•</span> <span>{language === 'EN' ? "Expert Instructors" : "គ្រូជំនាញៗ"}</span></a></li>
                            <li><a href="#vocabulary" className="hover:text-primary transition-colors flex items-center space-x-1.5"><span>•</span> <span>{language === 'EN' ? "Tutorial Guides" : "ការណែនាំបែបវីដេអូ"}</span></a></li>
                            <li><a href="#practice" className="hover:text-primary transition-colors flex items-center space-x-1.5"><span>•</span> <span>{language === 'EN' ? "Interactive Quizzes" : "លំហាត់តេស្តអន្តរកម្ម"}</span></a></li>
                        </ul>
                    </div>

                    {/* Contact or Social */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary">
                            {language === 'EN' ? "Connect With Us" : "ទាក់ទងមកយើងខ្ញុំ"}
                        </h4>
                        <p className={`text-sm ${
                            darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                            {language === 'EN' ? "Have questions? Feel free to reach out to our team." : "មានសំណួរ? សូមកុំស្ទាក់ស្ទើរក្នុងការទាក់ទងមកកាន់ក្រុមការងារយើងខ្ញុំ។"}
                        </p>
                        <div className="flex space-x-3 pt-2">
                            {/* Facebook Icon */}
                            <a 
                                href="https://facebook.com/share/1Djf3WjZWd?mibextid=wwXIfr" 
                                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 hover:bg-primary hover:text-white ${
                                    darkMode 
                                        ? 'bg-slate-800 text-slate-300' 
                                        : 'bg-slate-100 text-slate-600 hover:shadow-sm'
                                }`} 
                                title="Facebook"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            
                            {/* Telegram Icon (ភ្ជាប់ទៅកាន់ @sokcheamoa) */}
                            <a 
                                href="https://t.me/sokcheamoa" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 hover:bg-primary hover:text-white ${
                                    darkMode 
                                        ? 'bg-slate-800 text-slate-300' 
                                        : 'bg-slate-100 text-slate-600 hover:shadow-sm'
                                }`} 
                                title="Telegram - ម៉ៅ សុខជា"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.02-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.05-.78 4.1-1.79 6.84-2.97 8.22-3.54 3.91-1.63 4.72-1.92 5.25-1.93.12 0 .39.03.56.17.15.12.19.28.21.4-.01.06.01.24 0 .37z"/></svg>
                            </a>
                            
                            {/* YouTube Icon */}
                            <a 
                                href="#youtube" 
                                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 hover:bg-primary hover:text-white ${
                                    darkMode 
                                        ? 'bg-slate-800 text-slate-300' 
                                        : 'bg-slate-100 text-slate-600 hover:shadow-sm'
                                }`} 
                                title="YouTube"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between text-xs space-y-4 sm:space-y-0 ${
                    darkMode ? 'text-slate-500' : 'text-slate-400'
                }`}>
                    <p>
                        &copy; {new Date().getFullYear()} VideoLearning. {language === 'EN' ? "All rights reserved." : "រក្សាសិទ្ធិគ្រប់យ៉ាង។"}
                    </p>
                    <div className="flex space-x-6">
                        <a href="#privacy" className="hover:text-primary transition-colors">{language === 'EN' ? "Privacy Policy" : "គោលការណ៍ឯកជនភាព"}</a>
                        <a href="#terms" className="hover:text-primary transition-colors">{language === 'EN' ? "Terms of Service" : "លក្ខខណ្ឌសេវាកម្ម"}</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;