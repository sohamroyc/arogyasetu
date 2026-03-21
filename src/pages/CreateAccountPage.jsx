import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const CreateAccountPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleFinalSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const result = await signup({ name, email, phone, password });
        if (result.success) {
            navigate('/main-wellness-dashboard');
        } else {
            setError(result.error);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 border-t-8 border-primary">
            {/* Header */}
            <header className="flex items-center justify-between px-8 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-2xl">health_and_safety</span>
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Swasthya Mitra</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500 dark:text-slate-400">
                    <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">How it Works</a>
                    <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Security</a>
                    <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Support</a>
                    <Link to="/login" className="px-5 py-2 text-primary bg-primary/10 border border-primary/20 hover:bg-primary/20 rounded-lg transition-colors">
                        Log In
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 relative z-10">
                <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-200 dark:border-slate-800 p-8 md:p-12">

                    {/* Header Details */}
                    <div className="flex justify-between items-end mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
                        <div>
                            <h1 className="text-3xl font-extrabold mb-1 text-slate-900 dark:text-white">Create your account</h1>
                            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Join Swasthya Mitra to start your wellness journey.</p>
                        </div>
                        <div className="hidden sm:flex items-center gap-1 text-[10px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 px-3 py-1.5 rounded uppercase">
                            <span className="material-symbols-outlined text-sm">verified_user</span>
                            HIPAA Compliant
                        </div>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-4 px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-lg text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">error</span>
                            {error}
                        </div>
                    )}

                    {/* ── Account Form ── */}
                    <form className="space-y-6" onSubmit={handleFinalSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold mb-2 text-slate-700 dark:text-slate-300">Full Name</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-slate-500 text-sm">person</span>
                                        <input
                                            type="text"
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-primary focus:border-primary transition-colors focus:bg-white dark:focus:bg-slate-700 text-slate-900 dark:text-white"
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold mb-2 text-slate-700 dark:text-slate-300">Phone Number</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-slate-500 text-sm">call</span>
                                        <input
                                            type="tel"
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-primary focus:border-primary transition-colors focus:bg-white dark:focus:bg-slate-700 text-slate-900 dark:text-white"
                                            placeholder="+1 (555) 000-0000"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold mb-2 text-slate-700 dark:text-slate-300">Email Address</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-slate-500 text-sm">mail</span>
                                    <input
                                        type="email"
                                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-primary focus:border-primary transition-colors focus:bg-white dark:focus:bg-slate-700 text-slate-900 dark:text-white"
                                        placeholder="john@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold mb-2 text-slate-700 dark:text-slate-300">Create Password</label>
                                <div className="relative mb-2">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-slate-500 text-sm">lock</span>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-10 py-3 text-sm focus:ring-primary focus:border-primary transition-colors focus:bg-white dark:focus:bg-slate-700 text-slate-900 dark:text-white tracking-widest"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                                        <span className="material-symbols-outlined text-sm">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                    </button>
                                </div>
                                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Must be at least 8 characters long with a symbol.</p>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 bg-primary text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-4"
                            >
                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                Create Account
                            </button>
                        </form>

                    <p className="text-xs text-center font-medium text-slate-400 mt-6">
                        By clicking continue, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-12 text-slate-500">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-500 border border-slate-200 shadow-sm"><span className="material-symbols-outlined text-lg">enhanced_encryption</span></div>
                        <div className="flex flex-col"><span className="text-xs font-black uppercase tracking-wider text-slate-700">256-Bit AES</span><span className="text-[10px] font-medium uppercase">Encryption App</span></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-500 border border-slate-200 shadow-sm"><span className="material-symbols-outlined text-lg">admin_panel_settings</span></div>
                        <div className="flex flex-col"><span className="text-xs font-black uppercase tracking-wider text-slate-700">GDPR Ready</span><span className="text-[10px] font-medium uppercase">Privacy Compliant</span></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-500 border border-slate-200 shadow-sm"><span className="material-symbols-outlined text-lg">biotech</span></div>
                        <div className="flex flex-col"><span className="text-xs font-black uppercase tracking-wider text-slate-700">Medical Grade</span><span className="text-[10px] font-medium uppercase">AI Analysis</span></div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default CreateAccountPage;
