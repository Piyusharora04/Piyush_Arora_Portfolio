import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { profile } from '../constants';

const Contact = () => {
  return (
    <section className="section bg-slate-950" id="contact">
      <div className="animated-grid absolute inset-0 opacity-25" />
      <div className="section-shell">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="heading-lg">Hiring for Software Engineer - 1 , full-stack, or AI Tooling roles?</h2>
          <p className="body-copy mt-4">
            Reach out for Software Engineer opportunities across Gurgaon, Noida, Delhi NCR, Bangalore, and Pune.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="spotlight-panel rounded-3xl p-5 sm:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4">
              <a className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-cyan-300/40" href={`mailto:${profile.email}`}>
                <Mail className="mb-3 text-cyan-200" size={22} />
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-1 break-words font-medium text-white">{profile.email}</p>
              </a>
              <a className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-cyan-300/40" href={profile.phoneHref}>
                <Phone className="mb-3 text-cyan-200" size={22} />
                <p className="text-sm text-slate-400">Phone</p>
                <p className="mt-1 font-medium text-white">{profile.phone}</p>
              </a>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <MapPin className="mb-3 text-cyan-200" size={22} />
                <p className="text-sm text-slate-400">Location</p>
                <p className="mt-1 font-medium text-white">{profile.location}</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <div className="flex items-start gap-3">
                <Send className="mt-0.5 shrink-0 text-cyan-200" size={18} />
                <p className="text-sm leading-6 text-cyan-50">{profile.availability}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="spotlight-panel rounded-3xl p-5 sm:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 text-2xl font-semibold text-white">Send a message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
