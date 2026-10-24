import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { khmer } from '../Translate/khmer';   
import { english } from '../Translate/English'; 
import logoImg from '../assets/image/Logo.png';

const Register = ({ language }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    // State សម្រាប់បិទ/បើកភ្នែក
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // ជ្រើសរើសភាសា
    const t = language === 'KH' ? khmer : english;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Registering with:", name, email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
            <div className="max-w-md w-full space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                
                {/* ផ្នែក Logo និងចំណងជើង */}
                <div className="flex flex-col items-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center overflow-hidden mb-4 shadow-sm border border-gray-100 dark:border-gray-700">
                        <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-center text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                        {t.registerTitle || 'Create Account'}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        {t.registerDesc || 'Start learning with us today!'}
                    </p>
                </div>

                <form className="mt-4 space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        
                        {/* ប្រអប់ Full Name */}
                        <div className="text-left">
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                                {t.nameLabel || 'Full Name'}
                            </label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                placeholder="Enter your full name"
                            />
                        </div>

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

                        {/* ប្រអប់ Password (មានភ្នែក) */}
                        <div className="text-left">
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                                {t.passwordLabel || 'Password'}
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-primary-500 focus:outline-none transition-colors"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* ប្រអប់ Confirm Password (មានភ្នែក) */}
                        <div className="text-left">
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                                {t.confirmPasswordLabel || 'Confirm Password'}
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-primary-500 focus:outline-none transition-colors"
                                >
                                    {showConfirmPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ប៊ូតុង Register */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/30 transition-all mt-4"
                    >
                        {t.registerBtn || 'Register'}
                    </button>
                </form>

                {/* ======================= ផ្នែក Social Login (Google) ======================= */}
                <div className="mt-6">
                    {/* បន្ទាត់ខណ្ឌចែក */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-3 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium">
                                {language === 'KH' ? 'ឬបន្តជាមួយ' : 'Or continue with'}
                            </span>
                        </div>
                    </div>

                    {/* ប៊ូតុង Google */}
                    <div className="mt-6">
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-bold text-sm text-gray-700 dark:text-gray-200"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            {language === 'KH' ? 'ចុះឈ្មោះជាមួយ Google' : 'Continue with Google'}
                        </button>
                    </div>
                </div>

                {/* តំណភ្ជាប់ទៅ Login */}
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {t.haveAccount || 'Already have an account?'}{' '}
                    <Link to="/login" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">
                        {t.loginHere || 'Login here'}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;