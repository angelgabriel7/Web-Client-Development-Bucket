// src/pages/LandingPage/index.tsx
import { motion } from "framer-motion";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Card from "../../components/Card";
import heroImage from './imagehero.png';

const LandingPage = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We build responsive, scalable websites that deliver exceptional user experiences.",
      icon: "🖥️"
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Thoughtful user interface design focused on enhancing user experience.",
      icon: "🎨"
    },
    {
      id: 4,
      title: "SEO Optimization",
      description: "Improve your visibility in search engines and drive more traffic.",
      icon: "🔍"
    }
  ];

  const features = [
    "Modern, responsive designs",
    "Fast, optimized performance",
    "SEO best practices built-in",
    "Secure development process",
    "Ongoing support and maintenance",
    "Accessibility compliance"
  ];

  return (
    <div className="bg-gray-50">
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Building Digital Experiences That Matter
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                We create stunning websites and applications that help your business grow and succeed in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button size="large">
                  Get Started
                </Button>
                <Button variant="outline" size="large">
                  Learn More
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src={heroImage}
                  alt="Hero Illustration" 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive in today's competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link to="/contact" className="inline-flex items-center text-indigo-600 mt-4 hover:text-indigo-700">
                    Learn more <FiArrowRight className="ml-1" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
            >
              <img 
                src="https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=Features+Image" 
                alt="Features Illustration" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 mb-6">
                We believe in creating solutions that not only look great but also deliver real business results. Here's what sets us apart:
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FiCheck className="text-green-500 mt-1 mr-2" size={18} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/contact">
                  <Button>Contact Us Today</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let's talk about how we can help you achieve your digital goals. Get in touch with our team today.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="large">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;