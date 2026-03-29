import { useState } from "react";
import Navbar from "../components/Navbar";

const events = [
  {
    title: "Art Exhibition",
    date: "March 2026",
    status: "Upcoming",
    image: "https://source.unsplash.com/400x300/?art",
    gallery: [
      "https://source.unsplash.com/600x400/?painting",
      "https://source.unsplash.com/600x400/?gallery",
      "https://source.unsplash.com/600x400/?artwork",
    ],
  },
  {
    title: "Photography Walk",
    date: "Feb 2026",
    status: "Completed",
    image: "https://source.unsplash.com/400x300/?photography",
    gallery: [
      "https://source.unsplash.com/600x400/?camera",
      "https://source.unsplash.com/600x400/?street",
      "https://source.unsplash.com/600x400/?nature",
    ],
  },
  {
    title: "Dance Workshop",
    date: "Jan 2026",
    status: "Completed",
    image: "https://source.unsplash.com/400x300/?dance",
    gallery: [
      "https://source.unsplash.com/600x400/?dance",
      "https://source.unsplash.com/600x400/?performance",
      "https://source.unsplash.com/600x400/?stage",
    ],
  },
  {
    title: "Music Night",
    date: "Dec 2025",
    status: "Completed",
    image: "https://source.unsplash.com/400x300/?music",
    gallery: [
      "https://source.unsplash.com/600x400/?concert",
      "https://source.unsplash.com/600x400/?band",
      "https://source.unsplash.com/600x400/?guitar",
    ],
  },
  {
    title: "Design Competition",
    date: "Nov 2025",
    status: "Completed",
    image: "https://source.unsplash.com/400x300/?design",
    gallery: [
      "https://source.unsplash.com/600x400/?graphic",
      "https://source.unsplash.com/600x400/?ui",
      "https://source.unsplash.com/600x400/?creative",
    ],
  },
  {
    title: "Open Mic",
    date: "Oct 2025",
    status: "Completed",
    image: "https://source.unsplash.com/400x300/?mic",
    gallery: [
      "https://source.unsplash.com/600x400/?mic",
      "https://source.unsplash.com/600x400/?poetry",
      "https://source.unsplash.com/600x400/?stage",
    ],
  },
];

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24">
      <Navbar />

      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
        Our Events
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedEvent(event);
              setCurrentIndex(0);
            }}
            className="cursor-pointer bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition duration-300 hover:shadow-[0_0_20px_rgba(255,120,200,0.3)]"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-400 text-sm">{event.date}</p>

              <span
                className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
                  event.status === "Upcoming"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {event.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl max-w-2xl w-full relative">
            
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-2 right-3 text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">
              {selectedEvent.title}
            </h2>

            {/* SLIDER */}
            <div className="flex flex-col items-center">
              
              <img
                src={selectedEvent.gallery[currentIndex]}
                alt="event"
                className="w-full h-64 object-cover rounded-lg"
              />

              <div className="flex justify-between w-full mt-4">
                
                <button
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === 0
                        ? selectedEvent.gallery.length - 1
                        : prev - 1
                    )
                  }
                  className="px-4 py-2 bg-white/10 rounded hover:bg-white/20"
                >
                  ◀ Prev
                </button>

                <button
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === selectedEvent.gallery.length - 1
                        ? 0
                        : prev + 1
                    )
                  }
                  className="px-4 py-2 bg-white/10 rounded hover:bg-white/20"
                >
                  Next ▶
                </button>

              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Events;