import { useEffect, useRef, useState, type MouseEvent } from 'react';
import AboutBackground from './components/AboutBackground';
import AnimatedBackground from './components/AnimatedBackground';
import Avatar from './components/Avatar';
import ContactBackground from './components/ContactBackground';
import IeeeBackground from './components/IeeeBackground';
import SkillsBackground from './components/SkillsBackground';
import useSharedInView from './hooks/useSharedInView';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Coffee,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Github,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  Mic,
  Microscope,
  Quote,
  Send,
  Sparkles,
  Terminal,
  Trophy,
  X,
} from 'lucide-react';

type Project = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technical: string;
  tags: string[];
  accent: string;
  mark: string;
  icon: typeof Code2;
  category: string;
};

type Achievement = {
  title: string;
  description: string;
  year: string;
  organization: string;
  award?: string;
  className: string;
  ratio: number;
  image?: string;
  alt?: string;
};

type Experience = {
  title: string;
  role: string;
  text: string;
};

type Skill = {
  name: string;
  icon: typeof Code2;
  items: string[];
  color: string;
};

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Achievements', 'achievements'],
  ['Gallery', 'achievement-gallery'],
  ['Education', 'education'],
  ['Certifications', 'certifications'],
  ['Resume', 'resume'],
  ['Contact', 'contact'],
];

const projects: Project[] = [
  {
    number: '01',
    title: 'HexaBoard',
    subtitle: 'Smart Learning & Onboarding for Freshers',
    description: 'Built an AI-assisted onboarding platform that helps freshers track their learning and lets admins monitor progress in real time.',
    technical: 'An AI-assisted learning and onboarding platform designed to help freshers track their progress while giving administrators real-time visibility into learning activity.',
    tags: ['AI-Assisted', 'Learning Platform', 'Progress Tracking'],
    accent: 'violet',
    mark: 'HB',
    icon: Cpu,
    category: 'Full-Stack Project',
  },
  {
    number: '02',
    title: 'Paw Care',
    subtitle: 'Smart Dog Health Monitoring & Zoonotic Defense System',
    description: 'Designed a smart dog health-monitoring and zoonotic-defense system integrating AI analytics and sensor data for real-time health tracking and early disease detection.',
    technical: 'A sensor-driven health-monitoring concept combining AI analytics and sensor data to support real-time tracking and early disease detection.',
    tags: ['AI Analytics', 'Sensor Data', 'Health Monitoring'],
    accent: 'emerald',
    mark: 'PC',
    icon: Microscope,
    category: 'Health Technology',
  },
  {
    number: '03',
    title: 'Simplify',
    subtitle: 'Flight Ticket Booking',
    description: 'Built a flight ticket booking application with a Spring Boot backend and React front end.',
    technical: 'A flight ticket booking application built with Spring Boot, React, and REST APIs. The APIs were tested with Postman and the application was hosted on AWS.',
    tags: ['Spring Boot', 'React', 'REST API', 'AWS'],
    accent: 'amber',
    mark: 'SF',
    icon: Code2,
    category: 'Full-Stack Application',
  },
  {
    number: '04',
    title: 'A.R.I.S',
    subtitle: 'AI-Enabled Self-Balancing Autonomous Robotic Intelligent System',
    description: 'Worked with teammates to build a self-balancing robot combining sensor data, motor control, stabilization, voice interaction, and camera-based monitoring.',
    technical: 'The project combined MPU-6050 accelerometer and gyroscope data, sensor fusion, PID-based stabilization, PWM motor control, ESP32 control, Raspberry Pi processing, voice interaction, camera monitoring, and web-based control.',
    tags: ['ESP32', 'Raspberry Pi', 'MPU-6050', 'PID Control'],
    accent: 'violet',
    mark: 'AR',
    icon: Cpu,
    category: 'Robotics & Embedded Systems',
  },
];

