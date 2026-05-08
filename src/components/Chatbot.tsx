import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User, Loader2, Minimize2, Maximize2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "model";
  content: string;
}

const SYSTEM_INSTRUCTION = `You are "WebX AI", the official virtual assistant for WebX, a premium web development agency. 
Your tone is professional, sophisticated, and innovative. 
You help visitors understand WebX's services which include:
- Custom Web Development (React, Next.js, etc.)
- E-Commerce Solutions (Shopify, Custom Stores)
- Website Redesign & Optimization
- Brand Identity & UI/UX Design

WebX is lead by Pushpraj Singh Rathore (Founder). 
Our pricing starts at:
- Basic Portfolio: ₹499/year ($6 approx)
- Premium E-Commerce: ₹1,200/year ($15 approx)
- Enterprise Suite: ₹4,999/year ($60 approx)

Keep responses concise but helpful. Encourage visitors to use the Contact form for detailed project inquiries. 
If they ask for contact info, provide the WhatsApp number: +91 7877544386.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hello! I'm WebX AI. How can I help you build your digital presence today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.concat({ role: "user", content: userMessage }).map(m => ({
          role: m.role,
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const reply = response.text || "I apologize, I'm having trouble processing that right now.";
      setMessages(prev => [...prev, { role: "model", content: reply }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: "model", content: "Sorry, I'm having a technical moment. Please try again or contact us directly on WhatsApp!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "64px" : "500px",
              width: "350px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass-dark border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            {/* Chat Header */}
            <div className="bg-purple-600/20 px-6 py-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-none">WebX AI</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/10 rounded-lg text-gray-400 transition-colors"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg text-gray-400 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            {!isMinimized && (
              <>
                <div 
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/20"
                >
                  {messages.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: m.role === "user" ? 10 : -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[85%] flex items-start gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                        <div className={`w-6 h-6 rounded-full flex-shrink-0 mt-1 flex items-center justify-center ${
                          m.role === "user" ? "bg-purple-500/20" : "bg-white/10"
                        }`}>
                          {m.role === "user" ? <User size={12} className="text-purple-400" /> : <Bot size={12} className="text-white/60" />}
                        </div>
                        <div className={`p-3 rounded-2xl text-sm ${
                          m.role === "user" 
                            ? "bg-purple-600 text-white rounded-tr-none" 
                            : "glass-dark border border-white/5 text-gray-200 rounded-tl-none"
                        }`}>
                          <div className="markdown-body prose prose-invert prose-xs max-w-none">
                            <ReactMarkdown>{m.content}</ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                          <Bot size={12} className="text-white/60" />
                        </div>
                        <div className="glass-dark border border-white/5 p-3 rounded-2xl rounded-tl-none">
                          <Loader2 size={16} className="text-purple-400 animate-spin" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10 bg-white/5">
                  <form 
                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                    className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-2xl p-1 px-3 focus-within:border-purple-500/50 transition-all"
                  >
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 bg-transparent border-none outline-none text-sm text-white py-2"
                    />
                    <button 
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="w-8 h-8 rounded-xl bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
                    >
                      <Send size={14} />
                    </button>
                  </form>
                  <p className="text-[9px] text-gray-500 text-center mt-3 uppercase tracking-widest">Powered by Gemini AI</p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
          isOpen ? "bg-white text-black rotate-90" : "bg-purple-600 text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#050505] flex items-center justify-center text-[8px] font-bold">1</span>
        )}
      </motion.button>
    </div>
  );
}
