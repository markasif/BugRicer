import { ChevronRight } from "lucide-react";

interface ConsultCtaProps {
  href?: string;
  text?: string;
}

export default function ConsultCta({
  href = "mailto:info@codoai.in",
  text = "Consult with Our Experts"
}: ConsultCtaProps) {
  return (
    <div className="flex justify-center pt-4">
      <a
        href={href}
        className="px-8 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
      >
        <span>{text}</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
