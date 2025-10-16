import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Projects", path: "/projects" },
  { id: 4, name: "Skills", path: "/skills" },
  { id: 5, name: "Services", path: "/services" },
  { id: 6, name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Consistent color theme
  const navbarClasses = position > 50
    ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
    : "bg-gradient-to-r from-blue-600 to-purple-600";

  const logoColor = position > 50 ? "text-gray-900" : "text-white";
  const linkColor = position > 50 ? "text-gray-700" : "text-white/90";
  const linkHover = position > 50
    ? "hover:bg-gray-100 hover:text-blue-600"
    : "hover:bg-white/10 hover:text-white";

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`sticky top-0 z-50 transition-all duration-300 ${navbarClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={closeMobileMenu}
          >
            <span className={`text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-300 ${logoColor}`}>
              Beshah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm xl:text-base ${isActive(item.path)
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md ring-1 ring-blue-500/30"
                  : `${linkColor} ${linkHover}`
                  }`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${position > 50
              ? "text-gray-700 hover:bg-gray-100"
              : "text-white hover:bg-white/10"
              }`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? "max-h-96 opacity-100 scale-100 pb-4"
            : "max-h-0 opacity-0 scale-95 overflow-hidden"
            }`}
          role="menu"
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 border border-gray-200/50">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${isActive(item.path)
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;