'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Shethani Oil Website',
    badge: 'Live Project',
    desc: 'A premium advertising website for a groundnut oil brand with smooth scrolling, GSAP animations, product storytelling, and responsive layout.',
    url: 'https://shethanioil.com',
  },
  {
    title: 'UI/UX Design Case Studies',
    badge: 'UI/UX Design',
    desc: 'Clean and user-focused app and website screens designed in Figma with proper layout, spacing, wireframes, visual hierarchy, and user flow.',
    url: '#',
  },
  {
    title: 'Mr.PDF App Icon Design',
    badge: 'App Branding',
    desc: 'Unique app icon concepts for a PDF reader and all-files app, focused on Play Store visibility, clean identity, and modern visual style.',
    url: '#',
  },
  {
    title: 'Animated Frontend Website',
    badge: 'Frontend',
    desc: 'A responsive frontend website built with HTML, CSS, JavaScript, GSAP, Lenis, and modern interaction-based animations.',
    url: '#',
  },
  {
    title: 'NeoCrete Concrete E-commerce',
    badge: 'College Project',
    desc: 'A concrete product e-commerce system with product listing, cart, checkout, admin panel, orders, stock management, and feedback system.',
    url: '#',
  },
  {
    title: 'Productivity Dashboard',
    badge: 'Personal Project',
    desc: 'A daily task and productivity management dashboard with timetable, Pomodoro timer, streaks, calendar, and localStorage-based data saving.',
    url: '#',
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 text-center">
          <h3
            className="text-3xl md:text-5xl text-white mb-4"
            style={{ fontWeight: 700, letterSpacing: '-0.03em' }}
          >
            Projects
          </h3>
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl mx-auto">
            Selected work in UI/UX design, frontend development, and digital product creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.url}
              target={project.url === '#' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group block glass-card rounded-3xl p-8"
            >
              <span className="inline-block text-xs font-bold tracking-widest text-[#ff6b35] uppercase mb-4">
                {project.badge}
              </span>

              <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                {project.title}
              </h4>

              <p className="text-[#999999] leading-relaxed mb-6">
                {project.desc}
              </p>

              <span className="text-sm font-semibold text-white group-hover:text-[#ff6b35] transition-colors">
                View Project →
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full pill-cta font-bold tracking-tight"
          >
            Let&apos;s Work Together →
          </a>
        </div>
      </div>
    </section>
  );
}