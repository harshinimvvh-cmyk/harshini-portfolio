import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, ShieldAlert, ShieldCheck, Play, Code2, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Projects() {
  const [testUrl, setTestUrl] = useState('https://secure-login-verify-update.bank-alert-verify.com');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const sampleUrls = [
    { url: 'https://paypal-security-update-verify.phish-site.net/login', label: 'Suspicious Phishing URL' },
    { url: 'https://github.com/harshini-m/ai-phishing-detection', label: 'Legitimate Tech Domain' },
    { url: 'http://192.168.1.1/update-account-pass.html', label: 'Raw IP Address Host' }
  ];

  const handleAnalyzeUrl = (urlToTest) => {
    const url = urlToTest || testUrl;
    if (!url.trim()) return;

    setAnalyzing(true);
    setAnalysisResult(null);

    setTimeout(() => {
      const hasIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(url);
      const isShort = url.length < 30;
      const subdomains = (url.split('://')[1] || url).split('/')[0].split('.').length;
      const suspiciousKeywords = ['login', 'verify', 'update', 'secure', 'bank', 'account', 'pay'].filter(kw => url.toLowerCase().includes(kw)).length;
      const isHttps = url.startsWith('https://');

      let riskScore = 20;
      if (hasIP) riskScore += 45;
      if (!isHttps) riskScore += 25;
      if (url.length > 55) riskScore += 20;
      if (subdomains > 3) riskScore += 25;
      if (suspiciousKeywords >= 2) riskScore += 30;
      if (isShort && isHttps && subdomains <= 3 && suspiciousKeywords === 0) riskScore = 8;

      riskScore = Math.min(Math.max(riskScore, 5), 98);
      const isPhishing = riskScore > 50;

      setAnalysisResult({
        score: riskScore,
        status: isPhishing ? 'Malicious / Phishing Threat Detected' : 'Legitimate / Safe Site',
        isPhishing,
        features: [
          { name: 'HTTPS Encryption Protocol', pass: isHttps, desc: isHttps ? 'Valid SSL scheme detected' : 'Missing HTTPS (High Risk)' },
          { name: 'Domain Subdomain Depth', pass: subdomains <= 3, desc: `${subdomains} level subdomains detected` },
          { name: 'URL Length Threshold', pass: url.length <= 50, desc: `${url.length} characters long` },
          { name: 'Suspicious Security Keywords', pass: suspiciousKeywords < 2, desc: `${suspiciousKeywords} sensitive keywords flagged` },
          { name: 'Raw IP Host Check', pass: !hasIP, desc: hasIP ? 'Raw IP addressing detected' : 'Standard domain name' }
        ]
      });

      setAnalyzing(false);
    }, 600);
  };

  const projects = [
    {
      id: 'phishing',
      title: 'AI-Powered Phishing Website Detection',
      category: 'Machine Learning',
      badge: 'College Project',
      type: 'ML & Security',
      description: 'Built a supervised machine learning classification model to detect and block phishing websites by evaluating URL structures, lexical patterns, and domain features.',
      highlights: [
        'Supervised learning using Scikit-learn decision trees/random forests.',
        'Feature extraction pipeline analyzing domain length, subdomain counts, HTTP protocol, and sensitive keyword flags.',
        'Achieved high prediction accuracy on structured dataset validation tests.'
      ],
      tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Feature Engineering', 'Data Mining']
    },
    {
      id: 'ecommerce',
      title: 'AI-Assisted E-Commerce Affiliate Website',
      category: 'Web Development',
      badge: 'Personal Project',
      type: 'Frontend & AI Workflows',
      description: 'Designed and implemented a modern, fully responsive e-commerce affiliate website leveraging Claude AI and Antigravity agentic workflows for rapid design ideation, code generation, and UI polishing.',
      highlights: [
        'Responsive mobile-first layout built with clean HTML5 & CSS3.',
        'Prompt engineering with Claude AI to structure product schemas and layout mockups.',
        'Optimized affiliate product grid with modern card hover interactions and filter tags.'
      ],
      tech: ['HTML5', 'CSS3', 'Claude AI', 'Antigravity', 'Responsive Design']
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/30 text-cyan-900 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Projects & <span className="text-gradient-cyan">AI Innovations</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm max-w-xl mx-auto font-medium">
            Practical applications combining supervised machine learning algorithms, frontend engineering, and AI tool workflows.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-card bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-purple-100 dark:bg-purple-500/15 text-purple-900 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Features:
                  </h4>
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Tags */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-900 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Live Interactive ML Phishing Detector Sandbox Widget */}
        <div className="glass-card bg-white dark:bg-slate-950 rounded-3xl p-6 sm:p-8 border border-cyan-400/40 dark:border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Widget Title Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span>Interactive ML Phishing Risk Classifier</span>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-mono rounded bg-cyan-100 dark:bg-cyan-500/20 text-cyan-900 dark:text-cyan-300 font-bold">Live Demo</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  Simulate the Scikit-learn URL feature extraction algorithm built for the ML Phishing Detection Project.
                </p>
              </div>
            </div>
          </div>

          {/* Input & Test presets */}
          <div className="space-y-4 max-w-3xl">
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={testUrl}
                onChange={(e) => setTestUrl(e.target.value)}
                placeholder="Enter website URL to analyze (e.g. https://example.com)..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 font-mono font-medium"
              />
              <button
                onClick={() => handleAnalyzeUrl()}
                disabled={analyzing}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/20 hover:from-cyan-500 hover:to-blue-500 transition-all disabled:opacity-50"
              >
                {analyzing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Extracting ML Features...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Run ML Model</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Test Presets */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-slate-700 dark:text-slate-300 font-bold">Quick Test Presets:</span>
              {sampleUrls.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setTestUrl(s.url);
                    handleAnalyzeUrl(s.url);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-[11px] font-bold text-cyan-800 dark:text-cyan-300 border border-slate-300 dark:border-slate-800 transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>

          </div>

          {/* Analysis Results Display */}
          {analysisResult && (
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6 animate-in fade-in duration-300">
              
              {/* Score Header */}
              <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
                analysisResult.isPhishing 
                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-500/40 text-rose-900 dark:text-rose-200' 
                  : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-200'
              }`}>
                <div className="flex items-center gap-3">
                  {analysisResult.isPhishing ? (
                    <ShieldAlert className="w-8 h-8 text-rose-600 dark:text-rose-400 shrink-0" />
                  ) : (
                    <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  )}
                  <div>
                    <div className="font-extrabold text-base">{analysisResult.status}</div>
                    <div className="text-xs font-mono font-semibold opacity-90">Prediction Confidence: High</div>
                  </div>
                </div>

                <div className="text-right flex items-center gap-3">
                  <div className="text-xs uppercase font-mono font-bold">Risk Index:</div>
                  <div className={`text-3xl font-extrabold font-mono ${
                    analysisResult.isPhishing ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {analysisResult.score}%
                  </div>
                </div>
              </div>

              {/* Extracted Feature Vectors */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                  Extracted Supervised ML Feature Vector Results:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {analysisResult.features.map((feat, fIdx) => (
                    <div key={fIdx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs shadow-sm">
                      <div>
                        <div className="font-extrabold text-slate-900 dark:text-slate-100">{feat.name}</div>
                        <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">{feat.desc}</div>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        feat.pass ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400' : 'bg-rose-100 dark:bg-rose-500/20 text-rose-800 dark:text-rose-400'
                      }`}>
                        {feat.pass ? 'SAFE' : 'RISK'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
