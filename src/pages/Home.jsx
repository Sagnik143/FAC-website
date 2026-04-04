import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaPaintBrush } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative flex flex-col items-center justify-center h-screen text-center px-4 overflow-hidden">
        {/* Background Logo */}
        <img
          src={logo}
          alt="bg logo"
          className="absolute opacity-10 w-[450px] md:w-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  animate-float pointer-events-none"
        />
        {/* Glow Effect */}
<div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 opacity-10 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        {/* Heading */}
        <h1 className="flex items-center justify-center gap-4 text-5xl md:text-7xl font-[Pacifico]">
          {/* Animated Text */}
          <span>
            {Array.from("Fine Arts Club").map((char, index) => (
              <span
                key={index}
                className="inline-block bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                style={{
                  animation: "fadeInUp 0.5s ease forwards",
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>

          {/* Icon */}
          <FaPaintBrush className="text-yellow-400 text-5xl md:text-6xl animate-pulse drop-shadow-[0_0_15px_rgba(255,180,0,0.6)]" />
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-400 max-w-xl">
          Where creativity meets expression and passion all in one place.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/events")}
          className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,120,200,0.6)] transition"
        >
          Explore Events
        </button>
      </div>
    </div>
  );
}

export default Home;
