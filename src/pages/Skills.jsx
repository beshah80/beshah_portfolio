import {
    faCss3,
    faGitAlt,
    faGithub,
    faHtml5,
    faJs,
    faNpm,
    faReact
} from "@fortawesome/free-brands-svg-icons";
import {
    faCode,
    faDatabase,
    faMobile,
    faPalette,
    faTools
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Frontend Development",
      icon: faPalette,
      skills: [
        { name: "React.js", icon: faReact, level: 90 },
        { name: "Next.js", icon: faCode, level: 85 },
        { name: "JavaScript", icon: faJs, level: 85 },
        { name: "HTML5", icon: faHtml5, level: 95 },
        { name: "CSS3", icon: faCss3, level: 90 },
        { name: "Tailwind CSS", icon: faPalette, level: 88 },
        { name: "Bootstrap", icon: faPalette, level: 85 }
      ]
    },
    {
      category: "Programming Languages",
      icon: faCode,
      skills: [
        { name: "C++", icon: faCode, level: 70 },
        { name: "C#", icon: faCode, level: 65 },
        { name: "Java", icon: faCode, level: 70 },
        { name: "PHP", icon: faCode, level: 75 },
        { name: "MySQL", icon: faDatabase, level: 80 },
        { name: "SQL", icon: faDatabase, level: 80 }
      ]
    },
    {
      category: "Computer Science",
      icon: faTools,
      skills: [
        { name: "Data Structures", icon: faCode, level: 75 },
        { name: "Algorithms", icon: faCode, level: 70 },
        { name: "System Analysis", icon: faTools, level: 80 },
        { name: "Operating Systems", icon: faTools, level: 70 }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: faTools,
      skills: [
        { name: "Git", icon: faGitAlt, level: 85 },
        { name: "GitHub", icon: faGithub, level: 90 },
        { name: "npm/yarn", icon: faNpm, level: 85 },
        { name: "Responsive Design", icon: faMobile, level: 90 },
        { name: "UI/UX Design", icon: faPalette, level: 75 }
      ]
    }
  ];

  const softSkills = [
    { name: "Teamwork", level: 90 },
    { name: "Communication", level: 88 },
    { name: "Problem Solving", level: 85 },
    { name: "Time Management", level: 85 },
    { name: "Adaptability", level: 88 },
    { name: "Leadership", level: 80 }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2024"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2023"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2023"
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2022"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Skills & Expertise
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills, tools, and certifications 
              in modern web development and design.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Technical Skills */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {technicalSkills.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <FontAwesomeIcon icon={category.icon} className="text-blue-600 text-2xl" />
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <FontAwesomeIcon icon={skill.icon} className="text-gray-600 w-5 h-5" />
                          <span className="font-medium text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Soft Skills
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faCode} className="text-white text-2xl" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm passionate about staying up-to-date with the latest technologies and best practices. 
              Currently learning about advanced React patterns, cloud computing, and emerging web technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                Next.js
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                GraphQL
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                Microservices
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                DevOps
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
