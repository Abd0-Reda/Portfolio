import natureHome from '../assets/projects/nature/nature-home.png';
import natureProducts from '../assets/projects/nature/nature-products.png';
import natureProductDetails from '../assets/projects/nature/nature-product-details.png';

import cinemaHome from '../assets/projects/cinema/Home cinema.png';
import cinemaProducts from '../assets/projects/cinema/Products cinema.png';
import cinemaDetails from '../assets/projects/cinema/Details cinema.png';
import cinemaBooking from '../assets/projects/cinema/Booking cinema.png';
import cinemaDashboard from '../assets/projects/cinema/dashboard cinema.jpg';

import homeServiceDashboard from '../assets/projects/home_service/dashboard home.png';
import homeServiceMain from '../assets/projects/home_service/main home.png';
import homeServiceProfile from '../assets/projects/home_service/profile home.png';
import homeServiceServices from '../assets/projects/home_service/services home.png';

export const MARQUEE_IMAGES = [
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=900&q=80',
];

export const MARQUEE_ROW_1 = MARQUEE_IMAGES.slice(0, 6);
export const MARQUEE_ROW_2 = MARQUEE_IMAGES.slice(6);

export interface Service {
  number: string;
  name: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Web Development',
    description:
      'Building responsive, modern web applications with clean architecture, practical UX, and maintainable code.',
  },
  {
    number: '02',
    name: 'Backend Development',
    description:
      'Developing application logic, APIs, authentication, and database-driven systems using .NET, Django, and Flask.',
  },
  {
    number: '03',
    name: 'Frontend Development',
    description:
      'Creating clear and interactive interfaces with HTML, CSS, JavaScript, Bootstrap, and modern development practices.',
  },
  {
    number: '04',
    name: 'Database Solutions',
    description:
      'Designing and working with relational databases, SQL queries, data models, and SQL Server-backed applications.',
  },
  {
    number: '05',
    name: 'Problem Solving',
    description:
      'Breaking complex technical problems into smaller, understandable steps and building reliable solutions one piece at a time.',
  },
];

export interface SkillCategory {
  title: string;
  description: string;
  tools: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: '.NET Full Stack',
    description:
      'Building full-stack web applications using C#, .NET, SQL Server, and modern frontend technologies.',
    tools: [
      '.NET',
      'C#',
      'SQL Server',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
    ],
  },
  {
    title: 'Django Full Stack',
    description:
      'Developing full-stack web applications with Python, Django, databases, and responsive frontend technologies.',
    tools: [
      'Python',
      'Django',
      'SQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
    ],
  },
  {
    title: 'Tools & Workflow',
    description:
      'Using modern development tools to write, test, version, and maintain projects efficiently.',
    tools: ['Git', 'GitHub', 'VS Code', 'Visual Studio'],
  },
];

export interface ExperienceItem {
  role: string;
  place: string;
  period: string;
  description: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Computer Science Student',
    place: 'Minia University',
    period: '2024 — Present',
    description:
      'Studying computer science while building practical software projects and strengthening programming, database, and web development skills.',
  },
  {
    role: 'Full Stack Python Trainee',
    place: 'ITI Minya',
    period: 'July 2025 - August 2025',
    description:
      'Studied Python and Django through practical training, working with SQL, HTML, CSS, JavaScript, and Bootstrap to build complete web applications.',
  },
  {
    role: 'Software Development Projects',
    place: 'Personal & Academic Work',
    period: 'Ongoing',
    description:
      'Building and improving web applications while exploring .NET, C#, SQL Server, Python, Django, Flask, Git, and GitHub.',
  },
  {
    role: 'Bachelor of Computer Science',
    place: 'Minia University',
    period: 'Expected Graduation',
    description:
      'Focused on programming, software development, databases, problem solving, and core computer science concepts.',
  },
];

/* =========================================================
   PROJECTS
========================================================= */

export interface Project {
  number: string;
  category: 'Client' | 'Personal' | 'Academic';
  name: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  detailsImages?: string[];
  github?: string;
  live?: string;
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Personal',
    name: 'Nature E-Commerce',

    description:
      'A full-stack e-commerce web application built to provide a structured and user-friendly shopping experience with product management and database-driven functionality.',

    role:
      'Full-stack development, backend implementation, database integration, and frontend development.',

    technologies: [
      'Python',
      'Django',
      'SQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
    ],

    features: [
      'Product management',
      'Product categories',
      'Product details',
      'Database integration',
      'Responsive interface',
    ],

    col1Image1: natureProductDetails,
    col1Image2: natureProducts,
    col2Image: natureHome,

    detailsImages: [
      natureHome,
      natureProducts,
      natureProductDetails,
    ],

    github: 'https://github.com/Abd0-Reda/Nature',
  },

  {
    number: '02',
    category: 'Personal',
    name: 'Cinema Booking System',

    description:
      'A full-stack cinema booking system built with Django that allows users to browse movies, view showtimes, select seats, and manage their bookings through a complete web-based experience.',

    role:
      'Full-stack development, Django backend implementation, database integration, authentication, booking system, and frontend development.',

    technologies: [
      'Python',
      'Django',
      'SQLite',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Django Templates',
      'Pillow',
    ],

    features: [
      'User registration and login',
      'Movie browsing and details',
      'Movie categories and showtimes',
      'Regular and VIP seat selection',
      'Duplicate seat booking prevention',
      'Automatic booking total calculation',
      'User booking and ticket history',
      'Staff dashboard',
      'Movie and showtime management',
      'Booking statistics and revenue tracking',
    ],

    col1Image1: cinemaDetails,
    col1Image2: cinemaProducts,
    col2Image: cinemaHome,

    detailsImages: [
      cinemaHome,
      cinemaProducts,
      cinemaDetails,
      cinemaBooking,
      cinemaDashboard,
    ],

    github: 'https://github.com/Abd0-Reda/Cenima_project',
  },

  {
  number: '03',
  category: 'Personal',
  name: 'Home Service App',

  description:
    'A full-stack home service application built with Flask that allows users to explore home services, submit service requests, manage their profiles, and handle bookings through a web-based platform.',

  role:
    'Full-stack development, Flask backend implementation, database integration, authentication, service booking system, and frontend development.',

  technologies: [
    'Python',
    'Flask',
    'SQL',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Jinja2 Templates',
    'Bootstrap',
  ],

  features: [
    'User registration and login',
    'Home services browsing',
    'Service details and categories',
    'Service booking and requests',
    'User profile management',
    'Order management',
    'Admin dashboard',
    'Database integration',
    'Responsive user interface',
  ],

  col1Image1: homeServiceProfile,
  col1Image2: homeServiceServices,
  col2Image: homeServiceMain,

  detailsImages: [
    homeServiceMain,
    homeServiceServices,
    homeServiceDashboard,
    homeServiceProfile,
  ],

  github: 'https://github.com/Abd0-Reda/home_service_app',
},
];

export const PORTFOLIO = {
  name: 'Abdelrhman Reda',
  role: 'Software Engineer / Web Developer',
  description:
    'I build practical web applications by turning complex problems into clean, reliable, and user-friendly software.',
  email: 'abdelrhmanreda818@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abdelrhmanreda0/',
  github: 'https://github.com/Abd0-Reda',
  phone: '+2 1024058019',
  university: 'Minia University',
  major: 'Computer Science',
  education: 'Bachelor of Computer Science',
};