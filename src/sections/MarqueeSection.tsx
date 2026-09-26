import { useEffect, useRef, useState } from 'react';
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from '../data/content';

const TILE_W = 420;
const TILE_H = 270;

function tripledRow(images: string[]) {
  return [...images, ...images, ...images];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1 = tripledRow(MARQUEE_ROW_1);
  const row2 = tripledRow(MARQUEE_ROW_2);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1.map((src, i) => (
            <img
              key={`row1-${i}`}
              src={src}
              alt="3D project preview"
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0"
              style={{ width: TILE_W, height: TILE_H }}
            />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2.map((src, i) => (
            <img
              key={`row2-${i}`}
              src={src}
              alt="3D project preview"
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0"
              style={{ width: TILE_W, height: TILE_H }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
