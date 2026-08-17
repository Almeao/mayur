import Link from 'next/link';

export default function ServicesGrid() {
  const services = [
    {
      title: "Web Development",
      desc: "Fast, modern websites. HTML/CSS/JS. Deployed on Vercel.",
      icon: "💻"
    },
    {
      title: "Brand Building",
      desc: "LinkedIn strategy, Instagram growth, Substack newsletters.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      desc: "Figma wireframes to pixel-perfect prototypes. Real projects.",
      icon: "🎨",
      href: "/ui-ux-portfolio"
    }
  ];

  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-16 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-4 tracking-tight">
            Services
          </h3>
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl mx-auto">
            What I can do for you and your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const content = (
              <>
                <div className="text-5xl mb-6">{service.icon}</div>
                <h4 className="text-xl font-bold text-[#ffffff] mb-3">{service.title}</h4>
                <p className="text-[#999999] leading-relaxed">{service.desc}</p>
                {'href' in service && service.href && (
                  <span className="inline-block mt-4 text-sm font-semibold text-white group-hover:text-[#ff6b35] transition-colors">
                    View Portfolio →
                  </span>
                )}
              </>
            );

            return 'href' in service && service.href ? (
              <Link
                key={idx}
                href={service.href}
                className="group block glass-card rounded-3xl p-8"
              >
                {content}
              </Link>
            ) : (
              <div key={idx} className="glass-card rounded-3xl p-8">
                {content}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
