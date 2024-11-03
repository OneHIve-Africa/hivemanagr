import React, { useEffect, useRef } from 'react';

type Props = {
  className?: string;
}

const Animate: React.FC<Props> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const container = containerRef.current;
    
    if (!container) return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const ratio = entry.intersectionRatio;
        const target = entry.target as HTMLDivElement;
        const index = cards.indexOf(target);
        
        if (index !== -1) {
          const translateY = Math.max(0, (1 - ratio) * 50);
          const scale = 0.9 + (ratio * 0.1);
          const opacity = 0.7 + (ratio * 0.3);
          
          target.style.transform = `translateY(${translateY}px) scale(${scale})`;
          target.style.opacity = opacity.toString();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    cards.forEach(card => card && observer.observe(card));

    return () => {
      cards.forEach(card => card && observer.unobserve(card));
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="w-[1200px] h-[696px] pb-[70px] flex-col justify-start items-center gap-[69px] inline-flex">
        <div className="w-[868px] text-[#151515] text-[64px] font-medium font-['Oswald']">
          Invest in Nature, Reap the Rewards
        </div>
        <div className="w-[1200px] h-[462px] relative flex-col justify-start items-start flex">
          {/* Main Card */}
          <div 
            ref={el => cardRefs.current[0] = el}
            className="w-[1200px] h-[416px] relative transition-all duration-500 ease-out"
          >
            <div className="w-[1200px] h-[416px] left-0 top-0 absolute bg-oha__yellow rounded-[10px]" />
            <div className="w-[1091px] left-[55px] top-[47px] absolute justify-between items-center inline-flex">
              <div className="w-[558px] flex-col justify-start items-start gap-[70px] inline-flex">
                <div className="self-stretch h-[69px] text-white text-[58px] font-medium font-['Oswald']">
                  For Investors:
                </div>
                <div className="self-stretch h-[114px] opacity-80 text-white text-2xl font-normal font-['Source Sans Pro'] leading-7">
                  Discover the lucrative world of beekeeping investments. With detailed insights and data, 
                  our platform offers you an opportunity to grow your wealth while making a positive impact.
                </div>
              </div>
              <img className="w-48 h-48" src="/api/placeholder/192/192" alt="Investment illustration" />
            </div>
          </div>

          {/* Invest Button */}
          <div className="w-[114px] h-[45px] relative z-10">
            <div className="w-[114px] h-[45px] left-0 top-0 absolute bg-oha__green rounded-md" />
            <div className="left-[33px] top-[13px] absolute text-white text-base font-bold font-['Plus Jakarta Sans']">
              Invest
            </div>
          </div>

          {/* Bottom Cards */}
          <div 
            ref={el => cardRefs.current[1] = el}
            className="w-[1200px] h-[70px] bg-[#151515] rounded-[10px] transition-all duration-500 ease-out"
          />
          <div 
            ref={el => cardRefs.current[2] = el}
            className="w-[1200px] h-[46px] bg-[#167e30] rounded-[10px] transition-all duration-500 ease-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Animate;