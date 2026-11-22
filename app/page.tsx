import React from 'react';
import { Mail, ExternalLink, Download, Terminal, Shield, Cloud } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Portfolio() {
  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "GDScript"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Bootstrap"] },
    { category: "Backend & DB", items: ["Node.js", "Express", "REST APIs", "MySQL", "Supabase", "MongoDB"] },
    { category: "Cloud, DevOps & Security", items: ["GCP (Cloud Run, Cloud SQL)", "Docker", "Git", "Vercel", "Offensive Security / Red Team"] },
    { category: "Game Dev", items: ["Godot Engine 4", "Finite State Machine (FSM)"] },
  ];

  const projects = [
    {
      title: "The Slayer — 2D Action Platformer",
      category: "Game Development",
      description: "Game 2D Action Platformer berbasis Godot Engine 4 yang mengimplementasikan arsitektur Finite State Machine (FSM) untuk AI musuh yang responsif dan mekanik pertarungan dinamis. Dievaluasi menggunakan metode SUS dan Cognitive Walkthrough.",
      tech: ["Godot Engine 4", "GDScript", "FSM Architecture"],
      github: "https://github.com/fadliDlee/the-slayer-godot",
      liveDemo: "https://orthroscrzn.itch.io/the-slayer",
      demoLabel: "Play in Browser"
    },
    {
      title: "K-Pop Idol Profiles Web App",
      category: "Fullstack Web Development",
      description: "Aplikasi web direktori profil idol K-Pop interaktif dengan antarmuka responsif dan pengelolaan data berbasis cloud. Di-deploy ke Vercel dengan custom domain.",
      tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Vercel"],
      github: "https://github.com/fadliDlee",
      liveDemo: "https://fineshyt-fadle.web.id",
      demoLabel: "Visit Website"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight text-emerald-400">fadli.dev</span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition">Experience</a>
            <a href="#skills" className="hover:text-emerald-400 transition">Skills</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-28">
        {/* HERO SECTION */}
        <section id="about" className="pt-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <Terminal className="w-3.5 h-3.5" /> Available for Software Engineering Roles
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Hi, I'm <span className="text-emerald-400">Fadli Paresyi</span>.
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-400">
            Software Engineer | Fullstack Developer & Game Architect
          </h2>
          <p className="max-w-2xl text-slate-400 leading-relaxed">
            Lulusan Rekayasa Perangkat Lunak (IPK 3.81) dengan keahlian dalam pengembangan aplikasi web modern menggunakan React, Next.js, dan Node.js, serta pengembangan game dengan Godot Engine. Didukung oleh pengalaman Cloud Computing dari Bangkit Academy dan Red Team Cybersecurity untuk membangun sistem yang skalabel dan aman.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="/cv-fadli-paresyi.pdf" 
              download 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold transition"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
            <a 
              href="https://github.com/fadliDlee" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-medium transition"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/fadli-paresyi-947ba130b" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-medium transition"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a 
              href="mailto:fadlicrzn123@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-medium transition"
            >
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
            <p className="text-slate-400 text-sm mt-1">Karya pilihan di bidang Game Architecture dan Fullstack Web Development.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col justify-between p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition">
                <div className="space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-5 pt-6 mt-6 border-t border-slate-800/80 text-sm font-medium">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition">
                      <GithubIcon className="w-4 h-4" /> Source Code
                    </a>
                  )}
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition">
                      <ExternalLink className="w-4 h-4" /> {project.demoLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & CERTIFICATIONS */}
        <section id="experience" className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Experience</h3>
            <div className="space-y-6 border-l-2 border-slate-800 pl-5">
              <div className="space-y-1">
                <span className="text-xs text-emerald-400 font-medium">Sep 2025 – Dec 2025</span>
                <h4 className="text-lg font-bold text-white">Junior Cybersecurity & Red Team Intern</h4>
                <p className="text-sm text-slate-400 font-medium">PT VINIX SEVEN AURUM (VINIX7)</p>
                <p className="text-sm text-slate-400 pt-2 leading-relaxed">
                  Beroperasi dalam tim Red Team (Offensive Security), melakukan penetration testing dan vulnerability assessment untuk mengevaluasi ketahanan sistem serta mendokumentasikan mitigasi celah keamanan.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-emerald-400 font-medium">Sep 2024 – Dec 2024</span>
                <h4 className="text-lg font-bold text-white">Cloud Computing Learning Path</h4>
                <p className="text-sm text-slate-400 font-medium">Bangkit Academy (Google, GoTo, Traveloka)</p>
                <p className="text-sm text-slate-400 pt-2 leading-relaxed">
                  Lulus dari program intensif 900 jam. Merancang arsitektur RESTful API backend dan mengelola infrastruktur cloud menggunakan GCP (Cloud Run, App Engine, Cloud SQL, Cloud Storage).
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Education & Certifications</h3>
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
              <span className="text-xs text-emerald-400 font-medium">2022 – 2026</span>
              <h4 className="text-lg font-bold text-white">Bachelor of Software Engineering (S.Kom)</h4>
              <p className="text-sm text-slate-400">Universitas Bina Sarana Informatika • GPA: 3.81 / 4.00</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Licenses & Certifications</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-400" /> Program Analyst — BNSP</li>
                <li className="flex items-center gap-2"><Cloud className="w-4 h-4 text-emerald-400" /> Cohort Cloud Computing Path — Bangkit Academy</li>
                <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-400" /> Junior Cybersecurity Engineer — Vinix7</li>
                <li className="flex items-center gap-2"><Terminal className="w-4 h-4 text-emerald-400" /> PCAP: Programming Essentials in Python — Cisco</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section id="skills" className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
                <h4 className="font-semibold text-emerald-400 text-sm">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Fadli Paresyi. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}