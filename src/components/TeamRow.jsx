import { useEffect, useRef } from "react";
import TeamCard from "./TeamCard";

function TeamRow({ title, members }) {
  const scrollRef = useRef();

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;

    const scroll = () => {
      container.scrollLeft += 1;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Clone enough times so the list is always wider than the container
  const repeated = members.length < 5
    ? [...members, ...members, ...members, ...members]
    : [...members, ...members];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent text-center">
        {title}
      </h2>

      <div className="flex justify-center">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden pb-4 max-w-5xl no-scrollbar"
          style={{ scrollBehavior: "auto" }}
        >
          {repeated.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamRow;