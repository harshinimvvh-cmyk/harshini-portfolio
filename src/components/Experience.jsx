import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Database, BarChart3, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Data Analytics Intern',
      company: 'Techvolt Software Pvt. Ltd.',
      location: 'Coimbatore, Tamil Nadu',
      period: 'Jun 2026',
      status: 'Completed Internship',
      badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-300 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30',
      icon: BarChart3,
      bullets: [
        'Analyzed complex business datasets through systematic data collection, cleaning, transformation, and exploratory data analysis (EDA).',
        'Built insightful visualization dashboards and structured reports to assist team decision-making and report key performance indicators.',
        'Applied statistical techniques and structured reporting workflows to communicate findings effectively.'
      ],
      skills: ['Data Cleaning', 'Data Transformation', 'Data Visualization', 'Business Insights', 'Reporting']
    },
    {
      role: 'Python with SQL Intern',
      company: 'Brainery Spot Technology',
      location: 'Coimbatore, Tamil Nadu',
      period: 'Nov 2025 – Dec 2025',
      status: 'Completed Internship',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/30',
      icon: Database,
      bullets: [
        'Developed end-to-end Python applications integrated with relational SQL databases for efficient data management.',
        'Executed complete SQL CRUD (Create, Read, Update, Delete) operations on relational schemas, optimizing query flow.',
        'Gained rigorous hands-on experience in backend scripting, schema relational concepts, clean coding standards, and error handling.'
      ],
      skills: ['Python', 'SQL CRUD', 'Relational Databases', 'Clean Code Practices', 'Application Logic']
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-slate-50 dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/30 text-blue-900 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Internship <span className="text-gradient-cyan">Timeline</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-xl mx-auto font-medium">
            Practical hands-on industry exposure in software development, SQL database administration, and business data analytics.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-600 -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const IconComp = exp.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Node Icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border-2 border-cyan-600 dark:border-cyan-500 text-cyan-600 dark:text-cyan-400 items-center justify-center shadow-lg z-10">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Content Card container */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="glass-card bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl hover:border-cyan-500/50 transition-all duration-300 relative group">
                      
                      {/* Top Role Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${exp.badgeColor}`}>
                          {exp.role}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 font-mono font-bold">
                          <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Company Name */}
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {exp.company}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium mt-1 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                        <span>{exp.location}</span>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2.5 mb-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                        {exp.skills.map((s, sIdx) => (
                          <span key={sIdx} className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
                            #{s}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
