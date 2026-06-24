import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      emailjs
        .send(
          'service_zpifn18',
          'template_ya20ahf',
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          'HB-vkSovgpqDhpvrB',
        )
        .then(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            message: '',
          });

          setTimeout(() => setSubmitSuccess(false), 5000);
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          alert('Something went wrong. Please try again.');
          setIsSubmitting(false);
        });
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-2xl border bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-cyan-300 ${
      hasError ? 'border-red-400' : 'border-white/10 focus:border-cyan-300'
    }`;

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {submitSuccess ? (
        <motion.div
          className="mb-5 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-sm text-emerald-100"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Thanks for your message. I will get back to you soon.
        </motion.div>
      ) : null}

      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass(Boolean(errors.name))}
            placeholder="Your name"
          />
          {errors.name ? <p className="mt-1 text-sm text-red-300">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass(Boolean(errors.email))}
            placeholder="your.email@example.com"
          />
          {errors.email ? <p className="mt-1 text-sm text-red-300">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={inputClass(Boolean(errors.message))}
            placeholder="Tell me about the role, team, or opportunity"
          />
          {errors.message ? <p className="mt-1 text-sm text-red-300">{errors.message}</p> : null}
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 rounded-full border-2 border-slate-950/30 border-t-slate-950 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send message <Send size={17} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
