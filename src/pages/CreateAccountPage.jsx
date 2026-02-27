import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccountPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white font-display text-slate-900 border-t-8 border-blue-600">
            {/* Header */}
            <header className="flex items-center justify-between px-8 py-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-blue-600">
                    <span className="material-symbols-outlined text-2xl">health_and_safety</span>
                    <span className="text-xl font-bold tracking-tight text-slate-900">Pocket Doctor</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
                    <a href="#" className="hover:text-slate-900 transition-colors">How it Works</a>
                    <a href="#" className="hover:text-slate-900 transition-colors">Security</a>
                    <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
                    <Link to="/login" className="px-5 py-2 text-blue-600 bg-blue-50 border border-blue-100 hover:bg-blue-100 rounded-lg transition-colors">
                        Log In
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">

                    {/* Header Details */}
                    <div className="flex justify-between items-end mb-8 border-b border-slate-100 pb-6">
                        <div>
                            <h1 className="text-3xl font-extrabold mb-1">Create your account</h1>
                            <p className="text-sm font-bold text-slate-500">Step 1 of 3: Personal Details</p>
                        </div>
                        <div className="hidden sm:flex items-center gap-1 text-[10px] font-black tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded uppercase">
                            <span className="material-symbols-outlined text-sm">verified_user</span>
                            HIPAA Compliant
                        </div>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex justify-between items-center mb-10 text-xs font-bold">
                        <div className="flex-1 text-blue-600 border-b-2 border-blue-600 pb-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">account_circle</span>
                            Account Details
                        </div>
                        <div className="flex-1 text-slate-400 border-b-2 border-slate-100 pb-2 text-center">
                            Health Info
                        </div>
                        <div className="flex-1 text-slate-400 border-b-2 border-slate-100 pb-2 text-right">
                            Security
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = '/'; }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold mb-2 text-slate-700">Full Name</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">person</span>
                                    <input
                                        type="text"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-primary focus:border-primary transition-colors focus:bg-white"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold mb-2 text-slate-700">Phone Number</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">call</span>
                                    <input
                                        type="tel"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-primary focus:border-primary transition-colors focus:bg-white"
                                        placeholder="+1 (555) 000-0000"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold mb-2 text-slate-700">Email Address</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">mail</span>
                                <input
                                    type="email"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:ring-primary focus:border-primary transition-colors focus:bg-white"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold mb-2 text-slate-700">Create Password</label>
                            <div className="relative mb-2">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-sm">lock</span>
                                <input
                                    type="password"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-10 py-3 text-sm focus:ring-primary focus:border-primary transition-colors focus:bg-white tracking-widest"
                                    placeholder="••••••••"
                                    required
                                />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                    <span className="material-symbols-outlined text-sm">visibility</span>
                                </button>
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Must be at least 8 characters long with a symbol.</p>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 mt-4"
                        >
                            Continue to Health Info
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
            <footer className="text-center py-6 text-[10px] md:text-xs font-medium text-slate-400">
                © {new Date().getFullYear()} Pocket Doctor AI. All your medical data is stored securely and never shared with third parties without your explicit consent.
            </footer>
        </div>
    );
};

export default CreateAccountPage;
