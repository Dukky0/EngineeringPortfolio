import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, MapPin, Phone, Mail, GraduationCap, Linkedin, Send } from 'lucide-react';

const THEME_CONFIG = {
  primary: '#00FF41',
  background: '#0B0E14',
  accent: '#22D3EE',
  glass: 'rgba(255, 255, 255, 0.08)'
};

const projects = [
  {
    title: 'A2C (Anything To CAN)',
    subtitle: 'Universal Protocol Converter',
    tech: ['STM32', 'CAN Bus', 'PCB Design', 'SPI', 'I2C', 'UART', 'Analog'],
    shortDesc: 'Adaptive sensor interface for centralized CAN bus communication',
    fullDesc: 'Designed and manufactured a custom PCB utilizing STM32 microcontroller for adaptively interpreting sensors across multiple protocols (SPI, I2C, UART, Analog) and transmitting standardized data to a central CAN bus network. This universal converter enables seamless integration of diverse sensor types into automotive communication systems.',
    highlights: [
      'Multi-protocol support: SPI, I2C, UART, and analog signal acquisition',
      'Adaptive signal interpretation with automatic protocol detection',
      'Real-time data conversion and CAN bus transmission',
      'Custom PCB design optimized for signal integrity',
      'Interrupt-driven architecture for efficient processing',
      'Configurable message formatting and routing'
    ],
    achievements: [
      'Successfully integrated 8+ different sensor types',
      'Reduced wiring complexity by 60%',
      'Achieved sub-millisecond processing latency',
      '99.9% message delivery reliability'
    ]
  },
  {
    title: 'Battery Testbench',
    subtitle: 'High-Precision Battery Management System',
    tech: ['STM32', 'L9963E BMIC', 'PCB Design', 'Data Acquisition', 'Team Leadership'],
    shortDesc: 'Advanced battery testing platform with integrated monitoring',
    fullDesc: 'Led a team of 4 engineers in designing a comprehensive battery testing system. Developed custom PCB featuring STM32 microcontroller and L9963E Battery Management IC (BMIC) to precisely measure cell discharge characteristics, temperature profiles, and current draw across multiple cell configurations.',
    highlights: [
      'Team leadership: Coordinated 4-person engineering team',
      'Simultaneous monitoring of 14 battery cells',
      'Real-time temperature sensing with thermal runaway detection',
      'High-accuracy current measurement up to 200A',
      'Automated test sequence execution',
      'Integration of STM32 L9963E BMIC for advanced cell monitoring',
      'Custom SPI communication protocol implementation'
    ],
    achievements: [
      'Reduced testing time by 40% through automation',
      'Achieved ±0.1% voltage measurement accuracy',
      'Implemented comprehensive safety features',
      'Successfully tested 100+ battery configurations'
    ]
  },
  {
    title: 'Internal Wiki',
    subtitle: 'Team Knowledge Management Platform',
    tech: ['React.js', 'MongoDB', 'Node.js', 'Express', 'REST API', 'Full-Stack'],
    shortDesc: 'Custom-built documentation and knowledge sharing platform',
    fullDesc: 'Architected and developed a full-stack web application to centralize team knowledge and technical documentation. Built custom React.js frontend with MongoDB backend, featuring markdown support, version control, search functionality, and role-based access control.',
    highlights: [
      'Full-stack development: React.js frontend with MongoDB backend',
      'Real-time collaborative editing capabilities',
      'Advanced full-text search with indexing',
      'Markdown editor with live preview',
      'Version control system for document history',
      'Role-based permissions and access control',
      'Responsive design for all devices'
    ],
    achievements: [
      'Reduced documentation retrieval time by 75%',
      'Successfully onboarded 50+ team members',
      '500+ documents catalogued in first 6 months',
      '95% user adoption rate within team'
    ]
  }
];

const experience = [
  {
    title: 'Junior Electrical Team Lead',
    organization: 'VT BOLT',
    period: 'Sep 2024 – Present',
    location: 'Blacksburg, VA',
    shortDesc: 'Leading hardware development for electric vehicle racing team',
    details: [
      'Leadership for hardware development across all electrical subsystems',
      'Managed a team of 60 members across electrical and mechanical disciplines',
      'Led comprehensive testing for battery and controls subsystems',
      'Managed all electrical and mechanical documentation and version control',
      'Coordinated cross-functional integration between electrical, mechanical, and software teams',
      'Oversaw PCB design and manufacturing for critical vehicle systems',
      'Implemented rigorous testing protocols for high-voltage systems'
    ]
  },
  {
    title: 'Simulation Design Team',
    organization: 'Hume Research Center',
    period: 'Sep 2024 – May 2025',
    location: 'Virginia Tech',
    shortDesc: 'Developing UAV simulation and visualization systems',
    details: [
      'Developed MATLAB simulations for UAV flight paths and obstacle avoidance algorithms',
      'Implemented Python-based drone environments using VisPy for real-time visualization',
      'Created performance metrics and analysis tools for autonomous navigation',
      'Collaborated with research team to validate simulation accuracy',
      'Optimized rendering pipeline for high-framerate 3D visualization',
      'Integrated sensor models for realistic environment simulation'
    ]
  }
];

