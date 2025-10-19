import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

// --- Icon Components (No Change) ---
const GitHubIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.94.68 1.89v2.8c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
);

const PaletteIcon = () => (
  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5S18.33 12 17.5 12z" />
  </svg>
);

// --- Component Definition ---
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Country Quiz App",
      description: "A React-based country flag quiz application built for devChallenges.io. Features 10 random flag questions from REST Countries API with multiple-choice answers and immediate feedback.",
      image: "/src/assets/images/projects/country_quiz.png",
      techStack: ["React", "JavaScript", "CSS", "REST API"],
      githubLink: "https://github.com/beshah80/country-quiz",
      liveLink: "https://country-quiz-alpha-kohl.vercel.app",
      category: "React.js",
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description: "A full-stack real-time messaging application with Socket.IO integration, user authentication, and both global and private chat functionality.",
      image: "/src/assets/images/projects/chat_app.png",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Socket.IO"],
      githubLink: "https://github.com/beshah80/Chat_App",
      liveLink: "https://chat-app-final-eji4.vercel.app",
      category: "Next.js",
    },
    {
      id: 3,
      title: "Tic-Tac-Toe Game",
      description: "An interactive tic-tac-toe game built with Next.js and TypeScript, featuring a clean UI and smooth gameplay experience.",
      image: "/src/assets/images/projects/tic-tac-toe.png",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/beshah80/tic-tac-toe",
      liveLink: "https://tic-tac-toe-nine-rust-54.vercel.app",
      category: "Next.js",
    },
    {
      id: 4,
      title: "TechBit Blog Platform (Next.js)",
      description: "A modern blog platform (TechBit) built with Next.js, featuring dynamic content, responsive design, and optimized performance for tech tutorials and community discussions.",
      image: "/src/assets/images/projects/techbit.png",
      techStack: ["Next.js", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/beshah80/blog-post-nextjs",
      liveLink: "https://my-blog-post-nextjs-otwe.vercel.app",
      category: "Next.js",
    },
    {
      id: 5,
      title: "TechBit Blog Platform (React)",
      description: "A blog platform (TechBit) built with React, featuring modern UI components and responsive design for tech trends and coding tutorials.",
      image: "/src/assets/images/projects/techbit.png",
      techStack: ["React", "JavaScript", "CSS"],
      githubLink: "https://github.com/beshah80/blog-post",
      liveLink: "https://beshah80.github.io/blog-post/",
      category: "React.js",
    },
    {
      id: 6,
      title: "Tenacare Health Platform",
      description: "A healthcare platform built with HTML, CSS, and JavaScript, providing health services and information management.",
      image: "/src/assets/images/projects/tenacare.png",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/beshah80/tenacare-health-platform",
      liveLink: "https://beshah80.github.io/tenacare-health-platform/",
      category: "HTML/CSS/JS",
    },
    {
      id: 7,
      title: "Adheno Portfolio",
      description: "A personal portfolio project built with Create React App, showcasing modern web development practices with React and responsive design.",
      image: "/src/assets/images/projects/adheno.png",
      techStack: ["React", "JavaScript", "CSS"],
      githubLink: "https://github.com/beshah80/adheno",
      liveLink: "https://beshah80.github.io/adheno/",
      category: "React.js",
      status: "Recent",
    },
    {
      id: 8,
      title: "Student Management System",
      description: "A C++ application for managing student records and grades, demonstrating strong programming fundamentals.",
      image: "/src/assets/images/projects/student-management.png",
      techStack: ["C++"],
      githubLink: "https://github.com/beshah80/student-management",
      liveLink: "#",
      category: "Other",
      status: "In Progress",
    },
    {
      id: 9,
      title: "House Rental Platform",
      description: "A web application for browsing and managing house rentals, built with React and featuring a responsive UI.",
      image: "/src/assets/images/projects/house-rental.png",
      techStack: ["React", "JavaScript", "CSS"],
      githubLink: "#", // Placeholder
      liveLink: "#",
      category: "React.js",
    },
    {
      id: 10,
      title: "Phone Sell E-commerce",
      description: "An e-commerce platform for selling phones, built with React and featuring product listings and a responsive design.",
      image: "/src/assets/images/projects/phonesell.png",
      techStack: ["React", "JavaScript", "CSS"],
      githubLink: "#", // Placeholder
      liveLink: "#",
      category: "React.js",
    },
    {
      id: 11,
      title: "Hotel Management System",
      description: "A web-based system for managing hotel bookings and services, built with React and JavaScript.",
      image: "/src/assets/images/projects/hotel-management.png",
      techStack: ["React", "JavaScript", "CSS"],
      githubLink: "#", // Placeholder
      liveLink: "#",
      category: "React.js",
    },
    {
      id: 12,
      title: "To-Do List App",
      description: "A task management application built with React, featuring task creation, editing, and deletion with a clean UI.",
      image: "/src/assets/images/projects/to-do-list.png",
      techStack: ["React", "JavaScript", "CSS"],
      githubLink: "#", // Placeholder
      liveLink: "#",
      category: "React.js",
    },
  ];

  const categories = ["All", "React.js", "Next.js", "HTML/CSS/JS", "Other"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Memoize projects and categories
  const memoizedProjects = useMemo(() => projects, []);
  const memoizedCategories = useMemo(() => categories, []);

  const filteredProjects = selectedCategory === "All"
    ? memoizedProjects
    : memoizedProjects.filter((project) => project.category === selectedCategory);

  // Icon Lookup Object for better extensibility than switch
  const CategoryIconMap = {
    "React.js": CodeIcon,
    "Next.js": CodeIcon,
    "HTML/CSS/JS": PaletteIcon,
    "Other": CodeIcon,
  };

  const GetCategoryIcon = ({ category }) => {
    const Icon = CategoryIconMap[category] || CodeIcon;
    return <Icon />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - UPDATED BACKGROUND */}
      <section aria-labelledby="projects-heading" className="bg-white py-12 sm:py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="projects-heading" className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              My Projects
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of React and Next.js applications, including TechBit and Adheno, showcasing front-end development challenges and modern web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* --- Rest of the Projects Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Category Filter */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white rounded-lg p-1 sm:p-2 shadow-sm flex flex-wrap gap-1 sm:gap-2">
            {memoizedCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-md font-medium transition-all duration-300 text-sm sm:text-base ${selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-700"
                  }`}
                aria-current={selectedCategory === category ? "true" : undefined}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isLiveLinkAvailable = project.liveLink !== "#";
            const isGithubLinkAvailable = project.githubLink !== "#";

            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image - *** IMPROVED FOR ASPECT RATIO CONSISTENCY *** */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    // IMPROVED alt text suggestion for better context (can be made more descriptive)
                    alt={`Screenshot of the ${project.title} interface`}
                    // w-full h-40/48 is replaced with 'absolute inset-0 w-full h-full'
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                      <GetCategoryIcon category={project.category} />
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status Badge */}
                  {project.status && (
                    <div className="mb-3 sm:mb-4">
                      <span className="bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                  )}

                  {/* Links - *** IMPROVED LINK HANDLING *** */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      // Conditional class for disabled appearance and cursor
                      className={`flex-1 px-3 sm:px-4 py-2 rounded-lg text-center font-medium transition-colors duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-sm focus:outline-none focus:ring-2 ${isGithubLinkAvailable
                        ? "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500/50"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                      aria-label={`View source code for ${project.title}`}
                      // Prevent navigation if link is placeholder
                      onClick={(e) => !isGithubLinkAvailable && e.preventDefault()}
                    >
                      <GitHubIcon />
                      Source Code
                    </a>

                    {isLiveLinkAvailable ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLinkIcon />
                        Live Demo
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex-1 bg-gray-300 text-gray-500 px-3 sm:px-4 py-2 rounded-lg text-center font-medium cursor-not-allowed flex items-center justify-center gap-1.5 sm:gap-2 text-sm"
                        aria-disabled="true"
                      >
                        <ExternalLinkIcon />
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action (No Change Requested, but good practice to ensure consistency) */}
        <section aria-labelledby="cta-heading" className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 id="cta-heading" className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              I'm always excited to tackle new front-end challenges and collaborate on innovative projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-label="Navigate to contact page"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;