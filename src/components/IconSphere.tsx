import { useEffect, useMemo, useRef } from 'react';
import type { IconType } from 'react-icons';

export interface SphereTool {
  label: string;
  Icon?: IconType;
  abbr?: string;
}

interface IconSphereProps {
  tools: SphereTool[];
  size?: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Edge {
  a: number;
  b: number;
}

/** Evenly distributes `count` points on a unit sphere. */
function fibonacciSphere(count: number): Point3D[] {
  const points: Point3D[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push({
      x: Math.cos(theta) * radiusAtY,
      y,
      z: Math.sin(theta) * radiusAtY,
    });
  }
  return points;
}

function distance(a: Point3D, b: Point3D) {
  return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
}

/** Connects each point to its two nearest neighbours, deduped. */
function nearestNeighbourEdges(points: Point3D[], neighbours = 2): Edge[] {
  const edgeSet = new Set<string>();
  const edges: Edge[] = [];

  points.forEach((p, i) => {
    const distances = points
      .map((q, j) => ({ j, d: i === j ? Infinity : distance(p, q) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, neighbours);

    distances.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push({ a: i, b: j });
      }
    });
  });

  return edges;
}

const TILT = 0.32; // fixed viewing tilt, radians
const ROTATION_SPEED = 0.0022; // radians per ms-scaled frame

export default function IconSphere({ tools, size = 440 }: IconSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const angleRef = useRef(0);

  const points = useMemo(() => fibonacciSphere(tools.length), [tools.length]);
  const edges = useMemo(() => nearestNeighbourEdges(points, 2), [points]);
  const badgeSize = Math.round((size / 440) * 56);
  const iconSize = Math.round((size / 440) * 22);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const radius = size * 0.36;
    const focal = radius * 2.4;
    const center = size / 2;

    let raf = 0;

    const render = (angle: number) => {
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const cosT = Math.cos(TILT);
      const sinT = Math.sin(TILT);

      const projected = points.map((p) => {
        // rotate around Y
        const x1 = p.x * cosA + p.z * sinA;
        const z1 = -p.x * sinA + p.z * cosA;
        const y1 = p.y;

        // fixed tilt around X for viewing angle
        const y2 = y1 * cosT - z1 * sinT;
        const z2 = y1 * sinT + z1 * cosT;
        const x2 = x1;

        const scale = focal / (focal + z2 * radius);
        return {
          sx: center + x2 * radius * scale,
          sy: center + y2 * radius * scale,
          scale,
          z: z2,
        };
      });

      projected.forEach((pt, i) => {
        const node = nodeRefs.current[i];
        if (!node) return;
        const opacity = 0.4 + ((pt.z + 1) / 2) * 0.6;
        const nodeScale = 0.65 + ((pt.z + 1) / 2) * 0.55;
        node.style.transform = `translate3d(${pt.sx}px, ${pt.sy}px, 0) translate(-50%, -50%) scale(${nodeScale})`;
        node.style.opacity = String(opacity);
        node.style.zIndex = String(Math.round((pt.z + 1) * 100));
      });

      edges.forEach((edge, i) => {
        const line = lineRefs.current[i];
        if (!line) return;
        const p1 = projected[edge.a];
        const p2 = projected[edge.b];
        const avgZ = (p1.z + p2.z) / 2;
        line.setAttribute('x1', String(p1.sx));
        line.setAttribute('y1', String(p1.sy));
        line.setAttribute('x2', String(p2.sx));
        line.setAttribute('y2', String(p2.sy));
        line.setAttribute('opacity', String(0.08 + ((avgZ + 1) / 2) * 0.22));
      });
    };

    if (reduceMotion) {
      render(0.6);
      return;
    }

    const tick = () => {
      angleRef.current += ROTATION_SPEED;
      render(angleRef.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [points, edges, size]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 overflow-visible"
        width={size}
        height={size}
        style={{ pointerEvents: 'none' }}
      >
        {edges.map((edge, i) => (
          <line
            key={`${edge.a}-${edge.b}`}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            stroke="#D7E2EA"
            strokeWidth={1}
          />
        ))}
      </svg>

      {tools.map((tool, i) => {
        const Icon = tool.Icon;
        return (
          <div
            key={tool.label}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
            title={tool.label}
            className="absolute top-0 left-0 flex items-center justify-center rounded-full border border-[#D7E2EA]/40 bg-[#0C0C0C] text-[#D7E2EA]"
            style={{ width: badgeSize, height: badgeSize, willChange: 'transform, opacity' }}
          >
            {Icon ? (
              <Icon size={iconSize} />
            ) : (
              <span className="font-semibold tracking-wide" style={{ fontSize: iconSize * 0.5 }}>
                {tool.abbr}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
