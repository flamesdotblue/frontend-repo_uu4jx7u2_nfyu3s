import { Play, Star } from "lucide-react";

const heroShow = {
  title: "The Quantum Heist",
  description:
    "A rogue physicist assembles a team to pull off the most audacious time-bending heist ever attempted.",
  rating: 4.7,
  age: "U/A 13+",
  genres: ["Sci‑Fi", "Thriller", "Heist"],
  backdrop:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop",
};

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] md:h-[72vh] w-full overflow-hidden rounded-b-3xl">
        <img
          src={heroShow.backdrop}
          alt={heroShow.title}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                  <Star className="h-3.5 w-3.5 text-yellow-400" /> {heroShow.rating}
                </span>
                <span className="text-xs text-white/80">{heroShow.age}</span>
                <span className="text-xs text-white/80">{heroShow.genres.join(" • ")}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-3">
                {heroShow.title}
              </h1>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                {heroShow.description}
              </p>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 font-medium hover:bg-white/90">
                  <Play className="h-5 w-5 fill-black" /> Play
                </button>
                <button className="rounded-full border border-white/20 px-5 py-2.5 text-white hover:bg-white/10">
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
