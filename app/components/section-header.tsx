import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  children,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-0 mb-12 md:mb-16 ${className}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
        {title}
      </h2>
      <p className="text-lg sm:text-xl text-gray-500 dark:text-zinc-400 leading-relaxed">
        {description}
      </p>
      {children && (
        <div className="pt-2">
          {children}
        </div>
      )}
    </div>
  );
}
