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
        <div className="relative mx-auto" style={{ width: '260px' }}>
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
        { title: "Business & Landing Websites", desc: "Clean websites that explain your business clearly and help customers reach you easily.", icon: Globe, gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0f2027 100%)', glow: 'rgba(59,130,246,0.3)', iconColor: '#60a5fa' },
        { title: "E-Commerce Websites", desc: "Online stores to sell products, manage orders, and accept payments smoothly.", icon: ShoppingCart, gradient: 'linear-gradient(135deg, #3b2f1e 0%, #1a1207 100%)', glow: 'rgba(245,158,11,0.3)', iconColor: '#fbbf24' },
        { title: "Mobile App Development", desc: "Simple and user-friendly mobile apps for customers or internal business use.", icon: Smartphone, gradient: 'linear-gradient(135deg, #1e3a2f 0%, #0a1f15 100%)', glow: 'rgba(16,185,129,0.3)', iconColor: '#34d399' },
        { title: "Custom Business Systems", desc: "Smart systems built for your work to reduce manual effort and save time.", icon: Settings, gradient: 'linear-gradient(135deg, #2d1e4f 0%, #160e29 100%)', glow: 'rgba(139,92,246,0.3)', iconColor: '#a78bfa' },
        { title: "Automation & Process Simplification", desc: "We automate repetitive tasks to improve speed, accuracy, and productivity.", icon: Zap, gradient: 'linear-gradient(135deg, #4a1e2e 0%, #27101a 100%)', glow: 'rgba(244,63,94,0.3)', iconColor: '#fb7185' },
        { title: "System Maintenance & Growth Support", desc: "Ongoing support to keep your systems secure, updated, and ready to grow.", icon: ShieldCheck, gradient: 'linear-gradient(135deg, #1e3a4f 0%, #0c1e2e 100%)', glow: 'rgba(6,182,212,0.3)', iconColor: '#22d3ee' },
    ]

    /* Light-mode overrides for gradient tiles */
    const ser_content_light = [
        { gradient: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)', glow: 'rgba(59,130,246,0.15)', iconColor: '#2563eb' },
        { gradient: 'linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%)', glow: 'rgba(245,158,11,0.15)', iconColor: '#d97706' },
        { gradient: 'linear-gradient(135deg, #d1fae5 0%, #ecfdf5 100%)', glow: 'rgba(16,185,129,0.15)', iconColor: '#059669' },
        { gradient: 'linear-gradient(135deg, #ede9fe 0%, #f5f3ff 100%)', glow: 'rgba(139,92,246,0.15)', iconColor: '#7c3aed' },
        { gradient: 'linear-gradient(135deg, #fce7f3 0%, #fdf2f8 100%)', glow: 'rgba(244,63,94,0.15)', iconColor: '#e11d48' },
        { gradient: 'linear-gradient(135deg, #cffafe 0%, #ecfeff 100%)', glow: 'rgba(6,182,212,0.15)', iconColor: '#0891b2' },
    ]

    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isDark, setIsDark] = useState(false);

    /* Detect theme */
    useEffect(() => {
        const check = () => setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
        check();
        const obs = new MutationObserver(check);
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        return () => obs.disconnect();
    }, []);

    /* Check scroll position */
    const updateScrollButtons = () => {
        const el = scrollContainerRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    };

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (!el) return;
        updateScrollButtons();
        el.addEventListener('scroll', updateScrollButtons, { passive: true });
        window.addEventListener('resize', updateScrollButtons);
        return () => {
            el.removeEventListener('scroll', updateScrollButtons);
            window.removeEventListener('resize', updateScrollButtons);
        };
    }, []);

    const scroll = (dir) => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const cardWidth = el.querySelector('.srv-carousel-tile')?.offsetWidth || 300;
        el.scrollBy({ left: dir * (cardWidth + 20), behavior: 'smooth' });
    };

    const [headerRef, headerVisible] = useScrollReveal(0.2);

    const [carouselRef, carouselVisible] = useScrollReveal(0.1);
    const [card1Ref, card1Visible] = useScrollReveal(0.1);
    const [card2Ref, card2Visible] = useScrollReveal(0.1);

    return (
        <>
            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
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
                @keyframes ringShake {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-12deg); }
                    75% { transform: rotate(12deg); }
                }
                @keyframes ringPulse {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.8); opacity: 0; }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
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

                /* ── Horizontal Scroll Carousel ── */
                .srv-carousel-wrap {
                    position: relative;
                    width: 100%;
                }
                .srv-carousel {
                    display: flex;
                    gap: 20px;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    scroll-behavior: smooth;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                    padding: 12px 0 24px;
                }
                .srv-carousel::-webkit-scrollbar { display: none; }

                .srv-carousel-tile {
                    flex: 0 0 300px;
                    min-height: 320px;
                    scroll-snap-align: start;
                    border-radius: 24px;
                    padding: 32px 28px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    cursor: default;
                    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s cubic-bezier(0.16,1,0.3,1);
                }
                .srv-carousel-tile:hover {
                    transform: translateY(-8px) scale(1.02);
                }

                /* Icon glow circle */
                .srv-icon-glow {
                    width: 60px;
                    height: 60px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    z-index: 1;
                    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease;
                }
                .srv-carousel-tile:hover .srv-icon-glow {
                    transform: scale(1.1);
                }

                /* Subtle inner glow overlay */
                .srv-carousel-tile::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    opacity: 0.12;
                    transition: opacity 0.5s ease;
                    pointer-events: none;
                    z-index: 0;
                }
                .srv-carousel-tile:hover::before {
                    opacity: 0.22;
                }

                /* Arrow hover hint */
                .srv-tile-arrow {
                    opacity: 0;
                    transform: translateX(-8px);
                    transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
                }
                .srv-carousel-tile:hover .srv-tile-arrow {
                    opacity: 1;
                    transform: translateX(0);
                }

                /* Nav arrows */
                .srv-nav-btn {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid var(--border-color);
                    background: var(--bg-card);
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }
                .srv-nav-btn:hover {
                    border-color: var(--border-hover);
                    color: var(--text-primary);
                    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
                }
                .srv-nav-btn:disabled {
                    opacity: 0.3;
                    cursor: default;
                    pointer-events: none;
                }

                @media (max-width: 640px) {
                    .srv-carousel-tile {
                        flex: 0 0 260px;
                        min-height: 280px;
                        padding: 24px 22px;
                        border-radius: 20px;
                    }
                    .srv-icon-glow {
                        width: 50px;
                        height: 50px;
                        border-radius: 16px;
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

                    {/* ═══ WHATSAPP BUSINESS SECTION ═══ */}
                    <div
                        ref={card2Ref}
                        className={`mt-14 md:mt-20 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28`}
                    >
                        <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 reveal-up ${card2Visible ? 'visible' : ''}`}>
                            {/* Left — Text */}
                            <div className="flex-1 w-full lg:w-auto">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5" style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)' }}>
                                    <MessageCircle className="w-3.5 h-3.5" style={{ color: '#25D366' }} />
                                    <span className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: '#25D366' }}>WhatsApp Business</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                                    Automate Customer<br />Conversations on <span style={{ color: '#25D366' }}>WhatsApp</span>
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm sm:text-[15px] font-light leading-relaxed mt-4 max-w-md">
                                    Let an AI-powered WhatsApp agent handle enquiries, qualify leads, and send instant replies — so you never miss a customer, even after business hours.
                                </p>
                                <div className="mt-6 space-y-3">
                                    {[
                                        { icon: Bot, text: 'Smart auto-replies to customer queries' },
                                        { icon: Users, text: 'Automatic lead capture & qualification' },
                                        { icon: Send, text: 'Broadcast offers to thousands instantly' },
                                        { icon: BarChart3, text: 'Real-time analytics & conversation insights' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 group">
                                            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: 'rgba(37,211,102,0.08)' }}>
                                                <item.icon className="w-3.5 h-3.5" style={{ color: '#25D366' }} />
                                            </div>
                                            <span className="text-[13px] text-[var(--text-secondary)] font-light">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href="/whatsapp-automation" className="shimmer-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold mt-8 transition-all duration-300 hover:gap-3" style={{ background: '#25D366', color: '#fff' }}>
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Right — Phone Mockup with Chat Animation */}
                            <div className="flex-1 w-full lg:w-auto flex justify-center">
                                <PhoneMockup>
                                    <WhatsAppChatPreview isVisible={card2Visible} />
                                </PhoneMockup>
                            </div>
                        </div>
                    </div>

                    {/* ═══ AI CALLING AGENT SECTION ═══ */}
                    <div
                        ref={card1Ref}
                        className={`mt-16 md:mt-24 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28`}
                    >
                        <div className={`flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 reveal-up ${card1Visible ? 'visible' : ''}`}>
                            {/* Left — Phone Mockup with Calling Animation */}
                            <div className="flex-1 w-full lg:w-auto flex justify-center">
                                <PhoneMockup>
                                    <CallingAgentPreview isVisible={card1Visible} />
                                </PhoneMockup>
                            </div>

                            {/* Right — Text */}
                            <div className="flex-1 w-full lg:w-auto">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5" style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.2)' }}>
                                    <Phone className="w-3.5 h-3.5" style={{ color: '#4F46E5' }} />
                                    <span className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: '#4F46E5' }}>AI Calling Agent</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                                    AI-Powered Calling<br />Agent That Never Sleeps
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm sm:text-[15px] font-light leading-relaxed mt-4 max-w-md">
                                    An intelligent voice agent that answers every call, understands customer intent, books appointments, and follows up — all without human intervention.
                                </p>
                                <div className="mt-6 space-y-3">
                                    {[
                                        { icon: Clock, text: '24/7 availability — never miss a call' },
                                        { icon: Bot, text: 'Live transcription & smart responses' },
                                        { icon: Bell, text: 'Automatic appointment scheduling' },
                                        { icon: CheckCircle2, text: 'Instant follow-ups & confirmations' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 group">
                                            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors" style={{ background: 'rgba(79,70,229,0.08)' }}>
                                                <item.icon className="w-3.5 h-3.5" style={{ color: '#4F46E5' }} />
                                            </div>
                                            <span className="text-[13px] text-[var(--text-secondary)] font-light">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href="/ai-calling-agent" className="shimmer-btn inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold mt-8 transition-all duration-300 hover:gap-3" style={{ background: '#4F46E5', color: '#fff' }}>
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ═══ HORIZONTAL SCROLL CAROUSEL — Bento-style gradient tiles ═══ */}
                    <div
                        ref={carouselRef}
                        className={`mt-12 md:mt-16 w-full max-w-7xl mx-auto reveal-up ${carouselVisible ? 'visible' : ''}`}
                    >
                        {/* Header row with nav arrows */}
                        <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 mb-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
                                All Services
                            </h3>
                            <div className="flex items-center gap-2">
                                <button className="srv-nav-btn" onClick={() => scroll(-1)} disabled={!canScrollLeft} aria-label="Scroll left">
                                    <ArrowRight className="w-4 h-4 rotate-180" />
                                </button>
                                <button className="srv-nav-btn" onClick={() => scroll(1)} disabled={!canScrollRight} aria-label="Scroll right">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable track */}
                        <div
                            ref={scrollContainerRef}
                            className="srv-carousel pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-28 pr-4"
                        >
                            {ser_content.map((service, index) => {
                                const Icon = service.icon;
                                const lightOverride = ser_content_light[index];
                                const tileGradient = isDark ? service.gradient : lightOverride.gradient;
                                const tileGlow = isDark ? service.glow : lightOverride.glow;
                                const tileIconColor = isDark ? service.iconColor : lightOverride.iconColor;

                                return (
                                    <div
                                        key={index}
                                        className="srv-carousel-tile"
                                        style={{
                                            background: tileGradient,
                                            boxShadow: `0 8px 32px -8px ${tileGlow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
                                            opacity: carouselVisible ? 1 : 0,
                                            transform: carouselVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                                            transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`,
                                        }}
                                    >
                                        {/* Glow pseudo-bg */}
                                        <div style={{
                                            position: 'absolute', top: '-30%', right: '-30%',
                                            width: '70%', height: '70%', borderRadius: '50%',
                                            background: `radial-gradient(circle, ${tileGlow} 0%, transparent 70%)`,
                                            pointerEvents: 'none', zIndex: 0,
                                        }} />

                                        {/* Icon */}
                                        <div
                                            className="srv-icon-glow"
                                            style={{
                                                background: `rgba(255,255,255,${isDark ? '0.08' : '0.6'})`,
                                                boxShadow: `0 0 24px ${tileGlow}`,
                                            }}
                                        >
                                            <Icon className="w-7 h-7" style={{ color: tileIconColor }} />
                                        </div>

                                        {/* Title */}
                                        <h4
                                            className="text-lg font-bold mt-6 relative z-[1]"
                                            style={{ color: isDark ? '#fff' : '#1a1a1a' }}
                                        >
                                            {service.title}
                                        </h4>

                                        {/* Description */}
                                        <p
                                            className="text-sm font-light leading-relaxed mt-2.5 relative z-[1]"
                                            style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)' }}
                                        >
                                            {service.desc}
                                        </p>



                                    </div>
                                );
                            })}
                            {/* Spacer for last-item padding */}
                            <div style={{ flex: '0 0 20px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services