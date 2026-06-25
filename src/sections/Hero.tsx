import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, Github, Linkedin, Mail, MapPin, Radio, Sparkles, Terminal } from 'lucide-react';
import { metrics, profile } from '../constants';

const systemSignals = [
  'Jira Agent',
  'AI Evaluation SDK',
  'Claude Plugins',
  'Observability and monitoring',
];

const terminalLines = [
  { prompt: 'role.fit()', value: 'Software Engineer / Full Stack Developer / AI Engineer' },
  { prompt: 'impact.scan()', value: '60+ PRs across 10+ repositories' },
  { prompt: 'systems.focus()', value: 'AI agents, APIs, observability, Plugins' },
];

const Hero = () => {
  return (
    <section className="section hero-stage pt-24 lg:min-h-screen lg:pt-28" id="home">
      <div className="animated-grid absolute inset-0 opacity-70" />
      <div className="aurora-band absolute left-[-18%] top-20 h-48 w-[140%] rotate-[-8deg]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

      <div className="section-shell relative">
        <div className="grid items-center gap-10 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              className="mb-5 inline-flex w-fit max-w-full flex-wrap items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs sm:text-sm text-cyan-50 shadow-lg shadow-cyan-950/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <Radio size={14} className="shrink-0 text-emerald-300" />
              <span>Open to SDE, Full Stack Developer, AI Engineer roles</span>
            </motion.div>

            <motion.p
              className="eyebrow mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
            >
              {profile.role}
            </motion.p>
            <motion.h1
              className="heading-xl max-w-3xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
            >
              Building AI Agents, AI Developer tooling and Scalable Backend Systems
            </motion.h1>
            <motion.p
              className="body-copy mt-5 max-w-xl text-slate-300"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.36 }}
            >
              I build AI agents, developer tools, backend services, and real-time systems with a focus on production engineering, observability, and scalable APIs.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.44 }}
            >
              <a className="btn-primary w-full justify-center sm:w-auto" href={profile.resume} target="_blank" rel="noreferrer">
                Resume <ArrowDown size={17} />
              </a>
              <a className="btn-secondary w-full justify-center sm:w-auto" href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a className="btn-secondary w-full justify-center sm:w-auto" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
              <a className="btn-ghost w-full justify-center sm:w-auto" href={`mailto:${profile.email}`}>
                <Mail size={17} /> Contact
              </a>
            </motion.div>

            <motion.div
              className="mt-7 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.52 }}
            >
              <span className="chip">
                <MapPin size={13} /> {profile.location}
              </span>
              {systemSignals.map((signal) => (
                <span className="chip" key={signal}>
                  <Sparkles size={13} /> {signal}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-2 lg:mt-0"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
          >
            <div className="float-slow absolute -left-4 top-8 hidden rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:block">
              <p className="text-xs text-slate-400">Manager feedback</p>
              <p className="mt-1 text-lg font-semibold text-white">5/5</p>
            </div>
            <div className="float-delay absolute -right-2 bottom-16 hidden rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-2xl shadow-violet-950/30 backdrop-blur-xl md:block">
              <p className="text-xs text-slate-400">Merged output</p>
              <p className="mt-1 text-lg font-semibold text-white">60+ PRs</p>
            </div>

            <div className="terminal-glow relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/86 p-3 backdrop-blur-2xl sm:p-5">
              <div className="scan-line absolute left-0 top-0 h-px w-full" />
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  <CheckCircle2 size={13} /> Ready for interviews
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/35 p-3 sm:p-4 font-mono">
                <div className="mb-4 flex items-center gap-2 text-xs sm:text-sm text-cyan-200">
                  <Terminal size={16} />
                  piyush.profile
                </div>
                <div className="space-y-3">
                  {terminalLines.map((line, index) => (
                    <motion.div
                      key={line.prompt}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.38, delay: 0.55 + index * 0.12 }}
                    >
                      <p className="text-xs text-slate-500">$ {line.prompt}</p>
                      <p className="mt-1 text-xs sm:text-sm text-slate-100">{line.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="spotlight-panel rounded-2xl p-4 sm:p-4"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.38, delay: 0.72 + index * 0.08 }}
                    whileHover={{ y: -4, scale: 1.015 }}
                  >
                    <div className="text-3xl sm:text-2xl font-semibold text-white">{metric.value}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-400">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
