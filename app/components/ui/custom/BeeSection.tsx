import React, { useState, useEffect } from "react";
import beepng from "~/assets/bee.png";

const BeeSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      const handleResize = () => {
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);
      };

      // Initial values
      handleResize();

      // Add event listeners
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      setIsLoaded(true);

      // Cleanup
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Calculate fade effect based on current window height
  const fadeStart = windowHeight * 0.5; // Start fading earlier on mobile
  const fadeEnd = windowHeight * 0.9;
  const opacity = Math.max(
    1 - (scrollY - fadeStart) / (fadeEnd - fadeStart),
    0
  );

  // Adjust parallax effect based on device size
  const parallaxFactor = windowWidth < 640 ? 0.2 : 0.3; // Less movement on mobile
  const translateY = scrollY * parallaxFactor;

  // Adjust bee image position based on screen size
  const getBeeSize = () => {
    if (windowWidth < 480) return "w-4/5 mx-auto"; // Smallest screens
    if (windowWidth < 640) return "w-3/4 mx-auto"; // Small mobile
    if (windowWidth < 768) return "w-2/3"; // Large mobile
    if (windowWidth < 1024) return "w-1/2"; // Tablet
    return "w-auto"; // Desktop
  };

  const getBeePosition = () => {
    if (windowWidth < 480) return "top-[14rem]";
    if (windowWidth < 640) return "top-[15rem]";
    if (windowWidth < 768) return "top-[16rem]";
    if (windowWidth < 1024) return "top-[18rem]";
    return "top-[20rem]";
  };

  return (
    <div className="uid h-screen w-full bg-oha__yellow relative overflow-hidden">
      <div className="text-white w-full flex flex-col items-center justify-center px-4 pt-44 md:pt-32 lg:pt-36 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold animate-pulse">
          BEE ALIVE
        </h1>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider">
          One Hive, One Tree
        </h3>
        <h4 className="text-lg sm:text-xl md:text-2xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
          Help us fund hives, plant trees, and make a lasting environmental
          impact.
        </h4>
      </div>

      <div className="flex justify-center items-center w-full">
        <img
          src={beepng}
          alt="bee"
          className={`absolute  top-[23rem] lg:top-[25rem]  w-full h-auto transition-opacity duration-700 uid ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            opacity,
            transform: `translateY(${translateY}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default BeeSection;
