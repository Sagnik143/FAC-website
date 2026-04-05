import { useState } from "react";
import Navbar from "../components/Navbar";

const events = [
  {
    title: "AYAAM",
    date: "March 2026",
    status: "Completed",
    image: "/Ayaam/Ayaamlogo.png",
    gallery: [
      "/Ayaam/WhatsApp Image 2026-04-03 at 2.22.30 PM.jpeg",
      "/Ayaam/WhatsApp Image 2026-04-03 at 2.22.31 PM (1).jpeg",
      "/Ayaam/WhatsApp Image 2026-04-03 at 2.22.31 PM (2).jpeg",
      "/Ayaam/WhatsApp Image 2026-04-03 at 2.22.31 PM.jpeg",
      "/Ayaam/WhatsApp Image 2026-04-03 at 6.06.29 PM.jpeg",
    ],
  },
  {
    title: "MOKSHA",
    date: "###",
    status: "Completed",
    image: "/Moskha/Mokshalogo.png",
    gallery: [
      "/Moskha/WhatsApp Image 2026-04-03 at 2.22.18 PM (1).jpeg" ,
      "/Moskha/WhatsApp Image 2026-04-03 at 2.22.18 PM.jpeg" ,
      "/Moskha/WhatsApp Image 2026-04-03 at 2.22.19 PM (1).jpeg" ,
      "/Moskha/WhatsApp Image 2026-04-03 at 2.22.19 PM (2).jpeg" ,
      "/Moskha/WhatsApp Image 2026-04-03 at 2.22.19 PM.jpeg" ,
    ],
  },
  {
    title: "Dandiya Night",
    date: "###",
    status: "Completed",
    image: "/Dandiya/Dandiyalogo.png",
    gallery: [
     
     "/Dandiya/WhatsApp Image 2026-04-03 at 2.21.39 PM (1).jpeg" ,
     "/Dandiya/WhatsApp Image 2026-04-03 at 2.21.39 PM.jpeg" ,
     "/Dandiya/WhatsApp Image 2026-04-03 at 2.21.40 PM (1).jpeg" ,
     "/Dandiya/WhatsApp Image 2026-04-03 at 2.21.40 PM.jpeg" ,
      "/Dandiya/WhatsApp Image 2026-04-03 at 6.06.30 PM.jpeg" ,
      "/Dandiya/WhatsApp Image 2026-04-03 at 6.06.31 PM.jpeg" ,
      "/Dandiya/WhatsApp Image 2026-04-03 at 6.06.32 PM.jpeg" ,
      "/Dandiya/WhatsApp Image 2026-04-03 at 6.06.33 PM.jpeg" ,
      "/Dandiya/WhatsApp Image 2026-04-03 at 6.06.34 PM.jpeg" ,
      "/Dandiya/WhatsApp Image 2026-04-03 at 6.06.35 PM.jpeg"
    ],
  },
  {
    title: "Deepostav",
    date: "###",
    status: "Completed",
    image: "/Deepostav/Ramlogo.png",
    gallery: [
      "/Deepostav/WhatsApp Image 2026-04-03 at 2.30.01 PM (1).jpeg" ,
      "/Deepostav/WhatsApp Image 2026-04-03 at 2.30.01 PM.jpeg" ,
      "/Deepostav/WhatsApp Image 2026-04-03 at 2.31.01 PM.jpeg"
    ],
  },
  {
    title: "Jan Jatiya Gaurav Diwas",
    date: "Nov 2025",
    status: "Completed",
    image: "/gaurav diwas/Gauravlogo.png",
    gallery: [
      "/gaurav diwas/WhatsApp Image 2026-04-03 at 2.22.07 PM.jpeg" ,
      "/gaurav diwas/WhatsApp Image 2026-04-03 at 2.22.08 PM (1).jpeg" ,
      "/gaurav diwas/WhatsApp Image 2026-04-03 at 2.22.08 PM.jpeg" ,
      "/gaurav diwas/WhatsApp Image 2026-04-03 at 2.22.09 PM.jpeg"
    ],
  },
  {
    title: "Club Orientation",
    date: "###",
    status: "Completed",
    image: "/Orientation/kalarambhlogo.png",
    gallery: [
     "/Orientation/WhatsApp Image 2026-04-03 at 6.25.31 PM.jpeg" , 
     "/Orientation/WhatsApp Image 2026-04-03 at 6.25.39 PM.jpeg" ,
     "/Orientation/WhatsApp Image 2026-04-03 at 6.26.02 PM.jpeg" ,
     "/Orientation/WhatsApp Image 2026-04-03 at 6.26.30 PM.jpeg" ,
     "/Orientation/WhatsApp Image 2026-04-03 at 6.26.30 PM.jpeg" ,
      "/Orientation/WhatsApp Image 2026-04-03 at 6.26.37 PM.jpeg"
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
       <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
  
  {/* Glow background */}
  <div className="absolute w-40 h-40 bg-pink-500/10 blur-3xl"></div>

  <img
    src={event.image}
    alt={event.title}
    className="max-h-[75%] max-w-[75%] object-contain opacity-70 transition duration-300 group-hover:opacity-100 group-hover:scale-105"
  />

  {/* Soft overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

</div>

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
              
           <div className="w-full h-[350px] flex items-center justify-center bg-black rounded-lg">
  <img
    src={selectedEvent.gallery[currentIndex]}
    alt="event"
    className="max-h-full max-w-full object-contain"
  />
</div>
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