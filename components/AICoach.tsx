import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { generateHypeMessage } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AICoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "YO! Welcome to UIN Salatiga! 🏀 I'm Coach Neon! Need some hype? Need rules? Ask me anything!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const hypeResponse = await generateHypeMessage(userText);
    
    setMessages(prev => [...prev, { role: 'model', text: hypeResponse }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } bg-poster-pink text-white hover:bg-white hover:text-poster-pink border-4 border-white`}
      >
        <MessageSquare size={28} fill="currentColor" />
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right flex flex-col ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-poster-pink to-purple-600 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-full">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Coach Neon</h3>
              <p className="text-xs opacity-80">Powered by Gemini</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm font-medium ${
                  msg.role === 'user' 
                    ? 'bg-poster-orange text-white rounded-br-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
               <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex gap-1">
                 <div className="w-2 h-2 bg-poster-pink rounded-full animate-bounce"></div>
                 <div className="w-2 h-2 bg-poster-pink rounded-full animate-bounce delay-75"></div>
                 <div className="w-2 h-2 bg-poster-pink rounded-full animate-bounce delay-150"></div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask for motivation..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-poster-pink"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-2 bg-poster-pink text-white rounded-full hover:bg-fuchsia-600 transition disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
};