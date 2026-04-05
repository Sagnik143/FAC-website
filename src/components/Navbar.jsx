import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Join", path: "/join" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="FAC Logo" className="h-9 w-9 object-contain" />
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            FAC
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-gray-300 hover:text-white transition duration-300 group text-sm font-medium"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
              {location.pathname === link.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400" />
              )}
            </Link>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 border-t border-white/10" : "max-h-0"}`}>
        <div className="flex flex-col px-6 py-4 gap-5 bg-black/80 backdrop-blur-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition duration-200 ${
                location.pathname === link.path
                  ? "bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;