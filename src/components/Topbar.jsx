import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-teal-800 shadow-sm">
      <div className="max-w-7xl mx-auto md:py-3 flex items-center space-x-5 justify-between">
        
        {/* Logo */}
        <svg width="600" height="180%" viewBox="0 0 1200 180" xmlns="http://www.w3.org/2000/svg">
          <style>{`.hotel-name { font-family: "Didot", "Bodoni MT", "Playfair Display", serif; font-size: 60px; font-weight: 500; letter-spacing: 4px; fill: #b89b5e } .divider { stroke: #9e7b30ff; stroke-width: 5 }`}</style>
          <line x1="170" y1="50" x2="530" y2="50" className="divider"/>
          <text x="350" y="108" textAnchor="middle" className="hotel-name">THE AMANI HOTEL</text>
          <line x1="170" y1="125" x2="530" y2="125" className="divider"/>
        </svg>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-white text-xl font-medium">
          <a href="/" className="hover:text-[#C9A24D]">Home</a>
          <a href="/gallery" className="hover:text-[#C9A24D]">Gallery</a>
          <a href="/contact" className="hover:text-[#C9A24D]">Contact</a>
        </nav>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:inline-block">
          <a href="/contact"
            className="inline-block bg-[#C9A24D] p-2 text-center text-white md:rounded-xl rounded-full transition"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-teal-800 border-t">
          <nav className="flex flex-col items-center space-y-4 px-6 py-6 text-white font-medium">
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>

            <a
              href="/contact"
              className="inline-block bg-[#C9A24D] text-white text-center w-1/4 py-2 rounded-full"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Topbar;
