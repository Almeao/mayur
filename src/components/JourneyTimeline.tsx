'use client';

import { motion } from 'framer-motion';

export default function JourneyTimeline() {
  const timeline = [
    {
      year: "2024",
      title: "Started with WordPress",
      desc: "My journey began by building and customizing websites using WordPress.",
    },
    {
      year: "2025",
      title: "Entered Frontend Development",
      desc: "Expanded my skills with HTML, CSS, JavaScript, and responsive web design.",
    },
    {
      year: "2026",
      title: "Transitioned into UI/UX Design",
      desc: "Started designing user-focused digital products with modern design principles.",
    },
    {
      year: "2026 – Present",
      title: "UI/UX Designer (3+ Years Experience)",
      desc: "Designing impactful web and mobile experiences with a focus on usability, accessibility, and business goals.",
    },
  ];

  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[800px] mx-auto">
        
        <div className="mb-16 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-4 tracking-tight">
            Timeline
          </h3>
          <p className="text-lg md:text-xl text-[#999999]">
            The journey so far.
          </p>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-[#ff6b35] rounded-full -left-[41px] md:-left-[57px] top-1.5 shadow-[0_0_10px_rgba(255,107,53,0.5)]" />
              
              <span className="inline-block text-sm font-bold tracking-widest text-[#ff6b35] mb-2 uppercase">
                {item.year}
              </span>
              <h4 className="text-2xl font-bold text-[#ffffff] mb-2">
                {item.title}
              </h4>
              <p className="text-[#999999] text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
