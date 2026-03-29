import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ ADD THIS

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Join", path: "/join" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="FAC Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            FAC
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-gray-300 hover:text-white transition duration-300 group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>

              {location.pathname === link.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400"></span>
              )}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;