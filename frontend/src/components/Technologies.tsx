import { useReveal } from "../hooks/useReveal";
import { techCategories } from "../data/tech";
import { SectionEyebrow } from "./About";
import { useState } from "react";

// Flatten all tech categories into a single list
const getAllTechs = () => {
  return techCategories.flatMap((cat) => cat.items);
};

export default function Technologies() {
  const ref = useReveal<HTMLDivElement>();
  const allTechs = getAllTechs();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const handleMouseEnter = (_e: React.MouseEvent, techName: string) => {
    setHoveredTech(techName);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <section
      id="tecnologias"
      className="relative overflow-hidden py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionEyebrow label="Tecnologías" />
        <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 dark:text-ink-50 sm:text-4xl">
          Tecnologías que <span className="text-gradient-gold">utilizo</span>
        </h2>
        <p className="mt-3 max-w-xl font-body text-ink-700/80 dark:text-ink-100/70">
          Herramientas y tecnologías que uso para crear soluciones modernas,
          eficientes y escalables.
        </p>

        <div ref={ref} className="reveal mt-12">
          {/* Hexagon Grid Container - Honeycomb Layout */}
          <div className="flex justify-center">
            <div className="max-w-6xl">
              {/* Top row - 8 hexagons (no gap) */}
              <div className="flex justify-center gap-0">
                {allTechs.slice(0, 8).map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="relative flex flex-col items-center"
                      style={{
                        animationDelay: `${i * 80}ms`,
                      }}
                    >
                      <div
                        className="hex-node flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center text-gold-400 shadow-[0_0_20px_rgba(201,152,46,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,152,46,0.8),0_0_60px_rgba(201,152,46,0.4)] hover:scale-125 border-2 border-gold-400 relative group cursor-pointer"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
                          background: "rgba(10,9,6,0.9)",
                          margin: "-1px",
                        }}
                        onMouseEnter={(e) => handleMouseEnter(e, item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Icon size={40} className="text-gold-400" />
                      </div>

                      {/* Tooltip on hover */}
                      {hoveredTech === item.name && (
                        <div
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg font-body text-sm font-semibold text-ink-950 bg-gradient-to-r from-gold-400 to-gold-500 whitespace-nowrap pointer-events-none z-50 animate-fade-up"
                          style={{
                            boxShadow: "0 4px 20px rgba(201,152,46,0.6)",
                          }}
                        >
                          {item.name}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom row - 7 hexagons (offset right, no gap) */}
              <div className="flex justify-center gap-0 sm:-ml-12 md:-ml-16">
                {allTechs.slice(8, 15).map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="relative flex flex-col items-center"
                      style={{
                        animationDelay: `${(8 + i) * 80}ms`,
                      }}
                    >
                      <div
                        className="hex-node flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center text-gold-400 shadow-[0_0_20px_rgba(201,152,46,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,152,46,0.8),0_0_60px_rgba(201,152,46,0.4)] hover:scale-125 border-2 border-gold-400 relative group cursor-pointer"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
                          background: "rgba(10,9,6,0.9)",
                          margin: "-1px",
                        }}
                        onMouseEnter={(e) => handleMouseEnter(e, item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Icon size={40} className="text-gold-400" />
                      </div>

                      {/* Tooltip on hover - BELOW for bottom row */}
                      {hoveredTech === item.name && (
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-1.5 rounded-lg font-body text-sm font-semibold text-ink-950 bg-gradient-to-r from-gold-400 to-gold-500 whitespace-nowrap pointer-events-none z-50 animate-fade-up"
                          style={{
                            boxShadow: "0 4px 20px rgba(201,152,46,0.6)",
                          }}
                        >
                          {item.name}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
