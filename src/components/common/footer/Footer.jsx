import { useMemo } from "react";
import { Link } from "react-router-dom";

// SVG icons (placeholders; replace with actual SVG paths or use a library like Heroicons)
const GitHubIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.94.68 1.89v2.8c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9.01h3.41v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.62 0 4.29 2.38 4.29 5.48v6.27zM5.34 7.45c-1.15 0-2.08-.93-2.08-2.08s.93-2.08 2.08-2.08 2.08.93 2.08 2.08-.93 2.08-2.08 2.08zm1.78 13h-3.56V9.01h3.56v11.44zM22 2H2v20h20V2z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.24 4.15c.66.44 1.2 1.02 1.62 1.71-.73-.33-1.51-.55-2.35-.65.84-.5 1.49-1.29 1.79-2.24-.79.47-1.67.81-2.61 1-.75-.8-1.82-1.3-3-1.3-2.27 0-4.1 1.84-4.1 4.1 0 .32.04.64.11.94-3.41-.17-6.44-1.8-8.46-4.29-.35.61-.56 1.32-.56 2.08 0 1.43.73 2.69 1.83 3.43-.67-.02-1.3-.21-1.85-.52v.05c0 2 1.42 3.67 3.3 4.05-.35.09-.71.14-1.09.14-.27 0-.53-.03-.78-.08.53 1.64 2.06 2.84 3.88 2.87-1.42 1.12-3.21 1.79-5.15 1.79-.33 0-.66-.02-.98-.06 1.82 1.17 3.99 1.85 6.32 1.85 7.59 0 11.74-6.29 11.74-11.74v-.54c.81-.58 1.51-1.3 2.06-2.13-.74.33-1.54.55-2.38.65.86-.51 1.52-1.32 1.83-2.28-.81.48-1.71.83-2.67 1.02z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5V6l8 5 8-5z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 8l-6 6h12l-6-6z" />
  </svg>
);

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Projects", path: "/projects" },
  { id: 4, name: "Skills", path: "/skills" },
  { id: 5, name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: GitHubIcon, url: "https://github.com/beshah80", name: "GitHub" },
  { icon: LinkedInIcon, url: "https://www.linkedin.com/in/beshah-a-a21743367/", name: "LinkedIn" },
  { icon: TwitterIcon, url: "https://x.com/beshah135027", name: "X" },
  { icon: EmailIcon, url: "mailto:beshah.ashenafi369@gmail.com", name: "Email" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  // Memoize static arrays to prevent unnecessary rerenders
  const memoizedNavItems = useMemo(() => navItems, []);
  const memoizedSocialLinks = useMemo(() => socialLinks, []);

  return (
    <footer role="contentinfo" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold">Beshah</span>
            </Link>
            <p className="text-white/80 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              React developer crafting modern web experiences.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {memoizedSocialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-300"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            {/* Newsletter Signup */}
            <form
              action="/subscribe"
              method="POST"
              className="mt-4 sm:mt-6 max-w-sm"
              aria-label="Newsletter signup"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-white/20 rounded-md hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {memoizedNavItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-300 text-sm sm:text-base"
                    aria-label={`Go to ${item.name} page`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Get In Touch</h3>
            <div className="space-y-1.5 sm:space-y-2 text-white/80 text-sm sm:text-base">
              <p>
                <a
                  href="mailto:beshah.ashenafi369@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  beshah.ashenafi369@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+251948100497"
                  className="hover:text-white transition-colors duration-300"
                >
                  +251 948 100 497
                </a>
              </p>
              <p>Addis Ababa, Ethiopia</p>
              <p>
                <a
                  href="/path-to-resume.pdf"
                  className="hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </p>
            </div>
          </address>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-white/80 text-xs sm:text-sm">
              Copyright &copy; {copyrightYear} Beshah. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-white/60 text-xs sm:text-sm">
                Built with ❤️ using React & Tailwind CSS
              </p>
              <a
                href="#top"
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base flex items-center gap-1"
                aria-label="Back to top"
              >
                <ArrowUpIcon />
                Back to Top
              </a>
              {/* Language toggle could be added here, e.g., using i18next */}
              {/* <select className="bg-transparent text-white/80 text-sm">
                <option value="en">English</option>
                <option value="am">Amharic</option>
              </select> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;