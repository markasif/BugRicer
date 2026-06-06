import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  iconColorClass: string;
  iconBgClass: string;
  title: string;
  description: string;
  variant?: "a" | "b";
}

export default function FeatureCard({
  icon,
  iconColorClass,
  iconBgClass,
  title,
  description,
  variant = "a"
}: FeatureCardProps) {
  const containerClasses = variant === "b"
    ? "group relative p-8 rounded-[24px] bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-500/20 transition-all duration-500 text-left flex flex-col items-start w-full"
    : "p-8 rounded-[32px] bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-500 group text-left flex flex-col items-start w-full";

  return (
    <div className={containerClasses}>
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${iconBgClass} ${iconColorClass}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-500 dark:text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
