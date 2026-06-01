import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  ChevronRight,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const profile = {
  name: "Yousra Shleibik",
  title: "Computer Science PhD Student",
  affiliation: "University of Denver",
  location: "Denver, Colorado",
  email: "Yasoosh1@gmail.com",
  github: "https://github.com/YousraShleibik",
  linkedin: "https://www.linkedin.com/in/yousra-shleibik/",
  scholar: "https://scholar.google.com/citations?user=8d0X9sAAAAAJ&hl=en",
  tagline:
    "Computer Science PhD researcher specializing in AI, computer vision, 3D perception, and human-centered machine learning.",
  intro:
    "My research spans visual representation learning, scene understanding, 3D reconstruction, point-cloud-based modeling, saliency-based visual attention, and multimodal visual systems. I am interested in developing scalable AI systems for visual data, 3D vision, and human-centered interaction.",
};
const typingWords = [
  "Human-Centered AI Researcher",
  "Computer Vision + HRI",
  "Building thoughtful AI systems",
];
const navItems = ["About", "Research", "Projects", "Publications", "Skills", "Leadership", "Life", "Contact"];

const researchThemes = [
  {
    title: "Human-Centered AI",
    text: "Interactive systems that adapt to people instead of asking people to adapt to the system.",
  },
  {
    title: "Attention Support",
    text: "Gaze-aware and AR-based interfaces that help redirect attention in complex environments.",
  },
  {
    title: "Human-Robot Interaction",
    text: "Socially aware robots and agents that communicate, guide, and collaborate with humans.",
  },
  {
    title: "AI for Accessibility",
    text: "Designing technology with empathy, usability, and access at the center.",
  },
];

const projects = [
  {
    title: "Human-Aligned Preference Learning",
    type: "Research Project",
    year: "2026 – Present",
    description:
      "Representation-based preference learning project focused on perceptual data. Contributed to writing, literature review, and research framing. Related short paper accepted to ACL 2026 Student Research Workshop.",
    tags: ["Preference Learning", "Representation Learning", "Visual AI", "Human-Centered AI"],
    link: "https://scholar.google.com/citations?user=8d0X9sAAAAAJ&hl=en",
  },
  {
    title: "Saliency-Based Attention Shifting for Driver Situational Awareness",
    type: "IEEE RO-MAN ",
    year: "2025",
    description:
      "Developed a saliency-based attention shifting framework to support driver awareness of out-of-label hazards using multimodal visual and audio alert strategies.",
    tags: ["Computer Vision", "Attention", "Driver Awareness", "HRI"],
    link: "https://arxiv.org/abs/2508.11887",
  },
  {
    title: "Human-Robot Teaming through AR and Gaze-Based Attention Control",
    type: "IEEE RO-MAN ",
    year: "2024",
    description:
      "Built an augmented reality system for gaze-based attention control in human-robot teaming contexts, using AR visual cues to guide user attention and support robot interaction.",
    tags: ["HRI", "AR", "Gaze", "Robotics"],
    link: "https://arxiv.org/abs/2408.12823",
  },
  {
    title: "3D Reconstruction of 2D Images Using Deep Learning",
    type: "M.S. Thesis",
    year: "2023",
    description:
      "Developed AR applications and deep learning models for reconstructing 3D meshes from RGB images using point clouds and occupancy estimation.",
    tags: ["3D Vision", "Deep Learning", "Point Clouds", "AR"],
    link: "https://scholar.google.com/citations?user=8d0X9sAAAAAJ&hl=en",
  },
  {
    title: "Reinforcement Learning for Robot Navigation",
    type: "AI Robotics Class Project",
    year: "2024",
    description:
      "Developed reinforcement learning software for a robot navigation challenge, enabling the robot to learn efficient movement through an environment. The robot achieved the fastest completion time in the class, and a demo video is available upon request.",
    tags: ["Reinforcement Learning", "Robotics", "Navigation", "AI"],
  },
  {
    title: "Change Detection with Scene Understanding",
    type: "GitHub Project",
    year: "2023",
    description:
      "Python project exploring addition and deletion change detection, connected to scene understanding and dynamic environment analysis.",
    tags: ["Python", "Change Detection", "Scene Understanding"],
    link: "https://github.com/YousraShleibik/Change_Detection-",
  },
  {
    title: "Sustainability Hub",
    type: "UX / Design Project",
    year: "2024",
    description:
      "Designed a user-centered website concept for Colorado sustainability resources, focusing on accessibility, community needs, and clear information flow.",
    tags: ["UX", "Figma", "Design Justice", "Sustainability"],
  },
  {
    title: "Rust Virtual Machine Project",
    type: "Course / Systems Project",
    year: "2025",
    description:
      "A Rust-based virtual machine project developed step by step through data structures, enums, instruction execution, and systems programming concepts.",
    tags: ["Rust", "Virtual Machine", "Systems"],
    link: "https://github.com/YousraShleibik/Rust_VM_Project",
  },
  {
    title: "Rust Programming Projects",
    type: "Course Projects",
    year: "2025",
    description:
      "A collection of Rust programming projects focused on practicing Rust syntax, ownership, and systems-level programming concepts.",
    tags: ["Rust", "Programming", "Coursework"],
    link: "https://github.com/YousraShleibik/Rust_Projects",
  },
  {
    title: "Flappy-Bot",
    type: "GitHub Project",
    year: "2023",
    description:
      "Python project experimenting with a Flappy Bird-style bot/game environment.",
    tags: ["Python", "Game AI", "Experiment"],
    link: "https://github.com/YousraShleibik/Flappy-Bot",
  },
];
 


