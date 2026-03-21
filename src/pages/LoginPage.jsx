import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const result = await login(email, password);
        if (result.success) {
            navigate('/main-wellness-dashboard');
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            {/* Left Side (Blue Branding) */}
            <div className="hidden lg:flex w-1/2 relative bg-blue-600 flex-col p-12 text-white overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-50"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop")' }}
                ></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-500/80 to-slate-900/90 mix-blend-multiply"></div>

                <div className="relative z-10 flex items-center gap-2 mb-16">
                    <span className="material-symbols-outlined text-3xl">health_and_safety</span>
                    <span className="text-xl font-bold tracking-tight">Swasthya Mitra</span>
                </div>

                <div className="relative z-10 max-w-lg">
                    <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-8">
                        Your health,<br />powered by AI.
                    </h1>
                    <div className="border-l-4 border-blue-400 pl-6 mb-8">
                        <p className="text-xl font-medium mb-2 opacity-90">"The greatest wealth is health."</p>
                        <p className="text-sm font-bold opacity-70 tracking-widest uppercase">— Virgil</p>
                    </div>
                </div>

                <div className="relative z-10 mt-auto flex items-center gap-4">
                    <div className="flex -space-x-3">
                        <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://ui-avatars.com/api/?name=Dr+Smith&background=random" alt="Doctor" />
                        <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://ui-avatars.com/api/?name=Dr+Jane&background=random" alt="Doctor" />
                        <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://ui-avatars.com/api/?name=Dr+Lee&background=random" alt="Doctor" />
                    </div>
                    <p className="text-sm font-medium opacity-80">Trusted by over 10,000+ medical professionals</p>
                </div>
            </div>

            {/* Right Side (Login Form) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white dark:bg-slate-900 relative overflow-y-auto">
                <div className="max-w-md w-full">
                    {/* Header */}
                    <div className="text-center mb-8 mt-12">
                        <h2 className="text-3xl font-extrabold mb-3 text-slate-900 dark:text-white">Welcome Back</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Sign in to your Swasthya Mitra account to continue your wellness journey.</p>
                    </div>

                    {/* Social Logic */}
                    <div className="flex gap-4 mb-6">
                        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm text-sm font-bold text-slate-700 dark:text-slate-300">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                            Google
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm text-sm font-bold text-slate-700 dark:text-slate-300">
                            <span className="material-symbols-outlined text-lg">apple</span>
                            Apple
                        </button>
                    </div>

                    <div className="relative flex items-center justify-center mb-6">
                        <div className="absolute border-t border-slate-200 dark:border-slate-700 w-full"></div>
                        <span className="bg-white dark:bg-slate-900 px-3 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider relative z-10">OR CONTINUE WITH EMAIL</span>
                    </div>

                    {/* Form */}
                    {error && (
                        <div className="mb-4 px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-lg text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">error</span>
                            {error}
                        </div>
                    )}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs font-bold mb-2 text-slate-700 dark:text-slate-300">Email Address</label>
                            <input
                                type="email"
                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:ring-primary focus:border-primary transition-colors text-slate-900 dark:text-white"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">Password</label>
                                <a href="#" className="text-xs font-bold text-primary hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pr-10 pl-4 py-3 text-sm focus:ring-primary focus:border-primary transition-colors tracking-widest text-slate-900 dark:text-white"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                                    <span className="material-symbols-outlined text-sm">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="rounded border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-primary focus:ring-primary size-4" />
                            <label htmlFor="remember" className="ml-2 text-xs font-medium text-slate-600 dark:text-slate-400">Remember me for 30 days</label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-sm font-medium text-slate-600 dark:text-slate-400 mt-8">
                        Don't have an account? <Link to="/create-account" className="text-primary font-bold hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Create an account</Link>
                    </p>

                    <div className="mt-16">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
