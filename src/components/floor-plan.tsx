import type { Plan } from "@/lib/catalog";

const FILL: Record<string, string> = {
  room: "var(--color-foam)",
  wet: "var(--color-sand)",
  kitchen: "var(--color-limewash)",
  deck: "color-mix(in oklab, var(--color-teak) 28%, var(--color-foam))",
};

export function FloorPlan({ plan }: { plan: Plan }) {
  const pad = 2;
  const maxX = Math.max(...plan.rooms.map((r) => r.x + r.w)) + pad;
  const maxY = Math.max(...plan.rooms.map((r) => r.y + r.h)) + pad;
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`-1 -1 ${maxX + 2} ${maxY + 2}`}
        className="h-auto w-full max-h-80"
        role="img"
        aria-label={`${plan.name} floor plan`}
      >
        {plan.rooms.map((r) => (
          <g key={r.id}>
            <rect
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              fill={FILL[r.kind]}
              stroke="var(--color-ink)"
              strokeWidth={0.18}
              rx={0.3}
            />
            {r.w >= 5 && r.h >= 4 ? (
              <text
                x={r.x + r.w / 2}
                y={r.y + r.h / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--color-ink)"
                fontSize={r.w > 10 ? 1.6 : 1.25}
                fontFamily="Outfit, sans-serif"
              >
                {r.label}
              </text>
            ) : null}
          </g>
        ))}
      </svg>
    </div>
  );
}
