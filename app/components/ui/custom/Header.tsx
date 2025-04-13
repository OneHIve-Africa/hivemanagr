import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "@remix-run/react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "~/assets/logo.png";

interface NavItem {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
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
  { name: "Contact Us", path: "/contact" },
];

const actionButtons: ActionButton[] = [
  { name: "Login", path: "/contact", variant: "link" },
  { name: "Sponsor", path: "#", variant: "outline" },
  { name: "Invest", path: "/investor", variant: "solid" },
];

const NavigationHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [menuAnimating, setMenuAnimating] = useState<boolean>(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const openMenu = (): void => {
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setMenuPosition({
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2,
      });
    }
    setMenuAnimating(true);
    setIsMenuOpen(true);
  };

  const closeMenu = (): void => {
    setMenuAnimating(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setTimeout(() => {
        setMenuAnimating(false);
      }, 300);
    }, 10);
  };

  const toggleMenu = (): void => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const toggleModal = (): void => setIsModalOpen(!isModalOpen);

  const getButtonStyles = (variant: ActionButton["variant"]): string => {
    const baseStyles =
      "text-sm font-bold font-['Plus Jakarta Sans'] transition-colors";

    switch (variant) {
      case "link":
        return `${baseStyles} text-[#1b9d3c] font-medium hover:text-[#167d30]`;
      case "outline":
        return `${baseStyles} px-4 py-2 sm:px-6 text-[#1b9d3c] border border-[#1b9d3c] rounded-md hover:bg-[#1b9d3c] hover:text-white`;
      case "solid":
        return `${baseStyles} px-4 py-2 sm:px-6 text-white bg-[#1b9d3c] rounded-md hover:bg-[#167d30]`;
      default:
        return baseStyles;
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 50);
  };

  const simulateRequest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(false);
      alert("Sponsor request sent successfully!");
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on window resize if mobile menu is open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`w-full px-4 py-3 shadow-sm z-50 fixed top-0 transition-all duration-300 ${
          isSticky ? "bg-white" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl lg:px-8">
          {/* Header Content */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="w-[118px] h-[34px] relative z-20">
              <img src={logo} alt="Logo" className="w-full h-full" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="p-2 lg:hidden text-black hover:text-[#1b9d3c] transition-colors relative z-50"
              aria-label="Toggle menu"
              type="button"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8 px-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium leading-relaxed tracking-wider font-['Plus Jakarta Sans'] transition-colors ${
                      isActive
                        ? "text-[#1b9d3c]"
                        : "text-black hover:text-[#1b9d3c]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {actionButtons.map((button) => (
                <React.Fragment key={button.name}>
                  {button.name === "Sponsor" ? (
                    <button
                      onClick={toggleModal}
                      className={getButtonStyles(button.variant)}
                    >
                      {button.name}
                    </button>
                  ) : (
                    <Link
                      to={button.path}
                      className={getButtonStyles(button.variant)}
                    >
                      {button.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Circle Animation */}
      {(isMenuOpen || menuAnimating) && (
        <div
          className={`fixed inset-0 z-40 lg:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          style={{
            perspective: "1000px",
          }}
        >
          {/* Circle Animation Element */}
          <div
            className={`absolute bg-white w-full h-full ${isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
            style={{
              transformOrigin: `${menuPosition.x}px ${menuPosition.y}px`,
              transition:
                "transform 0.5s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.3s ease",
              borderRadius: isMenuOpen ? "0%" : "50%",
            }}
          >
            {/* Menu Content */}
            <div
              className={`flex flex-col h-full pt-20 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
              style={{
                transition: "opacity 0.3s ease",
                transitionDelay: isMenuOpen ? "0.2s" : "0s",
              }}
            >
              {/* Mobile Navigation Items */}
              <div className="flex-1 overflow-y-auto">
                <div className="px-6 py-4">
                  {navItems.map((item, index) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block py-4 text-lg font-medium font-['Plus Jakarta Sans'] transition-colors border-b border-gray-100 ${
                          isActive
                            ? "text-[#1b9d3c]"
                            : "text-gray-800 hover:text-[#1b9d3c]"
                        }`
                      }
                      style={{
                        transitionDelay: isMenuOpen
                          ? `${index * 0.05 + 0.2}s`
                          : "0s",
                        transform: isMenuOpen
                          ? "translateY(0)"
                          : "translateY(20px)",
                        opacity: isMenuOpen ? 1 : 0,
                        transition: "transform 0.3s ease, opacity 0.3s ease",
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="px-6 py-6 border-t border-gray-100">
                <div className="flex flex-col gap-4">
                  {actionButtons.map((button, index) => (
                    <div
                      key={button.name}
                      style={{
                        transitionDelay: isMenuOpen
                          ? `${(navItems.length + index) * 0.05 + 0.2}s`
                          : "0s",
                        transform: isMenuOpen
                          ? "translateY(0)"
                          : "translateY(20px)",
                        opacity: isMenuOpen ? 1 : 0,
                        transition: "transform 0.3s ease, opacity 0.3s ease",
                      }}
                    >
                      {button.name === "Sponsor" ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenu();
                            toggleModal();
                          }}
                          className={`${getButtonStyles(
                            button.variant
                          )} w-full flex justify-center items-center text-base py-3`}
                        >
                          {button.name}
                        </button>
                      ) : (
                        <Link
                          to={button.path}
                          onClick={closeMenu}
                          className={`${getButtonStyles(
                            button.variant
                          )} w-full flex justify-center items-center text-base py-3`}
                        >
                          {button.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sponsor Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1100]">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Sponsor Request</h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Please confirm that you would like to send a sponsor request.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={toggleModal}
                className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={simulateRequest}
                className={`px-4 py-2 text-sm text-white bg-[#1b9d3c] rounded-md hover:bg-[#167d30] ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Request"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationHeader;
