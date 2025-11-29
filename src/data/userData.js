const user = {
  name: "Vijaya Kumar R",
  location: "Nungambakkam, Chennai",
  phone: "9944836332",
  email: "vk9944836332@gmail.com",
  linkedin: "linkedin.com/in/vijayakumar-dev",
  github: "github.com/vijaykumar140220",
  portfolio: "vijayportifily.netlify.app",
  currentRole: "Project Technician I, Centre for Development of Advanced Computing",

  skills: [
    "HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Redux", "Redux-Saga",
    "Android Studio", "Kotlin", "NestJS", "MongoDB", "REST APIs", "Figma", "Git"
  ],

  projects: [
    { title: "Drone Monitoring App", desc: "Android app connected to drone remote via Bluetooth.", link: "#" },
    { title: "Rental Master", desc: "Full-stack rental management application.", link: "#" },
    { title: "Responsive Web Projects", desc: "Mobile friendly professional websites.", link: "#" }
  ],

  experience: [
    {
      company: "Centre for Development of Advanced Computing",
      role: "Project Technician I",
      range: "Nov 2025 – Present",
      bullets: [
        "Supporting internal modules for software/hardware integration.",
        "Contributed to project documentation and validation."
      ]
    },
    {
      company: "Daloft Aerospace Pvt Ltd",
      role: "Android Developer (Project role)",
      range: "Mar 2025 – Aug 2025",
      bullets: [
        "Developed drone monitoring Android app with Bluetooth connectivity.",
        "Optimized UI responsiveness by 25%."
      ]
    },
    {
      company: "Gway Tech Solutions",
      role: "Junior Developer",
      range: "Mar 2024 – Dec 2025",
      bullets: [
        "Developed REST APIs using NestJS & MongoDB.",
        "Integrated Redux-Saga for smooth UI async functionality."
      ]
    }
  ]
};
export default user;
