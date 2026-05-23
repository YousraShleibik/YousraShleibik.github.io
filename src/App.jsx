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
    title: "HARP: Human-Aligned Representation-Based Preference Learning",
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
    title: "HARP: Human-Aligned Representation-Based Preference Learning from Perceptual Data",
    authors: "Sinclair, J., Shleibik, Y., & Haring, K.",
    venue: "Submitted to NeurIPS 2026",
    year: "2026",
    status: "Submitted",
    link: "https://scholar.google.com/citations?user=8d0X9sAAAAAJ&hl=en",
  },
  {
    title: "HARP: Representation-Based Preference Learning for Perceptual Data",
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600 dark:text-orange-300">
            {eyebrow}
          </p>
          <h2 className="mb-8 max-w-3xl text-3xl font-semibold tracking-tight text-stone-950 dark:text-white sm:text-4xl">
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
    <span className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
      {children}
    </span>
  );
}


function ParticleBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="particles"
      init={particlesInit}
      className="pointer-events-none fixed inset-0 -z-0"
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
  );
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
      <main className="min-h-screen overflow-hidden bg-[#faf5ef] text-stone-800 transition-colors duration-300 dark:bg-[#171312] dark:text-stone-100">
        
        <ParticleBackground />
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-[-12rem] top-[-10rem] h-96 w-96 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/20" />
          <div className="absolute right-[-12rem] top-40 h-96 w-96 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-900/20" />
          <div className="absolute bottom-[-12rem] left-1/3 h-96 w-96 rounded-full bg-stone-200/50 blur-3xl dark:bg-stone-700/20" />
        </div>

        <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#faf5ef]/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#171312]/85">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
            <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
<span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg shadow-stone-900/10 ring-1 ring-stone-200 dark:bg-white dark:ring-white/20">
 <img
    src="/images/logo.png"
    alt="Yousra logo"
    className="h-full w-full object-contain "
  />
