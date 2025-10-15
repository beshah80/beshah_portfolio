import {
    faChartLine,
    faCheckCircle,
    faClock,
    faCode,
    faCog,
    faMobile,
    faPalette,
    faRocket,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      icon: faCode,
      description: "Modern, responsive web applications built with React, TypeScript, and cutting-edge technologies for optimal performance and user experience.",
      features: [
        "React & Next.js Development",
        "Responsive Web Design",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Modern JavaScript (ES6+)",
        "State Management (Redux, Context)"
      ],
      price: "Starting at $50/hour",
      delivery: "2-4 weeks"
    },
    {
      id: 2,
      title: "UI/UX Design",
      icon: faPalette,
      description: "User-centered design solutions that combine aesthetics with functionality to create intuitive and engaging digital experiences.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Mobile-First Approach",
        "Usability Testing"
      ],
      price: "Starting at $40/hour",
      delivery: "1-3 weeks"
    },
    {
      id: 3,
      title: "Full-Stack Development",
      icon: faCog,
      description: "End-to-end web application development from database design to deployment, ensuring scalability and maintainability.",
      features: [
        "Backend API Development",
        "Database Design & Management",
        "Authentication & Security",
        "Cloud Deployment",
        "Performance Monitoring",
        "Code Review & Testing"
      ],
      price: "Starting at $60/hour",
      delivery: "4-8 weeks"
    },
    {
      id: 4,
      title: "Mobile App Development",
      icon: faMobile,
      description: "Cross-platform mobile applications using React Native, delivering native performance with shared codebase efficiency.",
      features: [
        "React Native Development",
        "iOS & Android Apps",
        "Push Notifications",
        "Offline Functionality",
        "App Store Deployment",
        "Performance Optimization"
      ],
      price: "Starting at $55/hour",
      delivery: "6-12 weeks"
    },
    {
      id: 5,
      title: "Website Optimization",
      icon: faRocket,
      description: "Performance optimization and SEO enhancement to improve your website's speed, visibility, and user engagement.",
      features: [
        "Performance Auditing",
        "SEO Optimization",
        "Core Web Vitals",
        "Image Optimization",
        "Caching Strategies",
        "Analytics Integration"
      ],
      price: "Starting at $35/hour",
      delivery: "1-2 weeks"
    },
    {
      id: 6,
      title: "Technical Consulting",
      icon: faUsers,
      description: "Expert guidance on technology choices, architecture decisions, and best practices for your development projects.",
      features: [
        "Technology Stack Selection",
        "Architecture Planning",
        "Code Review",
        "Team Training",
        "Best Practices",
        "Technical Documentation"
      ],
      price: "Starting at $75/hour",
      delivery: "Flexible"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We start by understanding your requirements, goals, and target audience to create a comprehensive project plan.",
      icon: faUsers
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes to visualize the final product before development.",
      icon: faPalette
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Build your application using modern technologies and best practices, with continuous testing and quality assurance.",
      icon: faCode
    },
    {
      step: 4,
      title: "Launch & Support",
      description: "Deploy your application and provide ongoing support, maintenance, and updates to ensure optimal performance.",
      icon: faRocket
    }
  ];

  const benefits = [
    {
      icon: faCheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing and code review processes ensure high-quality, bug-free applications."
    },
    {
      icon: faClock,
      title: "Timely Delivery",
      description: "Commitment to meeting deadlines while maintaining the highest standards of quality."
    },
    {
      icon: faUsers,
      title: "Collaborative Approach",
      description: "Regular communication and collaboration throughout the development process."
    },
    {
      icon: faChartLine,
      title: "Scalable Solutions",
      description: "Build applications that can grow with your business needs and handle increased traffic."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Services
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development and design services to bring your digital vision to life. 
              From concept to deployment, I'm here to help you succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Services Grid */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            What I Offer
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={service.icon} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 w-4 h-4" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">Starting Price</span>
                    <span className="font-bold text-purple-600">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Delivery Time</span>
                    <span className="font-medium text-gray-700">{service.delivery}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            My Work Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={step.icon} className="text-white text-2xl" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Me?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={benefit.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. 
              I'm here to help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get a Quote
              </a>
              <a
                href="/projects"
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
