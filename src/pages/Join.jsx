import Navbar from "../components/Navbar";

function Join() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 pb-16 px-4 flex flex-col items-center">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Join the Club
        </h1>
        <p className="text-gray-400 text-sm sm:text-base text-center mb-10">
          Fill in the form below and we'll get back to you.
        </p>

        {/* Glow */}
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 opacity-10 blur-3xl rounded-full top-40 left-1/2 -translate-x-1/2 pointer-events-none" />

        {/* iframe wrapper — responsive */}
        <div className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,100,150,0.1)]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf9FWu5mA-zF7sQIbApKktpD2Ta7FFG9eLKz6AwO6fqc51TjQ/viewform?embedded=true"
            className="w-full border-0"
            style={{ height: "80vh", minHeight: "600px" }}
            title="Join the Fine Arts Club"
          >
            Loading…
          </iframe>
        </div>

      </div>
    </div>
  );
}

export default Join;