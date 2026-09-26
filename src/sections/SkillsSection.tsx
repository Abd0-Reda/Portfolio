import { useEffect, useState } from 'react';
import { Box, Sparkles, PenTool } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import IconSphere from '../components/IconSphere';
import { SKILL_CATEGORIES } from '../data/content';
import { SPHERE_TOOLS } from '../data/sphereTools';
import ParticleBackground from '../components/ParticleBackground';

const CATEGORY_ICONS = [Box, Sparkles, PenTool];

function useSphereSize() {
  const [size, setSize] = useState(520);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;

      if (w < 480) setSize(290);
      else if (w < 640) setSize(340);
      else if (w < 1024) setSize(420);
      else setSize(520);
    };

    compute();

    window.addEventListener('resize', compute);

    return () => window.removeEventListener('resize', compute);
  }, []);

  return size;
}

export default function SkillsSection() {
  const sphereSize = useSphereSize();

  return (
    <section
      id="skills"
      className="relative z-10 overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <ParticleBackground />

      <FadeIn>
        <h2
          className="relative z-10 hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(280px,400px)_1fr] gap-10 lg:gap-16 items-center">

        {/* Left: category cards */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {SKILL_CATEGORIES.map((category, i) => {
            const CategoryIcon =
              CATEGORY_ICONS[i % CATEGORY_ICONS.length];

            return (
              <FadeIn
                key={category.title}
                delay={i * 0.12}
                x={-24}
                y={0}
              >
                <div className="rounded-[24px] sm:rounded-[28px] border border-[#D7E2EA]/20 p-5 sm:p-6 flex flex-col gap-3">

                  <div className="flex items-center gap-3">
                    <CategoryIcon
                      className="text-[#D7E2EA]"
                      size={20}
                      strokeWidth={1.5}
                    />

                    <h3 className="text-[#D7E2EA] font-medium uppercase text-base sm:text-lg">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-[#D7E2EA]/55 font-light leading-relaxed text-sm">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[#D7E2EA]/80 text-xs font-medium tracking-wide rounded-full border border-[#D7E2EA]/20 px-3 py-1"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Right: rotating icon sphere */}
        <FadeIn
          delay={0.2}
          x={24}
          y={0}
          className="flex justify-center"
        >
          <IconSphere
            tools={SPHERE_TOOLS}
            size={sphereSize}
          />
        </FadeIn>

      </div>
    </section>
  );
}