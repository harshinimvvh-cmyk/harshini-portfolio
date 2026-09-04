import React from 'react';
import { Trophy, Medal, Flag, CheckCircle2 } from 'lucide-react';

export default function Leadership() {
  const achievements = [
    {
      title: 'Sports Captain (2023)',
      subtitle: 'K.S.R Matric Higher Secondary School',
      icon: Trophy,
      color: 'text-amber-700 dark:text-amber-400',
      bg: 'bg-amber-100 dark:bg-amber-500/10',
      borderColor: 'border-amber-200 dark:border-amber-500/30',
      desc: 'Led the entire school sports team to win the prestigious Overall Championship Trophy through strategic planning and active team coordination.'
    },
    {
      title: 'Zonal-Level Victories',
      subtitle: 'Kho Kho & Athletics Events',
      icon: Medal,
      color: 'text-cyan-700 dark:text-cyan-400',
      bg: 'bg-cyan-100 dark:bg-cyan-500/10',
      borderColor: 'border-cyan-200 dark:border-cyan-500/30',
      desc: 'Secured top positions and champion titles at the Zonal level in Kho Kho and multiple competitive track and field athletic events.'
    },
    {
      title: 'Leadership & Team Management',
      subtitle: 'Competitive Excellence',
      icon: Flag,
      color: 'text-purple-700 dark:text-purple-400',
      bg: 'bg-purple-100 dark:bg-purple-500/10',
      borderColor: 'border-purple-200 dark:border-purple-500/30',
      desc: 'Demonstrated strong communication, pressure resilience, and team alignment—qualities seamlessly applied to technical project management.'
    }
  ];

  return (
    <section id="achievements" className="py-20 relative bg-slate-50 dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Achievements & <span className="text-gradient-cyan">Leadership</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-xl mx-auto font-medium">
            Proven track record of team captaincy, athletic championship wins, and competitive drive.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((ach, idx) => {
            const IconComp = ach.icon;
            return (
              <div
                key={idx}
                className="glass-card bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${ach.bg} ${ach.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {ach.title}
                  </h3>

                  <div className="text-xs font-bold text-cyan-700 dark:text-cyan-400 mb-4 font-mono">
                    {ach.subtitle}
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6">
                    {ach.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-teal-700 dark:text-teal-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Award & Recognition Certificate</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