const skills = {
  technical: ['Schematic Design', 'PCB Layout', 'SMD Soldering', 'CAD', 'FDM 3D Printing'],
  software: ['Altium Designer', 'MATLAB', 'Fusion360', 'AutoCAD', 'Git/Github/Gitlab', 'Quartus'],
  programming: ['C', 'C++', 'Java', 'JavaScript', 'HTML/CSS', 'Python'],
  coursework: ['Digital Systems', 'Embedded Systems', 'Computer Architecture', 'Data Structures & Algorithms']
};

const achievements = [
  { year: '2024', place: '3rd Place', event: 'TSA Nationals - Structural Engineering' },
  { year: '2023', place: '1st Place', event: 'TSA Nationals - Structural Engineering' },
  { year: '2022', place: '3rd Place', event: 'TSA Nationals - Structural Engineering' }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedDetail, setSelectedDetail] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    window.location.href = 'mailto:alexander.j.bloom925@gmail.com';
  };

  return (
    <div style={styles.app}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
        }
        html {
          scroll-behavior: smooth;
        }
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column !important;
          }
          .glass-box-absolute {
            position: relative !important;
            left: 0 !important;
            margin-top: 2rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={styles.hero} id="hero">
        <div style={styles.heroWrapper} className="hero-content">
          <motion.div 
            style={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.imagePlaceholder}>
              <span style={styles.initials}>AB</span>
            </div>
          </motion.div>

          <motion.div 
            style={styles.glassBoxAbsolute}
            className="glass-box-absolute"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 style={styles.heroName}>Alexander Bloom</h1>
            <div style={styles.heroLocation}>
              <MapPin size={16} color={THEME_CONFIG.accent} />
              <span>Blacksburg, VA</span>
            </div>
            <div style={styles.heroContacts}>
              <div style={styles.contactItem}>
                <Phone size={14} />
                <span>(804) 528-8540</span>
              </div>
              <div style={styles.contactItem}>
                <Mail size={14} />
                <span>alexander.j.bloom925@gmail.com</span>
              </div>
            </div>
            <div style={styles.heroEducation}>
              <GraduationCap size={18} color={THEME_CONFIG.primary} />
              <div>
                <p style={styles.eduText}>B.S. Electrical and Computer Engineering</p>
                <p style={styles.eduSubtext}>Virginia Tech • GPA: 3.13</p>
              </div>
            </div>
          </motion.div>
        </div>

        {scrolled && <div style={styles.navbarSpacer} />}
      </section>

      {/* Dynamic Navbar */}
      <motion.nav 
        layout
        style={{
          ...styles.navbar,
          ...(scrolled ? styles.navbarFixed : styles.navbarBottom)
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.div 
          style={styles.navbarInner}
          animate={{ width: scrolled ? '100%' : 'auto' }}
        >
          {['Projects', 'Experience', 'Skills', 'Achievements', 'Contact'].map((item) => (
            <motion.button
              key={item}
              style={styles.navButton}
              onClick={() => scrollToSection(item.toLowerCase())}
              whileHover={{ scale: 1.05, color: THEME_CONFIG.primary }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      </motion.nav>

      {/* Projects Section */}
      <section style={styles.section} id="projects">
        <div style={styles.container}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <div style={styles.projectSlider}>
            <button 
              style={styles.sliderButton} 
              onClick={() => setCurrentProject((currentProject - 1 + projects.length) % projects.length)}
            >
              <ChevronLeft size={24} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                style={styles.projectCard}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedDetail({ type: 'project', data: projects[currentProject] })}
              >
                <h3 style={styles.projectTitle}>{projects[currentProject].title}</h3>
                <p style={styles.projectSubtitle}>{projects[currentProject].subtitle}</p>
                <p style={styles.projectShortDesc}>{projects[currentProject].shortDesc}</p>
                <div style={styles.projectTechTags}>
                  {projects[currentProject].tech.map((tech) => (
                    <span key={tech} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <button style={styles.expandProjectBtn}>View Full Details →</button>
              </motion.div>
            </AnimatePresence>

            <button 
              style={styles.sliderButton} 
              onClick={() => setCurrentProject((currentProject + 1) % projects.length)}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div style={styles.sliderIndicators}>
            {projects.map((_, idx) => (
              <button
                key={idx}
                style={{
                  ...styles.indicator,
                  ...(idx === currentProject ? styles.indicatorActive : {})
                }}
                onClick={() => setCurrentProject(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={styles.section} id="experience">
        <div style={styles.container}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <div style={styles.timeline}>
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                style={styles.timelineItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                onClick={() => setSelectedDetail({ type: 'experience', data: exp })}
                whileHover={{ x: 5 }}
              >
                <div style={styles.timelineDot} />
                <div style={styles.timelineCard}>
                  <h3 style={styles.expTitle}>{exp.title}</h3>
                  <p style={styles.expOrg}>{exp.organization}</p>
                  <p style={styles.expPeriod}>{exp.period}</p>
                  <p style={styles.expShortDesc}>{exp.shortDesc}</p>
                  <button style={styles.viewDetailsBtn}>Click for details →</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Coursework Section */}
      <section style={styles.section} id="skills">
        <div style={styles.container}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills & Coursework
          </motion.h2>
          <div style={styles.skillsGrid}>
            {Object.entries(skills).map(([category, items], idx) => (
              <motion.div
                key={category}
                style={styles.skillCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 style={styles.skillCategory}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div style={styles.skillTags}>
                  {items.map((skill) => (
                    <span key={skill} style={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section style={styles.section} id="achievements">
        <div style={styles.container}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Achievements
          </motion.h2>
          <div style={styles.achievementsGrid}>
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                style={styles.achievementCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div style={styles.achievementYear}>{ach.year}</div>
                <div style={styles.achievementPlace}>{ach.place}</div>
                <p style={styles.achievementEvent}>{ach.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.section} id="contact">
        <div style={styles.container}>
          <motion.h2 
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <motion.div
            style={styles.contactSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={styles.contactLinks}>
              <div style={styles.contactLinkItem}>
                <Mail size={20} color={THEME_CONFIG.primary} />
                <a href="mailto:alexander.j.bloom925@gmail.com" style={styles.contactLink}>
                  alexander.j.bloom925@gmail.com
                </a>
              </div>
              <div style={styles.contactLinkItem}>
                <Linkedin size={20} color={THEME_CONFIG.accent} />
                <a href="https://linkedin.com/in/abloom925" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
                  linkedin.com/in/abloom925
                </a>
              </div>
            </div>
            <motion.button
              style={styles.sendMessageBtn}
              onClick={handleSendMessage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={18} />
              <span>Send Message</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedDetail && (
          <motion.div
            style={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDetail(null)}
          >
            <motion.div
              style={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={styles.modalHeader}>
                <div>
                  <h2 style={styles.modalTitle}>
                    {selectedDetail.type === 'experience' 
                      ? selectedDetail.data.title 
                      : selectedDetail.data.title}
                  </h2>
                  <p style={styles.modalSubtitle}>
                    {selectedDetail.type === 'experience' 
                      ? selectedDetail.data.organization 
                      : selectedDetail.data.subtitle}
                  </p>
                </div>
                <button style={styles.closeButton} onClick={() => setSelectedDetail(null)}>
                  <X size={24} />
                </button>
              </div>

              <div style={styles.modalBody}>
                {selectedDetail.type === 'experience' ? (
                  <>
                    <p style={styles.modalPeriod}>{selectedDetail.data.period}</p>
                    <p style={styles.modalLocation}>{selectedDetail.data.location}</p>
                    <h3 style={styles.detailsHeading}>Responsibilities & Achievements</h3>
                    <ul style={styles.detailsList}>
                      {selectedDetail.data.details.map((detail, i) => (
                        <li key={i} style={styles.detailItem}>{detail}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <div style={styles.projectTechTags}>
                      {selectedDetail.data.tech.map((tech) => (
                        <span key={tech} style={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                    <p style={styles.projectFullDesc}>{selectedDetail.data.fullDesc}</p>
                    
                    <h3 style={styles.detailsHeading}>Key Features & Highlights</h3>
                    <ul style={styles.detailsList}>
                      {selectedDetail.data.highlights.map((highlight, i) => (
                        <li key={i} style={styles.detailItem}>{highlight}</li>
                      ))}
                    </ul>

                    <h3 style={styles.detailsHeading}>Project Achievements</h3>
                    <ul style={styles.detailsList}>
                      {selectedDetail.data.achievements.map((achievement, i) => (
                        <li key={i} style={styles.detailItem}>{achievement}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
  app: {
    backgroundColor: THEME_CONFIG.background,
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    width: '100%',
    overflowX: 'hidden'
  },
  hero: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '2rem',
    background: THEME_CONFIG.background
  },
  heroWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
    maxWidth: '1200px',
    width: '100%',
    position: 'relative',
    flexWrap: 'wrap'
  },
  imageContainer: {
    flex: '0 0 40%',
    minWidth: '300px',
    maxWidth: '450px',
    position: 'relative',
    zIndex: 1
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: '1',
    background: `linear-gradient(135deg, ${THEME_CONFIG.primary}30, ${THEME_CONFIG.accent}30)`,
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `2px solid ${THEME_CONFIG.primary}50`,
    boxShadow: '0 20px 60px rgba(0, 255, 65, 0.2)'
  },
  initials: {
    fontSize: 'clamp(4rem, 10vw, 8rem)',
    fontWeight: 'bold',
    color: THEME_CONFIG.primary,
    opacity: 0.7
  },
  glassBoxAbsolute: {
    position: 'absolute',
    left: '35%',
    zIndex: 10,
    minWidth: '320px',
    maxWidth: '550px',
    background: THEME_CONFIG.glass,
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '4px',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
  },
  heroName: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 'bold',
    marginBottom: '0.75rem',
    background: `linear-gradient(135deg, ${THEME_CONFIG.primary}, ${THEME_CONFIG.accent})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  heroLocation: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#d0d0d0',
    marginBottom: '1rem'
  },
  heroContacts: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
    color: '#d0d0d0'
  },
  heroEducation: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    padding: '1rem',
    background: 'rgba(0, 255, 65, 0.1)',
    borderRadius: '4px',
    border: `1px solid ${THEME_CONFIG.primary}30`
  },
  eduText: {
    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
    color: '#ffffff',
    fontWeight: '500',
    marginBottom: '0.25rem'
  },
  eduSubtext: {
    fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
    color: '#a0a0a0'
  },
  navbarSpacer: {
    height: '80px',
    width: '100%'
  },
  navbar: {
    position: 'fixed',
    left: '0',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 1rem'
  },
  navbarBottom: {
    bottom: '2rem',
    top: 'auto'
  },
  navbarFixed: {
    top: '1rem',
    bottom: 'auto'
  },
  navbarInner: {
    background: THEME_CONFIG.glass,
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    padding: '1rem 2rem',
    borderRadius: '4px',
    display: 'flex',
    gap: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '900px'
  },
  navButton: {
    background: 'transparent',
    color: '#ffffff',
    border: 'none',
    padding: '0.5rem 1rem',
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '4px',
    fontWeight: '500'
  },
  section: {
    padding: 'clamp(4rem, 10vw, 8rem) 2rem',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  },
  sectionTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    marginBottom: '4rem',
    textAlign: 'center',
    background: `linear-gradient(135deg, ${THEME_CONFIG.primary}, ${THEME_CONFIG.accent})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 'bold'
  },
  projectSlider: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  sliderButton: {
    background: THEME_CONFIG.glass,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: THEME_CONFIG.primary,
    padding: '1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  },
  projectCard: {
    flex: '1',
    minWidth: '300px',
    maxWidth: '700px',
    background: THEME_CONFIG.glass,
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    padding: 'clamp(2rem, 4vw, 3rem)',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  projectTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    color: THEME_CONFIG.primary,
    marginBottom: '0.5rem',
    fontWeight: 'bold'
  },
  projectSubtitle: {
    fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
    color: THEME_CONFIG.accent,
    marginBottom: '1rem'
  },
  projectShortDesc: {
    fontSize: 'clamp(1rem, 2vw, 1.15rem)',
    color: '#d0d0d0',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  },
  projectTechTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  },
  techTag: {
    padding: '0.4rem 0.8rem',
    background: `${THEME_CONFIG.primary}20`,
    color: THEME_CONFIG.primary,
    borderRadius: '4px',
    fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)',
    border: `1px solid ${THEME_CONFIG.primary}40`
  },
  expandProjectBtn: {
    background: 'transparent',
    color: THEME_CONFIG.accent,
    border: `1px solid ${THEME_CONFIG.accent}`,
    padding: '0.75rem 1.5rem',
    borderRadius: '4px',
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.3s ease'
  },
  sliderIndicators: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    marginTop: '3rem'
  },
  indicator: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.3)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  indicatorActive: {
    background: THEME_CONFIG.primary,
    width: '40px',
    borderRadius: '6px'
  },
  timeline: {
    position: 'relative',
    paddingLeft: 'clamp(1rem, 3vw, 2rem)'
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: 'clamp(2rem, 4vw, 3rem)',
    paddingBottom: '3rem',
    borderLeft: `2px solid ${THEME_CONFIG.primary}40`,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  timelineDot: {
    position: 'absolute',
    left: '-7px',
    top: '0',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    background: THEME_CONFIG.primary,
    boxShadow: `0 0 0 4px ${THEME_CONFIG.background}, 0 0 20px ${THEME_CONFIG.primary}60`
  },
  timelineCard: {
    background: THEME_CONFIG.glass,
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    padding: 'clamp(1.5rem, 3vw, 2rem)',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease'
  },
  expTitle: {
    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
    color: THEME_CONFIG.primary,
    marginBottom: '0.5rem',
    fontWeight: '600'
  },
  expOrg: {
    fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
    color: THEME_CONFIG.accent,
    marginBottom: '0.25rem'
  },
  expPeriod: {
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
    color: '#a0a0a0',
    marginBottom: '1rem'
  },
  expShortDesc: {
    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
    color: '#d0d0d0',
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  viewDetailsBtn: {
    background: 'transparent',
    color: THEME_CONFIG.accent,
    border: 'none',
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
    cursor: 'pointer',
    padding: '0',
    fontWeight: '500'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  skillCard: {
    background: THEME_CONFIG.glass,
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    padding: 'clamp(1.5rem, 3vw, 2rem)',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  skillCategory: {
    fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
    color: THEME_CONFIG.primary,
    marginBottom: '1rem',
    fontWeight: '600'
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  },
  skillTag: {
    padding: '0.5rem 0.75rem',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#d0d0d0',
    borderRadius: '4px',
    fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem'
  },
  achievementCard: {
    background: THEME_CONFIG.glass,
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    padding: 'clamp(2rem, 3vw, 2.5rem)',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease'
  },
  achievementYear: {
    display: 'inline-block',
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    color: THEME_CONFIG.accent,
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  achievementPlace: {
    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
    color: THEME_CONFIG.primary,
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  achievementEvent: {
    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
    color: '#d0d0d0',
    lineHeight: '1.5'
  },
  contactSection: {
    background: THEME_CONFIG.glass,
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    padding: 'clamp(2rem, 4vw, 3rem)',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '700px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center'
  },
  contactLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '100%'
  },
  contactLinkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  contactLink: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#d0d0d0',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  },
  sendMessageBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    background: THEME_CONFIG.primary,
    color: THEME_CONFIG.background,
    border: 'none',
    borderRadius: '4px',
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '2rem',
    overflowY: 'auto'
  },
  modalContent: {
    background: THEME_CONFIG.background,
    borderRadius: '4px',
    maxWidth: '900px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 20px 80px rgba(0, 0, 0, 0.6)'
  },
  modalHeader: {
    background: THEME_CONFIG.glass,
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    padding: 'clamp(1.5rem, 3vw, 2rem)',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'sticky',
    top: 0,
    zIndex: 10
  },
  modalTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    color: THEME_CONFIG.primary,
    marginBottom: '0.5rem',
    fontWeight: 'bold'
  },
  modalSubtitle: {
    fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
    color: THEME_CONFIG.accent
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    transition: 'all 0.3s ease'
  },
  modalBody: {
    padding: 'clamp(2rem, 4vw, 3rem)'
  },
  modalPeriod: {
    fontSize: 'clamp(1rem, 2vw, 1.15rem)',
    color: '#a0a0a0',
    marginBottom: '0.5rem'
  },
  modalLocation: {
    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
    color: '#b0b0b0',
    marginBottom: '2rem'
  },
  projectFullDesc: {
    fontSize: 'clamp(1rem, 2vw, 1.15rem)',
    color: '#d0d0d0',
    lineHeight: '1.8',
    marginBottom: '2rem'
  },
  detailsHeading: {
    fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
    color: THEME_CONFIG.accent,
    marginTop: '2rem',
    marginBottom: '1rem',
    fontWeight: '600'
  },
  detailsList: {
    paddingLeft: '1.5rem',
    margin: 0
  },
  detailItem: {
    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
    color: '#d0d0d0',
    lineHeight: '1.8',
    marginBottom: '0.75rem'
  }
};

export default App;