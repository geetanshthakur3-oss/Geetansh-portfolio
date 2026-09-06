export const PROFILE = {
  name: "Geetansh Thakur",
  role: "Software Development Intern",
  location: "Solan, Himachal Pradesh",
  email: "geetanshthakur3@gmail.com",
  github: "geetanshthakur3-oss",
  githubUrl: "https://github.com/geetanshthakur3-oss",
  leetcode: "geetanshthakur3",
  leetcodeUrl: "https://leetcode.com/u/geetanshthakur3/",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "2024–2027", label: "BCA" },
  { value: "79.14%", label: "Class XII" },
  { value: "₹10K", label: "Scholarship" },
  { value: "DSA", label: "Active Problem Solver" },
];

export const SKILL_GROUPS = [
  {
    title: "Programming",
    icon: "code" as const,
    skills: [
      { name: "C++", note: "Core language for OOP and DSA practice." },
      { name: "Python", note: "Scripting and problem solving basics." },
    ],
  },
  {
    title: "Core Computer Science",
    icon: "cpu" as const,
    skills: [
      { name: "Data Structures & Algorithms", note: "Regular practice on LeetCode." },
      { name: "Object-Oriented Programming", note: "Classes, objects, abstraction." },
      { name: "DBMS", note: "Relational concepts and queries." },
      { name: "File Handling", note: "Persistent storage in C++ projects." },
    ],
  },
  {
    title: "Developer Tools",
    icon: "terminal" as const,
    skills: [
      { name: "Git", note: "Version control fundamentals." },
      { name: "GitHub", note: "Hosting and sharing code." },
      { name: "VS Code", note: "Primary development environment." },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Student Record Management System",
    tech: "C++",
    highlight: "OOP + File Handling",
    githubUrl: "https://github.com/geetanshthakur3-oss/student-record-managment-system",
    description:
      "A console-based student record management application built using Object-Oriented Programming and File Handling.",
    features: [
      "CRUD operations",
      "Add records",
      "Search records",
      "Update records",
      "Delete records",
      "Persistent file storage",
    ],
  },
  {
    title: "Banking Management System",
    tech: "C++",
    highlight: "C++ + OOP + File Storage",
    githubUrl: "https://github.com/geetanshthakur3-oss/Banking-mangment-system",
    description:
      "A menu-driven banking application demonstrating core programming, OOP and file-storage concepts.",
    features: [
      "Account creation",
      "Deposit",
      "Withdrawal",
      "Menu-driven interface",
      "File-based storage",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "CGC University, Mohali",
    period: "2024 – 2027",
    detail: "Currently pursuing",
  },
  {
    degree: "Class XII",
    institution: "Govt. Sr. Sec. School, Kuthar",
    period: "HP Board",
    detail: "79.14%",
  },
];

export const HOBBIES = [
  { name: "Coding", note: "Building small projects and practising DSA." },
  { name: "Debates", note: "Structured thinking and clear communication." },
  { name: "Kabaddi", note: "Teamwork, focus and discipline." },
];
