import { faGithub as faGithubBrand, faLinkedin as faLinkedinBrand, faTwitter as faTwitterBrand } from "@fortawesome/free-brands-svg-icons";
import {
    faCheckCircle,
    faEnvelope,
    faMapMarkerAlt,
    faPaperPlane,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      details: "beshah.ashenafi369@gmail.com",
      link: "mailto:beshah.ashenafi369@gmail.com"
    },
    {
      icon: faPhone,
      title: "Phone",
      details: "+251(0)948100497",
      link: "tel:+251948100497"
    },
    {
      icon: faMapMarkerAlt,
      title: "Location",
      details: "Addis Ababa, Ethiopia",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: faLinkedinBrand,
      name: "LinkedIn",
      url: "https://linkedin.com/in/beshah-ashenafi",
      color: "hover:text-blue-600"
    },
    {
      icon: faGithubBrand,
      name: "GitHub",
      url: "https://github.com/beshah80",
      color: "hover:text-gray-800"
    },
    {
      icon: faTwitterBrand,
      name: "Upwork",
      url: "https://upwork.com/freelancers/beshahashenafi",
      color: "hover:text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? I'd love to hear from you. 
              Send me a message and I'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Let's Connect
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Whether you have a question, want to discuss a project, or just want to say hi, 
              feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={info.icon} className="text-white text-sm sm:text-base" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{info.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Follow Me</h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 ${social.color}`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-lg sm:text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Send Me a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for your message. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 text-sm sm:text-base"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Response Time
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              I typically respond to all inquiries within 24 hours. For urgent matters, 
              feel free to call or text me directly.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1 sm:mb-2">&lt; 24h</div>
                <div className="text-gray-600 text-sm sm:text-base">Email Response</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1 sm:mb-2">1-2 days</div>
                <div className="text-gray-600 text-sm sm:text-base">Project Discussion</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1 sm:mb-2">Same day</div>
                <div className="text-gray-600 text-sm sm:text-base">Urgent Requests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
