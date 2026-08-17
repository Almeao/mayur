'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Learning Dashboard',
    category: 'Web App',
    desc: 'Course progress tracking, analytics, and student engagement flows.',
    gradient: 'from-[#ff6b35]/30 to-[#022248]/40',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile',
    desc: 'Clean fintech UI with transfers, cards, and spending insights.',
    gradient: 'from-[#5b8def]/25 to-[#022248]/40',
  },
  {
    title: 'SaaS Landing Page',
    category: 'Marketing',
    desc: 'Conversion-focused hero, pricing, and feature sections.',
    gradient: 'from-[#a855f7]/25 to-[#ff6b35]/20',
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile',
    desc: 'Workout logging, progress charts, and habit streaks.',
    gradient: 'from-[#22c55e]/20 to-[#022248]/40',
  },
  {
    title: 'Restaurant Booking UI',
    category: 'Web App',
    desc: 'Table reservations, menu browsing, and checkout flow.',
    gradient: 'from-[#f59e0b]/25 to-[#022248]/40',
  },
  {
    title: 'AI Tool Onboarding',
    category: 'Product',
    desc: 'Step-by-step setup, empty states, and guided first-run experience.',
    gradient: 'from-[#ec4899]/20 to-[#5b8def]/25',
  },
];

export default function UiUxPortfolio() {
  return (
    <section className="bg-[#0d0d0d] py-[120px] lg:py-[140px] px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#999999] hover:text-[#ff6b35] transition-colors mb-8"
          >
            ← Back to Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            UI/UX Portfolio
          </h1>
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl">
            Figma wireframes to pixel-perfect prototypes — real projects across web, mobile, and product design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-3xl overflow-hidden"
            >
              <div className={`h-44 bg-gradient-to-br ${project.gradient}`} />
              <div className="p-8">
                <span className="inline-block text-xs font-bold tracking-widest text-[#ff6b35] uppercase mb-3">
                  {project.category}
                </span>
                <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
                <p className="text-[#999999] leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="mailto:pm941349@gmail.com"
            className="inline-block px-8 py-4 rounded-full pill-cta font-bold tracking-tight"
          >
            Start a UI/UX Project →
          </a>
        </div>
      </div>
    </section>
  );
}
