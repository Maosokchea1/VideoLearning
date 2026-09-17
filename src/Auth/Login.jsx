import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { khmer } from '../Translate/khmer';   // ផ្លូវទៅកាន់ file ខ្មែររបស់អ្នក
import { english } from '../Translate/English'; // ផ្លូវទៅកាន់ file អង់គ្លេសរបស់អ្នក

const Login = ({ language }) => { // ទទួល language prop
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ជ្រើសរើសភាសាផ្អែកលើ prop
    const t = language === 'KH' ? khmer : english;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
            <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div>
                    <h2 className="text-center text-3xl font-black text-gray-900 dark:text-white">
                        {t.loginTitle}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        {t.loginDesc}
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">{t.emailLabel}</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">{t.passwordLabel}</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all"
                    >
                        {t.loginBtn}
                    </button>

                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                        {t.noAccount}{' '}
                        <Link to="/register" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                            {t.registerHere}
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;