import React from 'react';
import { X, Download, FileText, CheckCircle } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl border border-slate-300 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                Harshini_M_Resume_Final.pdf
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                B.Sc. Computer Science (AI & Data Science) Student Resume
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Harshini_M_Resume_Final.pdf"
              download="Harshini_M_Resume_Final.pdf"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-extrabold text-xs shadow-md hover:from-cyan-500 hover:to-blue-500 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Viewer Frame */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-950 p-2 overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
          <object
            data="/Harshini_M_Resume_Final.pdf"
            type="application/pdf"
            className="w-full h-full min-h-[500px] rounded-xl border border-slate-300 dark:border-slate-800"
          >
            <div className="text-center p-8 space-y-4 text-slate-800 dark:text-slate-200">
              <FileText className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mx-auto" />
              <p className="text-sm font-medium">
                PDF preview is ready. If your browser does not embed inline PDFs, click below to download directly.
              </p>
              <a
                href="/Harshini_M_Resume_Final.pdf"
                download="Harshini_M_Resume_Final.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 text-white font-bold text-xs shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </object>
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-medium">
          <div className="flex items-center gap-1.5 text-teal-700 dark:text-teal-400 font-bold">
            <CheckCircle className="w-4 h-4" />
            <span>Verified Resume Document • CGPA 8.00</span>
          </div>
          <span className="text-[11px] font-mono">Updated 2026 Batch</span>
        </div>

      </div>
    </div>
  );
}
