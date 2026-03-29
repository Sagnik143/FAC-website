function TeamCard({ name, role, image }) {
  return (
    <div className="min-w-[250px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-center text-white 
    hover:scale-105 hover:shadow-[0_0_25px_rgba(255,100,200,0.4)] transition duration-300">

      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-pink-400"
        />

        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full blur-xl opacity-30 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400"></div>
      </div>

      <h2 className="mt-4 text-lg font-semibold">{name}</h2>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  );
}

export default TeamCard;