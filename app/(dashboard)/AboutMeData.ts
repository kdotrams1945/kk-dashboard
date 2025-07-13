import { DiJava } from "react-icons/di";
import {
    SiCplusplus,
    SiMongodb,
    SiMysql,
    SiPython,
    SiReact,
    SiSpringboot,
    SiTypescript,
} from "react-icons/si";
import { DocumentItem } from "./DocItem";

export const workExperience: DocumentItem[] = [
  {
    title: "Assistant Tutor in CS124 : Intro to Computer Science I",
    subtitle: "University of Illinois At Urbana-Champaign, 8/2024-",
    points: [
      "Assisted students in understanding fundamental concepts of Java (boolean logic, class structure, polymorphism, etc).",
      "Provided guidance on Java coding assignments and projects",
      "Conducted review sessions to help students prepare for exams",
    ],
  },
  {
    title: "Math Tutor",
    subtitle: "Naperville Public Library, 5/2024-8/2024",
    points: [
      "Provided one-on-one tutoring to students in mathematics, ranging from Pre-Algebra to Calculus",
      "Assisted students with homework and exam preparation",
      "Developed personalized learning plans to address individual student needs",
    ],
  },
  {
    title: "Code Instructor",
    subtitle: "Code Ninjas, 5/2022-8/2024",
    points: [
      "Aided school age children 5-11 years of age learn coding skills",
      "Instructed the children by teaching them how to build games utilizing MIT's ScratchJr and Microsoft's MakeCode Arcade",
    ],
  },
];

export const education: DocumentItem[] = [
  {
    title: "Bachelor of Science in Math and Computer Science",
    subtitle: "University of Illinois At Urbana-Champaign, 8/2023-Present",
    points: [
      "Abstract Linear Algebra",
      "Data Structures and Algorithms",
      "Discrete Structures",
      "Introduction to C++",
      "Introduction to Java",
      "Numerical Methods",
    ],
  },
  {
    title: "High School Diploma",
    subtitle: "Neuqua Valley High School, 8/2019-5/2023",
    points: [],
  },
];

export const projects: DocumentItem[] = [
  {
    title: "Mortgage Calculator",
    subtitle: "Java, Springboot, React, Next.js, MaterialUI",
    points: [
      "Developed a loan-amortization app that calculates schedules in real time from user inputs, visualized loan balance and principal-vs-interest splits with responsive area & pie charta, and optimized custom amortization algorithm to generate a month-to-month schedule.",
    ],
    link: "/BMI",
  },
  {
    title: "Options Pricing Calculator",
    subtitle: "Java, Springboot, React, Next.js, MaterialUI",
    points: [
      "Engineered a full-stack web app that values multi-leg call/put strategies with the Black-Scholes model, converting user inputs (rate, volatility, strike, expiry, contract size) into real-time fair premiums via a Java / Spring Boot API. Developed a React/TypeScript front-end with MaterialUI to plot profit–loss curves across stock-price ranges, expiries, and volatility scenarios"
    ],
  },
  {
    title: "Mortgage Calculator12",
    subtitle: "Java, Springboot, React, Next.js, MaterialUI",
    points: [
      "Developed a React / TypeScript loan-amortization app that recalculates schedules in real time from user inputs, Visualized loan balance and principal-vs-interest splits with responsive area & pie charts, Optimized custom amortization algorithm to generate 360-month schedule",
    ],
  },
  {
    title: "Mortgage Calculator112",
    subtitle: "Java, Springboot, React, Next.js, MaterialUI",
    points: [
      "Developed a React / TypeScript loan-amortization app that recalculates schedules in real time from user inputs, Visualized loan balance and principal-vs-interest splits with responsive area & pie charts, Optimized custom amortization algorithm to generate 360-month schedule",
    ],
  },

];

export const awards: DocumentItem[] = [
  {
    title: "National Merit Scholarship",
    subtitle: "National Merit Scholarship Corporation",
    points: [],
  },
  {
    title: "ADP Henry Taub Memorial Scholarship",
    subtitle: "ADP",
    points: [],
  },
  {
    title: "Illinois State Scholar",
    subtitle: "State of Illinois",
    points: [],
  },
];

export const skills: DocumentItem[] = [
  {
    title: "Languages/Frameworks",
    subtitle: "",
    points: ["Java, SQL, C++, Python, React, Typescript, SpringBoot"],
  },
];

export const skillIcons = [
  { name: "Java", Icon: DiJava, color: "#F89820", dx: 6, dy: 7 },
  { name: "Python", Icon: SiPython, color: "#3776AB", dx: 8, dy: 5 },
  { name: "C++", Icon: SiCplusplus, color: "#00599C", dx: 7, dy: 9 },
  { name: "SQL", Icon: SiMysql, color: "#00758F", dx: 5, dy: 6 },
  { name: "React", Icon: SiReact, color: "#61DAFB", dx: 9, dy: 8 },
  { name: "Typescript", Icon: SiTypescript, color: "#3178C6", dx: 6, dy: 10 },
  { name: "SpringBoot", Icon: SiSpringboot, color: "#3178C6", dx: 6, dy: 10 },
  { name: "MongoDB", Icon: SiMongodb, color: "#3178C6", dx: 6, dy: 10 },
];
