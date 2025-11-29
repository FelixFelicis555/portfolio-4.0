/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Code, Sparkles, Briefcase } from 'lucide-react';

const Chatbot = ({ isOpen, setIsOpen }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  return (
    <div className="relative">
      {/* Chatbot Toggle Button */}
      <button
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group overflow-hidden size-11 bg-gradient-to-br from-violet-500 via-violet-600 to-cyan-700 text-white rounded-full shadow-2xl hover:shadow-violet-500/25 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-violet-500/20 transition-all duration-300 ease-out hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150" />
      </button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0, translateY: 16 }}
            animate={{ scale: 1, opacity: 1, translateY: 0 }}
            exit={{ scale: 0.95, opacity: 0, translateY: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 max-w-md h-[70vh] sm:h-[500px] max-h-[600px] bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-4 sm:p-6 bg-gradient-to-r from-violet-900/80 via-violet-900/80 to-cyan-900/80 backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-violet-500 rounded-full flex items-center justify-center">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-violet-500 rounded-full animate-ping opacity-20" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      Pavanesh G
                      <Briefcase className="w-4 h-4 text-violet-300" />
                    </h2>
                    <p className="text-xs text-violet-200/80">Frontend Developer</p>
                  </div>
                </div>
                <button
                  aria-label="Close chat"
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-gray-800/50 text-gray-300 rounded-xl hover:bg-gray-700/50 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              <div className="text-center mt-8 sm:mt-12 space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-violet-500/20 to-violet-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-violet-500/20">
                  <Sparkles className="w-6 h-6 text-violet-400" />
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50">
                  <p className="text-gray-300 font-medium mb-1">
                    👋 Good evening! I'm Pavanesh Guggilapu, a Frontend Developer. How can I help you today?
                  </p>
                  <p className="text-gray-400 text-sm">
                    Ask me about my projects, skills, or anything tech-related!
                  </p>
                </div>
              </div>
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-violet-600 text-white'
                        : 'bg-gray-800/50 text-gray-300'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gray-800/50 backdrop-blur-sm border-t border-gray-700/50">
              <form onSubmit={handleSubmit} className="flex items-end gap-3">
                <div className="flex-1 relative">
                  <input
                    placeholder="Ask me anything..."
                    maxLength={500}
                    className="w-full p-3 pr-12 rounded-2xl bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className="absolute right-3 bottom-3 text-xs text-gray-500">
                    {message.length}/500
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!message.trim()}
                  aria-label="Send message"
                  className="p-3 bg-gradient-to-br from-violet-600 to-violet-600 text-white rounded-2xl hover:from-violet-500 hover:to-violet-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-violet-500/25 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
