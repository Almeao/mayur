'use client';

import { animate, useInView, useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({
  from,
  to,
  suffix,
  label,
  accentClass = 'text-[#ff6b35]',
}: {
  from: number;
  to: number;
  suffix: string;
  label: string;
  accentClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to]);

  return (
    <div ref={ref} className="flex flex-col mb-8">
      <div className="flex items-baseline gap-1">
        <motion.span className={`text-5xl md:text-6xl font-black ${accentClass}`}>
          {rounded}
        </motion.span>
        <span className={`text-4xl md:text-5xl font-black ${accentClass}`}>{suffix}</span>
      </div>
      <span className="text-sm md:text-base font-semibold tracking-wider text-[#999999] uppercase mt-2 text-left">
        {label}
      </span>
    </div>
  );
}

export default function AboutMeSplit() {
  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Stats (40%) */}
        <div className="lg:w-[40%] flex flex-col justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-8">
            <Counter from={0} to={15} suffix="+" label="UI/UX Projects" />
            <Counter from={0} to={10} suffix="+" label="Design Concepts" accentClass="text-[#ff6b35]" />
            <Counter from={0} to={5} suffix="+" label="Tools & Skills" />
            <Counter from={0} to={1} suffix="+" label="Years Learning" />
          </div>
        </div>

        {/* Right Side: Story (60%) */}
        <div className="lg:w-[60%] flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-8 tracking-tight">
            From Curious Learner to UI/UX Designer
          </h3>
          <div className="space-y-6 text-[#999999] text-lg md:text-xl leading-relaxed">
            <p>
              I am a UI/UX designer and frontend freelancer who loves creating clean, meaningful, and user-friendly digital experiences. My journey started with curiosity about how websites and apps work, and slowly it turned into a passion for design, user experience, and visual storytelling.
            </p>
            <p>
              I focus on understanding user needs, creating simple layouts, improving usability, and designing interfaces that feel modern, clear, and easy to use. I have hands-on experience with Figma, wireframes, UI layouts, posters, app icons, website designs, and frontend implementation using HTML, CSS, JavaScript, GSAP, and smooth animations.
            </p>
            <p>
              As a freelancer, my goal is to help brands and businesses build digital products that not only look premium but also solve real user problems. I believe good design is not only about beauty — it is about clarity, purpose, emotion, and making the user journey effortless.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}