const experiences: Experience[] = [
  {
    title: 'Cognifyz Technologies',
    role: 'Web Development Intern · March – April 2025',
    text: 'Collaborated on live web development projects, focusing on full-stack development and responsive web applications. Practiced data structures, algorithms, and problem-solving through structured technical exercises.',
  },
  {
    title: 'IEEE RMC',
    role: 'Website Committee Co-Chair · 6 months – Ongoing',
    text: 'Co-leading the website committee, overseeing planning, execution, and ongoing maintenance of website updates and improvements. Coordinating with team members to maintain site content, structure, and functionality.',
  },
  {
    title: 'IEEE YESIST12',
    role: 'Website Committee Volunteer',
    text: 'Contributed to building and maintaining the website’s front-end and back-end components.',
  },
];

const withPublicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const achievements: Achievement[] = [
  {
    title: 'IEEE Xtreme 17.0',
    description: 'Achieved India Rank 184 and Global Rank 548, and placed 1st in the ECE department.',
    year: 'IEEE Xtreme 17.0',
    organization: 'IEEE',
    className: 'achievement-one',
    ratio: 4 / 3,
    image: withPublicAsset('Xtreme17.0.png'),
    alt: 'IEEE Xtreme 17.0 recognition, India Rank 184 and Global Rank 548',
  },
  {
    title: 'Hackatronics 2025',
    description: 'Winner of Hackatronics 2025, organized by UNO MINDA and Panimalar Engineering College.',
    year: '2025',
    organization: 'UNO MINDA × Panimalar',
    award: 'WINNER',
    className: 'achievement-two',
    ratio: 4 / 3,
    image: withPublicAsset('Hackatronics.png'),
    alt: 'Hackatronics 2025 winner recognition',
  },
  {
    title: 'IEEE YESIST12',
    description: 'Presented an international project at IEEE YESIST12 in Malaysia.',
    year: 'International Presentation',
    organization: 'IEEE YESIST12 · Malaysia',
    className: 'achievement-three',
    ratio: 16 / 9,
    image: withPublicAsset('Yesist12.png'),
    alt: 'IEEE YESIST12 project presentation in Malaysia',
  },
  {
    title: 'Crown Jewel of Excellence',
    description: 'Recognized with the Best Student Performer award.',
    year: '2025',
    organization: 'Panimalar Engineering College',
    award: 'BEST STUDENT PERFORMER',
    className: 'achievement-four',
    ratio: 4 / 3,
    image: withPublicAsset('CrownJewel.png'),
    alt: 'Crown Jewel of Excellence Best Student Performer recognition',
  },
];

