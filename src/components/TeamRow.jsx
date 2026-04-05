import { useEffect, useRef, useState } from "react";
import TeamCard from "./TeamCard";

function TeamRow({ title, members }) {
  const scrollRef = useRef();
  const animationId = useRef();
  const userScrolling = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const touchStartX = useRef(0);
  const touchScrollLeft = useRef(0);
  const resumeTimeout = useRef();
  const speed = 0.5; // ← lower = smoother, increase if too slow

  const repeated = members.length < 5
    ? [...members, ...members, ...members, ...members]
    : [...members, ...members];

  const pauseAndResume = () => {
    userScrolling.current = true;
    clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      userScrolling.current = false;
    }, 1500);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let pos = 0;

    const scroll = () => {
      if (!userScrolling.current) {
        pos += speed;
        if (pos >= container.scrollWidth / 2) pos = 0;
        container.scrollLeft = pos;
      }
      animationId.current = requestAnimationFrame(scroll);
    };

    animationId.current = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(animationId.current);
      clearTimeout(resumeTimeout.current);
    };
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.pageX - scrollRef.current.offsetLeft;
    dragScrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    pauseAndResume();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    scrollRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].pageX;
    touchScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    pauseAndResume();
    const walk = (touchStartX.current - e.touches[0].pageX) * 1.5;
    scrollRef.current.scrollLeft = touchScrollLeft.current + walk;
  };

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent text-center">
        {title}
      </h2>

      <div className="flex justify-center">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden pb-4 max-w-5xl no-scrollbar select-none"
          style={{ scrollBehavior: "auto", cursor: "grab", willChange: "scroll-position" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
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