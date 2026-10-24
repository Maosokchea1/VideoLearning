import React, { useState } from 'react';
import { khmer } from '../../Translate/khmer';
import { english } from '../../Translate/English';

const Contact = ({ language }) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center space-y-4 mb-12">
                    <span className="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 text-sm font-bold px-4 py-1.5 rounded-full">
                        {language === 'EN' ? "Contact Us" : "ទំនាក់ទំនងមកយើងខ្ញុំ"}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                        {language === 'EN' ? "Get in Touch with VideoLearn" : "ទាក់ទងមកកាន់ VideoLearn"}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
                        {language === 'EN' 
                            ? "Have questions about our video courses or need technical support? Send us a message!" 
                            : "មានសំណួរទាក់ទងនឹងវគ្គសិក្សាវីដេអូ ឬត្រូវការជំនួយផ្នែកបច្ចេកទេស? សូមផ្ញើសារមកកាន់យើងខ្ញុំ!"}
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 sm:p-12">
                    {submitted ? (
                        <div className="text-center py-12 space-y-4">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl shadow-inner">
                                ✓
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {language === 'EN' ? "Message Sent Successfully!" : "បានផ្ញើសារជោគជ័យ!"}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {language === 'EN' 
                                    ? "Thank you for reaching out. Our team will get back to you soon." 
                                    : "អរគុណសម្រាប់ការទាក់ទងមក។ ក្រុមការងារយើងនឹងឆ្លើយតបវិញឆាប់ៗនេះ។"}
                            </p>
                            <button 
                                onClick={() => setSubmitted(false)}
                                className="mt-4 px-6 py-2.5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-md shadow-primary-500/20"
                            >
                                {language === 'EN' ? "Send Another Message" : "ផ្ញើសារថ្មីម្តងទៀត"}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                        {language === 'EN' ? "Your Name" : "ឈ្មោះរបស់អ្នក"}
                                    </label>
                                    <input 
                                        type="text" 
                                        required 
                                        placeholder={language === 'EN' ? "Enter your name" : "បញ្ចូលឈ្មោះរបស់អ្នក"}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                    />
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                        {language === 'EN' ? "Email Address" : "សារអេឡិចត្រូនិច (Email)"}
                                    </label>
                                    <input 
                                        type="email" 
                                        required 
                                        placeholder={language === 'EN' ? "Enter your email" : "បញ្ចូលអ៊ីមែលរបស់អ្នក"}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 text-left">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                    {language === 'EN' ? "Message" : "មាតិកាសារ"}
                                </label>
                                <textarea 
                                    rows="5" 
                                    required 
                                    placeholder={language === 'EN' ? "Type your message here..." : "សរសេរសាររបស់អ្នកនៅទីនេះ..."}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/30 transition-all duration-300"
                            >
                                {language === 'EN' ? "Send Message" : "ផ្ញើសារឥឡូវនេះ"}
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Contact;