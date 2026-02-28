import React from 'react';
import { Link } from 'react-router-dom';
import HeaderActions from '../components/HeaderActions';

const FirstAidKnowledgeBase = () => {
    return (
        <>
            <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
                <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                    <div className="layout-container flex h-full grow flex-col">
                        {/* Navigation Bar */}
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
                            <div className="flex items-center gap-8">
                                <Link to="/dashboard" className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity">
                                    <span className="material-symbols-outlined text-3xl font-bold">medical_services</span>
                                    <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">ArogyaSetu</h2>
                                </Link>
                                <nav className="flex items-center gap-6">
                                    <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold" href="#">Analysis</a>
                                    <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold" href="#">Wellness</a>
                                    <a className="text-primary text-sm font-bold border-b-2 border-primary pb-1" href="#">First Aid</a>
                                    <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold" href="#">Library</a>
                                </nav>
                            </div>
                            <div className="flex flex-1 justify-end gap-4 items-center">
                                <div className="flex gap-2">
                                    <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/10 transition-colors">
                                        <span className="material-symbols-outlined">notifications</span>
                                    </button>
                                    <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary/10 transition-colors">
                                        <span className="material-symbols-outlined">account_circle</span>
                                    </button>
                                </div>
                                <HeaderActions />
                            </div>
                        </header>
                        <main className="max-w-[1200px] mx-auto w-full px-6 py-10">
                            {/* Hero / Search Section */}
                            <div className="flex flex-col gap-6 mb-12 text-center md:text-left">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black tracking-tight">First Aid &amp; Learning Center</h1>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">Instant emergency guides and life-saving tutorials for critical medical situations. Preparedness saves lives.</p>
                                </div>
                                <div className="relative w-full max-w-3xl">
                                    <div className="flex items-center rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 p-2 h-16">
                                        <span className="material-symbols-outlined text-slate-400 px-4">search</span>
                                        <input className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-slate-100 text-lg placeholder:text-slate-400" placeholder="Search for emergency guides (e.g., CPR, burns, choking)..." />
                                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all hidden md:block">Search</button>
                                    </div>
                                </div>
                            </div>
                            {/* Video Tutorials Section */}
                            <section className="mb-12">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">play_circle</span>
                                        <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Video Tutorials</h2>
                                    </div>
                                    <a className="text-primary text-sm font-bold hover:underline" href="#">View All</a>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Video Card 1 */}
                                    <div className="group flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="relative w-full aspect-video bg-slate-200 overflow-hidden">
                                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Hands demonstrating CPR on a medical mannequin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8ZgCwoFqQDsDKaXSAWcuKXtMcl-YHtne_3egEneCcn7W5_jk0MEwDn9NkfHCkf6TZJ9a4CFYpdQQIHIMs8dK8vYaWE1LQBVFrYtSNcotGdg9oqSBaN09-bG6pRyfywbkF75kAmrLOR27iiMaf2xJs1y3PEmfw7Fou_-t-1KllFt6arhXmJxEDwalmQGtuJOT9e-R3WSq3clViEPvXThQcRZ62JCicqe_TEWZMj2GC_NK-vTfjrhWYcjBlGeGtTGNvTNAxTVtPrLg" />
                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                <div className="bg-white/90 rounded-full p-3 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <span className="material-symbols-outlined scale-125">play_arrow</span>
                                                </div>
                                            </div>
                                            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">04:12</span>
                                        </div>
                                        <div className="p-4 flex flex-col gap-3">
                                            <div>
                                                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Mastering Hands-Only CPR</h3>
                                                <p className="text-slate-500 text-sm">Essential steps for cardiac emergencies.</p>
                                            </div>
                                            <button className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-sm">Watch Now</button>
                                        </div>
                                    </div>
                                    {/* Video Card 2 */}
                                    <div className="group flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="relative w-full aspect-video bg-slate-200 overflow-hidden">
                                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Diagram of Heimlich maneuver for choking emergency" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDso99NHetw2dzqPTfafAIx8S4cNvymue_Mr_G1lz3p5_trjCXtXOEi-Ozsy5g0gLuQZuYBO7XCm0Jo9UP72hfAiiQRPnMAKg7O1IUTgoPMlm2Gik_yXNf_ra43DgG2-cPpJQLkBSetbD8szINV--TL64--leDVfI6j8KAeEKxeVGaVPtSdObKYpCdgn8prRuVNg0PtoDzEk4K1YbiuOL8pOEj37cauugS-MxafjLeVlQCq4RVk6-mZ3jR9cq02fq4oq1qiOfnvqVE" />
                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                <div className="bg-white/90 rounded-full p-3 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <span className="material-symbols-outlined scale-125">play_arrow</span>
                                                </div>
                                            </div>
                                            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">03:45</span>
                                        </div>
                                        <div className="p-4 flex flex-col gap-3">
                                            <div>
                                                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Heimlich Maneuver Guide</h3>
                                                <p className="text-slate-500 text-sm">Clear steps to stop someone from choking.</p>
                                            </div>
                                            <button className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-sm">Watch Now</button>
                                        </div>
                                    </div>
                                    {/* Video Card 3 */}
                                    <div className="group flex flex-col gap-4 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="relative w-full aspect-video bg-slate-200 overflow-hidden">
                                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="First aid for thermal burns illustration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN3fhUV1pxNoYC0hUamxHJYEqraa7f590j4KloY-mZWhwm6b7tBRMrMZHWgPL42gYtXT5Q-qdCRgEkeo0QinDu5iNbkTPnyoTp6gLg5QYyM3O5uwDLCq9vhPGBNddVxec69PkiqZXBrWpz8D6jfgAADI5us4cKSn0mW-bQrQBvtG9miSSCJf5soDVsOvxI9_WClxu5xDbaXheuUbTDa2fk0oHg0g5FbQYv41zL0k5hVNdoKZLW2XUI_PTLs7rsjj4hDi9dDLH9_UQ" />
                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                <div className="bg-white/90 rounded-full p-3 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <span className="material-symbols-outlined scale-125">play_arrow</span>
                                                </div>
                                            </div>
                                            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">05:20</span>
                                        </div>
                                        <div className="p-4 flex flex-col gap-3">
                                            <div>
                                                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Treatment for Severe Burns</h3>
                                                <p className="text-slate-500 text-sm">Proper cooling and dressing techniques.</p>
                                            </div>
                                            <button className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-lg hover:bg-primary hover:text-white transition-all text-sm">Watch Now</button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Emergency Guides Library */}
                            <section className="mb-12">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="material-symbols-outlined text-primary">menu_book</span>
                                    <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Step-by-Step Guides</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Guide Item 1 */}
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-colors cursor-pointer">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg text-red-600">
                                                <span className="material-symbols-outlined text-3xl">emergency_home</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-1">Bleeding Control</h3>
                                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">How to apply pressure and use tourniquets for severe bleeding.</p>
                                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                                    <span>Read Guide</span>
                                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Guide Item 2 */}
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-colors cursor-pointer">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg text-orange-600">
                                                <span className="material-symbols-outlined text-3xl">electric_bolt</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-1">Seizure Protocol</h3>
                                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Maintaining safety and positioning during a seizure episode.</p>
                                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                                    <span>Read Guide</span>
                                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Guide Item 3 */}
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-colors cursor-pointer">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600">
                                                <span className="material-symbols-outlined text-3xl">air</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-1">Allergic Reaction</h3>
                                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Identifying anaphylaxis and using an epinephrine auto-injector.</p>
                                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                                    <span>Read Guide</span>
                                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Guide Item 4 */}
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-colors cursor-pointer">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-green-600">
                                                <span className="material-symbols-outlined text-3xl">skeleton</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-1">Fractures &amp; Breaks</h3>
                                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Immobilizing injuries and pain management techniques.</p>
                                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                                    <span>Read Guide</span>
                                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Guide Item 5 */}
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-colors cursor-pointer">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg text-purple-600">
                                                <span className="material-symbols-outlined text-3xl">thermostat</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-1">Heat Stroke</h3>
                                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Recognizing heat-related illness and rapid cooling methods.</p>
                                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                                    <span>Read Guide</span>
                                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Guide Item 6 */}
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-colors cursor-pointer">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg text-yellow-600">
                                                <span className="material-symbols-outlined text-3xl">skull</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-1">Poisoning Treatment</h3>
                                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">What to do if someone ingests harmful substances or chemicals.</p>
                                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                                    <span>Read Guide</span>
                                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Preparation Checklist */}
                            <section className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 border border-primary/20">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold mb-4">Be Prepared: First Aid Kit Essentials</h2>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6">Make sure your home and vehicle are equipped with these life-saving essentials. Download our full checklist.</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                                Adhesive bandages in various sizes
                                            </li>
                                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                                Sterile gauze pads and tape
                                            </li>
                                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                                Antiseptic wipes and ointment
                                            </li>
                                            <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                                Emergency contact card
                                            </li>
                                        </ul>
                                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center gap-2">
                                            <span className="material-symbols-outlined">download</span>
                                            Download Full Kit Checklist
                                        </button>
                                    </div>
                                    <div className="w-full md:w-1/3">
                                        <div className="aspect-square bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center p-8 overflow-hidden">
                                            <img className="w-full h-full object-contain rounded-lg" data-alt="Organized medical first aid kit with supplies" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtdljQeXDQYGZ785HiH-Cj6IL3M91XWj0s_oLlsxvl4SeIzcZIKx7s8vgvWV5v6x-8mnE7qjMfBUniYfkB6qLuPRMMPG_SIUeGvp17MECJM00xorEhFp27iT-EvUzcy1pxlB8BVnvpkZixCdXCnGdAGXpUj3hfaFPrMWwnezOz7VzhVmh5vkXPUyrq7DP0UHIej5tzaDib1S6RAWBMFRvAvFHNS31z-CCFDuPcURok9a4z-_lD6OyjD6Lg47dlAqkSl5Qe2YiJViY" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </main>
                        {/* Footer */}
                        <footer className="mt-auto py-12 px-10 border-t border-slate-200 dark:border-slate-800 text-center">
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex items-center gap-2 text-primary/70">
                                    <span className="material-symbols-outlined font-bold">medical_services</span>
                                    <span className="font-bold">ArogyaSetu</span>
                                </div>
                                <p className="text-slate-500 text-sm max-w-lg italic">Disclaimer: This knowledge base is for educational purposes only. In case of a real medical emergency, always call your local emergency services (911) immediately.</p>
                                <div className="flex gap-6 mt-4">
                                    <a className="text-slate-400 hover:text-primary transition-colors" href="#">Privacy Policy</a>
                                    <a className="text-slate-400 hover:text-primary transition-colors" href="#">Terms of Service</a>
                                    <a className="text-slate-400 hover:text-primary transition-colors" href="#">Contact Support</a>
                                </div>
                                <p className="text-slate-400 text-xs mt-6">© 2024 ArogyaSetu AI. All rights reserved.</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FirstAidKnowledgeBase;
