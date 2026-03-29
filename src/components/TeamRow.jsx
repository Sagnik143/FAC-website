import { useEffect, useRef } from "react";
import TeamCard from "./TeamCard";

function TeamRow({ title, members }) {
  const scrollRef = useRef();

  useEffect(() => {
    const container = scrollRef.current;

    const scroll = () => {
      if (container && container.scrollWidth > container.clientWidth) {
        container.scrollLeft += 1;

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-16">
      
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent text-center">
        {title}
      </h2>

      {/* Center + Scroll container */}
      <div className="flex justify-center">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 max-w-5xl"
        >
          {members.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default TeamRow;