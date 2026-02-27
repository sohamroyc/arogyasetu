import React, { useState, useEffect, useRef } from 'react';
import { symptomCheckerService } from '../services/api';
import { Link } from 'react-router-dom';

const AiSymptomCheckerInterface = () => {
    const [messages, setMessages] = useState([
        {
            role: 'ai',
            content: "Hello! I'm your AI medical assistant. Please describe the symptoms you are experiencing in detail. How long have you felt this way?",
            timestamp: "10:30 AM"
        },
        {
            role: 'user',
            content: "I've had a persistent dry cough and a mild fever for about 3 days. My chest feels slightly tight.",
            timestamp: "10:32 AM"
        },
        {
            role: 'ai',
            content: "I understand. Along with the chest tightness, are you experiencing any shortness of breath, fatigue, or muscle aches? Also, have you noticed any changes in your taste or smell?",
            timestamp: "10:32 AM"
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const newMessage = {
            role: 'user',
            content: inputValue,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newMessage]);
        setInputValue("");
        setIsTyping(true);

        // This simulates a backend call. Just replace this service method with an axios call!
        const aiResponse = await symptomCheckerService.sendMessage(messages, inputValue);

        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    const resetSession = () => {
        setMessages([{
            role: 'ai',
            content: "Hello! I'm your AI medical assistant. Please describe the symptoms you are experiencing in detail. How long have you felt this way?",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
    };
    return (
        <>
            <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
                <div className="relative flex min-h-screen flex-col overflow-x-hidden">
                    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-3">
                        <div className="mx-auto flex max-w-7xl items-center justify-between">
                            <div className="flex items-center gap-8">
                                <Link to="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                                        <span className="material-symbols-outlined">health_and_safety</span>
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Pocket Doctor</h2>
                                </Link>
                                <div className="hidden md:flex">
                                    <label className="relative flex items-center">
                                        <span className="material-symbols-outlined absolute left-3 text-slate-400">search</span>
                                        <input className="h-10 w-64 rounded-lg border-none bg-slate-100 dark:bg-slate-800 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Search medical database..." />
                                    </label>
                                </div>
                            </div>
                            <nav className="hidden items-center gap-8 lg:flex">
                                <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors" href="#">Dashboard</a>
                                <a className="text-sm font-bold text-primary" href="#">Symptom Checker</a>
                                <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors" href="#">Wellness Plans</a>
                                <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors" href="#">History</a>
                            </nav>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1 mr-2">
                                    <button className="px-3 py-1 text-xs font-bold rounded bg-white dark:bg-slate-700 shadow-sm">EN</button>
                                    <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white">HI</button>
                                    <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white">ES</button>
                                </div>
                                <button className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-red-500 px-4 text-sm font-bold text-white hover:bg-red-600 transition-colors gap-2">
                                    <span className="material-symbols-outlined text-sm">emergency</span>
                                    <span>Emergency Call</span>
                                </button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary">
                                    <span className="material-symbols-outlined">notifications</span>
                                </button>
                                <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-primary/20">
                                    <img alt="Profile" className="h-full w-full object-cover" data-alt="User profile avatar with friendly face" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkgmfybpBn6Iy-ylh_6xIFgOF22NeqrvpHXqrseS_Jzi0wyBOz4dLkjz5h78OKKb_dyazLxFVP3IRiiNLUr65rlSBKpc-hz21AjRqU9kHq12wf2HH0p4gUZAHu23UOUHV1n4JgH7ppTBSeBoa3savSoO7_3gSYcwjaY_i0by0YOPA1zpWbaxzBkiNMBdBFORtn2upbLI4ifzBLiHcCBIIUnBVKas1228YYfh1Puf51i4ZW3Ddnvj0j1J0jEd4m1bunjm-54k3pDPc" />
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="mx-auto flex w-full max-w-7xl flex-1 gap-6 p-6 overflow-hidden">
                        <aside className="flex w-80 shrink-0 flex-col gap-6">
                            <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-slate-900 dark:text-white">Medical History</h3>
                                    <span className="material-symbols-outlined text-primary">history</span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Your recent health snapshots and reports</p>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-3 text-primary transition-all cursor-pointer border border-primary/20">
                                        <span className="material-symbols-outlined">schedule</span>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold">Recent Reports</span>
                                            <span className="text-[10px] opacity-80">Updated today</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                                        <span className="material-symbols-outlined text-slate-400">description</span>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-medium">Feb 10: Flu Symptoms</span>
                                            <span className="text-[10px] text-slate-500">Probable viral infection</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                                        <span className="material-symbols-outlined text-slate-400">description</span>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-medium">Feb 08: Back Pain</span>
                                            <span className="text-[10px] text-slate-500">Muscle strain alert</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 rounded-lg px-3 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                                        <span className="material-symbols-outlined text-slate-400">description</span>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-medium">Jan 25: Migraine</span>
                                            <span className="text-[10px] text-slate-500">Environmental trigger</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-2 w-full rounded-lg bg-slate-100 py-2.5 text-xs font-bold text-slate-700 transition-all hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                                    View Full Archive
                                </button>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5">
                                <h3 className="mb-4 font-bold text-slate-900 dark:text-white">Current Risk Assessment</h3>
                                <div className="relative flex flex-col items-center">
                                    <div className="relative flex h-32 w-full items-center justify-center overflow-hidden">
                                        <svg className="h-48 w-48 -rotate-90">
                                            <circle className="text-slate-100 dark:text-slate-800" cx="96" cy="96" fill="none" r="80" stroke="currentColor" strokeDasharray="251 502" strokeWidth="12"></circle>
                                            <circle className="text-amber-500" cx="96" cy="96" fill="none" r="80" stroke="currentColor" strokeDasharray="100 502" strokeWidth="12"></circle>
                                        </svg>
                                        <div className="absolute bottom-6 flex flex-col items-center">
                                            <span className="text-3xl font-black text-slate-900 dark:text-white">Mild</span>
                                            <span className="text-[10px] uppercase tracking-wider text-slate-500">Urgency level</span>
                                        </div>
                                    </div>
                                    <p className="text-center text-xs text-slate-500 dark:text-slate-400">Based on your reported dry cough and mild fever.</p>
                                </div>
                            </div>
                        </aside>
                        <section className="flex flex-1 flex-col gap-4">
                            <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 p-4 bg-slate-50 dark:bg-slate-900/80">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined">smart_toy</span>
                                            </div>
                                            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 dark:border-slate-900"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Pocket AI Assistant</h4>
                                            <span className="text-[10px] text-green-500 font-medium">Always available</span>
                                        </div>
                                    </div>
                                    <button onClick={resetSession} className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                                        <span className="material-symbols-outlined text-sm">refresh</span>
                                        Reset Session
                                    </button>
                                </div>
                                <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-6 scrollbar-hide">
                                    {messages.map((msg, index) => (
                                        msg.role === 'ai' ? (
                                            <div key={index} className="flex gap-4">
                                                <div className="h-8 w-8 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                    <span className="material-symbols-outlined text-sm">smart_toy</span>
                                                </div>
                                                <div className="flex flex-col gap-1 max-w-[80%]">
                                                    <span className="text-[10px] font-bold text-slate-400">Pocket AI • {msg.timestamp}</span>
                                                    <div className="rounded-2xl rounded-tl-none bg-slate-100 dark:bg-slate-800 p-4 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                                                        {msg.content}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div key={index} className="flex flex-row-reverse gap-4">
                                                <div className="h-8 w-8 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                                    <img alt="You" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaOuJ3W5cOUOBPKlmg4Xtg79QLiltogpYMawjKcA5m_Q5Jvuhwj0aVki2OQbzekjRAr6Qq7B6gl3GkzQfsn_9LLGdIKPI7svlk-aRywciUzINdVvSxX-SSXt60PaDh5FDrVXmA5Sn23xrmcnz_qCZom3u1BH4S-8AylbB8wO0Z24szw-P15CIiXuMvcCeQ8SpoDLOgf2yGeKHA8nBOZAP_d2yAQPBbhnJ9VBi2gOjC41ZlhzKGvgEesQgISpCJuw1YSbmi5FssTmo" />
                                                </div>
                                                <div className="flex flex-col gap-1 items-end max-w-[80%]">
                                                    <span className="text-[10px] font-bold text-slate-400 text-right">You • {msg.timestamp}</span>
                                                    <div className="rounded-2xl rounded-tr-none bg-primary p-4 text-sm leading-relaxed text-white shadow-lg shadow-primary/20">
                                                        {msg.content}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ))}
                                    {isTyping && (
                                        <div className="flex gap-4">
                                            <div className="h-8 w-8 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined text-sm">smart_toy</span>
                                            </div>
                                            <div className="flex flex-col gap-1 max-w-[80%] items-center justify-center">
                                                <div className="rounded-2xl rounded-tl-none bg-slate-100 dark:bg-slate-800 p-4 text-sm leading-relaxed text-slate-800 dark:text-slate-200 flex space-x-2">
                                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={bottomRef} />
                                </div>
                                <div className="border-t border-slate-200 dark:border-slate-800 p-4">
                                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-2 pl-4">
                                        <button className="text-slate-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">attach_file</span>
                                        </button>
                                        <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2" placeholder="Type your symptoms here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} disabled={isTyping} />
                                        <button onClick={handleSendMessage} disabled={isTyping || !inputValue.trim()} className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary/90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
                                            <span className="material-symbols-outlined">send</span>
                                        </button>
                                    </div>
                                    <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                                        <button className="shrink-0 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 text-[11px] font-medium text-slate-500 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all">I have a headache</button>
                                        <button className="shrink-0 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 text-[11px] font-medium text-slate-500 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all">Feeling nauseous</button>
                                        <button className="shrink-0 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 text-[11px] font-medium text-slate-500 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all">Muscle pain after gym</button>
                                        <button className="shrink-0 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 text-[11px] font-medium text-slate-500 hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all">Skin rash</button>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 p-4">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-amber-500 mt-0.5">warning</span>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Medical Disclaimer</span>
                                        <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-500">
                                            This AI Symptom Checker is for informational purposes only and is NOT a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a medical emergency, please call your local emergency services immediately.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4">
                        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                <span className="text-xs">© 2024 Pocket Doctor AI. All rights reserved.</span>
                            </div>
                            <div className="flex items-center gap-6">
                                <a className="text-xs font-medium text-slate-500 hover:text-primary" href="#">Privacy Policy</a>
                                <a className="text-xs font-medium text-slate-500 hover:text-primary" href="#">Terms of Service</a>
                                <a className="text-xs font-medium text-slate-500 hover:text-primary" href="#">Contact Support</a>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>
        </>
    );
};

export default AiSymptomCheckerInterface;
