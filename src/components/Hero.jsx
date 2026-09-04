import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Download, Sparkles, Brain, Database, Code, CheckCircle2 } from 'lucide-react';

export default function Hero({ openResumeModal }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glowing Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-purple-500/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/30 text-cyan-950 dark:text-cyan-300 text-xs font-extrabold tracking-wide shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-600 dark:bg-cyan-400"></span>
              </span>
              <span>Available for AI & Data Analyst Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
                Hi, I'm <span className="text-gradient-cyan">Harshini M</span>
              </h1>
              <p className="text-lg sm:text-xl font-extrabold text-cyan-700 dark:text-cyan-400 font-mono">
                B.Sc. Computer Science (AI & Data Science) Student
              </p>
            </div>

            {/* Tagline */}
            <p className="text-slate-800 dark:text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0 font-semibold">
              Aspiring AI & Data Analyst <span className="text-cyan-600 dark:text-cyan-400 font-bold">|</span> Building intelligent solutions with Python, SQL & Generative AI. 
              Translating complex datasets into actionable insights and robust predictive models.
            </p>

            {/* Quick Contact Chips Grid */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold text-slate-900 dark:text-slate-100">
              
              <a 
                href="https://linkedin.com/in/harshinimuniappan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-400 transition-all duration-200 text-slate-900 dark:text-slate-100"
              >
                <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>linkedin.com/in/harshinimuniappan</span>
              </a>

              <a 
                href="mailto:harshinimvvh@gmail.com" 
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-400 transition-all duration-200 text-slate-900 dark:text-slate-100"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>harshinimvvh@gmail.com</span>
              </a>

              <a 
                href="tel:+919025778932" 
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-400 transition-all duration-200 text-slate-900 dark:text-slate-100 font-mono"
              >
                <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>+91 90257 78932</span>
              </a>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-sm text-slate-900 dark:text-slate-100">
                <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Namakkal, Tamil Nadu</span>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 text-white font-extrabold text-sm shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:scale-[1.02] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={openResumeModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-extrabold text-sm border border-slate-800 dark:border-slate-700 shadow-md transition-all duration-200"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Metrics Row */}
            <div className="pt-6 border-t border-slate-300 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center">
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 shadow-sm">
                <div className="text-2xl font-extrabold text-cyan-700 dark:text-cyan-400 font-mono">8.00</div>
                <div className="text-xs text-slate-900 dark:text-slate-300 font-extrabold">CGPA (B.Sc. CS)</div>
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 shadow-sm">
                <div className="text-2xl font-extrabold text-purple-700 dark:text-purple-400 font-mono">2</div>
                <div className="text-xs text-slate-900 dark:text-slate-300 font-extrabold">Internships</div>
              </div>
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 shadow-sm">
                <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 font-mono">7+</div>
                <div className="text-xs text-slate-900 dark:text-slate-300 font-extrabold">Certifications</div>
              </div>
            </div>

          </div>

          {/* Right Column: AI / Data Tech Card Visualization */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Card */}
              <div className="glass-card rounded-3xl p-6 shadow-xl relative overflow-hidden border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-300 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <Brain className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    <span className="font-extrabold text-sm tracking-wide text-slate-900 dark:text-slate-100">AI & Data Profile</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-extrabold bg-purple-100 dark:bg-purple-500/15 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30">
                    2024-2027 Batch
                  </span>
                </div>

                {/* Tech Chips Showcase */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-200 dark:bg-cyan-500/10 text-cyan-900 dark:text-cyan-400">
                        <Brain className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-slate-900 dark:text-slate-100">Generative AI & LLMs</div>
                        <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">ChatGPT, Claude, Prompt Eng.</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-purple-200 dark:bg-purple-500/10 text-purple-900 dark:text-purple-400">
                        <Database className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-slate-900 dark:text-slate-100">Data Analytics & SQL</div>
                        <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">CRUD, Transformation, Viz</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-200 dark:bg-blue-500/10 text-blue-900 dark:text-blue-400">
                        <Code className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-slate-900 dark:text-slate-100">Machine Learning & Web</div>
                        <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Python, Scikit-learn, HTML/CSS</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>
                </div>

                {/* College Footer Badge */}
                <div className="mt-5 pt-4 border-t border-slate-300 dark:border-slate-800 text-center">
                  <p className="text-xs text-slate-900 dark:text-slate-200 font-extrabold">
                    🎓 K.S.R College of Arts and Science for Women
                  </p>
                </div>

              </div>

              {/* Floating Decorative Pill */}
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl border border-cyan-400 dark:border-cyan-500/30 animate-float hidden sm:flex bg-white dark:bg-slate-900">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-extrabold text-slate-900 dark:text-slate-100">NASSCOM & Outskill Certified</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
