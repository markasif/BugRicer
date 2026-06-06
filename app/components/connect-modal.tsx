"use client";

import { useState, useEffect } from "react";
import { User, Mail, ChevronDown, X, Check, MessageSquare, Send } from "lucide-react";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

export default function ConnectModal({ isOpen, onClose, planName }: ConnectModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Lock body scroll when modal is active, restore on unmount/close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[32px] w-full max-w-lg shadow-2xl relative z-10 animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col my-auto overflow-hidden">
        {/* Close Button - Stays fixed on top right of modal box */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 z-20 p-2 rounded-xl bg-gray-150/50 dark:bg-zinc-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
          title="Close Modal"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto p-8 sm:p-10 flex-1 custom-scrollbar">
          {!isSubmitted ? (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                  Let's <span className="text-blue-600">Connect</span>
                </h2>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-full mb-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Interested in: {planName} Plan
                  </span>
                </div>
                <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed">
                  Fill out the form below and our team will get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-zinc-300 ml-1">
                      Full Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-zinc-300 ml-1">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <button
                        type="button"
                        className="h-12 px-3 flex items-center justify-between gap-1.5 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-2xl text-xs font-bold text-gray-700 dark:text-zinc-300 hover:border-blue-500/50 transition-all min-w-[80px]"
                      >
                        <span className="flex items-center gap-1.5">
                          <span className="text-sm">🇮🇳</span>
                          <span>+91</span>
                        </span>
                        <ChevronDown className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      </button>
                    </div>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="flex-1 min-w-0 px-4 py-3.5 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                    />
                  </div>
                </div>

              </div>

              {/* Phone Number */}
              
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-zinc-300 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                    />
                  </div>
                </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-zinc-300 ml-1">
                  Message / Requirements
                  </label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-[18px] h-[18px] text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    <textarea
                      required
                      name="message"
                      rows={3}
                      placeholder="Tell us about your business messaging needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-zinc-500 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-zinc-900 dark:bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-blue-500/10 cursor-pointer mt-4"
                >
               <Send className="w-4.5 h-4.5" /> Submit Request
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center flex flex-col items-center justify-center gap-6 py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 flex items-center justify-center animate-bounce-slow">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  Request Submitted!
                </h3>
                <p className="text-gray-500 dark:text-zinc-400 text-sm max-w-sm leading-relaxed mx-auto">
                  Thank you for your interest. Our technical team has received your request and will get back to you shortly.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-white rounded-2xl font-bold text-sm transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
