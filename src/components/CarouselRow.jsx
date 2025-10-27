import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sampleItems = [
  {
    id: 1,
    title: "Nebula Nights",
    thumb:
      "https://images.unsplash.com/photo-1527672809634-04ed36500acd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Monsoon Diaries",
    thumb:
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Street Legends",
    thumb:
      "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Echoes of Time",
    thumb:
      "https://images.unsplash.com/photo-1497733942558-e74c87ef89db?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Desert Run",
    thumb:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Crimson Code",
    thumb:
      "https://images.unsplash.com/photo-1503437313881-503a91226402?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Icy Frontier",
    thumb:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Harbor Lights",
    thumb:
      "https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CarouselRow({ title, items = sampleItems }) {
  const scrollerRef = useRef(null);

  const scrollBy = (offset) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-3">
          <h2 className="text-lg md:text-2xl font-semibold text-white">{title}</h2>
          <div className="hidden md:flex gap-2">
            <button
              aria-label="Scroll left"
              onClick={() => scrollBy(-600)}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollBy(600)}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
          >
            {items.map((item) => (
              <article
                key={item.id}
                className="min-w-[58%] sm:min-w-[33%] md:min-w-[24%] lg:min-w-[18%] snap-start"
              >
                <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-white/5">
                  <img
                    src={item.thumb}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition">
                    <h3 className="text-sm font-medium text-white line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
