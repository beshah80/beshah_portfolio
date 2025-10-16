import { useCallback, useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

// Inline SVG for AngleUp (replacing FontAwesome)
const AngleUpIcon = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 8l-6 6h12l-6-6z" />
  </svg>
);

const scrollToTop = () => {
  animateScroll.scrollToTop({
    duration: 500,
    smooth: true,
  });
};

const ScrollToTop = () => {
  const [position, setPosition] = useState(0);

  // Debounced scroll handler for performance
  const handleScroll = useCallback(() => {
    setPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex justify-end relative sm:me-10 z-50 transition-all">
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-5 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex justify-center items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-blue-600 hover:bg-purple-600 text-white ${position < 200 ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        aria-label="Scroll to top of page"
      >
        <AngleUpIcon />
      </button>
    </div>
  );
};

export default ScrollToTop;