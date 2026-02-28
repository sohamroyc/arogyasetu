import React, { useState, useRef, useEffect } from 'react';

const FloatingChatbotProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'ai',
            content: "Hello! I'm your AI health assistant. What's on your mind?",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            role: 'user',
            content: inputValue,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Mock API call
        setTimeout(() => {
            let aiResponseContent = "";

            const lowercaseQuery = userMessage.content.toLowerCase();
            if (lowercaseQuery.includes("headache") || lowercaseQuery.includes("pain")) {
                aiResponseContent = "I understand you're experiencing some pain. While I'm an AI, I recommend getting plenty of rest, staying hydrated, and avoiding screen time. If it persists, please use the 'SOS Emergency' or 'Talk to AI Doctor' feature.";
            } else if (lowercaseQuery.includes("hi") || lowercaseQuery.includes("hello")) {
                aiResponseContent = "Hello! I'm here to help you navigate ArogyaSetu or answer any quick health questions you might have.";
            } else {
                aiResponseContent = `That's an interesting question about "${userMessage.content}". To get a proper medical analysis, I suggest using our AI Symptom Checker from the dashboard.`;
            }

            const aiResponse = {
                role: 'ai',
                content: aiResponseContent,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1200);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            {children}

            {/* Floating Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 sm:w-96 min-h-[400px] max-h-[80vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-[9999] overflow-hidden transition-all duration-300 transform origin-bottom-right">

                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-primary text-white">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                                <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-sm tracking-wide">ArogyaSetu AI</span>
                                <span className="text-[10px] text-primary-100 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span> Online
                                </span>
                            </div>
                        </div>
                        <button onClick={toggleChatbot} className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors">
                            <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto bg-slate-50 dark:bg-slate-900/50 flex flex-col gap-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>

                                    {msg.role === 'ai' && (
                                        <div className="flex-shrink-0 w-8 h-8 bg-white dark:bg-slate-800 text-primary border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                                        </div>
                                    )}

                                    <div className="flex flex-col gap-1">
                                        <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-none shadow-sm'}`}>
                                            {msg.content}
                                        </div>
                                        <span className={`text-[10px] text-slate-400 font-medium px-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                                            {msg.timestamp}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="flex gap-2 max-w-[85%]">
                                    <div className="flex-shrink-0 w-8 h-8 bg-white dark:bg-slate-800 text-primary border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                                    </div>
                                    <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-transparent border-none px-4 py-3 text-sm focus:ring-0 text-slate-800 dark:text-white placeholder:text-slate-400"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim()}
                                className="p-3 text-primary disabled:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
                            >
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </div>
                    </div>

                </div>
            )}

            {/* Floating Action Button */}
            <button
                onClick={toggleChatbot}
                className={`fixed bottom-6 right-6 z-[9990] flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 transform ${isOpen ? 'bg-rose-500 hover:bg-rose-600 rotate-90 scale-90' : 'bg-primary hover:bg-primary/95 hover:scale-105 hover:shadow-primary/30'} text-white`}
            >
                <span className="material-symbols-outlined text-3xl">
                    {isOpen ? 'close' : 'smart_toy'}
                </span>
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
                    </span>
                )}
            </button>

        </>
    );
};

export default FloatingChatbotProvider;
