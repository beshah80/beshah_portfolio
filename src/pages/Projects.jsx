import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faExternalLinkAlt, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Country Quiz App",
      description: "A React-based country flag quiz application built for devChallenges.io. Features 10 random flag questions from REST Countries API with multiple choice answers and immediate feedback.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      techStack: ["React", "JavaScript", "CSS", "REST API"],
      githubLink: "https://github.com/beshah80/country-quiz",
      liveLink: "https://country-quiz-alpha-kohl.vercel.app",
      category: "React.js"
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description: "A full-stack real-time messaging application with Socket.IO integration, user authentication, and both global and private chat functionality.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Socket.IO"],
      githubLink: "https://github.com/beshah80/Chat_App",
      liveLink: "https://chat-app-final-eji4.vercel.app",
      category: "Next.js"
    },
    {
      id: 3,
      title: "Tic-Tac-Toe Game",
      description: "An interactive tic-tac-toe game built with Next.js and TypeScript, featuring a clean UI and smooth gameplay experience.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/beshah80/tic-tac-toe",
      liveLink: "#",
      category: "Next.js"
    },
    {
      id: 4,
      title: "Blog Platform (Next.js)",
      description: "A modern blog platform built with Next.js featuring dynamic content, responsive design, and optimized performance.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      techStack: ["Next.js", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/beshah80/blog-post-nextjs",
      liveLink: "#",
      category: "Next.js"
    },
    {
      id: 5,
      title: "Blog Platform (React)",
      description: "A blog platform built with React, featuring modern UI components and responsive design for content management.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      techStack: ["React", "JavaScript", "CSS"],
      githubLink: "https://github.com/beshah80/blog-post",
      liveLink: "#",
      category: "React.js"
    },
    {
      id: 6,
      title: "Tenacare Health Platform",
      description: "A healthcare platform built with HTML, CSS, and JavaScript, providing health services and information management.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/beshah80/tenacare-health-platform",
      liveLink: "https://beshah80.github.io/tenacare-health-platform/",
      category: "HTML/CSS/JS"
    },
    {
      id: 7,
      title: "JSX Code Challenge",
      description: "A coding challenge solution demonstrating advanced React and JSX concepts with clean, efficient code implementation.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      techStack: ["React", "JSX", "JavaScript"],
      githubLink: "https://github.com/beshah80/JSX-Code-Challenge",
      liveLink: "#",
      category: "React.js"
    },
    {
      id: 8,
      title: "Adheno Project",
      description: "A recent project showcasing modern web development practices with React and advanced frontend technologies.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      techStack: ["React", "JavaScript", "CSS"],
      githubLink: "#",
      liveLink: "#",
      category: "React.js",
      status: "Recent"
    },
    {
      id: 9,
      title: "Student Management System",
      description: "A C++ application for managing student records and grades.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      techStack: ["C++"],
      githubLink: "https://github.com/beshah80/student-management",
      liveLink: "#",
      category: "Other",
      status: "In Progress"
    }
  ];

  const categories = ["All", "React.js", "Next.js", "HTML/CSS/JS", "Other"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "React.js":
        return faCode;
      case "Next.js":
        return faCode;
      case "HTML/CSS/JS":
        return faPalette;
      case "Other":
        return faCode;
      default:
        return faCode;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              My Projects
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of React applications and full-stack projects. 
              Each project showcases different aspects of modern web development.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Category Filter */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white rounded-lg p-1 sm:p-2 shadow-sm flex flex-wrap gap-1 sm:gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-md font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
                    <FontAwesomeIcon icon={getCategoryIcon(project.category)} className="w-2 h-2 sm:w-3 sm:h-3" />
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

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white px-3 sm:px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-sm"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    Source Code
                  </a>
                  {project.liveLink !== "#" ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-sm"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 bg-gray-300 text-gray-500 px-3 sm:px-4 py-2 rounded-lg text-center font-medium cursor-not-allowed flex items-center justify-center gap-1.5 sm:gap-2 text-sm"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              I'm always excited to work on new projects and challenges.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
