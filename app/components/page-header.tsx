import { ReactNode } from "react";

interface PageHeaderProps {
  badge: string;
  title: ReactNode;
  description: string;
  maxDescriptionWidthClass?: string;
}

export default function PageHeader({
  badge,
  title,
  description,
  maxDescriptionWidthClass = "max-w-4xl"
}: PageHeaderProps) {
  return (
    <section className="text-center space-y-4 md:space-y-8 max-w-4xl mx-auto px-4">
      <div className="space-y-4 flex flex-col items-center">
        <span className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wider uppercase select-none">
          {badge}
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] sm:leading-tight">
          {title}
        </h1>
        <p className={`text-lg sm:text-xl text-gray-600 dark:text-zinc-400 ${maxDescriptionWidthClass} mx-auto leading-relaxed`}>
          {description}
        </p>
      </div>
    </section>
  );
}
