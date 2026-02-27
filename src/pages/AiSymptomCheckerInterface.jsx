import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeaderActions from '../components/HeaderActions';

const AiSymptomCheckerInterface = () => {
    const [messages, setMessages] = useState([
        {
            role: 'ai',
            content: "Hello! I'm your AI medical assistant. Please describe your symptoms or upload a medical prescription, and I will help analyze it for you.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const bottomRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
        // Reset the input value so the same file can be uploaded again if needed
        e.target.value = null;
    };

    const removeImage = () => {
        setSelectedImage(null);
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim() && !selectedImage) return;

        const userMsgContent = inputValue.trim();
        const userImage = selectedImage;

        const newMessage = {
            role: 'user',
            content: userMsgContent,
            image: userImage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newMessage]);
        setInputValue("");
        setSelectedImage(null);
        setIsTyping(true);

        // Simulate API call and Gemini Analysis
        setTimeout(() => {
            let aiResponseText = "";

            if (userImage) {
                // Simulated response when a prescription is uploaded
                aiResponseText = `I have analyzed the prescription you uploaded. It appears you have been prescribed Amoxicillin (500mg) for a bacterial infection, to be taken twice a day for 7 days. Please ensure you complete the full course even if you feel better. Are you experiencing any specific side effects like nausea or skin rash?`;
            } else {
                // General text-based response
                if (userMsgContent.toLowerCase().includes("headache")) {
                    aiResponseText = "I see you're experiencing a headache. Is the pain localized to one side of your head, or is it a general tension? Also, how long has it been persisting?";
                } else if (userMsgContent.toLowerCase().includes("fever") || userMsgContent.toLowerCase().includes("cough")) {
                    aiResponseText = "A cough and fever could indicate a viral infection like the flu. Are you also experiencing any shortness of breath, body aches, or a sore throat?";
                } else {
                    aiResponseText = `Thank you for sharing that. I am analyzing your symptoms. To provide a better assessment, could you rate your discomfort on a scale of 1 to 10? Also, let me know if there are any other symptoms.`;
                }
            }

            const aiResponse = {
                role: 'ai',
                content: aiResponseText,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 2000); // 2 second simulated API delay
    };



    const resetSession = () => {
        setMessages([{
            role: 'ai',
            content: "Hello! I'm your AI medical assistant. Please describe your symptoms or upload a medical prescription, and I will help analyze it for you.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setInputValue("");
        setSelectedImage(null);
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const suggestionChips = [
        "I have a headache",
        "Explain this prescription",
        "Muscle pain after gym",
        "Skin rash"
    ];

    const handleChipClick = (text) => {
        setInputValue(text);
    };

    return (
        <>
            <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased min-h-screen flex flex-col">
                <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-3">
                    <div className="mx-auto flex max-w-7xl items-center justify-between">
                        <div className="flex items-center gap-8">
                            <Link to="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined">health_and_safety</span>
                                </div>
                                <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Pocket Doctor</h2>
                            </Link>
                        </div>
                        <nav className="hidden items-center gap-8 lg:flex">
                            <Link className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 transition-colors" to="/dashboard">Dashboard</Link>
                            <span className="text-sm font-bold text-primary border-b-2 border-primary pb-1">AI Assistant</span>
                            <Link className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 transition-colors" to="/emergency-clinic-locator">Clinics</Link>
                        </nav>
                        <HeaderActions />
                    </div>
                </header>

                <main className="mx-auto flex w-full max-w-7xl flex-1 gap-6 p-4 lg:p-6 overflow-hidden">
                    {/* Left Sidebar (History & Analytics) */}
                    <aside className="hidden lg:flex w-80 shrink-0 flex-col gap-6">
                        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <h3 className="font-extrabold text-slate-900 dark:text-white">Medical History</h3>
                                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">history</span>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Your recent health snapshots and reports</p>
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="flex items-center gap-3 rounded-xl bg-primary/10 px-4 py-3 text-primary transition-all cursor-pointer border border-primary/20 hover:bg-primary/20">
                                    <span className="material-symbols-outlined">description</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold">Today's Session</span>
                                        <span className="text-[10px] uppercase tracking-wider font-bold opacity-80 mt-1">Active</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                                    <span className="material-symbols-outlined text-slate-400">inventory_2</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold">Feb 10: Prescriptions</span>
                                        <span className="text-[11px] text-slate-500 mt-1">Analyzed by AI</span>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-4 w-full rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                                View Full Archive
                            </button>
                        </div>

                        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
                            <h3 className="mb-4 font-extrabold text-slate-900 dark:text-white">Current Risk Assessment</h3>
                            <div className="relative flex flex-col items-center">
                                <div className="relative flex h-32 w-full items-center justify-center overflow-hidden">
                                    <svg className="h-48 w-48 -rotate-90 drop-shadow-lg">
                                        <circle className="text-slate-100 dark:text-slate-800" cx="96" cy="96" fill="none" r="80" stroke="currentColor" strokeDasharray="251 502" strokeWidth="12"></circle>
                                        <circle className="text-green-500" cx="96" cy="96" fill="none" r="80" stroke="currentColor" strokeDasharray="60 502" strokeWidth="12" style={{ transition: "stroke-dasharray 1s ease-out" }}></circle>
                                    </svg>
                                    <div className="absolute bottom-6 flex flex-col items-center shadow-sm">
                                        <span className="text-3xl font-black text-slate-900 dark:text-white">Low</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Urgency level</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Chat Area */}
                    <section className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">

                        {/* Chat Header */}
                        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 p-4 lg:px-6 bg-slate-50/50 dark:bg-slate-900/80 backdrop-blur-sm z-10">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary border border-primary/20">
                                        <span className="material-symbols-outlined text-[24px]">psychology</span>
                                    </div>
                                    <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500 dark:border-slate-900 animate-pulse"></div>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-extrabold text-slate-900 dark:text-white">Pocket AI Assistant</h4>
                                    <span className="text-xs text-green-600 dark:text-green-400 font-bold tracking-wide">Gemini API Active</span>
                                </div>
                            </div>
                            <button onClick={resetSession} className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-lg">refresh</span>
                                Reset
                            </button>
                        </div>

                        {/* Messages List */}
                        <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4 lg:p-6 scrollbar-hide bg-slate-50/30 dark:bg-slate-900/30">
                            {messages.map((msg, index) => (
                                msg.role === 'ai' ? (
                                    <div key={index} className="flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                                            <span className="material-symbols-outlined text-lg">smart_toy</span>
                                        </div>
                                        <div className="flex flex-col gap-1 max-w-[85%] sm:max-w-[75%]">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Pocket AI • {msg.timestamp}</span>
                                            <div className="rounded-2xl rounded-tl-none bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200 shadow-sm">
                                                {msg.content}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={index} className="flex flex-row-reverse gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <div className="h-10 w-10 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-primary/20">
                                            <img alt="You" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaOuJ3W5cOUOBPKlmg4Xtg79QLiltogpYMawjKcA5m_Q5Jvuhwj0aVki2OQbzekjRAr6Qq7B6gl3GkzQfsn_9LLGdIKPI7svlk-aRywciUzINdVvSxX-SSXt60PaDh5FDrVXmA5Sn23xrmcnz_qCZom3u1BH4S-8AylbB8wO0Z24szw-P15CIiXuMvcCeQ8SpoDLOgf2yGeKHA8nBOZAP_d2yAQPBbhnJ9VBi2gOjC41ZlhzKGvgEesQgISpCJuw1YSbmi5FssTmo" />
                                        </div>
                                        <div className="flex flex-col gap-1 items-end max-w-[85%] sm:max-w-[75%]">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1 text-right">You • {msg.timestamp}</span>

                                            <div className="flex flex-col items-end gap-2">
                                                {/* Display image if present */}
                                                {msg.image && (
                                                    <div className="rounded-xl overflow-hidden border-2 border-primary/50 shadow-lg max-w-xs sm:max-w-sm">
                                                        <img src={msg.image} alt="Uploaded prescription" className="w-full h-auto object-cover max-h-60" />
                                                    </div>
                                                )}

                                                {/* Only render text bubble if there is text */}
                                                {msg.content && (
                                                    <div className="rounded-2xl rounded-tr-none bg-gradient-to-br from-primary to-blue-600 p-4 text-[15px] leading-relaxed text-white shadow-lg shadow-primary/30">
                                                        {msg.content}
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                )
                            ))}

                            {/* Loading State */}
                            {isTyping && (
                                <div className="flex gap-4 animate-in fade-in">
                                    <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                                        <span className="material-symbols-outlined text-lg">smart_toy</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-center justify-center">
                                        <div className="rounded-2xl rounded-tl-none bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-5 shadow-sm flex space-x-2">
                                            <div className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce"></div>
                                            <div className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce delay-150"></div>
                                            <div className="w-2.5 h-2.5 bg-primary/60 rounded-full animate-bounce delay-300"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={bottomRef} className="h-1" />
                        </div>

                        {/* Input Area */}
                        <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 lg:p-6 z-10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none">

                            {/* Image Preview Area */}
                            {selectedImage && (
                                <div className="mb-4 relative inline-block animate-in fade-in zoom-in duration-200">
                                    <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md h-24 w-auto inline-block bg-slate-100 dark:bg-slate-800">
                                        <img src={selectedImage} alt="To upload" className="h-full w-auto object-contain" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-white text-xs font-bold drop-shadow-md">Attached</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={removeImage}
                                        className="absolute -top-2 -right-2 size-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg border-2 border-white dark:border-slate-900"
                                    >
                                        <span className="material-symbols-outlined text-[14px]">close</span>
                                    </button>
                                </div>
                            )}

                            {/* Chat Input Bar */}
                            <div className="flex items-end gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-2 focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary/50 transition-all shadow-sm">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                />
                                <button
                                    onClick={triggerFileInput}
                                    className="p-3 rounded-xl text-slate-500 hover:text-primary hover:bg-primary/10 transition-colors flex shrink-0 group relative overflow-hidden"
                                    title="Upload Prescription/Image"
                                >
                                    <span className="material-symbols-outlined relative z-10">add_photo_alternate</span>
                                </button>

                                <textarea
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-[15px] py-3 max-h-32 min-h-[44px] resize-none outline-none dark:text-white placeholder:text-slate-400"
                                    placeholder={selectedImage ? "Add context to your prescription..." : "Type your symptoms or ask a health question..."}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage();
                                        }
                                    }}
                                    disabled={isTyping}
                                    rows={1}
                                />

                                <button
                                    onClick={handleSendMessage}
                                    disabled={isTyping || (!inputValue.trim() && !selectedImage)}
                                    className="p-3 shrink-0 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-md shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex"
                                >
                                    <span className="material-symbols-outlined">send</span>
                                </button>
                            </div>

                            {/* Suggestion Chips */}
                            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                {suggestionChips.map((chip, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleChipClick(chip)}
                                        className="shrink-0 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-primary/5 hover:border-primary/30 hover:text-primary dark:hover:text-primary transition-all shadow-sm"
                                    >
                                        {chip}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default AiSymptomCheckerInterface;
