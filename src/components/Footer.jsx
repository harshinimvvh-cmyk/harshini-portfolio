import React from 'react';
import { ArrowUp, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-sm">
                HM
              </div>
              <span className="font-extrabold text-slate-100 text-base">Harshini M</span>
            </div>
            <p className="text-slate-300 dark:text-slate-400 text-xs max-w-md leading-relaxed font-medium">
              B.Sc. Computer Science (AI & Data Science) final-year student at K.S.R College of Arts and Science for Women.
              Passionate about leveraging machine learning, SQL, and Generative AI to solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-bold text-slate-100 text-xs uppercase tracking-wider mb-2">Navigation</div>
            <div className="flex flex-col space-y-1.5 font-medium text-slate-300">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Internship Experience</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects & AI Sandbox</a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
              <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <div className="font-bold text-slate-100 text-xs uppercase tracking-wider mb-2">Connect</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/harshinimuniappan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:harshinimvvh@gmail.com"
                  className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="tel:+919025778932"
                  className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                  aria-label="Call Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:border-cyan-500 transition-colors text-xs font-bold self-start"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Declaration & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p className="italic text-center md:text-left max-w-xl font-medium">
            "I hereby declare that the information provided in this portfolio website is true and accurate to the best of my knowledge."
          </p>

          <p className="text-slate-300 font-semibold">
            © {new Date().getFullYear()} Harshini M
          </p>
        </div>

      </div>
    </footer>
  );
}
