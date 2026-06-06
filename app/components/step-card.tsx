import { ComponentType } from "react";
import { LucideProps } from "lucide-react";

interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
  icon: ComponentType<LucideProps>;
  color: "emerald" | "blue" | "indigo";
  showLine?: boolean;
}

export default function StepCard({
  stepNumber,
  title,
  description,
  icon: Icon,
  color,
  showLine = false
}: StepCardProps) {
  const colorConfigs = {
    emerald: {
      shadow: "shadow-emerald-500/10 group-hover:shadow-emerald-500/30",
      border: "group-hover:border-emerald-200 dark:group-hover:border-emerald-500/30",
      icon: "text-emerald-600 dark:text-emerald-400",
      badge: "bg-emerald-600 shadow-emerald-500/30"
    },
    blue: {
      shadow: "shadow-blue-500/10 group-hover:shadow-blue-500/30",
      border: "group-hover:border-blue-200 dark:group-hover:border-blue-500/30",
      icon: "text-blue-600 dark:text-blue-400",
      badge: "bg-blue-600 shadow-blue-500/30"
    },
    indigo: {
      shadow: "shadow-indigo-500/10 group-hover:shadow-indigo-500/30",
      border: "group-hover:border-indigo-200 dark:group-hover:border-indigo-500/30",
      icon: "text-indigo-600 dark:text-indigo-400",
      badge: "bg-indigo-600 shadow-indigo-500/30"
    }
  };

  const config = colorConfigs[color];

  return (
    <div className="relative flex flex-col items-center text-center z-10 group">
      {showLine && (
        <div className="hidden md:block absolute top-10 lg:top-12 left-[60%] w-[80%] h-[2px] bg-linear-to-r from-gray-200 to-transparent dark:from-zinc-800 z-0" />
      )}
      
      <div className={`relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-xl ${config.shadow} flex items-center justify-center mb-6 sm:mb-8 group-hover:-translate-y-4 ${config.border} transition-all duration-500`}>
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-20 bg-linear-to-br from-transparent to-white/5" />
        <Icon className={`${config.icon} drop-shadow-sm w-8 h-8 sm:w-10 sm:h-10`} />
        <div className={`absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full ${config.badge} text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg`}>
          {stepNumber}
        </div>
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-base sm:text-lg text-gray-500 dark:text-zinc-400 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}