const publications = [

  {
    title: "Representation-Based Preference Learning ",
    authors: "Sinclair, J., Shleibik, Y., & Haring, K.",
    venue: "ACL 2026 Student Research Workshop",
    year: "2026",
    status: "Short paper accepted",
    link: "https://scholar.google.com/citations?user=8d0X9sAAAAAJ&hl=en",
  },
  {
    title:
      "Saliency-Based Attention Shifting: A Framework for Improving Driver Situational Awareness of Out-of-Label Hazards",
    authors: "Shleibik, Y., Sinclair, J., & Haring, K.",
    venue: "IEEE RO-MAN 2025; arXiv:2508.11887",
    year: "2025",
    status: "First-author paper",
    link: "https://arxiv.org/abs/2508.11887",
  },
  {
    title: "Smart-vision: Survey of Modern Action Recognition Techniques in Vision",
    authors:
      "AlShami, A. K., Rabinowitz, R., Lam, K., Shleibik, Y., Mersha, M., Boult, T., & Kalita, J.",
    venue: "Multimedia Tools and Applications, 84(27), 32705–32776",
    year: "2025",
    status: "Journal article",
    link: "https://scholar.google.com/citations?user=8d0X9sAAAAAJ&hl=en",
  },
  {
    title:
      "Towards Human-Robot Teaming through Augmented Reality and Gaze-Based Attention Control",
    authors: "Shleibik, Y., Alabi, E., & Reardon, C.",
    venue: "IEEE RO-MAN 2024; arXiv:2408.12823",
    year: "2024",
    status: "First-author paper",
    link: "https://arxiv.org/abs/2408.12823",
  },
  {
    title: "3D Reconstruction of 2D Images Using Deep Learning",
    authors: "Shleibik, Y. A.",
    venue: "Master’s thesis, University of Colorado Colorado Springs",
    year: "2023",
    status: "Thesis",
    link: "https://scholar.google.com/citations?user=8d0X9sAAAAAJ&hl=en",
  },
];
const skills = [
  {
    category: "Programming",
    items: ["Python", "C++", "CUDA", "Bash", "Java", "MATLAB", "R", "Rust"],
  },
  {
    category: "AI / Machine Learning",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-Learn", "Neural Network Training", "Model Evaluation"],
  },
  {
    category: "Computer Vision / 3D",
    items: ["OpenCV", "PyTorch3D", "YOLOv5", "Faster R-CNN", "Point Clouds", "3D Reconstruction", "Scene Understanding"],
  },
  {
    category: "Research",
    items: ["Experiment Design", "Visual Data Analysis", "Human-in-the-Loop Evaluation", "Technical Writing", "Peer-Reviewed Publications"],
  },
];

