function TeamCard({ name, role, image }) {
  return (
    <div className="flex flex-col items-center min-w-[160px]">

      {/* Lanyard clip */}
      <div className="relative flex flex-col items-center">
        <div className="w-4 h-5 rounded-t-sm bg-gradient-to-b from-gray-300 to-gray-500 shadow-inner" />
        <div className="w-2 h-2 rounded-full border-2 border-gray-400 bg-gray-300 -mt-0.5 z-10" />
      </div>

      {/* Badge card */}
      <div
        className="w-40 bg-white rounded-2xl overflow-hidden shadow-2xl border border-black/10 mt-1
        hover:scale-105 hover:shadow-[0_8px_40px_rgba(0,0,0,0.25)] transition-transform duration-300"
      >

        {/* Badge top bar */}
        <div className="flex justify-between items-center px-2 py-1.5 bg-white">
         

          {/* Barcode */}
          <div className="flex gap-[1.2px] items-end h-3.5">
            {[1, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 2, 1].map((w, i) => (
              <div
                key={i}
                className="bg-white rounded-[0.5px]"
                style={{ width: `${w}px`, height: i % 3 === 0 ? "100%" : "75%" }}
              />
            ))}
          </div>

          <div className="text-right leading-tight">
            <p className="text-[8px] font-extrabold text-red-600 uppercase">Fine</p>
            <p className="text-[8px] font-extrabold text-red-600 uppercase">Arts</p>
            <p className="text-[6.5px] font-semibold text-gray-600 uppercase tracking-wide">Club</p>
          </div>
        </div>

        {/* Photo with gradient bg */}
        <div className="relative w-full h-44 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-pink-400 to-orange-500" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/10" />
          <div className="absolute -top-3 right-2 w-12 h-12 rounded-full bg-white/10" />

          {image ? (
            <img
              src={image}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center text-white text-3xl font-bold">
                {name?.charAt(0)}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-white px-3 pt-2.5 pb-3 text-center">
          <p className="text-gray-900 font-semibold text-[12px] leading-snug tracking-tight">{name}</p>
          <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto my-1.5" />
          <p className="text-gray-400 text-[9px] font-semibold uppercase tracking-widest">{role}</p>
        </div>

      </div>
    </div>
  );
}

export default TeamCard;