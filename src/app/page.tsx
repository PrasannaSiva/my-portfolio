"use client";

import React from 'react';
import { Linkedin, Mail, MapPin, Layers, Database, Code, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-200 relative overflow-hidden">
      
      {/* --- BACKGROUND BLOBS (RICH UI) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-violet-400/10 rounded-full blur-[120px]" />
      </div>

      {/* --- GLASS HEADER --- */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="sticky top-4 z-50 mx-auto max-w-5xl px-4"
      >
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-indigo-500/5 rounded-2xl px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">PS.</h1>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-indigo-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      <main className="relative z-10">
        
        {/* --- HERO SECTION (WITH PROFILE IMAGE) --- */}
        <section id="about" className="pt-24 pb-32 px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-12 gap-12 items-center mb-16">
              
              {/* LEFT COLUMN: TEXT (Span 7) */}
              <motion.div variants={itemVariants} className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/50 border border-blue-200 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  Senior Frontend Lead
                </div>
                
                <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                  Prasanna <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Sivapragasam
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-slate-600 font-light max-w-lg">
                  Senior React Native & React.js Developer with <span className="font-semibold text-slate-800">9+ years</span> of expertise.
                </p>
                
                <p className="text-slate-600 leading-relaxed max-w-2xl text-lg">
                  Building secure, scalable, enterprise-grade mobile and web applications. Specializing in the <span className="text-indigo-600 font-medium">React ecosystem</span>, micro-frontend architectures, and digital transformation for banking sectors.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:prasannalqq3@gmail.com" 
                    className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-medium shadow-xl shadow-blue-900/20 hover:bg-slate-800 transition-all"
                  >
                    <Mail size={18} /> Contact Me
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/in/prasanna-sivapragasam/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/60 text-slate-700 px-8 py-4 rounded-xl font-medium hover:bg-white/80 transition-all shadow-sm"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </motion.a>
                </div>
              </motion.div>
              
              {/* RIGHT COLUMN: PROFILE IMAGE (Span 5) */}
              <motion.div 
                variants={itemVariants} 
                className="md:col-span-5 flex justify-center md:justify-end relative"
              >
                {/* Abstract decorative blobs behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-violet-600/20 rounded-full blur-3xl transform scale-90" />
                
                {/* Image Container with Glass Border */}
                <motion.div 
                  whileHover={{ scale: 1.02, rotate: 2 }}
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border-8 border-white/30 shadow-2xl shadow-indigo-500/20 backdrop-blur-sm"
                >
                  <img 
                    src="photo.PNG" 
                    alt="Prasanna Sivapragasam" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating 'Open to Work' Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-xl border border-white/50 shadow-sm">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Open to Work</span>
                     </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* STATS STRIP */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <StatItem 
                icon={<MapPin size={24} />} 
                label="Location" 
                value="Abu Dhabi, UAE" 
                color="text-blue-600"
                bg="bg-white/60"
              />
              <StatItem 
                icon={<Code size={24} />} 
                label="Core Stack" 
                value="React Native, React.js (v18), TS" 
                color="text-indigo-600"
                bg="bg-white/60"
              />
              <StatItem 
                icon={<Layers size={24} />} 
                label="Architecture" 
                value="Micro-frontends, Offline-First" 
                color="text-violet-600"
                bg="bg-white/60"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-900 mb-16 flex items-center gap-4"
            >
              <span className="w-12 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
              Professional Experience
            </motion.h3>

            <div className="space-y-12 relative border-l-2 border-slate-200/60 ml-3 pl-8 md:pl-12">
              <ExperienceCard 
                role="Senior Software Engineer"
                company="Dice Tek LLC (Client: ADCB)"
                period="Apr 2021 - Present"
                active={true}
                description="Lead frontend developer for enterprise banking applications. Architected secure web/mobile apps using React.js (v18) and React Native."
                points={[
                  "Designed micro-frontend architectures to decouple KYC and compliance workflows.",
                  "Integrated Microblink OCR SDK and UAE Pass using Native Modules.",
                  "Reduced First Contentful Paint (FCP) by ~40% via code splitting and memoization.",
                  "Utilized RTK Query for server-state management and caching."
                ]}
              />
              
              <ExperienceCard 
                role="Program Analyst"
                company="Cognizant Technology Solutions"
                period="Mar 2018 - Apr 2021"
                description="Developed enterprise-grade mobile applications for government and utility clients with offline-first capabilities."
                points={[
                  "Built offline-first mobile solutions using Redux Persist and SQLite.",
                  "Achieved ~70% code reuse between Web and Mobile using custom hooks.",
                  "Migrated legacy state logic to Redux for single source of truth."
                ]}
              />

              <ExperienceCard 
                role="Software Engineer"
                company="Truetech Solutions Pvt. Ltd"
                period="Mar 2016 - Aug 2018"
                description="Delivered HRMS and B2E applications using JavaScript mobile frameworks."
                points={[
                  "Developed cross-platform mobile applications for government and enterprise clients.",
                  "Recognized with 'Star Award' for technical excellence."
                ]}
              />
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-900 mb-16 flex items-center gap-4"
            >
              <span className="w-12 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
              Featured Projects
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer id="contact" className="relative mt-20">
          <div className="absolute inset-0 bg-slate-900 skew-y-3 origin-bottom-left transform translate-y-20 -z-10"></div>
          <div className="bg-slate-900 text-slate-300 py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Ready to collaborate?</h2>
                <p className="mb-10 max-w-lg mx-auto text-slate-400 text-lg">
                  Looking for opportunities to leverage React and React Native for scalable enterprise solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                  <a href="mailto:prasannalqq3@gmail.com" className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all">
                    <Mail size={20} className="text-blue-400 group-hover:scale-110 transition-transform" /> 
                    <span className="font-medium">prasannalqq3@gmail.com</span>
                  </a>
                  <a href="https://linkedin.com/in/prasanna-sivapragasam/" className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-all">
                    <Linkedin size={20} className="text-blue-400 group-hover:scale-110 transition-transform" /> 
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
                <p className="text-sm text-slate-600">© 2025 Prasanna Sivapragasam. Built with Next.js & Tailwind.</p>
              </motion.div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const StatItem = ({ icon, label, value, color, bg }: { icon: any, label: string, value: string, color: string, bg: string }) => (
  <div className="flex items-start gap-4">
    <div className={`p-3 rounded-xl ${bg} ${color} backdrop-blur-md shadow-sm border border-white/40`}>
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-slate-900">{label}</h3>
      <p className="text-slate-500 text-sm">{value}</p>
    </div>
  </div>
);

const ExperienceCard = ({ role, company, period, description, points, active }: { role: string, company: string, period: string, description: string, points: string[], active?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="relative group"
  >
    <span className={`absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-white shadow-sm transition-colors duration-300 ${active ? 'bg-blue-600 scale-125' : 'bg-slate-300 group-hover:bg-blue-400'}`}></span>
    
    <div className="mb-6 p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h4 className="text-xl font-bold text-slate-900">{role}</h4>
        <span className="text-xs font-bold tracking-wide text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase">{period}</span>
      </div>
      <h5 className="text-lg text-blue-700 font-semibold mb-3">{company}</h5>
      <p className="text-slate-600 mb-4 leading-relaxed font-light">
        {description}
      </p>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProjectCard = ({ title, dates, desc, tags }: { title: string, dates: string, desc: string, tags: string[] }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -8 }}
    className="flex flex-col h-full bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
        <Database size={20} />
      </div>
      <ArrowUpRight size={18} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
    </div>
    
    <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-indigo-700 transition-colors">{title}</h4>
    <p className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wider">{dates}</p>
    
    <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
      {desc}
    </p>
    
    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200/50">
      {tags.map((tag, i) => (
        <span key={i} className="px-2.5 py-1 bg-white/60 border border-slate-100 text-slate-600 text-[10px] uppercase font-bold tracking-wide rounded-md shadow-sm">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

// --- PROJECT DATA ---
const projects = [
  {
    title: "ADCB COP",
    dates: "Apr 2021 - Present",
    desc: "Digital onboarding web application enabling streamlined processes for banking products based on credit eligibility.",
    tags: ['React', 'Microblink', 'UAE Pass']
  },
  {
    title: "MicroApp",
    dates: "Apr 2021 - Aug 2021",
    desc: "Intermediary platform designed to streamline EIDA registration, passport applications, and KYC verification.",
    tags: ['Micro-frontend', 'KYC', 'Compliance']
  },
  {
    title: "ADCB Accor",
    dates: "Sept 2021 - Mar 2022",
    desc: "Mobile application enabling users to seamlessly apply for ADCB Accor credit cards with FATCA compliance.",
    tags: ['Mobile App', 'FinTech', 'Credit Cards']
  },
  {
    title: "Newport Native",
    dates: "Apr 2018 - Nov 2019",
    desc: "B2C mobile application for R.J. Reynolds allowing users to receive coupon offers via push notifications.",
    tags: ['B2C', 'Coupons', 'Push Notifications']
  },
  {
    title: "Water Corp Field App",
    dates: "Apr 2018 - Nov 2018",
    desc: "Mobile application for Water Corporation (Australia) enabling field engineers to manage water services.",
    tags: ['Field Service', 'Offline-First', 'Utility']
  },
  {
    title: "Sales Force Automation",
    dates: "Mar 2016 - Jun 2016",
    desc: "Mobile application for UltraTech Pvt Ltd enabling planned visits and MCL requests management.",
    tags: ['Automation', 'Enterprise', 'Android/iOS']
  },
  {
    title: "Technical Force Auto",
    dates: "Jul 2016 - Nov 2016",
    desc: "Mobile application for UltraTech technical teams ensuring offline/online operations using Sync Technology.",
    tags: ['Offline Sync', 'Enterprise']
  },
  {
    title: "Ashghal (B2C)",
    dates: "Dec 2016 - Mar 2017",
    desc: "B2C mobile application for ASHGHAL Public Works Authority e-services with SharePoint integration.",
    tags: ['Government', 'SharePoint', 'E-Services']
  },
  {
    title: "Ministry of Public Health",
    dates: "Apr 2017 - Jun 2017",
    desc: "Enabled HRMS services on mobile and desktop through a mobile application for Qatar MoPH.",
    tags: ['HRMS', 'Mobile', 'Government']
  }
];

export default Portfolio;