import React, { useEffect, useRef, useState } from 'react'
import { MessageCircle, Bot, Users, Send, BarChart3, CheckCircle2, ArrowRight, Zap, Shield, Clock, MessageSquare, Building2 } from 'lucide-react'
import Navbar from '../components/home/Navbar'
import Contact from '../components/home/Contact'

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

function WhatsAppChatPreview() {
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
    }, [visibleMessages, loopKey]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '520px', fontFamily: 'inherit' }}>
            {/* WhatsApp Header — padded for status bar overlay */}
            <div className="flex items-center gap-2.5 px-3 py-2" style={{ background: '#075E54', paddingTop: '30px' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: '#128C7E', color: '#fff' }}>S</div>
                <div className="flex-1">
                    <div className="text-[12px] font-semibold text-white leading-tight">Say Hi Catering</div>
                    <div className="text-[9px] leading-tight mt-0.5" style={{ color: typing ? '#A8DADC' : 'rgba(255,255,255,0.7)' }}>{typing ? 'typing...' : 'online'}</div>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-medium" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                    <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                </div>
            </div>
            {/* Chat body — fills remaining space */}
            <div className="flex-1 px-2.5 py-2.5 space-y-1.5 overflow-hidden" style={{ background: '#ECE5DD', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'p\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20Z\' fill=\'none\' stroke=\'rgba(0,0,0,0.03)\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'200\' height=\'200\' fill=\'url(%23p)\'/%3E%3C/svg%3E")' }}>
                {messages.slice(0, visibleMessages).map((msg, i) => (
                    <div
                        key={`${loopKey}-${i}`}
                        className={`flex ${msg.from === 'them' ? 'justify-end' : 'justify-start'}`}
                        style={{ animation: 'waSlideIn 0.35s cubic-bezier(0.16,1,0.3,1) both' }}
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
                    <div className="flex justify-start" style={{ animation: 'waSlideIn 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
                        <div className="px-3 py-2 rounded-lg rounded-tl-sm" style={{ background: '#FFFFFF', boxShadow: '0 1px 1px rgba(0,0,0,0.08)' }}>
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#999', animation: 'waTypingDot 1.2s infinite 0s' }}></span>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#999', animation: 'waTypingDot 1.2s infinite 0.2s' }}></span>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#999', animation: 'waTypingDot 1.2s infinite 0.4s' }}></span>
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

/* ═══ Phone Mockup Component ═══ */
function PhoneMockup({ children, accentColor = '#25D366' }) {
    return (
        <div className="relative mx-auto" style={{ width: '260px' }}>
            <div className="relative rounded-[40px] overflow-hidden" style={{
                background: '#1a1a1a',
                padding: '4px',
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}>
                <div className="relative rounded-[36px] overflow-hidden" style={{ minHeight: '520px' }}>
                    {children}
                    {/* iOS Status Bar */}
                    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5" style={{ height: '28px', paddingTop: '4px' }}>
                        <span className="text-[9px] font-semibold text-white" style={{ textShadow: '0 0 4px rgba(0,0,0,0.2)' }}>9:41</span>
                        <div className="flex items-center gap-1">
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="white" opacity="0.9"><rect x="0" y="6" width="2.5" height="3" rx="0.5"/><rect x="3.5" y="4" width="2.5" height="5" rx="0.5"/><rect x="7" y="2" width="2.5" height="7" rx="0.5"/><rect x="10.5" y="0" width="2.5" height="9" rx="0.5"/></svg>
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="white" opacity="0.9"><path d="M6 8.5a1 1 0 100-2 1 1 0 000 2z"/><path d="M3.5 5.5a3.5 3.5 0 015 0" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/><path d="M1.5 3.5a6 6 0 019 0" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/></svg>
                            <svg width="18" height="9" viewBox="0 0 18 9" fill="none" opacity="0.9"><rect x="0.5" y="0.5" width="15" height="8" rx="1.5" stroke="white" strokeWidth="0.8"/><rect x="2" y="2" width="12" height="5" rx="0.5" fill="white"/><path d="M16.5 3v3a1.5 1.5 0 000-3z" fill="white" opacity="0.5"/></svg>
                        </div>
                    </div>
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20">
                        <div style={{ width: '76px', height: '20px', borderRadius: '20px', background: '#000' }}></div>
                    </div>
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10">
                        <div style={{ width: '96px', height: '4px', borderRadius: '4px', background: 'rgba(0,0,0,0.2)' }}></div>
                    </div>
                </div>
            </div>
            <div className="absolute -left-[2px] rounded-l-sm" style={{ top: '72px', width: '3px', height: '24px', background: '#1a1a1a' }}></div>
            <div className="absolute -left-[2px] rounded-l-sm" style={{ top: '110px', width: '3px', height: '44px', background: '#1a1a1a' }}></div>
            <div className="absolute -left-[2px] rounded-l-sm" style={{ top: '162px', width: '3px', height: '44px', background: '#1a1a1a' }}></div>
            <div className="absolute -right-[2px] rounded-r-sm" style={{ top: '120px', width: '3px', height: '56px', background: '#1a1a1a' }}></div>
        </div>
    );
}

/* ═══ MAIN PAGE ═══ */
export default function WhatsAppService() {
    const [heroRef, heroVisible] = useScrollReveal(0.1);
    const [featuresRef, featuresVisible] = useScrollReveal(0.1);

    const features = [
        {
            icon: Zap,
            title: 'AI-Powered Auto-Replies',
            desc: 'AI understands queries and responds in ~200ms — in Hindi, English, or Hinglish. If unsure, it hands off to a human agent automatically.',
        },
        {
            icon: MessageSquare,
            title: 'No-Code Chatbot Flows',
            desc: 'Build multi-step conversations with tappable buttons. Customer taps → next step auto-runs. Like a phone tree, but on WhatsApp. No coding needed.',
        },
        {
            icon: Send,
            title: 'Broadcast & Drip Campaigns',
            desc: 'Send personalized messages to thousands at once with names, order IDs, and timings auto-filled. Schedule drip sequences that run on autopilot.',
        },
        {
            icon: Users,
            title: 'Team Inbox & Agent Routing',
            desc: 'Multiple agents handle chats from one dashboard. Smart round-robin assignment, skill-based routing, and agent transfer — no customer falls through.',
        },
        {
            icon: BarChart3,
            title: 'Real-Time Analytics',
            desc: 'Track delivery rates, read rates (blue ticks), contact growth, and campaign performance — all in real-time, not next-day.',
        },
        {
            icon: Building2,
            title: 'Multi-Business Management',
            desc: 'Manage multiple WhatsApp numbers from one login. Each business gets its own contacts, templates, and AI personality.',
        },
    ];

    return (
        <>
            <style>{`
                @keyframes waSlideIn {
                    from { opacity: 0; transform: translateY(10px) scale(0.97); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes waTypingDot {
                    0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
                    30% { opacity: 1; transform: translateY(-2px); }
                }
                @keyframes waFadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .wa-reveal {
                    opacity: 0; transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .wa-reveal.visible { opacity: 1; transform: translateY(0); }
                .wa-shimmer { position: relative; overflow: hidden; }
                .wa-shimmer::after {
                    content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
                    animation: waShimmer 3s infinite;
                }
                @keyframes waShimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>

            <div className="bg-[var(--bg-primary)] min-h-screen jakarta">
                <Navbar />

                {/* Back button */}
                <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 pt-24 md:pt-28">
                    <a href="/#services" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm font-light transition-colors duration-200">
                        <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                        Back to Home
                    </a>
                </div>

                {/* Hero Section */}
                <div ref={heroRef} className={`pt-8 md:pt-12 pb-16 md:pb-24 wa-reveal ${heroVisible ? 'visible' : ''}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            {/* Left — Text */}
                            <div className="flex-1 w-full lg:w-auto">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6" style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.18)' }}>
                                    <MessageCircle className="w-3.5 h-3.5" style={{ color: '#25D366' }} />
                                    <span className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: '#25D366' }}>WhatsApp Business Agent</span>
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-[1.15]">
                                    Automate Customer<br />Conversations on<br /><span style={{ color: '#25D366' }}>WhatsApp</span>
                                </h1>
                                <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light leading-relaxed mt-5 max-w-lg">
                                    The all-in-one WhatsApp Business platform — AI auto-replies, chatbot flows, bulk campaigns, and a team inbox. Set up in minutes, runs 24/7.
                                </p>
                                <div className="mt-7 space-y-3.5">
                                    {[
                                        { icon: Zap, text: 'AI replies in under 200ms — instant, natural responses' },
                                        { icon: MessageSquare, text: 'No-code chatbot flows with interactive buttons & menus' },
                                        { icon: Send, text: 'Broadcast personalized campaigns to thousands at once' },
                                        { icon: Users, text: 'Team inbox — multiple agents, smart assignment, one dashboard' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(37,211,102,0.08)' }}>
                                                <item.icon className="w-4 h-4" style={{ color: '#25D366' }} />
                                            </div>
                                            <span className="text-[14px] text-[var(--text-secondary)] font-light">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 mt-9">
                                    <a href="#contact" className="wa-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:gap-3" style={{ background: '#25D366', color: '#fff' }}>
                                        Get Started <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium transition-all duration-300 border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--border-hover)]">
                                        Book a Demo
                                    </a>
                                </div>
                            </div>

                             {/* Right — Phone Mockup (Hidden on mobile, visible on desktop) */}
                            <div className="hidden lg:flex flex-1 w-full lg:w-auto justify-center">
                                <PhoneMockup accentColor="#25D366">
                                    <WhatsAppChatPreview />
                                </PhoneMockup>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="bg-[var(--bg-secondary)] py-16 md:py-24">
                    <div ref={featuresRef} className={`max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 wa-reveal ${featuresVisible ? 'visible' : ''}`}>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">What We Build for You</h2>
                            <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light mt-3 max-w-xl mx-auto">A complete WhatsApp automation system tailored to your business — from AI conversations to campaign management.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {features.map((feature, i) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={i}
                                        className="p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-hover)] transition-all duration-300 hover:-translate-y-1"
                                        style={{
                                            boxShadow: 'var(--shadow-soft)',
                                            opacity: featuresVisible ? 1 : 0,
                                            transform: featuresVisible ? 'translateY(0)' : 'translateY(20px)',
                                            transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s`,
                                        }}
                                    >
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'rgba(37,211,102,0.08)' }}>
                                            <Icon className="w-5 h-5" style={{ color: '#25D366' }} />
                                        </div>
                                        <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">{feature.title}</h3>
                                        <p className="text-sm font-light text-[var(--text-muted)] leading-relaxed">{feature.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="py-16 md:py-20">
                    <div className="max-w-2xl mx-auto text-center px-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Ready to Automate Your WhatsApp?</h2>
                        <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light mt-3 max-w-md mx-auto">Get started in minutes. Our team will help you set up and customise the AI agent for your business.</p>
                        <a href="#contact" className="wa-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold mt-7 transition-all duration-300 hover:gap-3" style={{ background: '#25D366', color: '#fff' }}>
                            Contact Us <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <section id="contact"><Contact /></section>
            </div>
        </>
    );
}
