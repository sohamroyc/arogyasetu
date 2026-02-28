import React from 'react';
import { Link } from 'react-router-dom';
import HeaderActions from './HeaderActions';

const TopHeader = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between shadow-sm shrink-0 w-full mb-6">
            {/* Logo area */}
            <Link to="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="size-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md">
                    <span className="material-symbols-outlined font-bold text-xl">health_and_safety</span>
                </div>
                <div className="hidden sm:block">
                    <h1 className="font-bold text-lg text-slate-900 dark:text-slate-100 leading-tight">ArogyaSetu</h1>
                    <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 leading-tight">AI Wellness Hub</p>
                </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-4 sm:mx-8 hidden md:block">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                    <input
                        className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-full pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-500 font-medium"
                        placeholder="Search health records, symptoms..."
                        type="text"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
                <HeaderActions />
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors relative">
                    <span className="material-symbols-outlined text-xl">notifications</span>
                    <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-blue-600 rounded-full border border-white dark:border-slate-800"></span>
                </button>
            </div>
        </header>
    );
};

export default TopHeader;