const skills: Skill[] = [
  { name: 'Java & OOP', icon: Code2, color: 'amber', items: ['Core Java', 'OOP Principles', 'Collections Framework', 'Exception Handling', 'Java 8 Features', 'Multithreading'] },
  { name: 'Data Structures & DSA', icon: Layers, color: 'sky', items: ['Arrays', 'Strings', 'Searching', 'Sorting', 'Recursion', 'Tree Traversal'] },
  { name: 'Backend & APIs', icon: Terminal, color: 'violet', items: ['Spring Boot', 'REST APIs', 'JDBC'] },
  { name: 'Web Technologies', icon: Code2, color: 'sky', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite'] },
  { name: 'Database & SQL', icon: Database, color: 'emerald', items: ['MySQL', 'Oracle SQL', 'Joins', 'Subqueries', 'CRUD', 'Normalization', 'Views', 'Indexes', 'Query Optimization'] },
  { name: 'Testing & Workflow', icon: Microscope, color: 'rose', items: ['JUnit', 'Mockito', 'Postman', 'Agile'] },
  { name: 'Tools & Cloud', icon: Cpu, color: 'amber', items: ['Git', 'GitHub', 'Maven', 'Docker', 'AWS'] },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.willChange = 'opacity, transform';
            target.classList.add('is-visible');
            requestAnimationFrame(() => {
              target.style.willChange = 'auto';
            });
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const scrollProgressRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const skillsSectionRef = useRef<HTMLElement | null>(null);
  const ieeeTimelineProgressRef = useRef<HTMLDivElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const heroInView = useSharedInView(heroSectionRef, '100px');

  useReveal();

  useEffect(() => {
    const section = document.getElementById('experience');
    const progress = ieeeTimelineProgressRef.current;
    const markers = Array.from(document.querySelectorAll<HTMLElement>('.ieee-timeline-marker'));

    if (!section || !progress) return;

    let frameId = 0;

    const updateTimeline = () => {
      const rect = section.getBoundingClientRect();
      const ratio = Math.min(Math.max((window.innerHeight - rect.top) / (rect.height + window.innerHeight * 0.35), 0), 1);
      progress.style.transform = `scaleY(${ratio})`;

      markers.forEach((marker, index) => {
        const item = marker.closest('.ieee-timeline-item') as HTMLElement | null;
        if (!item) return;

        const trigger = item.getBoundingClientRect().top <= window.innerHeight * 0.82 || ratio > (index + 1) / (markers.length + 1);
        marker.classList.toggle('is-active', trigger);

        if (trigger && !marker.dataset.rippled) {
          marker.dataset.rippled = 'true';
          marker.classList.remove('is-ripple');
          void marker.offsetWidth;
          marker.classList.add('is-ripple');
        }
      });
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        updateTimeline();
        frameId = 0;
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        updateTimeline();
      }
    }, { threshold: 0.15 });

    observer.observe(section);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateTimeline();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    document.title = 'Mukesh K | Java Full Stack Developer';
  }, []);

  useEffect(() => {
    const section = skillsSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle('is-paused', !entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    let scrollTimer: number | undefined;

    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.transform = `scaleX(${progress / 100})`;
      }

      if (headerRef.current) {
        headerRef.current.classList.toggle('is-scrolled', scrollTop > 40);
      }

      document.body.classList.add('scrolling');
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 150);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(scrollTimer);
    };
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => {
      document.body.classList.toggle('background-paused', document.hidden);
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMenu();
  };

  return (
    <div className="site-shell">
      <AnimatedBackground sectionRef={heroSectionRef} isActive={heroInView} />
      <div ref={scrollProgressRef} className="scroll-progress" />

      <header ref={headerRef} className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <Avatar size={44} loading="eager" fetchPriority="high" />
          <span className="brand-name">Mukesh K</span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={(event) => handleNavClick(event, id)}>{label}</a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          <span>Let's Talk</span>
          <ArrowUpRight />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home" ref={heroSectionRef}>
          <div className="hero-bg-grid" />
          <div className="hero-glow hero-glow-1" />
          <div className="hero-glow hero-glow-2" />
          <div className="hero-inner">
            <div className="hero-copy" data-reveal>
              <div className="hero-eyebrow">
                <span className="status-pulse" />
                Java Full Stack Developer · Chennai
              </div>
              <h1 className="hero-title">
                <span className="hero-line">Mukesh <em className="hero-line-italic">K</em></span>
              </h1>
              <div className="hero-roles">
                <span>Java Full Stack Developer</span>
                <span className="hero-dot" />
                <span>Spring Boot · React · SQL</span>
              </div>
              <p className="hero-intro">
                Full-stack developer building practical web applications with Java, Spring Boot, React, and SQL. I enjoy turning real-world problems into thoughtful, usable software.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Contact Me
                  <ArrowDown />
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <Lightbulb className="hero-stat-icon" />
                  <div><strong>3 Projects</strong><span>FULL-STACK BUILDS</span></div>
                </div>
                <div className="hero-stat">
                  <Sparkles className="hero-stat-icon" />
                  <div><strong>184</strong><span>INDIA RANK · IEEE XTREME</span></div>
                </div>
                <div className="hero-stat">
                  <BriefcaseBusiness className="hero-stat-icon" />
                  <div><strong>Spring</strong><span>BACKEND DEVELOPMENT</span></div>
                </div>
                <div className="hero-stat">
                  <Mic className="hero-stat-icon" />
                  <div><strong>React</strong><span>FRONT-END DEVELOPMENT</span></div>
                </div>
              </div>
            </div>
            <div className="hero-visual" data-reveal>
              <div className="code-card">
                <div className="code-card-top">
                  <div className="code-dots">
                    <span /><span /><span />
                  </div>
                  <span className="code-filename">Mukesh.java</span>
                  <Terminal className="code-terminal-icon" />
                </div>
                <div className="code-body">
                  <p><span className="ln">1</span> <span className="kw">public</span> <span className="kw">class</span> <span className="cls">Mukesh</span> {'{'}</p>
                  <p><span className="ln">2</span>     <span className="kw">public</span> <span className="kw">static</span> <span className="kw">void</span> <span className="fn">main</span>(<span className="kw">String</span>[] args) {'{'}</p>
                  <p><span className="ln">3</span>         <span className="sys">System.out.println</span>(<span className="str">"Spring Boot"</span>);</p>
                  <p><span className="ln">4</span>         <span className="sys">System.out.println</span>(<span className="str">"Spring Boot"</span>);</p>
                  <p><span className="ln">5</span>         <span className="sys">System.out.println</span>(<span className="str">"React"</span>);</p>
                  <p><span className="ln">6</span>         <span className="sys">System.out.println</span>(<span className="str">"Build useful software"</span>);</p>
                  <p><span className="ln">6</span>         <span className="sys">System.out.println</span>(<span className="str">"Build useful software"</span>);</p>
                  <p><span className="ln">6</span>     {'}'}</p>
                  <p><span className="ln">7</span> {'}'}</p>
                </div>
                <div className="code-footer">
                  <span className="code-pulse" />
                  <span className="code-status">Building with <strong>Java Full Stack</strong></span>
                </div>
              </div>
              <div className="floating-badge badge-java">
                <Coffee />
                <span>Java</span>
              </div>
              <div className="floating-badge badge-sql">
                <Database />
                <span>SQL</span>
              </div>
              <div className="floating-badge badge-oop">
                <Layers />
                <span>OOP</span>
              </div>
            </div>
          </div>
          <div className="hero-scroll">
            <span>Scroll</span>
            <div className="hero-scroll-line" />
          </div>
        </section>

        {/* ABOUT */}
        <section className="section section-about" id="about">
          <AboutBackground />
          <div className="container about-container">
            <div className="section-head" data-reveal>
              <h2 className="section-title">About <em>Me</em></h2>
            </div>
            <div className="about-grid">
              <div className="about-lead" data-reveal>
                <Quote className="about-quote-icon" />
                <p className="about-quote">
                  Hi, I’m Mukesh K, a Java Full Stack Developer from Chennai, India, passionate about building practical and user-focused web applications. I work with Java, Spring Boot, React, SQL, and REST APIs, with hands-on experience developing full-stack applications and integrating modern tools and technologies.
                </p>
              </div>
              <div className="about-detail" data-reveal>
                <p>I enjoy solving problems through Core Java, OOP, Data Structures, and Algorithms, while continuously improving my backend and frontend development skills. My projects span AI-assisted onboarding, smart health monitoring, and flight ticket booking, turning ideas into functional applications.</p>
                <p>I’m actively involved in IEEE, contributing to website development and collaborating with teams on technical initiatives. My achievements include Global Rank 548 and India Rank 184 in IEEE Xtreme 17.0, winning Hackatronics 2025, and presenting an international project at IEEE YESIST12 in Malaysia.</p>
                <p>I’m always eager to learn, build, collaborate, and take on opportunities where I can contribute as a software developer.</p>
                <div className="about-signature">Mukesh K</div>
              </div>
            </div>
            <div className="about-meta" data-reveal>
              <div className="about-meta-item">
                <span className="about-meta-label">Based In</span>
                <span className="about-meta-value">Chennai, Tamil Nadu</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-label">Education</span>
                <span className="about-meta-value">B.E. ECE / 2022 — 2026</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-label">Focus</span>
                <span className="about-meta-value">Java Full Stack Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section ref={skillsSectionRef} className="section section-skills" id="skills">
          <SkillsBackground sectionRef={skillsSectionRef} />
          <div className="container">
            <div className="section-head" data-reveal>
              <h2 className="section-title">Technical <em>Skills</em></h2>
              <p className="section-sub">Core engineering foundations and tools for building full-stack applications.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => {
                const I = skill.icon;
                return (
                  <div className="skill-card-shell" key={skill.name} data-reveal tabIndex={0} style={{ ['--rotation-delay' as string]: `${index * -1}s` }}>
                    <div className="skill-card-glow" aria-hidden="true" />
                    <div className="skill-card-ring" aria-hidden="true">
                      <span className="skill-card-spin" />
                    </div>
                    <div className="skill-flip">
                      <div className={`skill-flip-inner skill-${skill.color}`}>
                        <div className="skill-flip-front">
                          <div className="skill-flip-icon"><I /></div>
                          <h3 className="skill-flip-name">{skill.name}</h3>
                        </div>
                        <div className="skill-flip-back">
                          <div className="skill-flip-tags">
                            {skill.items.map((item) => <span key={item}>{item}</span>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section section-projects" id="projects">
          <div className="container">
            <div className="section-head section-head-light" data-reveal>
              <h2 className="section-title">Selected <em>Projects</em></h2>
              <p className="section-sub">A collection of practical work, experiments, and academic projects that shaped how I approach problems.</p>
            </div>
            <div className="projects-list">
              {projects.map((project) => {
                const I = project.icon;
                return (
                  <article className={`project-card project-${project.accent}`} key={project.title} data-reveal>
                    <div className="project-card-bar" />
                    <div className="project-card-main">
                      <div className="project-card-left">
                        <div className="project-card-icon"><I /></div>
                      </div>
                      <div className="project-card-center">
                        <span className="project-card-category">{project.category}</span>
                        <h3 className="project-card-title">{project.title}</h3>
                        <p className="project-card-subtitle">{project.subtitle}</p>
                        <p className="project-card-desc">{project.description}</p>
                        <div className="project-card-tags">
                          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                        </div>
                      </div>
                      <div className="project-card-right">
                        <div className="project-mark" aria-label={project.mark}>
                          <span className="project-mark-layer project-mark-layer--blur" aria-hidden="true">{project.mark}</span>
                          <span className="project-mark-layer project-mark-layer--base">{project.mark}</span>
                        </div>
                        <button className="project-view" onClick={() => setActiveProject(project)}>
                          View Details
                          <ArrowUpRight />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* IEEE */}
        <section className="section section-ieee" id="experience">
          <IeeeBackground />
          <div className="container ieee-section-content">
            <div className="section-head" data-reveal>
              <h2 className="section-title">Work & <em>Experience</em></h2>
            </div>
            <div className="ieee-ticker" aria-label="IEEE roles ticker">
              <div className="ieee-ticker-track">
                <span className="ieee-ticker-content">
                  {experiences.map((item) => (
                    <span className="ieee-ticker-item" key={`${item.title}-ticker`}>
                      {item.role}
                      <span className="ieee-ticker-diamond" aria-hidden="true">◆</span>
                    </span>
                  ))}
                </span>
                <span className="ieee-ticker-content is-duplicate" aria-hidden="true">
                  {experiences.map((item) => (
                    <span className="ieee-ticker-item" key={`${item.title}-duplicate`}>
                      {item.role}
                      <span className="ieee-ticker-diamond" aria-hidden="true">◆</span>
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <div className="ieee-layout">
              <div className="ieee-intro" data-reveal>
                <div className="ieee-logo">IEEE</div>
                <p>My experience spans hands-on web development, responsive application work, and website committee leadership.</p>
                <p>I enjoy collaborating with teams to build, improve, and maintain useful web experiences.</p>
              </div>
              <div className="ieee-timeline" data-reveal>
                <div className="ieee-timeline-track" aria-hidden="true">
                  <span className="ieee-timeline-progress" ref={ieeeTimelineProgressRef} />
                </div>
                {experiences.map((item, index) => (
                  <div className="ieee-timeline-item" key={item.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                    <div className="ieee-timeline-marker" aria-hidden="true" />
                    <div className="ieee-timeline-content">
                      <h4>{item.title}</h4>
                      <span className="ieee-role-tag">{item.role}</span>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="section section-achievements" id="achievements">
          <div className="container">
            <div className="section-head" data-reveal>
              <h2 className="section-title">Achievements & <em>Recognition</em></h2>
            </div>
            <div className="achievements-grid">
              {achievements.map((achievement) => (
                <article className={`achievement-card ${achievement.className}`} key={achievement.title} data-reveal>
                  <div className={`achievement-photo ${achievement.image ? 'achievement-photo--image' : ''}`}>
                    {achievement.image ? (
                      <div className="achievement-photo-media">
                        <img
                          src={achievement.image}
                          alt={achievement.alt ?? achievement.title}
                          loading="lazy"
                          decoding="async"
                          width={1200}
                          height={900}
                        />
                      </div>
                    ) : (
                      <>
                        <Trophy />
                        <span>Recognition</span>
                      </>
                    )}
                  </div>
                  <div className="achievement-body">
                    <div className="achievement-meta">
                      <span>{achievement.year}</span>
                      <span>{achievement.organization}</span>
                    </div>
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-desc">{achievement.description}</p>
                    {achievement.award && (
                      <span className="achievement-award"><Trophy /> {achievement.award}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        {/* ACHIEVEMENT GALLERY */}
        <section className="section section-achievements" id="achievement-gallery">
          <div className="container">
            <div className="gallery-head" data-reveal>
              <h3>Achievement Gallery</h3>
            </div>
            <div className="gallery-layout" data-reveal>
              {[achievements.slice(0, 2), achievements.slice(2)].map((row, rowIndex) => (
                <div className="gallery-row" key={`achievement-gallery-${rowIndex}`}>
                  {row.map((achievement) => (
                    <a
                      className="gallery-item gallery-item--filled"
                      key={achievement.title}
                      href={achievement.image}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View image for ${achievement.title}`}
                      style={{ flex: `${achievement.ratio} 1 0`, aspectRatio: String(achievement.ratio) }}
                    >
                      <img
                        src={achievement.image}
                        alt={achievement.alt ?? achievement.title}
                        className="gallery-image"
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={900}
                      />
                      <span className="gallery-overlay" aria-hidden="true">
                        <span className="gallery-overlay__title">{achievement.title}</span>
                        <span className="gallery-overlay__message">{achievement.description}</span>
                      </span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-education" id="education">
          <div className="container">
            <div className="section-head" data-reveal>
              <h2 className="section-title"><em>Education</em></h2>
            </div>
            <div className="education-card" data-reveal>
              <div className="education-icon"><GraduationCap /></div>
              <div className="education-body">
                <span className="education-year">2022 — 2026</span>
                <h3>Bachelor of Electronics and Communication Engineering</h3>
                <p>Panimalar Engineering College, Chennai · CGPA: 8.49</p>
              </div>
              <ArrowUpRight className="education-arrow" />
            </div>
            <div className="education-card" data-reveal>
              <div className="education-icon"><GraduationCap /></div>
              <div className="education-body">
                <span className="education-year">2021 — 2022</span>
                <h3>Higher Secondary Education (HSC)</h3>
                <p>Velammal Matriculation School, Chennai · 82.5%</p>
              </div>
              <ArrowUpRight className="education-arrow" />
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section section-education" id="certifications">
          <div className="container">
            <div className="section-head" data-reveal>
              <h2 className="section-title"><em>Certifications</em></h2>
            </div>
            <div className="certification-list" data-reveal>
              {['SQL', 'React.js', 'Frontend Development'].map((certification) => (
                <div className="education-card" key={certification}>
                  <div className="education-icon"><BookOpen /></div>
                  <div className="education-body"><h3>{certification}</h3></div>
                  <ArrowUpRight className="education-arrow" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section className="section section-resume" id="resume">
          <div className="container">
            <div className="resume-panel" data-reveal>
              <div className="resume-content">
                <h2 className="resume-title">A closer look at <em>the work so far.</em></h2>
                <p className="resume-text">For a concise view of my education, foundations, projects, and achievements, view or download my current resume.</p>
                <div className="resume-actions">
                  <a className="btn btn-light" href={withPublicAsset('Mukesh_K_Resume.html')} target="_blank" rel="noreferrer">
                    View Resume <ExternalLink />
                  </a>
                  <a className="btn btn-outline-light" href={withPublicAsset('Mukesh_K_Resume.html')} download>
                    Download Resume <Download />
                  </a>
                </div>
              </div>
              <FileText className="resume-decor" />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section-contact" id="contact">
          <ContactBackground />
          <div className="container">
            <div className="section-head section-head-light" data-reveal>
              <h2 className="section-title">Let's build the <em>next chapter.</em></h2>
              <p className="section-sub">Have a question, an opportunity, or simply want to connect?     My inbox is open.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-links" data-reveal>
                <a href="mailto:kmukeshkumar2335@gmail.com" className="contact-link">
                  <div className="contact-link-icon"><Mail /></div>
                  <div className="contact-link-body">
                    <span className="contact-link-label">Email</span>
                    <span className="contact-link-value">kmukeshkumar2335@gmail.com</span>
                  </div>
                  <ArrowUpRight className="contact-link-arrow" />
                </a>
                <a href="tel:+919345670169" className="contact-link">
                  <div className="contact-link-icon"><Send /></div>
                  <div className="contact-link-body">
                    <span className="contact-link-label">Phone</span>
                    <span className="contact-link-value">+91 93456 70169</span>
                  </div>
                  <ArrowUpRight className="contact-link-arrow" />
                </a>
                <div className="contact-link">
                  <div className="contact-link-icon"><Linkedin /></div>
                  <div className="contact-link-body">
                    <span className="contact-link-label">LinkedIn</span>
                    <span className="contact-link-value">Mukesh K</span>
                  </div>
                </div>
                <a href="https://github.com/MukeshK2335" target="_blank" rel="noreferrer" className="contact-link">
                  <div className="contact-link-icon"><Github /></div>
                  <div className="contact-link-body">
                    <span className="contact-link-label">GitHub</span>
                    <span className="contact-link-value">github.com/MukeshK2335</span>
                  </div>
                  <ArrowUpRight className="contact-link-arrow" />
                </a>
              </div>
              <div className="contact-cta" data-reveal>
                <a href="mailto:kmukeshkumar2335@gmail.com" className="btn btn-primary btn-large">
                  Send Me an Email
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <Avatar size={48} loading="lazy" />
              <span className="brand-name">Mukesh K</span>
            </a>
            <p className="footer-tagline">Java Full Stack Developer · Chennai</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/MukeshK2335" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="mailto:kmukeshkumar2335@gmail.com" aria-label="Email"><Mail /></a>
            <a href="#projects" aria-label="Projects"><Code2 /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Mukesh K. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close">
              <X />
            </button>
            <span className="modal-kicker">{activeProject.category}</span>
            <h2 className="modal-title">{activeProject.title}</h2>
            <p className="modal-subtitle">{activeProject.subtitle}</p>
            <p className="modal-text">{activeProject.technical}</p>
            <div className="modal-tags">
              {activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
