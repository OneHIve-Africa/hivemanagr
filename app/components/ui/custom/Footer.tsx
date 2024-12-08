import footer from "~/assets/footer.png";
import { Button } from "../button";
import {
  Facebook,
  Instagram,
  Linkedin,
  LinkedinIcon,
  LucideYoutube,
  TwitterIcon,
  Youtube,
} from "lucide-react";

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
type Props = {};
const Footer: React.FC<Props> = ({}) => {
  return (
    <div
      className="uid h-[800px] w-full px-10 md:px-[198px] py-2 bg-cover bg-center flex justify-center items-center text-white relative "
      style={{ backgroundImage: `url(${footer})` }}>
      <div className="absolute w-full h-full bg-black bg-opacity-70"></div>
      <div className="flex flex-col justify-center items-center uid gap-10 w-full h-full z-10">
        <h1 className="text-7xl font-semibold">BEE ALIVE</h1>
        <h3 className="text-6xl font-bold">One Hive, One Tree</h3>
        <h4 className="text-2xl">
          Help us fund hives, plant trees, and make a lasting environmental
          impact.
        </h4>

        <div className="flex gap-10">
          <Button className="bg-transparent text-white rounded-md shadow font-semibold text-lg px-10 py-7">
            Login
          </Button>
          <Button className="bg-white text-oha__green rounded-md shadow font-semibold text-lg px-10 py-7">
            Sponsor
          </Button>
          <Button className="bg-oha__green text-white rounded-md shadow font-semibold text-lg px-10 py-7">
            Invest
          </Button>
        </div>

        <div className="w-full border-t-4 border-white flex justify-between mt-5">
          <nav>
            <ul className="flex gap-6 py-5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-white hover:underline">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="py-5">
            © 2024 One Hive Africa. All rights reserved.
          </div>
          <div className="py-5">
            <div className="flex gap-4 ">
              <a
                href="https://www.facebook.com/onehiveafrica"
                target="_blank"
                rel="noopener noreferrer">
                <Facebook
                  fill="true"
                  className="fill-white"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/onehiveafrica"
                target="_blank"
                rel="noopener noreferrer">
                <TwitterIcon
                  fill="true"
                  className="fill-white"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/onehiveafrica"
                target="_blank"
                rel="noopener noreferrer">
                <Linkedin
                  fill="true"
                  className="fill-white"
                />
              </a>
              <a
                href="https://www.youtube.com/onehiveafrica"
                target="_blank"
                rel="noopener noreferrer">
                <LucideYoutube className="stroke-white" />
              </a>
              <a
                href="https://www.instagram.com/onehiveafrica"
                target="_blank"
                rel="noopener noreferrer">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// <div className="flex gap-10">

// </div>
