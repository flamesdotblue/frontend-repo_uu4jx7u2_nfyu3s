import { Search, Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
              <span className="text-xl font-semibold tracking-tight text-white">StreamX</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition">Home</a>
              <a href="#" className="hover:text-white transition">Series</a>
              <a href="#" className="hover:text-white transition">Movies</a>
              <a href="#" className="hover:text-white transition">Sports</a>
              <a href="#" className="hover:text-white transition">Disney+</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 focus-within:ring-2 ring-white/30">
              <Search className="h-4 w-4 text-white/70" />
              <input
                placeholder="Search movies, shows and more"
                className="bg-transparent outline-none text-sm text-white placeholder:text-white/60 w-64"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-white/10 text-white">
              <Bell className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline text-sm">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
