import { faBriefcase, faCertificate, faDownload, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  const education = [
    {
      degree: "Bachelor of Information Systems",
      institution: "Addis Ababa University",
      year: "2023 - Expected June 2026",
      description: "Coursework: Web Development, Database Management, Software Engineering, System Analysis, Object-Oriented Programming"
    }
  ];

  const certifications = [
    {
      name: "Web Development Certificate",
      issuer: "Online Learning Platforms",
      year: "2024"
    },
    {
      name: "React.js Development",
      issuer: "Self-taught",
      year: "2024"
    },
    {
      name: "Front-end Development",
      issuer: "Various Online Courses",
      year: "2023-2024"
    }
  ];

  const internships = [
    {
      position: "Frontend Development Intern",
      company: "Efuye Gela",
      duration: "2 months",
      description: "Contributed to blog post projects using React.js and Next.js in a team setting. Participated in hackathons, building responsive web interfaces. Collaborated with developers to enhance UI/UX for client projects.",
      website: "efuyegela.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Fourth-year Information Systems student and passionate front-end developer specializing in React.js, Next.js, and modern web technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Personal Background */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Personal Background</h2>
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              I'm a fourth-year Information Systems student at Addis Ababa University (graduating June 2026) and a passionate front-end developer.
              I specialize in crafting responsive, user-friendly web interfaces using React.js, Next.js, Tailwind CSS, and Bootstrap.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              With strong teamwork, communication, and problem-solving skills, I aim to build impactful digital solutions.
              My academic foundation in Information Systems complements my self-taught skills through online platforms,
              giving me a well-rounded approach to web development.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <FontAwesomeIcon icon={faGraduationCap} className="text-lg sm:text-xl" />
            Education
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">{edu.institution}</p>
                <p className="text-gray-600 text-sm mb-3">{edu.year}</p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <FontAwesomeIcon icon={faCertificate} className="text-lg sm:text-xl" />
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">{cert.issuer}</p>
                <p className="text-gray-600 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <FontAwesomeIcon icon={faBriefcase} className="text-lg sm:text-xl" />
            Internships
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {internships.map((internship, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{internship.position}</h3>
                <p className="text-blue-600 font-medium mb-2 text-sm sm:text-base">{internship.company}</p>
                <p className="text-gray-600 text-sm mb-3">{internship.duration}</p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed">{internship.description}</p>
                {internship.website && (
                  <a
                    href={`https://${internship.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Website: {internship.website} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Download My Resume</h3>
            <p className="text-white/90 mb-4 sm:mb-6 leading-relaxed">
              Get a comprehensive overview of my experience, skills, and achievements.
            </p>
            <a
              href="./src/assets/resume/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
