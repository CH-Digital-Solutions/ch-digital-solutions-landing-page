import React, { useEffect, useRef, useState } from 'react'
import { Phone, PhoneIncoming, PhoneOff, Bot, Clock, Bell, CheckCircle2, ArrowRight, Zap, BarChart3, Shield, MicOff, Grid3X3, Volume2 } from 'lucide-react'
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

/* ═══ Calling Agent Animation ═══ */
function CallingAgentPreview() {
    const [callState, setCallState] = useState('idle');
    const [callDuration, setCallDuration] = useState(0);
    const [loopKey, setLoopKey] = useState(0);

    useEffect(() => {
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
    }, [callState, loopKey]);

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
                <div className="flex-1 flex flex-col items-center justify-center px-4" style={{ animation: 'aiFadeIn 0.5s ease both' }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(79,70,229,0.15)', border: '2px solid rgba(79,70,229,0.3)' }}>
                        <Bot className="w-7 h-7" style={{ color: '#818cf8' }} />
                    </div>
                    <span className="text-[13px] font-medium text-white/80">AI Agent Ready</span>
                    <span className="text-[10px] text-white/40 mt-1">Waiting for incoming call...</span>
                </div>
            )}

            {/* ── RINGING STATE — iOS Incoming Call ── */}
            {callState === 'ringing' && (
                <div className="flex-1 flex flex-col items-center px-4" style={{ animation: 'aiFadeIn 0.3s ease both' }}>
                    <div className="flex flex-col items-center mt-12">
                        <div className="relative">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff' }}>
                                CH
                            </div>
                            <span className="absolute inset-0 rounded-full" style={{ border: '2px solid rgba(102,126,234,0.4)', animation: 'aiRingPulse 1.5s ease-in-out infinite' }}></span>
                            <span className="absolute -inset-3 rounded-full" style={{ border: '1px solid rgba(102,126,234,0.2)', animation: 'aiRingPulse 1.5s ease-in-out 0.4s infinite' }}></span>
                        </div>
                        <span className="text-[16px] font-semibold text-white mt-4">CH Digital Solutions</span>
                        <span className="text-[12px] text-white/50 mt-1">mobile</span>
                    </div>

                    <div className="flex items-center justify-between w-full max-w-[200px] mt-auto mb-10">
                        <div className="flex flex-col items-center gap-1.5">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#ff3b30' }}>
                                <PhoneOff className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-[9px] text-white/60">Decline</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5">
                            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#34c759', animation: 'aiPulse 1.2s ease infinite' }}>
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-[9px] text-white/60">Accept</span>
                        </div>
                    </div>
                </div>
            )}

            {/* ── CONNECTED STATE — Active Call ── */}
            {callState === 'connected' && (
                <div className="flex-1 flex flex-col items-center px-4" style={{ animation: 'aiFadeIn 0.3s ease both' }}>
                    <div className="flex flex-col items-center mt-10">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff' }}>
                            CH
                        </div>
                        <span className="text-[15px] font-semibold text-white mt-3">CH Digital Solutions</span>
                        <span className="text-[12px] mt-1" style={{ color: '#34c759' }}>{formatTime(callDuration)}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-x-8 gap-y-4 mt-8">
                        {[
                            { icon: MicOff, label: 'mute' },
                            { icon: Grid3X3, label: 'keypad' },
                            { icon: Volume2, label: 'speaker' },
                        ].map((btn, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)' }}>
                                    <btn.icon className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-[8px] text-white/50 capitalize">{btn.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="w-full mt-5 px-3 py-2 rounded-lg" style={{ background: 'rgba(79,70,229,0.12)' }}>
                        <div className="flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#4F46E5', animation: 'aiPulse 1.5s ease infinite' }}></span>
                            <span className="text-[8px] font-semibold text-white/50 uppercase tracking-wider">AI Transcribing</span>
                        </div>
                        <p className="text-[9px] text-white/70 leading-snug font-light">
                            {callDuration < 2 && '"Good afternoon! How can I help you today?"'}
                            {callDuration >= 2 && callDuration < 4 && '"I need to schedule a consultation..."'}
                            {callDuration >= 4 && '"I have openings on Tuesday and Thursday..."'}
                        </p>
                    </div>

                    <div className="mt-auto mb-8">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#ff3b30' }}>
                            <PhoneOff className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>
            )}

            {/* ── ENDED STATE ── */}
            {callState === 'ended' && (
                <div className="flex-1 flex flex-col items-center justify-center px-4" style={{ animation: 'aiFadeIn 0.3s ease both' }}>
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


/* ═══ Phone Mockup Component ═══ */
function PhoneMockup({ children }) {
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
                            <svg width="13" height="9" viewBox="0 0 13 9" fill="white" opacity="0.9"><rect x="0" y="6" width="2.5" height="3" rx="0.5" /><rect x="3.5" y="4" width="2.5" height="5" rx="0.5" /><rect x="7" y="2" width="2.5" height="7" rx="0.5" /><rect x="10.5" y="0" width="2.5" height="9" rx="0.5" /></svg>
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="white" opacity="0.9"><path d="M6 8.5a1 1 0 100-2 1 1 0 000 2z" /><path d="M3.5 5.5a3.5 3.5 0 015 0" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" /><path d="M1.5 3.5a6 6 0 019 0" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" /></svg>
                            <svg width="18" height="9" viewBox="0 0 18 9" fill="none" opacity="0.9"><rect x="0.5" y="0.5" width="15" height="8" rx="1.5" stroke="white" strokeWidth="0.8" /><rect x="2" y="2" width="12" height="5" rx="0.5" fill="white" /><path d="M16.5 3v3a1.5 1.5 0 000-3z" fill="white" opacity="0.5" /></svg>
                        </div>
                    </div>
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20">
                        <div style={{ width: '76px', height: '20px', borderRadius: '20px', background: '#000' }}></div>
                    </div>
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-10">
                        <div style={{ width: '96px', height: '4px', borderRadius: '4px', background: 'rgba(255,255,255,0.15)' }}></div>
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
export default function AICallingService() {
    const [heroRef, heroVisible] = useScrollReveal(0.1);
    const [featuresRef, featuresVisible] = useScrollReveal(0.1);

    const features = [
        {
            icon: Clock,
            title: '24/7 Availability',
            desc: 'Never miss a call again. Your AI agent handles calls round the clock, even on holidays.',
        },
        {
            icon: Bot,
            title: 'Live Transcription',
            desc: 'Every call is transcribed in real-time with speaker identification and key point extraction.',
        },
        {
            icon: Bell,
            title: 'Appointment Scheduling',
            desc: 'Automatically books meetings, sends confirmations, and manages your calendar.',
        },
        {
            icon: CheckCircle2,
            title: 'Instant Follow-ups',
            desc: 'Sends WhatsApp or SMS follow-ups after every call with a summary and next steps.',
        },
        {
            icon: Zap,
            title: 'CRM Integration',
            desc: 'Automatically logs call details, updates contact records, and triggers workflows.',
        },
        {
            icon: BarChart3,
            title: 'Call Analytics',
            desc: 'Detailed reporting on call volume, resolution rates, and customer satisfaction scores.',
        },
    ];

    return (
        <>
            <style>{`
                @keyframes aiSlideIn {
                    from { opacity: 0; transform: translateY(10px) scale(0.97); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes aiTypingDot {
                    0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
                    30% { opacity: 1; transform: translateY(-2px); }
                }
                @keyframes aiFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes aiRingShake {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-12deg); }
                    75% { transform: rotate(12deg); }
                }
                @keyframes aiRingPulse {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.8); opacity: 0; }
                }
                @keyframes aiPulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
                .ai-reveal {
                    opacity: 0; transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .ai-reveal.visible { opacity: 1; transform: translateY(0); }
                .ai-shimmer { position: relative; overflow: hidden; }
                .ai-shimmer::after {
                    content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
                    animation: aiShimmer 3s infinite;
                }
                @keyframes aiShimmer {
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
                <div ref={heroRef} className={`pt-8 md:pt-12 pb-16 md:pb-24 ai-reveal ${heroVisible ? 'visible' : ''}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                            {/* Left — Phone Mockup */}
                            <div className="flex-1 w-full lg:w-auto flex justify-center">
                                <PhoneMockup>
                                    <CallingAgentPreview />
                                </PhoneMockup>
                            </div>

                            {/* Right — Text */}
                            <div className="flex-1 w-full lg:w-auto">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6" style={{ background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.18)' }}>
                                    <Phone className="w-3.5 h-3.5" style={{ color: '#4F46E5' }} />
                                    <span className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: '#4F46E5' }}>AI Calling Agent</span>
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-[1.15]">
                                    AI-Powered Calling<br />Agent That Never<br />Sleeps
                                </h1>
                                <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light leading-relaxed mt-5 max-w-lg">
                                    An intelligent voice agent that answers every call, understands customer intent, books appointments, and follows up — all without human intervention.
                                </p>
                                <div className="mt-7 space-y-3.5">
                                    {[
                                        { icon: Clock, text: '24/7 availability — never miss a call' },
                                        { icon: Bot, text: 'Live transcription & smart responses' },
                                        { icon: Bell, text: 'Automatic appointment scheduling' },
                                        { icon: CheckCircle2, text: 'Instant follow-ups & confirmations' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(79,70,229,0.08)' }}>
                                                <item.icon className="w-4 h-4" style={{ color: '#4F46E5' }} />
                                            </div>
                                            <span className="text-[14px] text-[var(--text-secondary)] font-light">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 mt-9">
                                    <a href="#contact" className="ai-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:gap-3" style={{ background: '#4F46E5', color: '#fff' }}>
                                        Get Started <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium transition-all duration-300 border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--border-hover)]">
                                        Book a Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="bg-[var(--bg-secondary)] py-16 md:py-24">
                    <div ref={featuresRef} className={`max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 ai-reveal ${featuresVisible ? 'visible' : ''}`}>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Intelligent Call Handling, End to End</h2>
                            <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light mt-3 max-w-xl mx-auto">Powerful AI capabilities that transform how your business handles phone calls.</p>
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
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'rgba(79,70,229,0.08)' }}>
                                            <Icon className="w-5 h-5" style={{ color: '#4F46E5' }} />
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
                        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">Ready to Let AI Handle Your Calls?</h2>
                        <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light mt-3 max-w-md mx-auto">Get started in minutes. Our team will help you configure and deploy your AI calling agent.</p>
                        <a href="#contact" className="ai-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold mt-7 transition-all duration-300 hover:gap-3" style={{ background: '#4F46E5', color: '#fff' }}>
                            Contact Us <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <section id="contact"><Contact /></section>
            </div>
        </>
    );
}
