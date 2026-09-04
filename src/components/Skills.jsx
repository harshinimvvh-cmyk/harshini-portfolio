import React, { useState } from 'react';
import { Code, Brain, Database, Layout, Terminal, Users, Search, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const skillCategories = [
    {
      id: 'ai',
      name: 'AI & Generative AI',
      icon: Brain,
      color: 'text-purple-700 dark:text-purple-400',
      bg: 'bg-purple-100 dark:bg-purple-500/10',
      borderColor: 'border-purple-200 dark:border-purple-500/30',
      skills: [
        { name: 'ChatGPT', level: 'Advanced', detail: 'Prompt design & workflow automation' },
        { name: 'Claude AI', level: 'Advanced', detail: 'Code generation & analytical reasoning' },
        { name: 'Antigravity', level: 'Proficient', detail: 'Agentic coding & workflow integration' },
        { name: 'Prompt Engineering', level: 'Expert', detail: 'Few-shot, chain-of-thought prompting' },
        { name: 'LLM Tools', level: 'Proficient', detail: 'API integration & agent toolsets' },
        { name: 'Generative AI Workflows', level: 'Proficient', detail: 'Task automation & synthesis' },
      ]
    },
    {
      id: 'programming',
      name: 'Programming',
      icon: Code,
      color: 'text-cyan-700 dark:text-cyan-400',
      bg: 'bg-cyan-100 dark:bg-cyan-500/10',
      borderColor: 'border-cyan-200 dark:border-cyan-500/30',
      skills: [
        { name: 'Python', level: 'Core Focus', detail: 'Basics, Scikit-learn, Data processing' },
        { name: 'SQL', level: 'Core Focus', detail: 'Queries, CRUD, Relational DBs' },
        { name: 'Java', level: 'Basics', detail: 'OOP concepts & syntax fundamentals' },
      ]
    },
    {
      id: 'database',
      name: 'Database',
      icon: Database,
      color: 'text-blue-700 dark:text-blue-400',
      bg: 'bg-blue-100 dark:bg-blue-500/10',
      borderColor: 'border-blue-200 dark:border-blue-500/30',
      skills: [
        { name: 'SQL - Basic Queries', level: 'Proficient', detail: 'SELECT, JOIN, Filtering, Aggregations' },
        { name: 'CRUD Operations', level: 'Proficient', detail: 'Create, Read, Update, Delete' },
        { name: 'Relational DB Concepts', level: 'Proficient', detail: 'Normalization, Primary/Foreign keys' },
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: Layout,
      color: 'text-teal-700 dark:text-teal-400',
      bg: 'bg-teal-100 dark:bg-teal-500/10',
      borderColor: 'border-teal-200 dark:border-teal-500/30',
      skills: [
        { name: 'HTML5', level: 'Proficient', detail: 'Semantic markup & Web structures' },
        { name: 'CSS3', level: 'Proficient', detail: 'Responsive design, Flexbox, Grid' },
      ]
    },
    {
      id: 'tools',
      name: 'Developer Tools',
      icon: Terminal,
      color: 'text-emerald-700 dark:text-emerald-400',
      bg: 'bg-emerald-100 dark:bg-emerald-500/10',
      borderColor: 'border-emerald-200 dark:border-emerald-500/30',
      skills: [
        { name: 'VS Code', level: 'Daily Tool', detail: 'Extensions, Debugging & Environment setup' },
        { name: 'Antigravity IDE', level: 'Daily Tool', detail: 'AI-assisted development agent' },
        { name: 'GitHub', level: 'Proficient', detail: 'Version control & Repository management' },
      ]
    },
    {
      id: 'soft',
      name: 'Soft Skills',
      icon: Users,
      color: 'text-amber-700 dark:text-amber-400',
      bg: 'bg-amber-100 dark:bg-amber-500/10',
      borderColor: 'border-amber-200 dark:border-amber-500/30',
      skills: [
        { name: 'Analytical Thinking', level: 'Core', detail: 'Data-driven problem evaluation' },
        { name: 'Problem-Solving', level: 'Core', detail: 'Structured algorithm design' },
        { name: 'Attention to Detail', level: 'Core', detail: 'Rigorous data & code quality' },
        { name: 'Communication', level: 'Core', detail: 'Technical documentation & teamwork' },
      ]
    }
  ];

  const categoriesList = ['All', ...skillCategories.map(c => c.name)];

  const filteredCategories = skillCategories.map(cat => {
    const isCategoryMatch = selectedCategory === 'All' || selectedCategory === cat.name;
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.detail.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      isMatch: isCategoryMatch && (searchQuery === '' || matchingSkills.length > 0),
      displaySkills: searchQuery === '' ? cat.skills : matchingSkills
    };
  }).filter(cat => cat.isMatch);

  return (
    <section id="skills" className="py-20 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/30 text-purple-900 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Skills & <span className="text-gradient-purple">Competencies</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-xl mx-auto font-medium">
            Categorized technical toolset spanning AI, Data Analytics, Databases, and Frontend Development.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
            {categoriesList.map((catName) => (
              <button
                key={catName}
                onClick={() => setSelectedCategory(catName)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  selectedCategory === catName
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-purple-400'
                }`}
              >
                {catName}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-medium transition-colors"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                className="glass-card bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className={`p-2.5 rounded-xl ${cat.bg} ${cat.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                        {cat.name}
                      </h3>
                      <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
                        {cat.displaySkills.length} skills listed
                      </span>
                    </div>
                  </div>

                  {/* Skill Items */}
                  <div className="space-y-3">
                    {cat.displaySkills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col gap-1 hover:border-slate-300 transition-colors shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-slate-800 text-cyan-900 dark:text-cyan-300 font-bold">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium pl-5">
                          {skill.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
