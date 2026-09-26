import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

/**
 * Wraps children with a magnetic hover effect: once the cursor comes within
 * `padding` px of the element's box, the element eases toward the cursor.
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const withinX = e.clientX >= rect.left - padding && e.clientX <= rect.right + padding;
      const withinY = e.clientY >= rect.top - padding && e.clientY <= rect.bottom + padding;

      if (withinX && withinY) {
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        setIsActive(true);
        setTranslate({ x: distX / strength, y: distY / strength });
      } else {
        setIsActive(false);
        setTranslate({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength]);

  const style: CSSProperties = {
    transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
    transition: isActive ? activeTransition : inactiveTransition,
    willChange: 'transform',
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
