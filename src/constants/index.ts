import { NavLink, Project, Skill, Experience, Education, Testimonial } from '../types';

export const navLinks: NavLink[] = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  // {
  //   id: 'experience',
  //   title: 'Experience',
  // },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const skills: Skill[] = [
  {
    name: 'DSA & Problem Solving',
    level: 95,
    color: 'bg-primary-900',
  },
  {
    name: 'React.js',
    level: 90,
    color: 'bg-primary-500',
  },
  {
    name: 'Node.js',
    level: 85,
    color: 'bg-secondary-500',
  },
  {
    name: 'MongoDB',
    level: 80,
    color: 'bg-accent-500',
  },
  {
    name: 'Express.js',
    level: 85,
    color: 'bg-primary-600',
  },
  {
    name: 'FastAPI',
    level: 80,
    color: 'bg-secondary-600',
  },
  {
    name: 'Docker',
    level: 75,
    color: 'bg-accent-600',
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    color: 'bg-primary-700',
  },
  {
    name: 'JavaScript/TypeScript',
    level: 85,
    color: 'bg-secondary-700',
  },
  {
    name: 'HTML/CSS',
    level: 95,
    color: 'bg-accent-700',
  },
  {
    name: 'WebSockets',
    level: 70,
    color: 'bg-primary-800',
  },
  {
    name: 'Github',
    level: 80,
    color: 'bg-secondary-800',
  },
];


export const projects: Project[] = [
  {
    id: 1,
    title: 'CodeCollab',
    description: 'A real-time code collaboration platform with multi-language execution, and synchronized code sharing.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'WebSockets', 'FastAPI', 'Docker', 'MongoDB'],
    demoLink: 'https://github.com/Piyusharora04/CodeCollab',
    codeLink: 'https://github.com/Piyusharora04/CodeCollab',
  },
  {
    id: 2,
    title: 'QuickTube',
    description: 'A Streamlit app that summarizes YouTube videos and performs sentiment analysis on comments using NLP and LLMs.',
    image: 'https://images.pexels.com/photos/5077064/pexels-photo-5077064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['LLM', 'YouTube API', 'NLP', 'Streamlit', 'Python'],
    demoLink: 'https://github.com/Piyusharora04/YT-Video-summarizer-and-Comment-Analyzer',
    codeLink: 'https://github.com/Piyusharora04/YT-Video-summarizer-and-Comment-Analyzer',
  },
  {
    id: 3,
    title: 'DeepDoc',
    description: 'A web app to Query and Summarize large PDFs using RAG indexing, and ChromaDB.',
    image: 'https://images.pexels.com/photos/272980/pexels-photo-272980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Streamlit', 'RAG', 'LangChain', 'Hugging Face', 'Python'],
    demoLink: 'https://github.com/Piyusharora04/PDF-Query-Indexing-and-Summarizer',
    codeLink: 'https://github.com/Piyusharora04/PDF-Query-Indexing-and-Summarizer',
  },
  {
    id: 4,
    title: 'Recipe Recommendation API',
    description: 'A Flask-based API that recommends recipes using content-based filtering with TF-IDF and cosine similarity.',
    image: 'https://images.pexels.com/photos/4033639/pexels-photo-4033639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Flask', 'TF-IDF', 'Cosine Similarity', 'Recommendation System'],
    demoLink: 'https://github.com/Piyusharora04/trial_recipe_api',
    codeLink: 'https://github.com/Piyusharora04/trial_recipe_api',
  },
];


export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    period: '2021 - Present',
    description: 'Led development of major features for the company\'s flagship product. Implemented performance optimizations that improved load times by 40%. Mentored junior developers and established best practices for the frontend team.',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'WebSolutions Ltd.',
    period: '2018 - 2021',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with UX designers to implement pixel-perfect interfaces. Contributed to the company\'s component library.',
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'StartupHub',
    period: '2016 - 2018',
    description: 'Built and maintained multiple client websites. Worked with a variety of technologies including HTML, CSS, JavaScript, and WordPress. Participated in agile development cycles.',
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology (B.Tech) in Information Technology',
    institution: 'Indian Institute of Information Technology Una',
    period: '2022 - 2026',
    description: 'Currently pursuing B.Tech in IT branch with a focus on software development, problem-solving, and machine learning. Actively involved in technical clubs, project development, and hackathons.',
  },
  {
    id: 2,
    degree: 'Class 12th',
    institution: 'Vidya Mandir Public School',
    period: '2021 - 2022',
    description: 'Completed Class 12 with PCM and Computer Science. Developed early interest in programming, laying the groundwork for a future in software engineering.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'TechCorp Inc.',
    text: 'An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Product Manager',
    company: 'WebSolutions Ltd.',
    text: 'Working with this developer was a pleasure. They understand business needs and translate them into elegant technical solutions.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Design Director',
    company: 'CreativeLab',
    text: 'A rare talent who excels at both technical implementation and understanding design principles. They made our designs come to life beautifully.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];