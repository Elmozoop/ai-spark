import { Bell } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="h-16 px-6 border-b border-slate-800/60 bg-slate-950/50 backdrop-blur-md flex items-center justify-between z-20 sticky top-0">
      
      {/* Breadcrumbs / Page Title */}
      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="text-slate-500">Dashboard</span>
        <span className="text-slate-700">/</span>
        <span className="text-slate-200">Overview</span>
      </div>

      <div className="flex items-center gap-10">
        {/* Notifications */}
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500 border border-slate-950"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-4 border-l border-slate-800 pl-8 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-base font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">Hackathon Demo</p>
            <p className="text-sm text-slate-500">Compliance Officer</p>
          </div>
          <div className="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-base text-slate-200">
            HD
          </div>
        </div>
      </div>
      
    </header>
  );
}
