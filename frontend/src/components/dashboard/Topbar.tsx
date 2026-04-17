import { Bell } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="h-16 px-6 border-b border-stone-200 bg-white/80 backdrop-blur-md flex items-center justify-between z-20 sticky top-0">
      
      {/* Breadcrumbs / Page Title */}
      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="text-stone-500">Dashboard</span>
        <span className="text-stone-300">/</span>
        <span className="text-stone-900">Overview</span>
      </div>

      <div className="flex items-center gap-10">
        {/* Notifications */}
        <button className="relative p-2 text-stone-400 hover:text-stone-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-orange-500 border border-white"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-4 border-l border-stone-200 pl-8 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-base font-semibold text-stone-800 group-hover:text-orange-600 transition-colors">Hackathon Demo</p>
            <p className="text-sm text-stone-500">Compliance Officer</p>
          </div>
          <div className="w-11 h-11 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center font-bold text-base text-stone-600 group-hover:border-orange-200 transition-colors">
            HD
          </div>
        </div>
      </div>
      
    </header>
  );
}
