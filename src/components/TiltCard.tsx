import { useRef, useState, type ReactNode, type CSSProperties } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

/**
 * Lightweight 3D tilt: rotates the card around X/Y based on cursor position
 * relative to its center. Kept subtle so it reads as a nod to the "3D"
 * theme rather than a gimmick.
 */
export default function TiltCard({ children, className = '', maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setStyle({
      transform: `perspective(800px) rotateY(${px * maxTilt * 2}deg) rotateX(${-py * maxTilt * 2}deg) translateZ(0)`,
      transition: 'transform 0.15s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(800px) rotateY(0deg) rotateX(0deg)',
      transition: 'transform 0.5s ease-out',
    });
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
