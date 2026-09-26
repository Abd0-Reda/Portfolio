import FadeIn from '../components/FadeIn';
import { EXPERIENCE } from '../data/content';
import ParticleBackground from '../components/ParticleBackground';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-10 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <ParticleBackground />
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-3xl mx-auto relative">
        {/* connecting line */}
        <div
          className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px"
          style={{ background: 'rgba(215, 226, 234, 0.2)' }}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-12 sm:gap-14">
          {EXPERIENCE.map((item, i) => (
            <FadeIn key={`${item.role}-${item.period}`} delay={i * 0.1} x={0} y={20}>
              <div className="relative pl-8 sm:pl-10">
                <span
                  className="absolute left-0 top-1.5 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full border-2 border-[#D7E2EA] bg-[#0C0C0C]"
                  aria-hidden="true"
                />
                <span className="text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-widest font-medium">
                  {item.period}
                </span>
                <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl mt-1">
                  {item.role}
                </h3>
                <p className="text-[#D7E2EA]/70 text-sm sm:text-base font-light mt-1 mb-2">
                  {item.place}
                </p>
                <p className="text-[#D7E2EA]/50 font-light leading-relaxed text-sm sm:text-base max-w-xl">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
