import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Quote, Clock, Users, Building2, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { projects } from '../data/projectData'
import Navbar from '../components/home/Navbar'
import SEO from '../components/SEO'


function ProjectDetail() {
    const { slug } = useParams()
    const project = projects.find(p => p.slug === slug)
    const [showAllScreenshots, setShowAllScreenshots] = useState(false)
    const [zoomedImage, setZoomedImage] = useState(null)

    if (!project) {
        return (
            <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center text-[var(--text-primary)] jakarta">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors underline">← Back to Home</Link>
                </div>
            </div>
        )
    }

    const visibleScreenshots = showAllScreenshots
        ? project.screenshots
        : project.screenshots.slice(0, 3)

    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": project.name,
        "alternativeHeadline": project.shortDesc,
        "creator": {
            "@type": "LocalBusiness",
            "name": "CH Digital Solutions",
            "url": "https://chdigitalsolutions.in"
        },
        "description": project.intro,
        "image": `https://chdigitalsolutions.in${project.coverImage}`,
        "genre": project.category,
        "publisher": {
            "@type": "Organization",
            "name": "CH Digital Solutions",
            "logo": {
                "@type": "ImageObject",
                "url": "https://chdigitalsolutions.in/ch_logo_d.webp"
            }
        }
    };

    return (
        <div className="bg-[var(--bg-primary)] min-h-screen">
            <SEO
                title={`${project.name} Case Study | CH Digital Solutions`}
                description={project.shortDesc}
                keywords={`${project.name}, ${project.category}, portfolio project, custom system development, CH Digital Solutions`}
                canonicalPath={`/project/${project.slug}`}
                ogImage={project.coverImage}
                schema={projectSchema}
            />
            <Navbar />

            {/* Zoom Overlay */}
            {zoomedImage && (
                <div
                    className="fixed inset-0 bg-[var(--zoom-overlay)] z-50 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setZoomedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        onClick={() => setZoomedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img loading="lazy"
                        src={zoomedImage}
                        className="max-w-full max-h-[90vh] object-contain rounded-xl"
                        alt="Screenshot preview"
                    />
                </div>
            )}

            {/* Back Button */}
            <div className="pt-20 md:pt-32 px-5 sm:px-8 md:px-16 lg:px-20 xl:px-28 max-w-6xl mx-auto">
                <Link to="/#work" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] text-sm inter transition-colors mb-6 md:mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                </Link>
            </div>

            {/* Hero Section */}
            <div className="px-5 sm:px-8 md:px-16 lg:px-20 xl:px-28 max-w-6xl mx-auto pb-8 md:pb-14">
                {/* Mobile Project Image */}
                <div className="lg:hidden mb-6">
                    <div className="w-full h-48 sm:h-56 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden">
                        <img loading="lazy"
                            src={project.projectDetailImage}
                            className="w-full h-full object-cover"
                            alt={`${project.name}`}
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-stretch gap-8">

                    {/* Left: Project Image (Desktop Only) */}
                    <div className="hidden lg:flex shrink-0 self-stretch">
                        <div className="w-56 xl:w-100 xl:h-81 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden flex items-center justify-center">
                            <img loading="lazy"
                                src={project.projectDetailImage}
                                className="w-full h-full object-cover rounded-2xl"
                                alt={`${project.name} logo`}
                            />
                        </div>
                    </div>

                    {/* Right: Project Info */}
                    <div className="flex-1 lg:ml-12">
                        {/* Category Badge */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-[var(--badge-bg)] text-[var(--badge-text)] text-xs inter font-medium px-3.5 py-1.5 rounded-full border border-[var(--badge-border)]">
                                {project.category}
                            </span>
                        </div>

                        {/* Project Name */}
                        <h1 className="text-[var(--text-primary)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold jakarta leading-tight">
                            {project.name}
                        </h1>

                        {/* Meta Info Row */}
                        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 mt-5 md:mt-8">
                            <div className="flex items-center gap-2.5">
                                <Building2 className="w-4 h-4 text-[var(--text-muted)]" />
                                <div>
                                    <div className="text-[11px] inter text-[var(--text-muted)] uppercase tracking-wider">Client</div>
                                    <div className="text-sm inter text-[var(--text-secondary)]">{project.clientName}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Clock className="w-4 h-4 text-[var(--text-muted)]" />
                                <div>
                                    <div className="text-[11px] inter text-[var(--text-muted)] uppercase tracking-wider">Duration</div>
                                    <div className="text-sm inter text-[var(--text-secondary)]">{project.duration}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Users className="w-4 h-4 text-[var(--text-muted)]" />
                                <div>
                                    <div className="text-[11px] inter text-[var(--text-muted)] uppercase tracking-wider">Team</div>
                                    <div className="text-sm inter text-[var(--text-secondary)]">{project.teamSize}</div>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="text-xs inter text-[var(--tag-text)] bg-[var(--tag-bg)] border border-[var(--tag-border)] px-3 py-1.5 rounded-lg">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* View Live Button */}
                        {!project.hideLink && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex sm:inline-flex items-center justify-center gap-2 mt-6 md:mt-8 bg-[var(--cta-bg)] text-[var(--cta-text)] h-12 sm:h-12 px-7 rounded-xl text-sm inter font-semibold hover:bg-[var(--cta-hover)] transition-all">
                                <ExternalLink className="w-4 h-4" />
                                View Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="bg-[var(--divider-color)] w-full h-[0.5px]"></div>

            {/* Project Intro */}
            <div className="px-5 sm:px-8 md:px-16 lg:px-20 xl:px-28 max-w-6xl mx-auto py-10 md:py-16">
                <h2 className="text-[var(--text-primary)] text-xl sm:text-2xl md:text-3xl font-bold jakarta mb-4 md:mb-5">About the Project</h2>
                <p className="text-[var(--text-secondary)] text-[13px] sm:text-sm md:text-base inter font-light leading-6 sm:leading-7 md:leading-8 max-w-3xl text-justify">
                    {project.intro}
                </p>
            </div>

            {/* Divider */}
            <div className="bg-[var(--divider-color)] w-full h-[0.5px]"></div>

            {/* Screenshots Gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
                <div className="px-5 sm:px-8 md:px-16 lg:px-20 xl:px-28 max-w-6xl mx-auto py-10 md:py-16">
                    <h2 className="text-[var(--text-primary)] text-xl sm:text-2xl md:text-3xl font-bold jakarta mb-5 md:mb-8">Project Overview</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                        {visibleScreenshots.map((img, i) => (
                            <div
                                key={i}
                                className="relative rounded-xl md:rounded-2xl overflow-hidden border border-[var(--border-color)] cursor-pointer group"
                                onClick={() => setZoomedImage(img)}
                            >
                                <img
                                    src={img}
                                    loading="lazy"
                                    className="w-full h-48 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                                    alt={`${project.name} screenshot ${i + 1}`}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                    <span className="text-white text-sm inter font-medium opacity-0 group-hover:opacity-100 transition-opacity">Click to zoom</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show More Button */}
                    {project.screenshots.length > 3 && !showAllScreenshots && (
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={() => setShowAllScreenshots(true)}
                                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm inter border border-[var(--border-color)] hover:border-[var(--border-hover)] px-6 py-2.5 rounded-xl transition-all cursor-pointer"
                            >
                                Show All ({project.screenshots.length - 3} more)
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                    {showAllScreenshots && (
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={() => setShowAllScreenshots(false)}
                                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm inter border border-[var(--border-color)] hover:border-[var(--border-hover)] px-6 py-2.5 rounded-xl transition-all cursor-pointer"
                            >
                                Show Less
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Divider */}
            <div className="bg-[var(--divider-color)] w-full h-[0.5px]"></div>

            {/* Problem & Solution */}
            <div className="px-5 sm:px-8 md:px-16 lg:px-20 xl:px-28 max-w-6xl mx-auto py-10 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                    {/* Problem */}
                    <div>
                        <div className="flex items-center gap-3 mb-4 md:mb-5">
                            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-400"></div>
                            </div>
                            <h3 className="text-[var(--text-primary)] text-base sm:text-lg md:text-xl font-semibold jakarta">The Challenge</h3>
                        </div>
                        <p className="text-[var(--text-muted)] text-[13px] sm:text-sm md:text-[15px] inter font-light leading-6 sm:leading-7 md:leading-8 text-justify">
                            {project.problem}
                        </p>
                    </div>

                    {/* Solution */}
                    <div>
                        <div className="flex items-center gap-3 mb-4 md:mb-5">
                            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-emerald-400"></div>
                            </div>
                            <h3 className="text-[var(--text-primary)] text-base sm:text-lg md:text-xl font-semibold jakarta">Our Solution</h3>
                        </div>
                        <p className="text-[var(--text-muted)] text-[13px] sm:text-sm md:text-[15px] inter font-light leading-6 sm:leading-7 md:leading-8 text-justify">
                            {project.solution}
                        </p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="bg-[var(--divider-color)] w-full h-[0.5px]"></div>

            {/* Client Testimonial */}
            <div className="px-5 sm:px-8 md:px-16 lg:px-20 xl:px-28 max-w-6xl mx-auto py-10 md:py-20 pb-14 md:pb-28">
                <h2 className="text-[var(--text-primary)] text-lg sm:text-2xl md:text-3xl font-bold jakarta mb-2 md:mb-3 text-center">What Our Client Says</h2>
                <p className="text-[var(--text-muted)] text-xs sm:text-sm inter font-light text-center mb-7 md:mb-10">The results speak for themselves</p>

                <div className="relative w-full">
                    {/* Soft glow removed for Notion aesthetic */}

                    {/* Card */}
                    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[var(--testi-card-border)] testimonial-card-bg">

                        {/* Subtle top gradient accent line */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] testi-accent-line"></div>

                        <div className="p-5 sm:p-10 md:p-12">
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">

                                {/* Left: Large Classic Quote Icon */}
                                <div className="shrink-0 pt-0 sm:pt-1">
                                    <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center quote-icon-bg">
                                        <Quote className="w-5 h-5 sm:w-8 sm:h-8 text-[var(--testi-quote-icon)]" />
                                    </div>
                                </div>

                                {/* Right: Content */}
                                <div className="flex-1">
                                    {/* Quote Text */}
                                    <p className="text-[var(--text-secondary)] text-[13px] sm:text-lg md:text-xl inter font-light leading-6 sm:leading-8 md:leading-9 italic text-justify">
                                        {project.testimonial.quote}
                                    </p>

                                    {/* Thin divider */}
                                    <div className="w-12 sm:w-16 h-[1px] testi-divider-line mt-5 sm:mt-8 mb-4 sm:mb-6"></div>

                                    {/* Author Row with Logo */}
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[var(--testi-author-border)] overflow-hidden flex items-center justify-center shrink-0 author-avatar-bg">
                                            <img loading="lazy"
                                                src={project.testimonial.logo}
                                                className="w-full h-full object-cover"
                                                alt={project.testimonial.author}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-[var(--text-primary)] text-xs sm:text-sm font-semibold inter tracking-wide">{project.testimonial.author}</div>
                                            <div className="text-[var(--text-muted)] text-[11px] sm:text-xs inter mt-0.5">{project.testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[var(--footer-bg)] border-t border-[var(--footer-border)]">
                <div className="px-5 sm:px-8 md:px-16 lg:px-20 xl:px-28 max-w-6xl mx-auto py-6 md:py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8">
                            <div className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--text-muted)]" />
                                <span className="text-[var(--text-secondary)] text-xs sm:text-sm inter">9022863917 | 9313108560</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--text-muted)]" />
                                <span className="text-[var(--text-secondary)] text-xs sm:text-sm inter break-all">chdigitalsolutions2025@gmail.com</span>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="text-[var(--text-muted)] text-[10px] sm:text-xs inter mt-1 md:mt-0">
                            © 2025 CH Digital Solutions. All rights reserved.
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetail
