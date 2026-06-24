import {
  Achievement,
  Education,
  Experience,
  Leadership,
  Metric,
  NavLink,
  ProfileLink,
  Project,
  SkillGroup,
} from '../types';

export const profile = {
  name: 'Piyush Arora',
  role: 'Software Engineer',
  headline: 'Building AI Agents, Evaluation frameworks, Plugins, and Scalable Backend Systems',
  location: 'Faridabad, Haryana, India',
  email: 'arorapiyush991@gmail.com',
  phone: '+91 90502-13215',
  phoneHref: 'tel:+919050213215',
  availability:
    'Open to Software Engineer, Backend, Full Stack, and Platform roles across Gurgaon, Noida, Delhi NCR, Bangalore, and Pune.',
  resume:
    'https://drive.google.com/file/d/1QYEgtsAPgh0RaXvi2p6uOqcWi1xGYokl/view?usp=sharing',
  github: 'https://github.com/Piyusharora04',
  linkedin: 'https://www.linkedin.com/in/piyush-arora-363a59265/',
};

export const navLinks: NavLink[] = [
  { id: 'home', title: 'Home' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'skills', title: 'Expertise' },
  { id: 'achievements', title: 'Proof' },
  { id: 'leadership', title: 'Leadership' },
  { id: 'about', title: 'About' },
  { id: 'contact', title: 'Contact' },
];

export const profileLinks: ProfileLink[] = [
  { label: 'Resume', href: profile.resume },
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
];

export const metrics: Metric[] = [
  { value: '60+', label: 'PRs merged across 10+ repos' },
  { value: '750+', label: 'DSA problems solved' },
  { value: '5/5', label: 'UKG manager feedback' },
  { value: '40+', label: 'client organizations supported' },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'UKG',
    role: 'Software Engineering Intern',
    period: 'Jan 2026 - Jul 2026',
    team: '',
    summary:
      'Worked on production AI agent systems, evaluation framworks, building end to end plugins, observability, and platform engineering initiatives.',
    highlights: [
      'Built a Jira Dependency Tracker Agent with Python, React, JQL, and Jira REST APIs.',
      'Contributed to an AI evaluation SDK used across multiple internal AI agents.',
      'Built a framework upgrade automation plugin for the Claude Code Marketplace.',
      'Worked with GitHub APIs, Docker validation, GitHub Actions, Grafana, and Prometheus.',
      'Merged 60+ PRs across 10+ repositories and received 5/5 manager feedback.',
    ],
    tech: ['Python', 'React', 'JQL', 'REST APIs', 'Docker', 'GitHub Actions', 'Grafana', 'Prometheus', 'LLM Evaluation', 'Claude Plugins', 'Prompt Engineering'],
  },
  {
    id: 2,
    company: 'Getmax Healthcare Solutions',
    role: 'Software Development Engineer Intern',
    period: 'June 2025 -  Nov 2025',
    summary:
      'Built product modules for a multi-tenant healthcare RCM platform used for client and operational workflows.',
    highlights: [
      'Developed dashboard and client management modules with React, Node.js, Express.js, and MongoDB.',
      'Implemented JWT-backed flows for a healthcare operations platform.',
      'Supported onboarding and workflow needs for 40+ client organizations.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Docker'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'CodeCollab',
    subtitle: 'Real-Time Code Collaboration Platform',
    description:
      'Collaborative coding rooms with live synchronization, multi-language execution, and a Dockerized runtime.',
    impact: [
      'Real-time shared coding rooms with WebSocket synchronization.',
      'Supports 8+ programming languages and concurrent code execution.',
      'Combines React, Node.js, Express, MongoDB, Docker, and FastAPI.',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'Docker', 'FastAPI'],
    codeLink: 'https://github.com/Piyusharora04/CodeCollab',
  },
  {
    id: 2,
    title: 'DeepDoc',
    subtitle: 'AI-Powered PDF Intelligence System',
    description:
      'RAG-based document intelligence system for querying, summarizing, and retrieving answers from large PDF collections.',
    impact: [
      'Processes 500+ pages with semantic retrieval and document QA.',
      'Uses ChromaDB, embedding retrieval, Streamlit, and LaMini-T5.',
      'Designed around practical PDF summarization and multi-document question answering.',
    ],
    tags: ['RAG', 'ChromaDB', 'Streamlit', 'LaMini-T5', 'Embedding Retrieval'],
    codeLink: 'https://github.com/Piyusharora04/PDF-Query-Indexing-and-Summarizer',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    description: 'Strong foundation for backend systems, product engineering, and algorithmic problem solving.',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++'],
  },
  {
    title: 'Frontend',
    description: 'Production-minded interfaces with modern React ecosystems and accessible interaction patterns.',
    skills: ['React', 'Angular', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    title: 'Backend & APIs',
    description: 'REST APIs, service logic, authentication, and real-time systems.',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets', 'OAuth2', 'JWT'],
  },
  {
    title: 'AI Systems',
    description: 'Applied AI agent development, retrieval pipelines, evaluation, and observability workflows.',
    skills: ['Agent Development', 'RAG', 'LangChain', 'Arize Phoenix', 'LLM Evaluation', 'Prompt Engineering'],
  },
  {
    title: 'Data Stores',
    description: 'Document, relational, graph, and app-native data layers.',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Postgres', 'ChromaDB'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Containerized validation, CI/CD, monitoring and platform engineering.',
    skills: ['Docker', 'GitHub Actions', 'Grafana', 'Prometheus', 'GCP', 'CI/CD', 'Git', 'Postman'],
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: '750+ DSA problems solved',
    detail: 'Consistent problem-solving practice across data structures, algorithms, and coding interview patterns.',
  },
  {
    id: 2,
    title: '4th place in ICPC-style programming contest',
    detail: 'Competitive programming performance in a timed team problem-solving environment.',
  },
  {
    id: 3,
    title: 'Top 5 finalist in AI/ML Quiz',
    detail: 'Placed among the top finalists from 50+ participants.',
  },
];

export const leadership: Leadership = {
  role: 'Vice President',
  organization: 'ASTRAL Club, IIIT Una',
  highlights: [
    'Conducted outreach workshops across 5+ schools.',
    'Engaged 300+ students and 80+ villagers.',
    'Organized science and cybersecurity awareness initiatives.',
  ],
};

export const education: Education[] = [
  {
    id: 1,
    degree: 'B.Tech Information Technology',
    institution: 'IIIT Una',
    period: '2022 - 2026',
    detail: 'CGPA: 8.65/10',
  },
  {
    id: 2,
    degree: 'Class XII',
    institution: 'Vidya Mandir Public School',
    period: '2021 - 2022',
    detail: '95%',
  },
];
