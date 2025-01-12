import React, { useRef, useEffect, useState } from "react";
import investImage from "~/assets/invest.png";
import { Button } from "../button";

type Props = {
  className?: string;
};

const Animate: React.FC<Props> = ({ className }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const windowCenter = window.innerHeight / 2;

        if (
          cardCenter >= windowCenter - 100 &&
          cardCenter <= windowCenter + 100
        ) {
          setActiveCard(index);
        } else if (rect.top > window.innerHeight || rect.bottom < 0) {
          setActiveCard(null);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`uid h-fit w-full px-6 sm:px-10 lg:px-[198px] flex flex-col py-16 sm:py-28 gap-10 ${className}`}
    >
      <h1 className="w-full text-center text-4xl sm:text-5xl lg:text-6xl font-semibold">
        Invest in Nature, Reap the Rewards
      </h1>

      <div className="relative mt-10">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el!)}
            className={`card ${
              activeCard === index ? "scale-105 z-20" : "scale-95 z-10"
            } transition-all duration-500 sticky top-0 rounded-lg text-black uid`}
          >
            {/* Card content */}
            {index === 0 && (
              <div className="flex flex-col sm:flex-row justify-between bg-oha__yellow rounded-lg shadow-md text-white p-6 sm:p-10 h-[400px]">
                <div className="sm:w-1/2">
                  <h1 className="text-4xl sm:text-5xl font-semibold">
                    For Investors
                  </h1>
                  <p className="text-lg sm:text-2xl leading-8 mt-5 font-normal">
                    Discover the lucrative world of beekeeping investments.{" "}
                    <br />
                    With detailed insights and data, our platform offers you{" "}
                    <br />
                    an opportunity to grow your wealth while making a <br />
                    positive impact.
                  </p>
                  <Button className="bg-oha__green text-white rounded-md shadow font-semibold text-lg px-10 py-6 sm:mt-7 mt-5">
                    Invest
                  </Button>
                </div>
                <div className="sm:w-1/2 flex justify-center sm:justify-end mt-5 sm:mt-0">
                  <img
                    src={investImage}
                    alt="invest"
                    className="w-40 sm:w-48 h-52"
                  />
                </div>
              </div>
            )}
            {index === 1 && (
              <div className="bg-[#151414] w-full rounded-lg h-[400px]"></div>
            )}
            {index === 2 && (
              <div className="bg-oha__green w-full rounded-lg h-[400px]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animate;
