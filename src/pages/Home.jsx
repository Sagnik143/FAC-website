import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { FaPaintBrush } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center px-6 overflow-hidden">

        {/* Background Logo */}
        <img
          src="/logo.png"
          alt="bg logo"
          className="absolute opacity-10 w-[280px] sm:w-[400px] md:w-[550px] lg:w-[650px]
                     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     animate-float pointer-events-none select-none"
        />

        {/* Glow */}
        <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]
                        bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400
                        opacity-10 blur-3xl rounded-full
                        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-5 w-full max-w-3xl mx-auto">

          {/* Heading */}
          <h1 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2
                         text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Righteous] leading-[1.2]">

            <span className="block py-2">
              {Array.from("Fine Arts Club").map((char, index) => (
                <span
                  key={index}
                  className="inline-block bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400
                             bg-clip-text text-transparent"
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

            <FaPaintBrush
              className="text-yellow-400 animate-pulse
                         drop-shadow-[0_0_15px_rgba(255,180,0,0.6)]
                         text-4xl sm:text-5xl md:text-6xl"
            />
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-xl leading-relaxed">
            Where creativity meets expression and passion all in one place.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/events")}
            className="mt-2 px-8 py-3 rounded-full
                       bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400
                       text-black font-semibold text-sm sm:text-base
                       hover:scale-105 hover:shadow-[0_0_20px_rgba(255,120,200,0.6)]
                       active:scale-95 transition-all duration-200"
          >
            Explore Events
          </button>

        </div>
      </div>
    </div>
  );
}

export default Home;