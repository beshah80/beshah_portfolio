import {
  faArrowRight,
  faCode,
  faDownload,
  faPalette,
  faRocket,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import person from "../assets/images/person.png";

const Home = () => {
  const stats = [
    { number: "9+", label: "Projects Completed" },
    { number: "3+", label: "In Progress" },
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Technologies" }
  ];

  const services = [
    {
      icon: faCode,
      title: "Frontend Development",
      description: "Modern React applications with responsive design and optimal performance."
    },
    {
      icon: faPalette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality."
    },
    {
      icon: faRocket,
      title: "Full-Stack Solutions",
      description: "End-to-end web applications from database design to deployment."
    },
    {
      icon: faUsers,
      title: "Consulting",
      description: "Expert guidance on technology choices and architecture decisions."
    }
  ];

  const recentProjects = [
    {
      title: "PhoneSell E-commerce Platform",
      description: "Full-stack e-commerce platform for mobile phone sales",
      image: "./src/assets/images/projects/phonesell.png",
      link: "/projects"
    },
    {
      title: "Blog Post Platform",
      description: "Dynamic blog platform with rich text editing built with Next.js",
      image: "./src/assets/images/projects/blog-post.png",
      link: "/projects"
    },
    {
      title: "Tenacare Health Platform",
      description: "Health platform with responsive design for patient interactions",
      image: "./src/assets/images/projects/tenacare.png",
      link: "/projects"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Hello, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Beshah
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 text-white/90 leading-relaxed">
                Building responsive, user-centric web experiences with React.js, Next.js, and modern CSS frameworks
              </p>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white/80 leading-relaxed">
                Fourth-year Information Systems student and passionate front-end developer specializing in
                React.js, Next.js, Tailwind CSS, and Bootstrap. Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Get In Touch
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                <Link
                  to="/projects"
                  className="bg-white/20 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  View My Work
                </Link>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <img
                  src={person}
                  alt="Beshah"
                  className="w-64 h-80 sm:w-72 sm:h-90 lg:w-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600">9+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a fourth-year Information Systems student and passionate front-end developer,
              dedicated to creating exceptional user experiences with modern web technologies.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Frontend Developer & Information Systems Student
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a fourth-year Information Systems student at Addis Ababa University and a passionate front-end developer.
                I specialize in crafting responsive, user-friendly web interfaces using React.js, Next.js, Tailwind CSS, and Bootstrap.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/about"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center text-sm sm:text-base"
                >
                  Learn More About Me
                </Link>
                <a
                  href="./src/assets/resume/resume.pdf"
                  download
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="flex justify-center order-1 lg:order-2">
              <img
                src={person}
                alt="About Beshah"
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development and design services to bring your digital vision to life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FontAwesomeIcon icon={service.icon} className="text-white text-lg sm:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of my latest work and projects that demonstrate my skills and expertise.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recentProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <Link
                    to={project.link}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 text-sm sm:text-base"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/projects"
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's work together to bring your ideas to life. I'm here to help you create
            something amazing that your users will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
            >
              Get In Touch
            </Link>
            <Link
              to="/about"
              className="bg-white/20 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 text-sm sm:text-base"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