</span>
              <span>{profile.name}</span>
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark(!dark)}
                className="rounded-full border border-zinc-200 bg-white/70 p-2 shadow-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/5"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-full border border-zinc-200 bg-white/70 p-2 shadow-sm md:hidden dark:border-white/10 dark:bg-white/5"
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
                  className="rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-medium dark:border-white/10 dark:bg-white/5"
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
              <Sparkles size={16} className="text-orange-600" />
              Human-centered AI • Computer Vision • Robotics • Accessibility
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
              Building thoughtful AI systems for people, attention, and interaction.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-650 dark:text-zinc-300">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-zinc-950/10 transition hover:-translate-y-0.5 dark:bg-white dark:text-zinc-950"
              >
                View my work
                <ChevronRight size={16} className="transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5"
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
            className="relative"
          >
            <div className="rounded-[2.5rem] border border-zinc-200 bg-white/75 p-5 shadow-2xl shadow-zinc-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="rounded-[2rem] bg-gradient-to-br from-orange-100 via-pink-50 to-stone-100 p-8 dark:from-orange-500/20 dark:via-pink-500/10 dark:to-stone-500/20">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">Currently</p>
                    <p className="font-semibold text-zinc-950 dark:text-white">PhD Researcher</p>
                  </div>
                  <div className="rounded-2xl bg-white/80 p-3 shadow-sm dark:bg-zinc-950/40">
                    <Globe2 size={22} />
                  </div>
                </div>
                <div className="space-y-4">
                  {[profile.title, profile.affiliation, profile.location].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 shadow-sm dark:bg-zinc-950/35">
                      {index === 0 && <BriefcaseBusiness size={18} className="text-orange-500" />}
                      {index === 1 && <GraduationCap size={18} className="text-pink-600" />}
                      {index === 2 && <MapPin size={18} className="text-stone-600" />}
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

<Section id="about" eyebrow="About" title="A researcher, builder, mentor, and storyteller." className="bg-[#faf5ef] dark:bg-[#171312]">
  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
<div className="overflow-hidden rounded-[2.5rem] shadow-xl shadow-stone-900/10">
  <img
    src="/images/about.jpg"
    alt="Yousra Shleibik"
    className="h-[560px] w-full object-cover"
  />
</div>

    <div className="space-y-6">
      <div className="rounded-[2rem] border border-zinc-200 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
        <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
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
          <div key={theme.title} className="rounded-[2rem] border border-zinc-200 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
            <h3 className="font-semibold text-zinc-950 dark:text-white">{theme.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{theme.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</Section>

       <Section id="research" eyebrow="Research" title="The questions I keep coming back to." className="bg-[#f5eee6] dark:bg-[#1d1715]">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "How can AI systems understand human preferences with less friction?",
              "How can AR and gaze-based interfaces support attention in real time?",
              "How can robots and agents communicate in ways that feel clear, respectful, and useful?",
            ].map((question, index) => (
              <div key={question} className="rounded-[2rem] border border-zinc-200 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                  0{index + 1}
                </div>
                <p className="text-lg font-medium leading-7 text-zinc-900 dark:text-white">{question}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected work and research directions." className="bg-[#fbf7f2] dark:bg-[#171312]">
          <div className="mb-6 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === item
                    ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                    : "border border-zinc-200 bg-white/70 text-zinc-700 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
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
                className="group rounded-[2rem] border border-zinc-200 bg-white/75 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-orange-500 dark:text-orange-300">{project.type} • {project.year}</p>
                    <h3 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="opacity-40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
                <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="publications" eyebrow="Publications" title="Papers, workshops, and writing." className="bg-[#faf5ef] dark:bg-[#171312]">
          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white/75 shadow-sm dark:border-white/10 dark:bg-white/5">
            {publications.map((paper, index) => (
              <div key={paper.title} className={`p-6 ${index !== publications.length - 1 ? "border-b border-zinc-200 dark:border-white/10" : ""}`}>
                <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <h3 className="font-semibold text-zinc-950 dark:text-white">
                      {paper.link ? (
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-orange-600 dark:hover:text-orange-300"
                        >
                          {paper.title}
                        </a>
                      ) : (
                        paper.title
                      )}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {paper.authors}
                    </p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{paper.venue}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <CalendarDays size={16} />
                    {paper.year} · {paper.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section id="skills" eyebrow="Skills" title="Technical strengths across AI, vision, robotics, and research." className="bg-[#f3eadf] dark:bg-[#201916]">
  <div className="grid gap-5 md:grid-cols-2">
    {skills.map((group) => (
      <div
        key={group.category}
        className="rounded-[2rem] border border-stone-200 bg-white/70 p-7 shadow-sm dark:border-stone-700/60 dark:bg-stone-900/35"
      >
        <h3 className="text-lg font-semibold text-stone-950 dark:text-stone-50">
          {group.category}
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {group.items.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-800 dark:border-orange-900/50 dark:bg-orange-900/20 dark:text-orange-200"
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
                <div key={item.role} className="rounded-[2rem] border border-zinc-200 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <Icon className="mb-5 text-orange-500" size={26} />
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{item.role}</h3>
                  <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="life" eyebrow="Beyond research" title="A little more human, because good portfolios should feel alive.">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-zinc-200 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5">
              <Camera className="mb-5 text-orange-500" />
              <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                Outside research, I like documenting small beautiful moments: cafés, travel, peaceful walks, visual stories, and places that feel warm and memorable.
              </p>
            </div>
            <div className="grid gap-3">
              {lifeItems.map((item) => (
                <div key={item} className="rounded-2xl border border-zinc-200 bg-white/70 px-5 py-4 text-sm font-medium shadow-sm dark:border-white/10 dark:bg-white/5">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s connect about research, collaboration, mentorship, or creative ideas.">
          <div className="rounded-[2.5rem] border border-zinc-200 bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/15 dark:border-white/10 dark:bg-white dark:text-zinc-950">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-2xl font-semibold">Open to research conversations and collaborations.</h3>
                <p className="mt-3 max-w-2xl text-zinc-300 dark:text-zinc-600">
                  I’m especially interested in human-centered AI, accessibility, HCI/HRI, computer vision, and interactive learning systems.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 dark:bg-zinc-950 dark:text-white">
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

        <footer className="border-t border-zinc-200 px-5 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
          © {new Date().getFullYear()} {profile.name}. Designed and built with care.
        </footer>
      </main>
    </div>
  );
}