const leadership = [
  {
    role: "Graduate Teaching Assistant",
    detail:
      "Supported undergraduate computer science courses through grading, technical feedback, and student-centered instruction.",
    icon: BookOpen,
  },
  {
    role: "Graduate Mentor",
    detail:
      "Mentored students on research design, literature reviews, academic writing, and technical presentation.",
    icon: GraduationCap,
  },
  {
    role: "Google Women Techmakers Mentorship Program",
    detail:
      "Selected for mentorship focused on technical growth, leadership development, and career preparation in technology.",
    icon: Sparkles,
  },
  {
    role: "International Women’s Day Panelist and Co-Organizer",
    detail:
      "Co-organized and participated in a Women in STEM discussion with Google Women Techmakers and IEEE Women in Engineering.",
    icon: HeartHandshake,
  },
  {
    role: "Social Media and Marketing Director",
    detail:
      "Led student engagement and outreach initiatives for DU Graduate Student Government events.",
    icon: Camera,
  },
  {
    role: "Awards and Recognition",
    detail:
      "Best Poster Award at University of Denver Graduate Research Day, 2025; 50th Anniversary College of Engineering and Computer Science Award, 2022; Fulbright Scholarship Recipient, 2021.",
    icon: Sparkles,
  },
];




const lifeItems = [
  "Finding cozy local cafés",
  "Traveling and discovering hidden gems",
  "Creating reels and visual stories",
  "Watching romantic anime with beautiful animation",
  "Outdoor walks, mountain views, and peaceful moments",
];

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="theme-eyebrow mb-3 text-sm font-semibold uppercase tracking-[0.25em] dark:text-orange-300">
            {eyebrow}
          </p>
          <h2 className="theme-title mb-8 max-w-3xl text-3xl font-semibold tracking-tight dark:text-white sm:text-4xl">
            {title}
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function Tag({ children }) {
  return (
    <span className="theme-tag rounded-full px-3 py-1 text-xs font-medium shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
      {children}
    </span>
  );
}


function ParticleBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="theme-glow absolute left-1/2 top-[-10rem] h-[26rem] w-[38rem] -translate-x-1/2 rounded-full blur-3xl dark:bg-orange-700/25"
      />

      <Particles
        id="particles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: {
              value: 55,
              density: { enable: true, area: 900 },
            },
            color: {
              value: ["#f97316", "#f59e0b", "#78716c", "#ffffff"],
            },
            links: {
              enable: true,
              color: "#f59e0b",
              distance: 140,
              opacity: 0.18,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.45,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            opacity: { value: 0.28 },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: {
                distance: 150,
                links: { opacity: 0.35 },
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));

          if (displayText === currentWord) {
            setTimeout(() => setIsDeleting(true), 900);
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1));

          if (displayText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % typingWords.length);
          }
        }
      },
      isDeleting ? 45 : 85
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

 
}
export default function PersonalWebsite() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);


  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.tags.includes(filter));
  }, [filter]);

  const filters = ["All", "HCI", "AR", "Gaze", "Robotics", "Computer Vision", "UX"];

  return (
    <div>
      <main className="theme-page min-h-screen overflow-hidden transition-colors duration-300 dark:bg-[#171312] dark:text-stone-100">
        <ParticleBackground />
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="theme-glow absolute left-[-12rem] top-[-10rem] h-96 w-96 rounded-full blur-3xl dark:bg-orange-900/20" />
          <div className="theme-glow-mauve absolute right-[-12rem] top-40 h-96 w-96 rounded-full blur-3xl dark:bg-amber-900/20" />
          <div className="theme-glow-lavender absolute bottom-[-12rem] left-1/3 h-96 w-96 rounded-full blur-3xl dark:bg-stone-700/20" />
        </div>

        <header className="theme-header sticky top-0 z-50">
              <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
            <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
<span className="theme-logo flex h-11 w-11 items-center justify-center overflow-hidden rounded-full shadow-lg shadow-stone-900/10 dark:bg-white dark:ring-white/20">
 <img
    src="/images/logo.png"
    alt="Yousra logo"
    className="h-full w-full object-contain"
  />
</span>
              <span className="theme-title dark:text-white">{profile.name}</span>
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-[var(--color-text)]/80 transition hover:text-[var(--color-text)] dark:text-slate-200/80 dark:hover:text-white"
                  >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark(!dark)}
                className="theme-icon-button rounded-full p-2 shadow-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/5"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="theme-icon-button rounded-full p-2 shadow-sm md:hidden dark:border-white/10 dark:bg-white/5"
                aria-label="Toggle navigation"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div className="mx-auto grid max-w-6xl gap-2 px-5 pb-5 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="theme-mobile-link rounded-2xl px-4 py-3 text-sm font-medium dark:border-white/10 dark:bg-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </header>

        <section id="top" className="relative mx-auto grid min-h-[86vh] max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

