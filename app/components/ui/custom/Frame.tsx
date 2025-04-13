import React from "react";

interface FrameProps {
  title: string;
  description: string;
  imageSrc: string;
  backgroundColor?: string;
  titleStyle?: string;
  descriptionStyle?: string;
  className?: string; // Additional classes for container styling
}

export const Frame: React.FC<FrameProps> = ({
  title,
  description,
  imageSrc,
  backgroundColor = "#d9d9d9",
  titleStyle = "font-medium text-[#151515] text-[32px] tracking-[0] leading-[normal]",
  descriptionStyle = "opacity-80 font-normal text-[#151515] text-base tracking-[0]",
  className = "",
}) => {
  return (
    <div className={`relative w-full md:w-96 h-[546px] uid ${className}`}>
      <div className="relative h-full px-5">
        {/* Content Box */}
        <div
          className="absolute w-full md:w-[380px] h-[370px] top-0 left-0 rounded-lg"
          style={{ backgroundColor }}
        >
          <div className="flex flex-col w-full md:w-[349px] h-[119px] items-start gap-3 relative top-5 left-0 px-5">
            {/* Title */}
            <div
              className={`relative self-stretch mt-[-1.00px] ${titleStyle}`}
              style={{ fontFamily: "'Oswald-Medium', Helvetica" }}
            >
              {title}
            </div>

            {/* Description */}
            <p
              className={`relative self-stretch whitespace-break-spaces ${descriptionStyle}`}
              style={{ fontFamily: "'Source Sans Pro', Helvetica" }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Image */}
        <img
          className="absolute w-96 h-[352px] top-[194px] left-0"
          alt="Frame visual"
          src={imageSrc}
        />
      </div>
    </div>
  );
};
