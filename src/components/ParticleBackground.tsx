import { useMemo } from 'react';

interface Particle {
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  moveX: number;
  moveY: number;
}

export default function ParticleBackground() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 110 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,

      // Different sizes
      size:
        Math.random() < 0.15
          ? Math.random() * 3 + 3
          : Math.random() * 2 + 1,

      // Different visibility levels
      opacity:
        Math.random() < 0.2
          ? Math.random() * 0.3 + 0.65
          : Math.random() * 0.35 + 0.2,

      // Different movement speeds
      duration: Math.random() * 14 + 10,

      delay: Math.random() * -20,

      // Random movement
      moveX: Math.random() * 120 - 60,
      moveY: Math.random() * 120 - 60,
    }));
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-[#D7E2EA]"
          style={
            {
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,

              animation: `floatParticle ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`,

              '--move-x': `${particle.moveX}px`,
              '--move-y': `${particle.moveY}px`,

              // Gives the larger stars a subtle glow
              boxShadow:
                particle.size > 3
                  ? '0 0 8px rgba(215, 226, 234, 0.7)'
                  : 'none',
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}