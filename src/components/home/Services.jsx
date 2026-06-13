import React, { useEffect, useRef, useState } from 'react'
import { Globe, ShoppingCart, Smartphone, Settings, Zap, ShieldCheck, Phone, MessageCircle, Bot, BarChart3, Clock, Users, Send, Bell, CheckCircle2, ArrowRight, PhoneIncoming, PhoneOff } from "lucide-react"

/* ───── Scroll reveal hook ───── */
function useScrollReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.unobserve(el); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, isVisible];
}

/* ═══════════════════════════════════════════════════ */
/* ═══ WhatsApp Chat Animation Component ═══════════ */
/* ═══════════════════════════════════════════════════ */
function WhatsAppChatPreview({ isVisible = true }) {
    const [visibleMessages, setVisibleMessages] = useState(0);
    const [typing, setTyping] = useState(false);
    const [loopKey, setLoopKey] = useState(0);

    const messages = [
        { from: 'them', text: 'Hi, I want to know about your catering service for 50 guests.' },
        { from: 'bot', text: 'Hello! Thank you for reaching out. We offer packages starting at ₹500/plate for 50+ guests. Would you like to see our menu?' },
        { from: 'them', text: 'Yes, please send the menu and pricing.' },
        { from: 'bot', text: 'Sure! Here is our menu card 📋 You can also book a free tasting session. Shall I schedule one?' },
        { from: 'them', text: 'That sounds great! Book it for Saturday.' },
        { from: 'bot', text: 'Done ✅ Your tasting session is booked for Saturday at 11 AM. We\'ll send you a reminder!' },
    ];

    useEffect(() => {
        if (!isVisible) return;
        if (visibleMessages >= messages.length) {
            const resetTimer = setTimeout(() => {
                setVisibleMessages(0);
                setTyping(false);
                setLoopKey(k => k + 1);
            }, 4000);
            return () => clearTimeout(resetTimer);
        }
        const isBot = messages[visibleMessages]?.from === 'bot';
        if (isBot) {
            setTyping(true);
            const typingTimer = setTimeout(() => {
                setTyping(false);
                setVisibleMessages(v => v + 1);
            }, 1800);
            return () => clearTimeout(typingTimer);
        } else {
            const timer = setTimeout(() => {
                setVisibleMessages(v => v + 1);
            }, 1200);
            return () => clearTimeout(timer);
        }
    }, [visibleMessages, loopKey, isVisible]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '520px', fontFamily: 'inherit' }}>
            {/* WhatsApp Header — padded for status bar overlay */}
            <div className="flex items-center gap-2.5 px-3 py-2" style={{ background: '#075E54', paddingTop: '30px' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: '#128C7E', color: '#fff' }}>S</div>
                <div className="flex-1">
                    <div className="text-[12px] font-semibold text-white leading-tight">Say Hi Catering</div>
                    <div className="text-[9px] leading-tight mt-0.5" style={{ color: typing ? '#A8DADC' : 'rgba(255,255,255,0.7)' }}>{typing ? 'typing...' : 'online'}</div>
                </div>
            </div>
            {/* Chat body — fills remaining space */}
            <div className="flex-1 px-2.5 py-2.5 space-y-1.5 overflow-hidden" style={{ background: '#ECE5DD', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'p\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20Z\' fill=\'none\' stroke=\'rgba(0,0,0,0.03)\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'200\' height=\'200\' fill=\'url(%23p)\'/%3E%3C/svg%3E")' }}>
                {messages.slice(0, visibleMessages).map((msg, i) => (
                    <div
                        key={`${loopKey}-${i}`}
                        className={`flex ${msg.from === 'them' ? 'justify-end' : 'justify-start'}`}
                        style={{ animation: 'msgSlideIn 0.35s cubic-bezier(0.16,1,0.3,1) both' }}
                    >
                        <div
                            className={`max-w-[82%] px-2.5 py-1.5 text-[10px] leading-snug relative ${msg.from === 'them' ? 'rounded-lg rounded-tr-sm' : 'rounded-lg rounded-tl-sm'}`}
                            style={{
                                background: msg.from === 'them' ? '#DCF8C6' : '#FFFFFF',
                                color: '#303030',
                                boxShadow: '0 1px 1px rgba(0,0,0,0.08)',
                            }}
                        >
                            {msg.text}
                            <span className="text-[7px] float-right mt-1 ml-2" style={{ color: '#999' }}>
                                {msg.from === 'them' ? '✓✓' : ''} {`${10 + i}:${15 + i * 2}`}
                            </span>
                        </div>
                    </div>
                ))}
                {typing && (
                    <div className="flex justify-start" style={{ animation: 'msgSlideIn 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
                        <div className="px-3 py-2 rounded-lg rounded-tl-sm" style={{ background: '#FFFFFF', boxShadow: '0 1px 1px rgba(0,0,0,0.08)' }}>
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#999', animation: 'typingDot 1.2s infinite 0s' }}></span>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#999', animation: 'typingDot 1.2s infinite 0.2s' }}></span>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#999', animation: 'typingDot 1.2s infinite 0.4s' }}></span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Input bar */}
            <div className="flex items-center gap-2 px-2.5 py-2" style={{ background: '#ECE5DD' }}>
                <div className="flex-1 h-8 rounded-full px-3 flex items-center text-[10px] font-light" style={{ background: '#FFFFFF', color: '#999' }}>
                    Type a message...
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#075E54' }}>
                    <Send className="w-3.5 h-3.5 text-white" />
                </div>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════ */
/* ═══ Calling Agent Animation Component ═══════════ */
/* ═══════════════════════════════════════════════════ */
function CallingAgentPreview({ isVisible = true }) {
    const [callState, setCallState] = useState('idle');
    const [callDuration, setCallDuration] = useState(0);
    const [loopKey, setLoopKey] = useState(0);

    useEffect(() => {
        if (!isVisible) return;
        let timer;
        if (callState === 'idle') {
            timer = setTimeout(() => setCallState('ringing'), 1200);
        } else if (callState === 'ringing') {
            timer = setTimeout(() => setCallState('connected'), 3000);
        } else if (callState === 'connected') {
            timer = setTimeout(() => setCallState('ended'), 6000);
        } else if (callState === 'ended') {
            timer = setTimeout(() => {
                setCallState('idle');
                setCallDuration(0);
                setLoopKey(k => k + 1);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [callState, loopKey, isVisible]);

    useEffect(() => {
        if (callState !== 'connected') return;
        const interval = setInterval(() => setCallDuration(d => d + 1), 1000);
        return () => clearInterval(interval);
    }, [callState]);

    const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

    return (
        <div style={{ background: 'linear-gradient(180deg, #1c1c1e 0%, #2c2c2e 50%, #1c1c1e 100%)', minHeight: '520px', position: 'relative', display: 'flex', flexDirection: 'column' }}>

            {/* ── IDLE STATE ── */}
            {callState === 'idle' && (
                <div className="flex-1 flex flex-col items-center justify-center px-4" style={{ animation: 'fadeIn 0.5s ease both' }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(79,70,229,0.15)', border: '2px solid rgba(79,70,229,0.3)' }}>
                        <Bot className="w-7 h-7" style={{ color: '#818cf8' }} />
                    </div>
                    <span className="text-[13px] font-medium text-white/80">AI Agent Ready</span>
                    <span className="text-[10px] text-white/40 mt-1">Waiting for incoming call...</span>
                </div>
            )}

            {/* ── RINGING STATE — iOS Incoming Call ── */}
            {callState === 'ringing' && (
                <div className="flex-1 flex flex-col items-center px-4" style={{ animation: 'fadeIn 0.3s ease both' }}>
                    {/* Caller info */}
                    <div className="flex flex-col items-center mt-12">
                        <div className="relative">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff' }}>
                                CH
                            </div>
                            {/* Pulse rings */}
                            <span className="absolute inset-0 rounded-full" style={{ border: '2px solid rgba(102,126,234,0.4)', animation: 'ringPulse 1.5s ease-in-out infinite' }}></span>
                            <span className="absolute -inset-3 rounded-full" style={{ border: '1px solid rgba(102,126,234,0.2)', animation: 'ringPulse 1.5s ease-in-out 0.4s infinite' }}></span>
                        </div>
                        <span className="text-[16px] font-semibold text-white mt-4">CH Digital Solutions</span>
                        <span className="text-[12px] text-white/50 mt-1">mobile</span>
                    </div>

                    {/* Accept / Decline buttons */}
                    <div className="flex items-center justify-between w-full max-w-[200px] mt-auto mb-10">
                        {/* Decline */}
                        <div className="flex flex-col items-center gap-1.5">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#ff3b30' }}>
                                <PhoneOff className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-[9px] text-white/60">Decline</span>
                        </div>
                        {/* Accept */}
                        <div className="flex flex-col items-center gap-1.5">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#34c759', animation: 'pulse 1.2s ease infinite' }}>
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-[9px] text-white/60">Accept</span>
                        </div>
                    </div>
                </div>
            )}

            {/* ── CONNECTED STATE — Active Call ── */}
            {callState === 'connected' && (
                <div className="flex-1 flex flex-col items-center px-4" style={{ animation: 'fadeIn 0.3s ease both' }}>
                    {/* Timer & caller */}
                    <div className="flex flex-col items-center mt-10">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff' }}>
                            CH
                        </div>
                        <span className="text-[15px] font-semibold text-white mt-3">CH Digital Solutions</span>
                        <span className="text-[12px] mt-1" style={{ color: '#34c759' }}>{formatTime(callDuration)}</span>
                    </div>

                    {/* Call controls grid */}
                    <div className="grid grid-cols-3 gap-x-8 gap-y-4 mt-8">
                        {[
                            { icon: '🔇', label: 'mute' },
                            { icon: '⌨️', label: 'keypad' },
                            { icon: '🔊', label: 'speaker' },
                        ].map((btn, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg" style={{ background: 'rgba(255,255,255,0.08)' }}>
                                    {btn.icon}
                                </div>
                                <span className="text-[8px] text-white/50 capitalize">{btn.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Live transcript banner */}
                    <div className="w-full mt-5 px-3 py-2 rounded-lg" style={{ background: 'rgba(79,70,229,0.12)' }}>
                        <div className="flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#4F46E5', animation: 'pulse 1.5s ease infinite' }}></span>
                            <span className="text-[8px] font-semibold text-white/50 uppercase tracking-wider">AI Transcribing</span>
                        </div>
                        <p className="text-[9px] text-white/70 leading-snug font-light">
                            {callDuration < 2 && '"Good afternoon! How can I help you today?"'}
                            {callDuration >= 2 && callDuration < 4 && '"I need to schedule a consultation..."'}
                            {callDuration >= 4 && '"I have openings on Tuesday and Thursday..."'}
                        </p>
                    </div>

                    {/* End call button */}
                    <div className="mt-auto mb-8">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#ff3b30' }}>
                            <PhoneOff className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>
            )}

            {/* ── ENDED STATE ── */}
            {callState === 'ended' && (
                <div className="flex-1 flex flex-col items-center justify-center px-4" style={{ animation: 'fadeIn 0.3s ease both' }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(255,59,48,0.12)' }}>
                        <PhoneOff className="w-7 h-7" style={{ color: '#ff3b30' }} />
                    </div>
                    <span className="text-[14px] font-medium text-white/80">Call Ended</span>
                    <span className="text-[10px] text-white/40 mt-1">{formatTime(callDuration)} • Transcript saved</span>
                </div>
            )}
        </div>
    );
}



/* ═══════════════════════════════════════════ */
/* ═══ Phone Mockup Component ═══════════════ */
/* ═══════════════════════════════════════════ */
function PhoneMockup({ children }) {
    return (
        <div className="relative mx-auto" style={{ width: '260px', transform: 'scale(0.82)', transformOrigin: 'center center', margin: '-28px 0' }}>
            {/* Phone body */}
            <div className="relative rounded-[40px] overflow-hidden" style={{
                background: '#1a1a1a',
                padding: '4px',
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}>
                {/* Screen — fills the entire frame */}
                <div className="relative rounded-[36px] overflow-hidden" style={{ minHeight: '520px' }}>
                    {children}
                    {/* iOS Status Bar overlay — time left, dynamic island center, icons right */}
                    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5" style={{ height: '28px', paddingTop: '4px' }}>
                        <span className="text-[9px] font-semibold text-white" style={{ textShadow: '0 0 4px rgba(0,0,0,0.2)' }}>9:41</span>
                        <div className="flex items-center gap-1">
                            {/* Signal bars */}
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="white" opacity="0.9"><rect x="0" y="6" width="2.5" height="3" rx="0.5" /><rect x="3.5" y="4" width="2.5" height="5" rx="0.5" /><rect x="7" y="2" width="2.5" height="7" rx="0.5" /><rect x="10.5" y="0" width="2.5" height="9" rx="0.5" /></svg>
                            {/* Wifi */}
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="white" opacity="0.9"><path d="M6 8.5a1 1 0 100-2 1 1 0 000 2z" /><path d="M3.5 5.5a3.5 3.5 0 015 0" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" /><path d="M1.5 3.5a6 6 0 019 0" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" /></svg>
                            {/* Battery */}
                            <svg width="18" height="9" viewBox="0 0 18 9" fill="none" opacity="0.9"><rect x="0.5" y="0.5" width="15" height="8" rx="1.5" stroke="white" strokeWidth="0.8" /><rect x="2" y="2" width="12" height="5" rx="0.5" fill="white" /><path d="M16.5 3v3a1.5 1.5 0 000-3z" fill="white" opacity="0.5" /></svg>
                        </div>
                    </div>
                    {/* Dynamic Island — centered */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20">
                        <div style={{ width: '76px', height: '20px', borderRadius: '20px', background: '#000' }}></div>
                    </div>
                    {/* Home indicator — overlaid at bottom */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10">
                        <div style={{ width: '96px', height: '4px', borderRadius: '4px', background: 'rgba(0,0,0,0.2)' }}></div>
                    </div>
                </div>
            </div>
            {/* Side buttons — left */}
            <div className="absolute -left-[2px] rounded-l-sm" style={{ top: '72px', width: '3px', height: '24px', background: '#1a1a1a' }}></div>
            <div className="absolute -left-[2px] rounded-l-sm" style={{ top: '110px', width: '3px', height: '44px', background: '#1a1a1a' }}></div>
            <div className="absolute -left-[2px] rounded-l-sm" style={{ top: '162px', width: '3px', height: '44px', background: '#1a1a1a' }}></div>
            {/* Side button — right */}
            <div className="absolute -right-[2px] rounded-r-sm" style={{ top: '120px', width: '3px', height: '56px', background: '#1a1a1a' }}></div>
        </div>
    );
}


/* ═══════════════════════════════════════════ */
/* ═══ MAIN SERVICES COMPONENT ═════════════ */
/* ═══════════════════════════════════════════ */
function Services() {
    const ser_content = [
        { title: "Business & Landing Websites", desc: "Clean websites that explain your business clearly and help customers reach you easily.", icon: Globe },
        { title: "E-Commerce Websites", desc: "Online stores to sell products, manage orders, and accept payments smoothly.", icon: ShoppingCart },
        { title: "Mobile App Development", desc: "Simple and user-friendly mobile apps for customers or internal business use.", icon: Smartphone },
        { title: "Custom Business Systems", desc: "Smart systems built for your work to reduce manual effort and save time.", icon: Settings },
        { title: "Automation & Process Simplification", desc: "We automate repetitive tasks to improve speed, accuracy, and productivity.", icon: Zap },
        { title: "System Maintenance & Growth Support", desc: "Ongoing support to keep your systems secure, updated, and ready to grow.", icon: ShieldCheck },
    ]

    const [headerRef, headerVisible] = useScrollReveal(0.2);
    const [card1Ref, card1Visible] = useScrollReveal(0.55);
    const [card2Ref, card2Visible] = useScrollReveal(0.55);
    const [gridRef, gridVisible] = useScrollReveal(0.1);
    const [activeTab, setActiveTab] = useState('whatsapp');
    const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

    useEffect(() => {
        if (isAutoPlayPaused) return;
        const interval = setInterval(() => {
            setActiveTab(prev => prev === 'whatsapp' ? 'calling' : 'whatsapp');
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlayPaused]);

    return (
        <>
            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                @keyframes progressFill {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                @keyframes typingDot {
                    0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
                    30% { opacity: 1; transform: translateY(-2px); }
                }
                @keyframes msgSlideIn {
                    from { opacity: 0; transform: translateY(10px) scale(0.97); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes ringPulse {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.8); opacity: 0; }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
                @keyframes tabFadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .tab-content-active {
                    animation: tabFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
                }
                .reveal-up {
                    opacity: 0; transform: translateY(40px);
                    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-up.visible { opacity: 1; transform: translateY(0); }
                .shimmer-btn { position: relative; overflow: hidden; }
                .shimmer-btn::after {
                    content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
                    animation: shimmer 3s infinite;
                }

                /* ── Service Grid Cards ── */
                .srv-grid-card {
                    border-radius: 20px;
                    padding: 28px 24px;
                    background: var(--bg-card);
                    border: 1px solid var(--border-color);
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, box-shadow 0.3s ease;
                    cursor: default;
                }
                .srv-grid-card:hover {
                    transform: translateY(-4px);
                    border-color: var(--border-hover);
                    box-shadow: var(--shadow-soft);
                }
                .srv-grid-card .srv-card-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--card-icon-bg);
                    color: var(--card-icon-color);
                    transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
                }
                .srv-grid-card:hover .srv-card-icon {
                    transform: scale(1.08);
                }

                @media (max-width: 640px) {
                    .srv-grid-card {
                        padding: 22px 20px;
                        border-radius: 16px;
                    }
                    .srv-grid-card .srv-card-icon {
                        width: 42px;
                        height: 42px;
                        border-radius: 12px;
                    }
                }
            `}</style>

            <div className='flex justify-center'>
                <div className='bg-[var(--bg-primary)] w-full py-10 md:py-16 jakarta'>
                    <div className="bg-[var(--divider-color)] w-full h-[0.1px]"></div>

                    {/* Section Header */}
                    <div
                        ref={headerRef}
                        className={`text-[var(--text-primary)] w-full flex flex-col items-center mt-8 md:mt-12 px-4 reveal-up ${headerVisible ? 'visible' : ''}`}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center">Our Services</h2>
                        <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light text-center leading-relaxed mt-3 max-w-xs sm:max-w-md md:max-w-2xl">
                            Comprehensive solutions covering every aspect of your digital transformation.
                        </p>
                    </div>

                    {/* ═══ DESKTOP ONLY VIEW — BOTH SECTIONS SEPARATE ═══ */}
                    <div className="hidden lg:block">
                        {/* WhatsApp Business Section */}
                        <div
                            ref={card2Ref}
                            className={`mt-10 md:mt-14 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28`}
                        >
                            <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14 reveal-up ${card2Visible ? 'visible' : ''}`}>
                                {/* Left — Text */}
                                <div className="flex-1 w-full lg:w-auto">
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4" style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)' }}>
                                        <MessageCircle className="w-3.5 h-3.5" style={{ color: '#25D366' }} />
                                        <span className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: '#25D366' }}>WhatsApp Business</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                                        Automate Customer<br />Conversations on <span style={{ color: '#25D366' }}>WhatsApp</span>
                                    </h3>
                                    <p className="text-[var(--text-secondary)] text-sm sm:text-[15px] font-light leading-relaxed mt-3 max-w-md">
                                        Let an AI-powered WhatsApp agent handle enquiries, qualify leads, and send instant replies — so you never miss a customer, even after business hours.
                                    </p>
                                    <a href="/whatsapp-automation" aria-label="See more about WhatsApp Automation" className="shimmer-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold mt-6 transition-all duration-300 hover:gap-3" style={{ background: '#25D366', color: '#fff' }}>
                                        See More <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* Right — Phone Mockup */}
                                <div className="hidden lg:flex flex-1 w-full lg:w-auto justify-center">
                                    <PhoneMockup>
                                        <WhatsAppChatPreview isVisible={card2Visible} />
                                    </PhoneMockup>
                                </div>
                            </div>
                        </div>

                        {/* AI Calling Agent Section */}
                        <div
                            ref={card1Ref}
                            className={`mt-12 md:mt-16 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28`}
                        >
                            <div className={`flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-14 reveal-up ${card1Visible ? 'visible' : ''}`}>
                                {/* Left — Phone Mockup */}
                                <div className="hidden lg:flex flex-1 w-full lg:w-auto justify-center">
                                    <PhoneMockup>
                                        <CallingAgentPreview isVisible={card1Visible} />
                                    </PhoneMockup>
                                </div>

                                {/* Right — Text */}
                                <div className="flex-1 w-full lg:w-auto">
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4" style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)' }}>
                                        <Phone className="w-3.5 h-3.5" style={{ color: '#4F46E5' }} />
                                        <span className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: '#4F46E5' }}>AI Calling Agent</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                                        AI-Powered Calling<br />Agent That Never Sleeps
                                    </h3>
                                    <p className="text-[var(--text-secondary)] text-sm sm:text-[15px] font-light leading-relaxed mt-3 max-w-md">
                                        An intelligent voice agent that answers every call, understands customer intent, books appointments, and follows up — all without human intervention.
                                    </p>
                                    <a href="/ai-calling-agent" aria-label="Learn more about AI Calling Agent" className="shimmer-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold mt-6 transition-all duration-300 hover:gap-3" style={{ background: '#4F46E5', color: '#fff' }}>
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ═══ MOBILE / TABLET ONLY VIEW — PREMIUM SWITCHER ═══ */}
                    <div className="block lg:hidden mt-8 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
                        {/* Segmented Switcher */}
                        <div className="flex p-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full mb-6 max-w-md mx-auto relative overflow-hidden">
                            <button
                                onClick={() => { setActiveTab('whatsapp'); setIsAutoPlayPaused(true); }}
                                className={`flex-1 py-2.5 px-3 rounded-full text-xs font-semibold inter transition-all duration-300 cursor-pointer border relative overflow-hidden ${
                                    activeTab === 'whatsapp'
                                        ? 'bg-[var(--bg-card)] text-[#25D366] border-[var(--border-color)]'
                                        : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                }`}
                            >
                                <span className="relative z-10">WhatsApp Automation</span>
                                {activeTab === 'whatsapp' && !isAutoPlayPaused && (
                                    <div className="absolute bottom-0 left-0 h-[2px] bg-[#25D366] opacity-30 w-full" style={{ animation: 'progressFill 4s linear' }}></div>
                                )}
                            </button>
                            <button
                                onClick={() => { setActiveTab('calling'); setIsAutoPlayPaused(true); }}
                                className={`flex-1 py-2.5 px-3 rounded-full text-xs font-semibold inter transition-all duration-300 cursor-pointer border relative overflow-hidden ${
                                    activeTab === 'calling'
                                        ? 'bg-[var(--bg-card)] text-[#4F46E5] border-[var(--border-color)]'
                                        : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                }`}
                            >
                                <span className="relative z-10">AI Voice Calling</span>
                                {activeTab === 'calling' && !isAutoPlayPaused && (
                                    <div className="absolute bottom-0 left-0 h-[2px] bg-[#4F46E5] opacity-30 w-full" style={{ animation: 'progressFill 4s linear' }}></div>
                                )}
                            </button>
                        </div>

                        {/* Content Card */}
                        <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] min-h-[250px] flex flex-col justify-between">
                            {activeTab === 'whatsapp' ? (
                                <div key="whatsapp" className="tab-content-active">
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4" style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)' }}>
                                        <MessageCircle className="w-3.5 h-3.5" style={{ color: '#25D366' }} />
                                        <span className="text-[10px] font-semibold tracking-wide uppercase" style={{ color: '#25D366' }}>WhatsApp Business</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] leading-tight">
                                        Automate Customer Conversations on WhatsApp
                                    </h3>
                                    <p className="text-[var(--text-secondary)] text-sm font-light leading-relaxed mt-3">
                                        Let an AI-powered WhatsApp agent handle enquiries, qualify leads, and send instant replies — so you never miss a customer, even after business hours.
                                    </p>
                                    <a href="/whatsapp-automation" aria-label="See more about WhatsApp Automation" className="shimmer-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold mt-6 transition-all duration-300 hover:gap-3 w-full justify-center sm:w-auto" style={{ background: '#25D366', color: '#fff' }}>
                                        See More <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            ) : (
                                <div key="calling" className="tab-content-active">
                                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4" style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)' }}>
                                        <Phone className="w-3.5 h-3.5" style={{ color: '#4F46E5' }} />
                                        <span className="text-[10px] font-semibold tracking-wide uppercase" style={{ color: '#4F46E5' }}>AI Calling Agent</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] leading-tight">
                                        AI-Powered Calling Agent That Never Sleeps
                                    </h3>
                                    <p className="text-[var(--text-secondary)] text-sm font-light leading-relaxed mt-3">
                                        An intelligent voice agent that answers every call, understands customer intent, books appointments, and follows up — all without human intervention.
                                    </p>
                                    <a href="/ai-calling-agent" aria-label="Learn more about AI Calling Agent" className="shimmer-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold mt-6 transition-all duration-300 hover:gap-3 w-full justify-center sm:w-auto" style={{ background: '#4F46E5', color: '#fff' }}>
                                        See More <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ═══ SERVICES GRID — Monochrome themed 3×2 ═══ */}
                    <div
                        ref={gridRef}
                        className={`mt-12 md:mt-16 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 reveal-up ${gridVisible ? 'visible' : ''}`}
                    >
                        <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-6">
                            All Services
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                            {ser_content.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className="srv-grid-card"
                                        style={{
                                            opacity: gridVisible ? 1 : 0,
                                            transform: gridVisible ? 'translateY(0)' : 'translateY(24px)',
                                            transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
                                        }}
                                    >
                                        <div className="srv-card-icon">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-[15px] sm:text-base font-semibold text-[var(--text-primary)] mt-4">
                                            {service.title}
                                        </h4>
                                        <p className="text-[13px] font-light leading-relaxed text-[var(--text-secondary)] mt-1.5">
                                            {service.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services