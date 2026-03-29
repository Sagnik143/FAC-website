function EventCard({ title, date, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-105 hover:shadow-[0_0_25px_rgba(255,150,100,0.3)] transition duration-300"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  );
}

export default EventCard;