import React from 'react';
import { Link } from 'react-router-dom';
import HeaderActions from '../components/HeaderActions';

const EmergencyClinicLocator = () => {
    return (
        <>
            <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
                <div className="layout-container flex h-screen flex-col">
                    {/* Header */}
                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 py-3 bg-white dark:bg-background-dark shrink-0">
                        <div className="flex items-center gap-8">
                            <Link to="/dashboard" className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity">
                                <span className="material-symbols-outlined text-3xl font-bold">medical_services</span>
                                <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">Pocket Doctor</h2>
                            </Link>
                            <label className="flex flex-col min-w-40 h-10 max-w-64">
                                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                    <div className="text-slate-400 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg" data-icon="search">
                                        <span className="material-symbols-outlined text-xl">search</span>
                                    </div>
                                    <input className="form-input flex w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-0 h-full placeholder:text-slate-500 px-4 rounded-r-lg text-sm" placeholder="Search clinics..." value="" />
                                </div>
                            </label>
                        </div>
                        <div className="flex flex-1 justify-end gap-6 items-center">
                            <nav className="hidden md:flex items-center gap-6">
                                <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
                                <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Medical Analysis</a>
                                <a className="text-primary text-sm font-bold border-b-2 border-primary py-4" href="#">Clinic Locator</a>
                                <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Wellness</a>
                            </nav>
                            <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-800 pl-6">
                                <HeaderActions />
                            </div>
                        </div>
                    </header>
                    {/* Main Content Area */}
                    <main className="flex flex-1 overflow-hidden">
                        {/* Sidebar: Clinic List & SOS */}
                        <aside className="w-96 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark overflow-y-auto shrink-0">
                            {/* High-Visibility SOS Section */}
                            <div className="p-6 bg-red-50 dark:bg-red-900/10 border-b border-red-100 dark:border-red-900/20">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-red-600 dark:text-red-400 font-bold text-lg uppercase tracking-wider flex items-center gap-2">
                                            <span className="material-symbols-outlined fill-1">emergency</span>
                                            Emergency
                                        </h3>
                                        <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-[10px] font-bold">LIVE</span>
                                    </div>
                                    <button className="sos-pulse w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl flex flex-col items-center justify-center gap-1 transition-all">
                                        <span className="text-2xl font-black">CALL 911</span>
                                        <span className="text-xs opacity-90">One-tap emergency dispatch</span>
                                    </button>
                                </div>
                            </div>
                            {/* First Aid Quick Guide Carousel */}
                            <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-xs font-bold text-slate-500 uppercase">Quick First Aid Guide</p>
                                    <div className="flex gap-1">
                                        <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
                                        <button className="p-1 text-slate-400 hover:text-primary"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
                                    </div>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg flex items-center gap-3">
                                    <div className="size-12 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">heart_broken</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Chest Pain (CPR)</p>
                                        <p className="text-xs text-slate-500">Step-by-step instructions...</p>
                                    </div>
                                </div>
                            </div>
                            {/* Clinic Listings */}
                            <div className="p-4 flex flex-col gap-1 overflow-y-auto">
                                <h1 className="text-slate-900 dark:text-slate-100 text-base font-bold mb-3 px-2">Nearby Medical Facilities</h1>
                                {/* Clinic Item 1 */}
                                <div className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer group">
                                    <div className="flex gap-4">
                                        <div className="size-12 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">local_hospital</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <p className="font-bold text-sm text-slate-900 dark:text-slate-100">City General Hospital</p>
                                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">OPEN</span>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">call</span> (555) 012-3456
                                            </p>
                                            <p className="text-xs text-slate-400 mt-1">0.8 miles • 24/7 Emergency Care</p>
                                            <div className="flex gap-2 mt-3">
                                                <button className="flex-1 py-1.5 rounded-lg bg-primary text-white text-[11px] font-bold">Directions</button>
                                                <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[11px] font-bold group-hover:bg-white dark:group-hover:bg-slate-800">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Clinic Item 2 */}
                                <div className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer group">
                                    <div className="flex gap-4">
                                        <div className="size-12 rounded-lg bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">help_clinic</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <p className="font-bold text-sm text-slate-900 dark:text-slate-100">St. Mary's Urgent Care</p>
                                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">BUSY</span>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">call</span> (555) 098-7654
                                            </p>
                                            <p className="text-xs text-slate-400 mt-1">2.4 miles • Closes at 10 PM</p>
                                            <div className="flex gap-2 mt-3">
                                                <button className="flex-1 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-[11px] font-bold">Directions</button>
                                                <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[11px] font-bold group-hover:bg-white dark:group-hover:bg-slate-800">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Clinic Item 3 */}
                                <div className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 cursor-pointer group">
                                    <div className="flex gap-4">
                                        <div className="size-12 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">local_pharmacy</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <p className="font-bold text-sm text-slate-900 dark:text-slate-100">CVS Pharmacy - 24hr</p>
                                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">OPEN</span>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">call</span> (555) 055-1212
                                            </p>
                                            <p className="text-xs text-slate-400 mt-1">3.1 miles • Pharmacy &amp; OTC</p>
                                            <div className="flex gap-2 mt-3">
                                                <button className="flex-1 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-[11px] font-bold">Directions</button>
                                                <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[11px] font-bold group-hover:bg-white dark:group-hover:bg-slate-800">Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        {/* Map Area */}
                        <section className="flex-1 relative bg-slate-100 dark:bg-slate-900 overflow-hidden">
                            {/* Map Placeholder Background */}
                            <div className="absolute inset-0 bg-cover bg-center" data-alt="High quality detailed city street map background" data-location="New York" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQkhT13GE3WaPmRDkQjy0DG35XKCHrbHAJj7z7bc5vQrmK89gigDqw-gidYizNUSaVr-_nGqUUoCMwHwSmvPK5gfmMv0rK6Fra9f3OK4AunYkeUJRTI3tQA6ANT6fEZk8uN-Y4U9dbpIEHTPcoFXKLbD4zn7MmIj9j8tgr_2F7voUSyc749pp44VvnWm5XlCSDxUaXdOcrSFPpjYd9FH0zD8AnoJAi5KiDrC7tkGtUyWygtSh613GfRvxG_P-iYJaQuTnXj1kzdyM');">
                                {/* Overlay for map readability in dark mode */}
                                <div className="absolute inset-0 bg-slate-900/30 dark:bg-slate-900/60 pointer-events-none"></div>
                            </div>
                            {/* Map UI Controls */}
                            <div className="absolute top-6 right-6 flex flex-col gap-2">
                                <div className="flex flex-col rounded-xl overflow-hidden shadow-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                    <button className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700 border-b border-slate-200 dark:border-slate-700 transition-colors">
                                        <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">add</span>
                                    </button>
                                    <button className="p-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                        <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">remove</span>
                                    </button>
                                </div>
                                <button className="p-3 rounded-xl shadow-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                                    <span className="material-symbols-outlined text-primary">my_location</span>
                                </button>
                            </div>
                            {/* Interactive Pins Overlay (Simulated) */}
                            <div className="absolute inset-0 pointer-events-none">
                                {/* User Location Pin */}
                                <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                    <div className="size-6 rounded-full bg-primary border-4 border-white dark:border-slate-800 shadow-lg ring-4 ring-primary/30"></div>
                                    <div className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded mt-2 shadow-lg">YOU ARE HERE</div>
                                </div>
                                {/* Hospital Pin 1 */}
                                <div className="absolute top-[35%] left-[42%] flex flex-col items-center cursor-pointer pointer-events-auto group">
                                    <div className="size-10 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-primary text-xl">local_hospital</span>
                                    </div>
                                    <div className="mt-2 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">City General Hospital</div>
                                </div>
                                {/* Clinic Pin 2 */}
                                <div className="absolute top-[60%] left-[55%] flex flex-col items-center cursor-pointer pointer-events-auto group">
                                    <div className="size-10 rounded-full bg-white dark:bg-slate-800 border-2 border-amber-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-amber-500 text-xl">help_clinic</span>
                                    </div>
                                    <div className="mt-2 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">St. Mary's Urgent Care</div>
                                </div>
                            </div>
                            {/* Floating Search/Filter Bar */}
                            <div className="absolute top-6 left-6 right-20 md:right-auto md:w-96 p-4">
                                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 flex gap-2 border border-slate-200/50 dark:border-slate-700/50">
                                    <button className="flex-1 bg-primary/10 dark:bg-primary/20 text-primary py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-sm">filter_alt</span>
                                        All Filters
                                    </button>
                                    <button className="flex-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                        Open Now
                                    </button>
                                </div>
                            </div>
                            {/* Current Location Footer Info */}
                            <div className="absolute bottom-6 left-6 p-4">
                                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-3 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-bold leading-none mb-1">Your current location</p>
                                        <p className="text-xs font-bold text-slate-900 dark:text-slate-100">451 Health Way, Medical District, NY</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>

            </div>
        </>
    );
};

export default EmergencyClinicLocator;