<div className="mb-6">
  <p className="theme-eyebrow text-sm font-semibold uppercase tracking-[0.25em] dark:text-orange-300">
   AI • Computer Vision • Robotics • Accessibility • Human-centered AI 
  </p>

</div>

<h1 className="theme-title max-w-4xl text-5xl font-semibold tracking-tight dark:text-white sm:text-6xl lg:text-7xl">
  {profile.name}
</h1>

<TypingText />

<p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] dark:text-slate-200/90">
  {profile.intro}
</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="theme-button-primary group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-xl shadow-zinc-950/10 transition hover:-translate-y-0.5 dark:bg-white dark:text-[#1f2940]"
              >
                View my work
                <ChevronRight size={16} className="transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="theme-button-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5"
              >
                Contact me
                <Mail size={16} />
              </a>
            </div>
          </motion.div>

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  className="relative flex min-h-[560px] items-center justify-center pt-10"
>
  <div className="theme-glow absolute h-[26rem] w-[26rem] rounded-full blur-3xl dark:bg-orange-700/20" />

  <img
    src="/images/about.jpg"
    alt="Yousra Shleibik"
    className="relative z-10 w-[22rem] object-contain drop-shadow-2xl sm:w-[20rem] lg:w-[25rem] rounded-full"
  />

  <div className="theme-pill absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full px-5 py-2 text-sm font-semibold shadow-sm backdrop-blur dark:border-orange-900/40 dark:bg-stone-900/60 dark:text-stone-200">
    PhD Researcher
    University of Denver
  </div>
</motion.div>
        </section>

<Section id="about" eyebrow="About" title="A researcher, builder, mentor, and storyteller." className="theme-section dark:bg-[#171312]">
  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
<div >
  <img
    src="/images/about.jpg"
    alt="Yousra Shleibik"
    className="w-104 h-104 object-cover rounded-full"
  />
