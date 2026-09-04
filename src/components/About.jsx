import React from 'react';
import { User, GraduationCap, Briefcase, Award, CheckCircle, Target, Lightbulb, HeartHandshake } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Target,
      title: 'Data Analytics & Insights',
      desc: 'Extracted key insights from complex datasets via cleaning, transformation, and visualization.',
      color: 'text-cyan-700 dark:text-cyan-400',
      bg: 'bg-cyan-100 dark:bg-cyan-500/10'
    },
    {
      icon: Lightbulb,
      title: 'Generative AI Integration',
      desc: 'Skilled in Prompt Engineering, ChatGPT, Claude AI, and modern LLM tool workflows.',
      color: 'text-purple-700 dark:text-purple-400',
      bg: 'bg-purple-100 dark:bg-purple-500/10'
    },
    {
      icon: Briefcase,
      title: 'Industry Experience',
      desc: 'Completed two hands-on internships in Data Analytics (Techvolt) and Python with SQL (Brainery Spot).',
      color: 'text-blue-700 dark:text-blue-400',
      bg: 'bg-blue-100 dark:bg-blue-500/10'
    },
    {
      icon: HeartHandshake,
      title: 'Leadership & Sportsmanship',
      desc: 'Former Sports Captain (2023), leading school teams to Overall Championship Trophy victory.',
      color: 'text-teal-700 dark:text-teal-400',
      bg: 'bg-teal-100 dark:bg-teal-500/10'
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-50 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/30 text-cyan-950 dark:text-cyan-400 text-xs font-extrabold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Driven by Data, Powered by <span className="text-gradient-cyan">AI Innovation</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-600 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Summary Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-300 dark:border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <span>Professional Background</span>
              </h3>

              <p className="text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-relaxed mb-4 font-extrabold">
                I am a final-year <strong className="text-cyan-700 dark:text-cyan-300 font-extrabold">B.Sc. Computer Science (Artificial Intelligence & Data Science)</strong> student at <strong className="text-slate-900 dark:text-slate-100 font-black">K.S.R College of Arts and Science for Women, Namakkal</strong>, maintaining an impressive <strong className="text-slate-900 dark:text-slate-100 font-black">CGPA of 8.00</strong>.
              </p>

              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-bold">
                Having completed two rigorous internships in <strong className="text-slate-900 dark:text-slate-100 font-extrabold">Data Analytics</strong> and <strong className="text-slate-900 dark:text-slate-100 font-extrabold">Python with SQL</strong>, I possess solid experience in data manipulation, database CRUD operations, and building machine learning models for real-world problems like phishing site detection.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-300 dark:border-slate-800 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-extrabold">
                  <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>Certified by NASSCOM FutureSkills Prime & Outskill in Generative AI</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-extrabold">
                  <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>Front-End Development Certified by Naan Mudhalvan & SmartBridge</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-900 dark:text-slate-100 font-extrabold">
                  <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>MongoDB Certified in Node.js CRUD Operations</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-300 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-md"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-black text-base text-slate-900 dark:text-slate-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-800 dark:text-slate-200 font-bold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
