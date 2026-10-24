import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { khmer } from '../Translate/khmer';
import { english } from '../Translate/English';
import logoImg from '../assets/image/Logo.png';

const ForgotPassword = ({ language }) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // សម្រាប់បង្ហាញសារជោគជ័យពេលផ្ញើរួច

    const t = language === 'KH' ? khmer : english;

    const handleSubmit = (e) => {
        e.preventDefault();
        // នៅទីនេះអ្នកអាចដាក់ API សម្រាប់ផ្ញើ Link ទៅ Email
        console.log("Sending reset link to:", email);
        setIsSubmitted(true); 
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-8">
            <div className="max-w-md w-full space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                
                {/* ផ្នែក Logo និងចំណងជើង */}
                <div className="flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center overflow-hidden mb-4 shadow-sm border border-gray-100 dark:border-gray-700">
                        <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-center text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                        {language === 'KH' ? 'ភ្លេចលេខសម្ងាត់' : 'Forgot Password?'}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        {language === 'KH' 
                            ? 'បញ្ចូលអ៊ីមែលរបស់អ្នក ដើម្បីទទួលបានតំណសម្រាប់ប្តូរលេខសម្ងាត់ថ្មី។' 
                            : 'Enter your email address and we will send you a link to reset your password.'}
                    </p>
                </div>

                {/* ប្រសិនបើផ្ញើរួចរាល់ (បង្ហាញសារជោគជ័យ) */}
                {isSubmitted ? (
                    <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-4 rounded-xl text-center space-y-3">
                        <svg className="w-12 h-12 mx-auto text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="font-bold text-sm">
                            {language === 'KH' ? 'បានផ្ញើតំណដោយជោគជ័យ!' : 'Link sent successfully!'}
                        </p>
                        <p className="text-xs">
                            {language === 'KH' ? 'សូមពិនិត្យមើលប្រអប់សំបុត្រ (Inbox) ឬ Spam របស់អ្នក។' : 'Please check your Inbox or Spam folder.'}
                        </p>
                    </div>
                ) : (
                    <form className="mt-4 space-y-5" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* ប្រអប់ Email */}
                            <div className="text-left">
                                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                                    {t.emailLabel || 'Email'}
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                    placeholder="example@gmail.com"
                                />
                            </div>
                        </div>

                        {/* ប៊ូតុងផ្ញើ */}
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/30 transition-all mt-4"
                        >
                            {language === 'KH' ? 'ផ្ញើតំណកំណត់ឡើងវិញ' : 'Send Reset Link'}
                        </button>
                    </form>
                )}

                {/* តំណភ្ជាប់ត្រឡប់ទៅ Login វិញ */}
                <div className="text-center mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {language === 'KH' ? 'ចងចាំលេខសម្ងាត់ហើយមែនទេ?' : 'Remember your password?'}{' '}
                        <Link to="/login" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
                            {language === 'KH' ? 'ចូលទីនេះ' : 'Back to Login'}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;