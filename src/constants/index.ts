import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: ".NET Developer",
    icon: backend,
  },
  {
    title: "Cloud Solutions Architect",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "B.Tech Computer Science Student",
    companyName: "Walchand College of Engineering",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2023 - 2026",
    points: [
      "Pursuing B.Tech in Computer Science and Engineering with CGPA of 8.87",
      "Strong foundation in Data Structures & Algorithms, OOPs, Operating Systems, Computer Networks, and DBMS",
      "Active participant in competitive programming with 5★ rating on CodeChef",
      "Developed multiple full-stack projects using modern web technologies and microservices architecture"
    ],
  },
  {
    title: "Diploma in Information Technology",
    companyName: "Government Polytechnic, Kolhapur",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2020 - 2023",
    points: [
      "Completed Diploma in Information Technology with 96.12% aggregate",
      "Built strong foundation in programming fundamentals and software development",
      "Participated in various coding competitions and hackathons",
      "Developed early projects in web development and software engineering"
    ],
  },
  {
    title: "ICPC Regionalist & Competitive Programmer",
    companyName: "Competitive Programming",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "ICPC 2024 Regionalist with AIR 79 in Kanpur Regionals and AIR 85 in Amritapuri Multisite Regionals",
      "CodeChef 5★ rating (max 2000) - viki2711",
      "LeetCode Guardian rating 2406 - top 0.35% globally (vivek3054)",
      "Codeforces Specialist rating 1521 (vivek2711)"
    ],
  },
  {
    title: "Hackathon Winner & Developer",
    companyName: "Various Competitions",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Winner of NICE Coday 2025 hackathon among 100+ participants",
      "Top 5 teams in UBS Hackathon 2025",
      "Winner of web development competition among 40+ teams at Dr. J. J. Magdum College",
      "First rank in CodeMarathon among 40+ teams at D.Y. Patil College of Engineering"
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Vivek's performance in competitive programming has been exceptional. His 5-star CodeChef rating and ICPC regionalist achievement demonstrate his strong problem-solving abilities.",
    name: "Programming Mentor",
    designation: "Senior Developer",
    company: "Tech Community",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "The MockMate project showcases Vivek's ability to integrate complex technologies like WebRTC, AI, and microservices into a cohesive platform. Impressive full-stack development skills.",
    name: "Hackathon Judge",
    designation: "Technical Lead",
    company: "NICE Coday 2025",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Vivek's microservices architecture in Chainly demonstrates deep understanding of distributed systems and event-driven design. A promising developer with strong technical foundations.",
    name: "Tech Reviewer",
    designation: "System Architect",
    company: "UBS Hackathon",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "MockMate",
    description:
      "AI-based and peer-to-peer mock interview platform with subscription access. Features Gemini AI for personalized questions, WebRTC for live video interviews, JWT authentication, Redis state tracking, Razorpay payments, and WhatsApp notifications.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "webrtc",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/vivekkatkar",
  },
  {
    name: "Chainly",
    description:
      "Microservice-based automation platform (Zapier-like) with webhook triggers and workflow chains. Built with transactional outbox pattern, Kafka for async communication, Docker containerization, and PostgreSQL for state management.",
    tags: [
      {
        name: "microservices",
        color: "blue-text-gradient",
      },
      {
        name: "kafka",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/vivekkatkar",
  },
  {
    name: "Books4All",
    description:
      "Microservices-based book donation platform connecting donors, NGOs, and recipients. Features Google Books API integration, geolocation-based matching, role-based access control, and real-time notifications via email and WhatsApp.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "microservices",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/vivekkatkar",
  },
];

export { services, technologies, experiences, testimonials, projects };
