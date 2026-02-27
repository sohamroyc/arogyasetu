import React from 'react';

const AiXRayAnalysisTool = () => {
    return (
        <>
            <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
<div className="flex flex-col min-h-screen">
{/* Top Navigation */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 text-primary">
<div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined">medical_services</span>
</div>
<h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Pocket Doctor</h2>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
<a className="text-primary text-sm font-bold border-b-2 border-primary pb-1" href="#">X-Ray Analysis</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Wellness</a>
<a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">History</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="block w-full pl-10 pr-3 py-2 border-none bg-slate-100 dark:bg-slate-800 rounded-lg text-sm placeholder-slate-500 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-700 transition-all" placeholder="Search records..." type="text"/>
</div>
<button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
<span className="truncate">Upgrade Pro</span>
</button>
<div className="bg-slate-200 dark:bg-slate-700 rounded-full size-10 flex items-center justify-center border-2 border-primary/20 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Profile picture of a medical professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVFciS93a06vMymgGSYPCtzg-ziAqf1TAlikREAxnNTbqD3-DmQIG-BoBhdqiH1gHJJiz1FwpYZ7ZAxABmRdDGp3z3UygvNT7k1PTqNsSu6EkzmOqC-PnwCgTrsZzhKiQ8pz2fLqIe1muzVa2WK8swU7t6lFhwOGF5Hl9UbXH0Bk7EBb3k5he6y5VZhVZI9Q6AiaAPf0nbpYjWUtfZZqp1uSuE71_wKCDogDNVzeM9HttxWaqaKEpThIX5_pHNfEljmg8ORWpyrMc"/>
</div>
</div>
</header>
<main className="flex-1 flex flex-col lg:flex-row p-4 lg:p-6 gap-6 max-w-[1600px] mx-auto w-full">
{/* Sidebar Navigation (Desktop) */}
<aside className="hidden xl:flex flex-col w-64 gap-2 shrink-0">
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary transition-all" href="#">
<span className="material-symbols-outlined">scan</span>
<span className="font-semibold">AI Analysis</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-medium">Patients</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined">description</span>
<span className="font-medium">Reports</span>
</a>
<div className="my-4 border-t border-slate-200 dark:border-slate-800"></div>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-medium">Settings</span>
</a>
</div>
{/* Stats Card */}
<div className="mt-auto p-4 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
<p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Analysis Credits</p>
<div className="flex justify-between items-end mb-2">
<span className="text-2xl font-black text-slate-900 dark:text-white">12/50</span>
<span className="text-xs text-primary font-bold">PRO PLAN</span>
</div>
<div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[24%] rounded-full"></div>
</div>
</div>
</aside>
{/* Main Workspace */}
<div className="flex-1 flex flex-col gap-6">
{/* Header Info */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
<a className="hover:text-primary transition-colors" href="#">Dashboard</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary">X-Ray Analysis</span>
</nav>
<h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">AI X-Ray Analysis</h1>
<p className="text-slate-600 dark:text-slate-400 mt-1">Upload medical images for instant AI-powered diagnostic insights.</p>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
<span className="material-symbols-outlined">history</span>
</button>
<button className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
<span className="material-symbols-outlined">share</span>
</button>
</div>
</div>
{/* Upload Area */}
<div className="flex-1 min-h-[400px] flex flex-col items-center justify-center gap-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/30 px-6 py-12 transition-all hover:border-primary/50 group">
<div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[40px]">upload_file</span>
</div>
<div className="text-center max-w-md">
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Drop your medical image here</h3>
<p className="text-slate-500 dark:text-slate-400">Supports DICOM, PNG, or JPG formats. Max file size: 20MB. Your data is encrypted and HIPAA compliant.</p>
</div>
<div className="flex flex-wrap justify-center gap-3">
<button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">add_photo_alternate</span>
                            Select File
                        </button>
<button className="flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">
<span className="material-symbols-outlined">folder_open</span>
                            Browse Cloud
                        </button>
</div>
</div>
</div>
{/* Analysis Results Panel */}
<aside className="w-full lg:w-[400px] shrink-0 flex flex-col gap-6">
{/* AI Status */}
<div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
<div className="flex items-center gap-3 mb-4">
<div className="size-3 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-sm font-bold text-primary uppercase tracking-wider">Gemini AI Active</span>
</div>
<div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 mb-4 border border-slate-700">
<img className="w-full h-full object-cover opacity-60" data-alt="Medical X-ray scan of a chest with AI detection highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHk2s5ADGrV-2gyLERNzqXUSY8sYQpTfB59q8uqLWS67muoprw-1E_9b7ew-YY9_ybwuWawgzf33eVfb8Ee9jHHa_yvhnvBNn_sEFdwg5Nm3ME0YfRlU2dntVOVfFWV85hzt6-gPQM5z9Z2b2_2drpwBrb-LiSK12zNWyoWeo0kggF7Ni62i3OYb6swI3y-dHx_GYOuk8aZcA5CuwbSkXNvufnBC4LwPSwUyiAfJnH9kJdd7NUIBtUEdt4hwunPb5b4vtlh25FOr4"/>
<div className="absolute inset-0 flex items-center justify-center">
{/* Simulated AI Detection Boxes */}
<div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-red-500 bg-red-500/10 rounded-lg">
<div className="absolute -top-6 left-0 bg-red-500 text-[10px] text-white px-2 py-0.5 rounded font-bold">Pneumonia Area (92%)</div>
</div>
<div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-amber-500 bg-amber-500/10 rounded-lg">
<div className="absolute -top-6 left-0 bg-amber-500 text-[10px] text-white px-2 py-0.5 rounded font-bold">Fracture (74%)</div>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-lg p-3 border border-white/10">
<div className="flex items-center justify-between text-white text-xs">
<span>Processing complete</span>
<span className="text-primary font-bold">1.2s</span>
</div>
</div>
</div>
<div className="space-y-4">
<h4 className="font-bold text-slate-900 dark:text-white">Detection Confidence</h4>
<div className="space-y-3">
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-sm text-slate-600 dark:text-slate-400">Pneumonia</span>
<span className="text-sm font-bold text-red-500">92%</span>
</div>
<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
<div className="h-full bg-red-500 rounded-full w-[92%] shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-sm text-slate-600 dark:text-slate-400">Pulmonary Edema</span>
<span className="text-sm font-bold text-amber-500">74%</span>
</div>
<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
<div className="h-full bg-amber-500 rounded-full w-[74%] shadow-[0_0_8px_rgba(245,158,11,0.4)]"></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-sm text-slate-600 dark:text-slate-400">Cardiomegaly</span>
<span className="text-sm font-bold text-green-500">12%</span>
</div>
<div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
<div className="h-full bg-green-500 rounded-full w-[12%]"></div>
</div>
</div>
</div>
</div>
</div>
{/* Actions */}
<div className="flex flex-col gap-3">
<button className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/30">
<span className="material-symbols-outlined">download</span>
                        Download Full Report
                    </button>
<button className="flex items-center justify-center gap-2 w-full py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
<span className="material-symbols-outlined">chat_bubble</span>
                        Consult Specialist
                    </button>
<p className="text-[10px] text-center text-slate-500 uppercase tracking-widest mt-2 font-bold px-4">
                        *AI analysis is a preliminary tool and should be verified by a certified medical professional.
                    </p>
</div>
</aside>
</main>
{/* Footer */}
<footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark py-6 px-10">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>© 2024 Pocket Doctor AI. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
<a className="hover:text-primary transition-colors" href="#">HIPAA Compliance</a>
</div>
</div>
</footer>
</div>
</div>
        </>
    );
};

export default AiXRayAnalysisTool;
