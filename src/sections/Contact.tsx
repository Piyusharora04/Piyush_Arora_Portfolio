import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section bg-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-dark-300">
            Have a project in mind or want to explore opportunities? Feel free to reach out.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-500" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-dark-300">arorapiyush991@gmail.com</p>
                  <a href="mailto:arorapiyush991@gmail.com" className="text-primary-500 hover:underline mt-1 inline-block">
                    Send an email
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-500" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Phone</h3>
                  <p className="text-dark-300">+91 90502-13215</p>
                  <a href="tel:+919050213215" className="text-primary-500 hover:underline mt-1 inline-block">
                    Call me
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-500" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Location</h3>
                  <p className="text-dark-300">Faridabad, Hry, India</p>
                  <p className="text-dark-400 mt-1">Available for remote work worldwide</p>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Availability</h3>
                <div className="space-y-2 text-dark-400">
                  <p>Open to SDE role and Full Stack Development Internships.</p>
                  <p>Available for AI/ML Research Roles & Open Source Collaboration</p>
                  <p>Currently exploring real-time systems and AI integration</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;