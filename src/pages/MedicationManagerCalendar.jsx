import React from 'react';

const MedicationManagerCalendar = () => {
    return (
        <>
            <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
<div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 text-primary">
<div className="size-6 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined text-sm">medical_services</span>
</div>
<h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Pocket Doctor</h2>
</div>
<label className="flex flex-col min-w-40 !h-10 max-w-64">
<div className="flex w-full flex-1 items-stretch rounded-lg h-full">
<div className="text-slate-400 dark:text-slate-500 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
<span className="material-symbols-outlined">search</span>
</div>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-slate-100 dark:bg-slate-800 focus:border-none h-full placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal" placeholder="Search medications..." value=""/>
</div>
</label>
</div>
<div className="flex flex-1 justify-end gap-8">
<div className="flex items-center gap-9">
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
<a className="text-primary text-sm font-bold border-b-2 border-primary py-1" href="#">Medications</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Symptoms</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Health Records</a>
</div>
<div className="flex gap-2">
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ml-2 border-2 border-primary/20" data-alt="User profile picture with professional appearance" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJbiye0kOv-Itccuz5fShmNq9WKCQPKI5CeLMnkdgunGiIZAkuOXu0TZ_lA2uGJ55T2CDKBkPrFCOI-x9Lb8X5G_1d17LyRuSxUPm3XaJe2dyV5bU4zZ6Ci7cimA_ZmeFpsDq3p_H2FRosX7x_rwFxEGIg-xSqPvEi735Q0x5wJb2FmWcnqa8YHtJqTgmMSKO8WpbInbl9SntAUa4XTnLBYWYJitZdahiGQlvRBUHfNmE97BhDZfhZruFCQ4m37_uSqQ-dZuzo2Dc");'></div>
</div>
</div>
</header>
<main className="flex flex-1 p-6 lg:p-10 gap-8">
<div className="flex-1 flex flex-col gap-8">
<div className="flex items-end justify-between">
<div>
<h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Medication Manager</h1>
<p className="text-slate-500 dark:text-slate-400 text-lg">Adherence score: <span className="text-emerald-500 font-bold">95%</span> this month</p>
</div>
<button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">add</span>
                        Add New Medication
                    </button>
</div>
<div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4">
<h2 className="text-xl font-bold dark:text-white">October 2023</h2>
<div className="flex gap-1">
<button className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
<button className="px-4 py-1.5 rounded-lg bg-white dark:bg-slate-700 shadow-sm font-medium text-sm">Month</button>
<button className="px-4 py-1.5 rounded-lg text-slate-500 dark:text-slate-400 font-medium text-sm">Week</button>
<button className="px-4 py-1.5 rounded-lg text-slate-500 dark:text-slate-400 font-medium text-sm">Day</button>
</div>
</div>
<div className="grid grid-cols-7 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
<div className="bg-slate-50 dark:bg-slate-900/50 p-4 text-center font-bold text-xs uppercase tracking-wider text-slate-500">Sun</div>
<div className="bg-slate-50 dark:bg-slate-900/50 p-4 text-center font-bold text-xs uppercase tracking-wider text-slate-500">Mon</div>
<div className="bg-slate-50 dark:bg-slate-900/50 p-4 text-center font-bold text-xs uppercase tracking-wider text-slate-500">Tue</div>
<div className="bg-slate-50 dark:bg-slate-900/50 p-4 text-center font-bold text-xs uppercase tracking-wider text-slate-500">Wed</div>
<div className="bg-slate-50 dark:bg-slate-900/50 p-4 text-center font-bold text-xs uppercase tracking-wider text-slate-500">Thu</div>
<div className="bg-slate-50 dark:bg-slate-900/50 p-4 text-center font-bold text-xs uppercase tracking-wider text-slate-500">Fri</div>
<div className="bg-slate-50 dark:bg-slate-900/50 p-4 text-center font-bold text-xs uppercase tracking-wider text-slate-500">Sat</div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2 opacity-30">24</div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2 opacity-30">25</div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2 opacity-30">26</div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2 opacity-30">27</div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2 opacity-30">28</div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2 opacity-30">29</div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2 opacity-30">30</div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2">
<span className="text-sm font-semibold">1</span>
</div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2">
<span className="text-sm font-semibold">2</span>
<div className="mt-2 flex flex-col gap-1">
<div className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] px-2 py-1 rounded border border-emerald-200 dark:border-emerald-500/30 truncate">Morning Meds (3)</div>
<div className="bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[10px] px-2 py-1 rounded border border-amber-200 dark:border-amber-500/30 truncate">Evening Meds (1)</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2 ring-2 ring-primary ring-inset">
<span className="text-sm font-bold text-primary">3 Today</span>
<div className="mt-2 flex flex-col gap-1">
<div className="bg-emerald-500 text-white text-[10px] px-2 py-1 rounded font-bold flex items-center justify-between">
<span>Morning Meds</span>
<span className="material-symbols-outlined text-[12px]">check_circle</span>
</div>
<div className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded border border-primary/20 flex items-center justify-between">
<span>Noon Dose</span>
<span className="material-symbols-outlined text-[12px]">schedule</span>
</div>
<div className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] px-2 py-1 rounded border border-slate-200 dark:border-slate-700">Evening Meds</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2"><span className="text-sm font-semibold">4</span></div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2"><span className="text-sm font-semibold">5</span></div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2"><span className="text-sm font-semibold">6</span></div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2"><span className="text-sm font-semibold">7</span></div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2"><span className="text-sm font-semibold">8</span></div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2"><span className="text-sm font-semibold">9</span></div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2"><span className="text-sm font-semibold">10</span></div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2"><span className="text-sm font-semibold">11</span></div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2"><span className="text-sm font-semibold">12</span></div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2"><span className="text-sm font-semibold">13</span></div>
<div className="bg-white dark:bg-slate-900 min-h-[120px] p-2"><span className="text-sm font-semibold">14</span></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-amber-500">warning</span>
<h3 className="text-lg font-bold">Drug Interaction AI Checker</h3>
</div>
<div className="p-4 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 rounded-xl">
<div className="flex items-start gap-4">
<div className="bg-amber-500 text-white p-2 rounded-lg">
<span className="material-symbols-outlined">shield</span>
</div>
<div>
<p className="font-bold text-amber-800 dark:text-amber-400">Potential Moderate Interaction</p>
<p className="text-sm text-amber-700 dark:text-amber-300/80 mt-1">Lisinopril + Potassium Supplements can increase potassium levels in your blood. Our AI recommends consulting your GP before the next dose.</p>
</div>
</div>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">analytics</span>
<h3 className="text-lg font-bold">Health Insights</h3>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Systolic Pressure Avg</span>
<span className="font-bold text-emerald-500">122 mmHg (Normal)</span>
</div>
<div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full">
<div className="bg-emerald-500 h-2 rounded-full w-3/4"></div>
</div>
<p className="text-xs text-slate-400">Based on your regular Lisinopril adherence, your pressure is stabilizing.</p>
</div>
</div>
</div>
</div>
<aside className="w-[400px] hidden xl:flex flex-col gap-6">
<div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold">Current Prescriptions</h3>
<span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold">4 Active</span>
</div>
<div className="space-y-4 flex-1 overflow-y-auto pr-2">
<div className="group bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all">
<div className="flex gap-4">
<div className="size-16 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center p-2 border border-slate-100 dark:border-slate-600 overflow-hidden">
<div className="w-full h-full bg-slate-200 dark:bg-slate-600 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-slate-400">pill</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-bold text-slate-900 dark:text-white">Lisinopril</h4>
<span className="text-primary font-bold text-sm">10mg</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Hypertension Management</p>
<div className="mt-3 flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-slate-400">schedule</span>
<span className="text-xs font-medium">8:00 AM Daily</span>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Remaining</span>
<span className="text-sm font-bold text-slate-900 dark:text-white">12 / 30 pills</span>
</div>
<button className="bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                                    Refill Now
                                </button>
