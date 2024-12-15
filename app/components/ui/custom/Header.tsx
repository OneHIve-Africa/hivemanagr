import React, { useState } from "react";
import { Link, NavLink } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import logo from "~/assets/logo.png";

interface NavItem {
  name: string;
  path: string;
}

interface ActionButton {
  name: string;
  path: string;
  variant: "link" | "outline" | "solid";
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Investor", path: "/investor" },
  { name: "Beekeeper", path: "/beekeeper" },
  { name: "Partner", path: "/partner" },
  { name: "Impact", path: "/impact" },
];

const actionButtons: ActionButton[] = [
  { name: "Login", path: "/login", variant: "link" },
  { name: "Sponsor", path: "/sponsor", variant: "outline" },
  { name: "Invest", path: "/invest", variant: "solid" },
];

const NavigationHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  const getButtonStyles = (variant: ActionButton["variant"]): string => {
    const baseStyles =
      "text-base font-bold font-['Plus Jakarta Sans'] transition-colors";

    switch (variant) {
      case "link":
        return `${baseStyles} text-[#1b9d3c] font-medium hover:text-[#167d30]`;
      case "outline":
        return `${baseStyles} px-6 py-3 text-[#1b9d3c] border border-[#1b9d3c] rounded-md hover:bg-[#1b9d3c] hover:text-white`;
      case "solid":
        return `${baseStyles} px-6 py-3 text-white bg-[#1b9d3c] rounded-md hover:bg-[#167d30]`;
      default:
        return baseStyles;
    }
  };

  const getMobileButtonStyles = (variant: ActionButton["variant"]): string => {
    const baseStyles =
      "text-lg font-bold font-['Plus Jakarta Sans'] transition-colors text-center";

    switch (variant) {
      case "link":
        return `${baseStyles} text-[#1b9d3c] font-medium hover:text-[#167d30]`;
      case "outline":
        return `${baseStyles} px-6 py-3 text-[#1b9d3c] border border-[#1b9d3c] rounded-md hover:bg-[#1b9d3c] hover:text-white`;
      case "solid":
        return `${baseStyles} px-6 py-3 text-white bg-[#1b9d3c] rounded-md hover:bg-[#167d30]`;
      default:
        return baseStyles;
    }
  };

  return (
    <nav className="w-full px-4 py-2 shadow-sm sticky z-50">
      <div className=" mx-auto lg:px-20 ">
        {/* Desktop and Mobile Header */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="w-[118px] h-[34px] relative z-20">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 pr-6 lg:hidden text-black hover:text-[#1b9d3c] transition-colors"
            aria-label="Toggle menu"
            type="button">
            {isMenuOpen ?
              <X className="h-6 w-6" />
            : <Menu className="h-6 w-6 " />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 px-5">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-base font-semibold font-['Plus Jakarta Sans'] transition-colors ${
                      isActive ? "text-[#1b9d3c]" : (
                        "text-black hover:text-[#1b9d3c]"
                      )
                    }`
                  }>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {actionButtons.map((button) => (
              <Link
                key={button.name}
                to={button.path}
                className={getButtonStyles(button.variant)}>
                {button.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-[1000] transform pl-5 pr-12 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-200 ease-in-out md:hidden`}>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-2 right-4 p-2 pr-6 text-white">
            <X className="h-6 w-6 stroke-black" />
          </button>
          <div className="flex flex-col pt-20">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-base font-semibold font-['Plus Jakarta Sans'] transition-colors ${
                      isActive ? "text-[#1b9d3c]" : (
                        "text-black hover:text-[#1b9d3c]"
                      )
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-4 mt-8">
              {actionButtons.map((button) => (
                <Link
                  key={button.name}
                  to={button.path}
                  className={getMobileButtonStyles(button.variant)}
                  onClick={() => setIsMenuOpen(false)}>
                  {button.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationHeader;
