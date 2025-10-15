import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Projects", path: "/projects" },
  { id: 4, name: "Skills", path: "/skills" },
  { id: 5, name: "Services", path: "/services" },
  { id: 6, name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: faGithub, url: "https://github.com/beshah80", name: "GitHub" },
  { icon: faLinkedin, url: "https://linkedin.com/in/beshah-ashenafi", name: "LinkedIn" },
  { icon: faTwitter, url: "https://upwork.com/freelancers/beshahashenafi", name: "Upwork" },
  { icon: faEnvelope, url: "mailto:beshah.ashenafi369@gmail.com", name: "Email" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">

              <span className="text-xl sm:text-2xl font-bold">Beshah</span>
            </Link>
            <p className="text-white/80 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              A passionate React developer creating exceptional digital experiences
              through modern web technologies and innovative design solutions.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-sm sm:text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Get In Touch</h3>
            <div className="space-y-1.5 sm:space-y-2 text-white/80 text-sm sm:text-base">
              <p>beshah.ashenafi369@gmail.com</p>
              <p>+251(0)948100497</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-white/80 text-xs sm:text-sm">
              Copyright &copy; {copyrightYear} Beshah. All rights reserved.
            </p>
            <p className="text-white/60 text-xs sm:text-sm">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
