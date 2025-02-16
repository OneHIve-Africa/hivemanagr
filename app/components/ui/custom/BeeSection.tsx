import React, { useState, useEffect } from "react";
import beepng from "~/assets/bee.png";

const BeeSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      setIsLoaded(true);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const sectionHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const fadeStart = sectionHeight * 0.6;
  const fadeEnd = sectionHeight;
  const opacity = Math.max(
    1 - (scrollY - fadeStart) / (fadeEnd - fadeStart),
    0
  );
  const translateY = scrollY * 0.3;

  return (
    <div className="uid h-screen w-full bg-oha__yellow relative overflow-hidden">
      <div className="text-white w-full flex flex-col items-center justify-center pt-32 sm:pt-36 gap-6 sm:gap-10 ">
        {/* Pulsating Text */}
        <h1 className="text-5xl sm:text-8xl font-semibold animate-pulse">
          BEE ALIVE
        </h1>
        <h3 className="text-4xl sm:text-6xl font-semibold tracking-wider">
          One Hive, One Tree
        </h3>
        <h4 className="text-lg sm:text-2xl">
          Help us fund hives, plant trees, and make a lasting environmental
          impact.
        </h4>
      </div>

      <img
        src={beepng}
        alt="bee"
        className={`absolute top-[16rem] sm:top-[20rem] w-2/3 sm:w-auto max-w-full h-auto transition-opacity duration-700 uid mt-20 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      />
    </div>
  );
};

export default BeeSection;
