import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (validateForm()) {
    setIsSubmitting(true);

    emailjs
      .send(
        'service_r47bk47',       // e.g., 'service_xxx123'
        'template_ya20ahf',      // e.g., 'template_abc456'
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'HB-vkSovgpqDhpvrB'        // e.g., '9A2kKXXXXePq-XXX'
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });

        // Optional: hide success after 5s
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Something went wrong. Please try again.');
        setIsSubmitting(false);
      });
  }
};


  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {submitSuccess ? (
        <motion.div 
          className="bg-success-50 text-success-500 p-4 rounded-lg mb-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Thanks for your message! I'll get back to you soon.
        </motion.div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-dark-500">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-sm text-error-500">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 text-dark-500">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-error-500">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2 text-dark-500">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="Your message"
          />
          {errors.message && <p className="mt-1 text-sm text-error-500">{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={18} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;