</div>
</div>
<div className="group bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all">
<div className="flex gap-4">
<div className="size-16 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center p-2 border border-slate-100 dark:border-slate-600 overflow-hidden">
<div className="w-full h-full bg-slate-200 dark:bg-slate-600 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-slate-400">pill</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-bold text-slate-900 dark:text-white">Metformin</h4>
<span className="text-primary font-bold text-sm">500mg</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Type 2 Diabetes Control</p>
<div className="mt-3 flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-slate-400">schedule</span>
<span className="text-xs font-medium">With Breakfast</span>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Remaining</span>
<span className="text-sm font-bold text-slate-900 dark:text-white">5 / 60 pills</span>
</div>
<button className="bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-lg shadow-red-500/20">
                                    Refill Urgent
                                </button>
</div>
</div>
<div className="group bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all">
<div className="flex gap-4">
<div className="size-16 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center p-2 border border-slate-100 dark:border-slate-600 overflow-hidden">
<div className="w-full h-full bg-slate-200 dark:bg-slate-600 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-slate-400">medication_liquid</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-bold text-slate-900 dark:text-white">Vitamin D3</h4>
<span className="text-primary font-bold text-sm">2000IU</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Immune Support</p>
<div className="mt-3 flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-slate-400">schedule</span>
<span className="text-xs font-medium">1x Weekly (Sun)</span>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Remaining</span>
<span className="text-sm font-bold text-slate-900 dark:text-white">24 / 24 caps</span>
</div>
<button className="bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold px-4 py-2 rounded-lg cursor-not-allowed">
                                    Refill Not Ready
                                </button>
</div>
</div>
</div>
<div className="mt-6 p-4 bg-primary/5 rounded-2xl border border-primary/20">
<div className="flex items-center gap-3">
<div className="bg-primary text-white p-2 rounded-lg">
<span className="material-symbols-outlined">psychiatry</span>
</div>
<p className="text-sm font-medium">Pocket Doctor AI is monitoring your symptom logs for any drug side effects.</p>
</div>
</div>
</div>
</aside>
</main>
</div>
</div>
        </>
    );
};

export default MedicationManagerCalendar;
