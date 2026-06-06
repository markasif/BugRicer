import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBgClass: string;
  iconColorClass: string;
  widthClass?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  iconBgClass,
  iconColorClass,
  widthClass = "w-full"
}: ServiceCardProps) {
  return (
    <div className={`p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden text-center sm:text-left max-w-md flex flex-col items-center sm:items-start ${widthClass}`}>
      <div className="absolute top-0 right-0 p-4 text-gray-200 dark:text-zinc-800 opacity-40 group-hover:opacity-50 group-hover:scale-95 transition-all duration-500 pointer-events-none">
        <Icon className="w-20 h-20" aria-hidden="true" />
      </div>

      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto sm:mx-0 group-hover:scale-110 transition-transform ${iconBgClass} ${iconColorClass}`}
      >
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-500 dark:text-zinc-400 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}
