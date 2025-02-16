import { Link } from "@remix-run/react";
import React from "react";

interface ActionButton {
  name: string;
  path: string;
  variant: "link" | "outline" | "solid" | "solidwhite" | "outlinewhite";
}

const DynaButtons = (props: ActionButton) => {
  const { name, path, variant } = props;
  const getButtonStyles = (variant: ActionButton["variant"]): string => {
    const baseStyles =
      "text-sm font-bold font-['Plus Jakarta Sans'] transition-colors";

    switch (variant) {
      case "link":
        return `${baseStyles} text-[#1b9d3c] font-medium hover:text-[#167d30]`;
      case "outline":
        return `${baseStyles} px-6 py-3 text-[#1b9d3c] border border-[#1b9d3c] rounded-md hover:bg-[#1b9d3c] hover:text-white`;
      case "outlinewhite":
        return `${baseStyles} px-6 py-3 text-white border border-white rounded-md hover:bg-white hover:text-[#1b9d3c]`;
      case "solid":
        return `${baseStyles} px-6 py-3 text-white bg-[#1b9d3c] rounded-md hover:bg-[#167d30]`;
      case "solidwhite":
        return `${baseStyles} px-6 py-3 text-oha__green bg-white rounded-md hover:bg-white/80`;
      default:
        return baseStyles;
    }
  };

  return (
    <div>
      <Link key={name} to={path} className={getButtonStyles(variant)}>
        {name}
      </Link>
    </div>
  );
};

export default DynaButtons;