</div>

    <div className="space-y-6">
      <div className="theme-card rounded-[2rem] p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
        <p className="theme-body text-lg leading-8 dark:text-zinc-300">
          {profile.tagline}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Tag>Computer Vision</Tag>
          <Tag>Robotics</Tag>
          <Tag>HCI</Tag>
          <Tag>HRI</Tag>
          <Tag>Interactive ML</Tag>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {researchThemes.map((theme) => (
          <div key={theme.title} className="theme-card rounded-[2rem] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
            <h3 className="theme-title font-semibold dark:text-white">{theme.title}</h3>
            <p className="theme-muted mt-3 text-sm leading-6 dark:text-zinc-300">{theme.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</Section>

       <Section id="research" eyebrow="Research" title="The questions I keep coming back to." className="theme-section-alt dark:bg-[#1d1715]">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "How can AI systems understand human preferences with less friction?",
              "How can AR and gaze-based interfaces support attention in real time?",
              "How can robots and agents communicate in ways that feel clear, respectful, and useful?",
            ].map((question, index) => (
              <div key={question} className="theme-card rounded-[2rem] p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="theme-button-primary mb-5 flex h-11 w-11 items-center justify-center rounded-2xl dark:bg-white dark:text-[#1f2940]">
                  0{index + 1}
                </div>
                <p className="theme-title text-lg font-medium leading-7 dark:text-white">{question}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected work and research directions." className="theme-section dark:bg-[#171312]">
          <div className="mb-6 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === item
                    ? "theme-button-primary dark:bg-white dark:text-[#1f2940]"
                    : "theme-button-secondary hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.title}
                layout
                className="theme-card group rounded-[2rem] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="theme-eyebrow text-sm font-medium dark:text-orange-300">{project.type} • {project.year}</p>
                    <h3 className="theme-title mt-2 text-xl font-semibold dark:text-white">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="opacity-40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
                <p className="theme-muted mt-4 leading-7 dark:text-zinc-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="publications" eyebrow="Publications" title="Papers, workshops, and writing." className="theme-section dark:bg-[#171312]">
          <div className="theme-card overflow-hidden rounded-[2rem] shadow-sm dark:border-white/10 dark:bg-white/5">
            {publications.map((paper, index) => (
              <div key={paper.title} className={`p-6 ${index !== publications.length - 1 ? "border-b border-zinc-200 dark:border-white/10" : ""}`}>
                <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <h3 className="theme-title font-semibold dark:text-white">
                      {paper.link ? (
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-[var(--color-accent-strong)] dark:hover:text-orange-300"
                        >
                          {paper.title}
                        </a>
                      ) : (
                        paper.title
                      )}
                    </h3>
                    <p className="theme-muted mt-1 text-sm dark:text-zinc-400">
                      {paper.authors}
                    </p>
                    <p className="theme-muted mt-1 text-sm dark:text-zinc-300">{paper.venue}</p>
                  </div>
                  <div className="theme-muted flex items-center gap-2 text-sm dark:text-zinc-400">
                    <CalendarDays size={16} />
                    {paper.year} · {paper.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section id="skills" eyebrow="Skills" title="Technical strengths across AI, vision, robotics, and research." className="theme-section-alt dark:bg-[#201916]">
  <div className="grid gap-5 md:grid-cols-2">
    {skills.map((group) => (
      <div
        key={group.category}
        className="theme-card rounded-[2rem] p-7 shadow-sm dark:border-stone-700/60 dark:bg-stone-900/35"
      >
        <h3 className="theme-title text-lg font-semibold dark:text-stone-50">
          {group.category}
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {group.items.map((skill) => (
            <span
              key={skill}
              className="theme-tag rounded-full px-3 py-1 text-sm font-medium dark:border-orange-900/50 dark:bg-orange-900/20 dark:text-orange-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</Section>

        <Section id="leadership" eyebrow="Leadership" title="Mentorship, teaching, volunteering, and community work.">
          <div className="grid gap-5 md:grid-cols-2">
            {leadership.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.role} className="theme-card rounded-[2rem] p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <Icon className="theme-eyebrow mb-5" size={26} />
                  <h3 className="theme-title text-lg font-semibold dark:text-white">{item.role}</h3>
                  <p className="theme-muted mt-3 leading-7 dark:text-zinc-300">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="life" eyebrow="Beyond research" title="A little more human, because good portfolios should feel alive.">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="theme-card rounded-[2rem] p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <Camera className="theme-eyebrow mb-5" />
              <p className="theme-body text-lg leading-8 dark:text-zinc-300">
                Outside research, I like documenting small beautiful moments: cafés, travel, peaceful walks, visual stories, and places that feel warm and memorable.
              </p>
            </div>
            <div className="grid gap-3">
              {lifeItems.map((item) => (
                <div key={item} className="theme-card rounded-2xl px-5 py-4 text-sm font-medium shadow-sm dark:border-white/10 dark:bg-white/5">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s connect about research, collaboration, mentorship, or creative ideas.">
          <div className="theme-contact-card rounded-[2.5rem] p-8 shadow-2xl shadow-zinc-950/15 dark:border-white/10 dark:bg-white dark:text-[#1f2940]">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-2xl font-semibold">Open to research conversations and collaborations.</h3>
                <p className="mt-3 max-w-2xl text-white/75 dark:text-zinc-600">
                  I’m especially interested in human-centered AI, accessibility, HCI/HRI, computer vision, and interactive learning systems.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-text)] dark:bg-[var(--color-button)] dark:text-white">
                  <Mail size={16} /> Email
                </a>
                <a href={profile.github} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold dark:border-zinc-200">
                  <Globe2 size={16} /> GitHub
                </a>
                <a href={profile.linkedin} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold dark:border-zinc-200">
                  <BriefcaseBusiness size={16} /> LinkedIn
                </a>
                <a
                    href={profile.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold dark:border-zinc-200"
                  >
                    <BookOpen size={16} /> Google Scholar
                  </a>
              </div>
            </div>
          </div>
        </Section>

        <footer className="theme-footer px-5 py-8 text-center text-sm dark:border-white/10 dark:text-zinc-400">
          © {new Date().getFullYear()} {profile.name}. Designed and built with care.
        </footer>
      </main>
    </div>
  );
}
