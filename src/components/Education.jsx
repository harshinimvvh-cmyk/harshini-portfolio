import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'B.Sc. Computer Science (Artificial Intelligence & Data Science)',
      institution: 'K.S.R College of Arts and Science for Women',
      location: 'Namakkal, Tamil Nadu',
      period: '2024 – 2027',
      scoreLabel: 'CGPA',
      score: '8.00 / 10.0',
      badge: 'Degree Program',
      isPrimary: true,
      highlights: [
        'Specializing in Artificial Intelligence, Data Science, Machine Learning, and Relational Databases.',
        'Actively participating in technical workshops, hackathons, and certifications.',
        'Consistently maintaining high academic standing with an 8.00 CGPA.'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC) & SSLC',
      institution: 'K.S.R Matric Higher Secondary School',
      location: 'Namakkal, Tamil Nadu',
      period: 'School Education',
      scoreLabel: 'HSC & SSLC Marks',
      score: 'HSC: 77.3% | SSLC: 73.8%',
      badge: 'Schooling',
      isPrimary: false,
      highlights: [
        'Served as Sports Captain (2023), leading the school team to victory in Zonal Kho Kho & Athletics.',
        'Awarded certificates for outstanding performance in athletics and team coordination.'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative bg-slate-50 dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/30 text-cyan-900 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Education & <span className="text-gradient-cyan">Background</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-xl mx-auto font-medium">
            Academic achievements and specialization in Computer Science with focus on AI & Data Science.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className={`glass-card bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border ${
                edu.isPrimary ? 'border-cyan-500/50 shadow-cyan-500/10' : 'border-slate-200 dark:border-slate-800'
              } shadow-xl hover:border-cyan-500 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-cyan-100 dark:bg-cyan-500/15 text-cyan-900 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
                    {edu.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 font-mono font-bold">
                    <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">
                  {edu.institution}
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 mb-6 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>{edu.location}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CGPA / Score Footer Box */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {edu.scoreLabel}:
                </span>
                <span className="text-base font-extrabold font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-300 dark:border-cyan-500/30">
                  {edu.score}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
