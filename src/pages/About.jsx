import { useMemo } from "react";
import { Link } from "react-router-dom"; // Added for project link

// Inline SVGs (replacing FontAwesome)
const GraduationCapIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
  </svg>
);

const CertificateIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.39 19.37L16 17l-1.41 1.41L12 16l-2.59 2.59L8 17l-4.39 2.37a1 1 0 01-1.44-1.08l1-4.41-3.29-3.2a1 1 0 01.55-1.7l4.41-1L7 5.41a1 1 0 011.8-.18L12 9l3.2-3.77a1 1 0 011.8.18l1.76 4.41 4.41 1a1 1 0 01.55 1.7l-3.29 3.2 1 4.41a1 1 0 01-1.44 1.08z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);

const About = () => {
  const education = [
    {
      degree: "Bachelor of Information Systems",
      institution: "Addis Ababa University",
      year: "2023 - Expected June 2026",
      description: "Coursework: Web Development, Database Management, Software Engineering, System Analysis, Object-Oriented Programming",
    },
  ];

  const certifications = [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2024",
      status: "Completed",
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      year: "Expected November 2025",
      status: "In Progress",
    },
    {
      name: "Front-End Libraries",
      issuer: "freeCodeCamp",
      year: "Expected November 2025",
      status: "In Progress",
    },
  ];

  const internships = [
    {
      position: "Frontend Development Intern",
      company: "Efuye Gela",
      duration: "June 2024 - August 2024",
      description: "Developed 5+ responsive blog post interfaces using React.js and Next.js, improving user engagement by 15%. Tackled front-end library challenges in 2 hackathons, building award-winning prototypes with React and Tailwind CSS. Collaborated with a team of 4 developers to enhance UI/UX for client projects.",
      website: "efuyegela.com",
    },
  ];

  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "Git",
  ];

  // Memoize static arrays
  const memoizedEducation = useMemo(() => education, []);
  const memoizedCertifications = useMemo(() => certifications, []);
  const memoizedInternships = useMemo(() => internships, []);
  const memoizedSkills = useMemo(() => skills, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - UPDATED BACKGROUND */}
      <section aria-labelledby="about-heading" className="bg-gray-50 py-12 sm:py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="about-heading" className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fourth-year Information Systems student and passionate front-end developer, specializing in React.js, Next.js, and front-end library challenges to create accessible, performant web experiences.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Personal Background (No Change) */}
        <section aria-labelledby="background-heading" className="mb-12 sm:mb-16">
          <h2 id="background-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Personal Background
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              I'm Beshah, a fourth-year Information Systems student at Addis Ababa University (graduating June 2026). My passion for front-end development drives me to master React.js, Next.js, and Tailwind CSS through self-directed learning and freeCodeCamp challenges, including front-end library projects like dynamic UI components.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I excel in collaborative settings, leveraging strong problem-solving skills to tackle development challenges. Check out my <Link to="/projects" className="text-blue-700 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50">projects</Link> to see my work with modern front-end libraries!
            </p>
          </div>
        </section>

        {/* Skills (No Change) */}
        <section aria-labelledby="skills-heading" className="mb-12 sm:mb-16">
          <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <CertificateIcon />
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {memoizedSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm sm:text-base font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education (No Change) */}
        <section aria-labelledby="education-heading" className="mb-12 sm:mb-16">
          <h2 id="education-heading" className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <GraduationCapIcon />
            Education
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {memoizedEducation.map((edu, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-blue-700 font-medium mb-2 text-sm sm:text-base">{edu.institution}</p>
                <p className="text-gray-600 text-sm mb-3">{edu.year}</p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications (No Change) */}
        <section aria-labelledby="certifications-heading" className="mb-12 sm:mb-16">
          <h2 id="certifications-heading" className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <CertificateIcon />
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {memoizedCertifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-blue-700 font-medium mb-1 text-sm sm:text-base">{cert.issuer}</p>
                <p className="text-gray-600 text-sm">
                  {cert.year} {cert.status === "In Progress" ? `(In Progress)` : ""}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internships (No Change) */}
        <section aria-labelledby="internships-heading" className="mb-12 sm:mb-16">
          <h2 id="internships-heading" className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <BriefcaseIcon />
            Internships
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {memoizedInternships.map((internship, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{internship.position}</h3>
                <p className="text-blue-700 font-medium mb-2 text-sm sm:text-base">{internship.company}</p>
                <p className="text-gray-600 text-sm mb-3">{internship.duration}</p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed">{internship.description}</p>
                {internship.website && (
                  <a
                    href={`https://${internship.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    Website: {internship.website} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Resume Download - UPDATED BACKGROUND */}
        <section aria-labelledby="resume-heading" className="text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 id="resume-heading" className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Download My Resume
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Explore my full experience, skills, and achievements in detail.
            </p>
            <a
              href="/resume.pdf" // Update with actual path
              download
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-label="Download resume"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;