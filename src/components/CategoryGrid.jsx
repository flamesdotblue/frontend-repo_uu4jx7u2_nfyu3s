const categories = [
  {
    id: "series",
    name: "Series",
    gradient: "from-fuchsia-500/60 via-pink-500/40 to-rose-500/30",
    image:
      "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "movies",
    name: "Movies",
    gradient: "from-sky-500/60 via-cyan-500/40 to-teal-500/30",
    image:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "sports",
    name: "Sports",
    gradient: "from-amber-500/60 via-orange-500/40 to-red-500/30",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "kids",
    name: "Kids",
    gradient: "from-violet-500/60 via-indigo-500/40 to-blue-500/30",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg md:text-2xl font-semibold text-white mb-4">Browse by category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#"
              className="group relative aspect-[16/10] overflow-hidden rounded-xl"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`}
                aria-hidden
              />
              <div className="absolute inset-0 bg-black/20" aria-hidden />
              <span className="absolute left-3 bottom-3 text-white font-semibold tracking-wide">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
