import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarouselRow from "./components/CarouselRow";
import CategoryGrid from "./components/CategoryGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-black text-white">
      <Navbar />
      <main className="space-y-6 pb-10">
        <Hero />
        <CarouselRow title="Trending Now" />
        <CarouselRow title="Continue Watching" />
        <CategoryGrid />
        <CarouselRow title="New & Noteworthy" />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} StreamX. All rights reserved.
      </footer>
    </div>
  );
}
