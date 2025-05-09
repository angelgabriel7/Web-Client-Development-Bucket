    // src/components/Footer/index.tsx
import { Link } from "react-router-dom";
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin,
  FiMapPin,
  FiPhone,
  FiMail
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/team" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" }
    ],
    services: [
      { name: "Web Development", path: "/services/web-development" },
      { name: "Mobile Apps", path: "/services/mobile-apps" },
      { name: "UI/UX Design", path: "/services/design" },
      { name: "SEO Optimization", path: "/services/seo" }
    ],
    legal: [
      { name: "Terms of Service", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Cookie Policy", path: "/cookies" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <p className="text-gray-400 mb-4">
              We create digital experiences that help businesses grow and succeed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="text-gray-400 mt-1 mr-3" />
                <span className="text-gray-400">
                  123 Business Avenue, Suite 201<br />Jakarta, Indonesia 12345
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-gray-400 mr-3" />
                <span className="text-gray-400">+62 (21) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <FiMail className="text-gray-400 mr-3" />
                <span className="text-gray-400">info@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Company Name. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.legal.map((link, index) => (
              <Link key={index} to={link.path} className="text-gray-400 text-sm hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;