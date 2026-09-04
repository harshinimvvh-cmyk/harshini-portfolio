import React, { useState } from 'react';
import { Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('All');

  const certs = [
    {
      title: 'Generative AI Mastermind',
      issuer: 'Outskill',
      date: 'Completed Certification',
      category: 'Generative AI',
      type: 'Certification',
      badgeColor: 'bg-purple-100 dark:bg-purple-500/15 text-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-500/30',
      description: 'Advanced mastery of Generative AI principles, prompt strategy, and LLM automation tools.'
    },
    {
      title: 'Generative AI Literacy',
      issuer: 'NASSCOM FutureSkills Prime',
      date: 'Sep 2025',
      category: 'Generative AI',
      type: 'Certification',
      badgeColor: 'bg-purple-100 dark:bg-purple-500/15 text-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-500/30',
      description: 'National skill certification covering core GenAI architectures, ethical AI, and business applications.'
    },
    {
      title: 'Full Stack – Front-End Development',
      issuer: 'Naan Mudhalvan Scheme, TN Skill Development Corp & SmartBridge',
      date: 'Nov 2025',
      category: 'Web & Cloud',
      type: 'Government Skill Initiative',
      badgeColor: 'bg-cyan-100 dark:bg-cyan-500/15 text-cyan-900 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/30',
      description: 'Comprehensive front-end web engineering program covering HTML, CSS, JavaScript, and responsive design.'
    },
    {
      title: 'MongoDB CRUD Operations in Node.js',
      issuer: 'MongoDB',
      date: 'Aug 2026',
      category: 'Web & Cloud',
      type: 'Database Certification',
      badgeColor: 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-900 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30',
      description: 'Official MongoDB database queries, indexing, and CRUD operation workflows in Node.js environments.'
    },
    {
      title: 'ChatGPT for Everyone',
      issuer: 'GUVI Geek Networks',
      date: 'Feb 2026',
      category: 'Generative AI',
      type: 'Certification',
      badgeColor: 'bg-purple-100 dark:bg-purple-500/15 text-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-500/30',
      description: 'Practical training on maximizing ChatGPT capabilities for data synthesis, coding, and problem solving.'
    },
    {
      title: 'Agentblazer Champion',
      issuer: 'SmartBridge Educational Services & Salesforce, IndiaAI Mission',
      date: 'Apr 2026',
      category: 'Workshops',
      type: 'Workshop & Challenge',
      badgeColor: 'bg-blue-100 dark:bg-blue-500/15 text-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-500/30',
      description: 'Specialized agentic AI workshop in collaboration with Salesforce & IndiaAI Mission.'
    },
    {
      title: 'LLM-Powered AI Chatbot Development',
      issuer: 'Hands-on Session',
      date: '2026',
      category: 'Workshops',
      type: 'Hands-on Training',
      badgeColor: 'bg-teal-100 dark:bg-teal-500/15 text-teal-900 dark:text-teal-300 border-teal-200 dark:border-teal-500/30',
      description: 'Practical workshop building custom AI chatbots using Large Language Models and Prompt Engineering.'
    }
  ];

  const categories = ['All', 'Generative AI', 'Web & Cloud', 'Workshops'];

  const filteredCerts = activeFilter === 'All'
    ? certs
    : certs.filter(c => c.category === activeFilter);

  return (
    <section id="certifications" className="py-20 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/30 text-purple-900 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Certifications & <span className="text-gradient-purple">Training</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-xl mx-auto font-medium">
            Recognized industry credentials issued by NASSCOM, Outskill, Tamil Nadu Skill Development Corp, MongoDB, and GUVI.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-extrabold border ${cert.badgeColor}`}>
                    {cert.type}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400">
                    <Calendar className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-slate-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-3">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Status Footer */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold">
                <span className="flex items-center gap-1 text-teal-700 dark:text-teal-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <span className="font-mono text-purple-700 dark:text-purple-400">{cert.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
