import footer from "~/assets/footer.png";
import { Button } from "../button";
import {
  Facebook,
  Instagram,
  Linkedin,
  LucideYoutube,
  TwitterIcon,
} from "lucide-react";
import DynaButtons from "./buttons/DynaButtons";

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Investor", path: "/investor" },
  { name: "Beekeeper", path: "/beekeeper" },
  { name: "Partner", path: "/partner" },
  { name: "Impact", path: "/impact" },
];

const Footer: React.FC = () => {
  return (
    <div
      className="h-[600px] w-full px-6 md:px-10 lg:px-[198px] py-10 relative flex justify-center items-center text-white"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center gap-6 w-full h-full z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          BEE ALIVE
        </h1>
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          One Hive, One Tree
        </h3>
        <h4 className="text-lg md:text-xl lg:text-2xl leading-relaxed">
          Help us fund hives, plant trees, and make a lasting environmental
          impact.
        </h4>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <DynaButtons
            name="Login"
            variant="outlinewhite"
            path="https://ohaplatform.vercel.app/"
          />
          <DynaButtons name="Sponsor" variant="solidwhite" path="/partner" />
          <DynaButtons name="Invest" variant="solid" path="/investor" />
        </div>

        {/* Footer Links */}
        <div className="w-full border-t border-white mt-6 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Navigation Links */}
            <nav className="flex gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-white text-sm md:text-base hover:underline"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <div className="text-sm md:text-base">
              © 2024 One Hive Africa. All rights reserved.
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/onehiveafrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="text-white w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/onehiveafrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="text-white w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/onehiveafrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="text-white w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/onehiveafrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LucideYoutube className="text-white w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/onehiveafrica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
