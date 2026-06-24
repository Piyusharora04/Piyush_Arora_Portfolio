import { motion } from 'framer-motion';
import EducationCard from '../components/EducationCard';
import { education, profile } from '../constants';

const About = () => {
  return (
    <section className="section bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)]" id="about">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-3">About</p>
            <h2 className="heading-lg">A software engineer focused on systems that help teams build faster.</h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-slate-300">
              <p>
                I am an Information Technology graduate from IIIT Una with internship experience at UKG and GetMax Healthcare, working across AI agents, developer tooling, automation, and full-stack applications.
At UKG, I contributed to AI agent platforms by building a Jira Dependency Tracker Agent, implementing an AI Evaluation SDK adopted across production agents, developing automation tooling for the Claude Code Marketplace, and establishing observability solutions using Grafana and Prometheus.
              </p>
              <p>
                Previously, I worked on a multi-tenant healthcare RCM platform using React, Node.js, Express.js, MongoDB, and JWT authentication.
I have solved 750+ DSA problems across LeetCode, GeeksforGeeks, and CodeChef.
              </p>
              <p className="text-slate-400">{profile.availability}</p>
            </div>
          </motion.div>

          <motion.div
            className="spotlight-panel rounded-3xl p-5 sm:p-6 "
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.45, delay: 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-semibold text-white">Education</h3>
            <div className="mt-5 grid gap-4">
              {education.map((item, index) => (
                <EducationCard key={item.id} education={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
