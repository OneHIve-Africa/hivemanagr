import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../button";
import investImage from "~/assets/invest.png";
import { Link, useNavigate } from "@remix-run/react";
interface CardProps {
  i: number;
  title: string;
  description: string;
  buttonText: string;
  bgColor: string;
  buttonClass: string;
  progress: any;
  range: number[];
  targetScale: number;
  buttonHover: string;
  path: string;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  buttonText,
  bgColor,
  buttonClass,
  progress,
  range,
  targetScale,
  buttonHover,
  path,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const navigate = useNavigate();

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`relative flex flex-col ${bgColor} h-[500px] w-[1000px] rounded-xl p-12`}
      >
        <h2 className="text-4xl text-start font-semibold text-white mb-10">
          {title}
        </h2>
        <div className="flex h-full gap-12">
          <div className="w-3/5 relative top-[10%]">
            <p className="text-lg text-white leading-relaxed first-letter:text-3xl">
              {description}
            </p>
            <Button
              onClick={() => navigate(path)}
              className={`${buttonClass} hover:${buttonHover} rounded-md shadow font-semibold text-lg px-10 py-6 mt-6`}
            >
              {buttonText}
            </Button>
          </div>
          <motion.div className="relative w-2/5 h-full rounded-3xl overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              {/* <div className="w-full h-full bg-gray-200 rounded-3xl" /> */}
              <img src={investImage} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const ParallaxCards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cards = [
    {
      title: "For Investors",
      description:
        "Discover the lucrative world of beekeeping investments. With detailed insights and data, our platform offers you an opportunity to grow your wealth while making a positive impact.",
      buttonText: "Invest",
      bgColor: "bg-oha__yellow",
      buttonClass: "bg-green-600 text-white",
      buttonHover: "bg-green-900",
      path: "/investor",
    },
    {
      title: "For Beekeepers",
      description:
        "Join our network from anywhere, learn all there is to know about beekeeping, and get the support you need to succeed. Ready to start your journey? Register as a beekeeper and let investors fund your success.",
      buttonText: "Join Us",
      bgColor: "bg-black",
      buttonClass: "bg-green-600 text-white",
      buttonHover: "bg-green-900",
      path: "/beekeeper",
    },
    {
      title: "For Partners",
      description:
        "Partner with us to train and equip communities for a sustainable future. Join forces with One Hive Africa and be part of a larger movement towards environmental conservation and economic empowerment.",
      buttonText: "Become A Partner",
      bgColor: "bg-oha__green",
      buttonClass: "bg-white text-green-600",
      buttonHover: "bg-gray-600",
      path: "/partner",
    },
  ];

  return (
    <div className={`relative w-full`}>
      <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-semibold mb-2 mt-[10vh]">
        Invest in Nature, Reap the Rewards
      </h1>

      <main ref={container} className="relative uid">
        {cards.map((card, i) => {
          const targetScale = 1 - (cards.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...card}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </div>
  );
};

export default ParallaxCards;
