import {
  Home,
  Sparkles,
  LayoutGrid,
  Cpu,
  Code2,
  Tag,
  KeyRound,
  Send,
  Activity,
  Zap,
  Shield,
  PanelsTopLeft,
  Smartphone,
  Globe,
  BarChart3,
  Rocket,
  Target,
  Users,
  ChartNoAxesColumnIncreasing,
  Settings,
  ShoppingBag,
  Palette,
  PenTool,
  Video,
  TrendingUp,
  Mail,
  Phone
} from "lucide-react";

// Navigation Links for Navbar/Sidebar
export interface NavLink {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "/", icon: Home },
  { id: "features", label: "Features", href: "/#features", icon: Sparkles },
  { id: "solutions", label: "Solutions", href: "/#solutions", icon: LayoutGrid },
  { id: "services", label: "Services", href: "/services", icon: Cpu },
  { id: "api-docs", label: "API Docs", href: "/api-docs", icon: Code2 },
  { id: "pricing", label: "Pricing", href: "/#pricing", icon: Tag },
];

// Steps for "How It Works" Section
export interface Step {
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "emerald" | "blue" | "indigo";
  showLine?: boolean;
}

export const stepCards: Step[] = [
  {
    stepNumber: "01",
    title: "Link Your Device",
    description: "Scan the QR code to connect your business WhatsApp account instantly. Start sending messages within minutes.",
    icon: KeyRound,
    color: "emerald",
    showLine: true
  },
  {
    stepNumber: "02",
    title: "Dispatch Campaigns",
    description: "Send bulk WhatsApp messages, transactional alerts, or broadcast campaigns via our robust API and dashboard.",
    icon: Send,
    color: "blue",
    showLine: true
  },
  {
    stepNumber: "03",
    title: "Real-time Tracking",
    description: "Monitor delivery status, track sent/failed messages, and analyze WhatsApp engagement on our live dashboard.",
    icon: Activity,
    color: "indigo"
  }
];

// Features Section Cards
export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  iconColorClass: string;
  iconBgClass: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Zap,
    iconColorClass: "text-blue-500",
    iconBgClass: "bg-blue-500/10",
    title: "Unlimited Messaging",
    description: "Send bulk WhatsApp campaigns without per-message platform limits on specific tiers."
  },
  {
    icon: Shield,
    iconColorClass: "text-emerald-500",
    iconBgClass: "bg-emerald-500/10",
    title: "Secure Connections",
    description: "End-to-end encrypted protocol integration to ensure your customer data stays protected."
  },
  {
    icon: PanelsTopLeft,
    iconColorClass: "text-indigo-500",
    iconBgClass: "bg-indigo-500/10",
    title: "Rich Media Support",
    description: "Send images, documents, videos, and interactive elements seamlessly."
  },
  {
    icon: Smartphone,
    iconColorClass: "text-orange-500",
    iconBgClass: "bg-orange-500/10",
    title: "Device Management",
    description: "Easily manage and monitor multiple WhatsApp instances and API keys from one portal."
  },
  {
    icon: Globe,
    iconColorClass: "text-pink-500",
    iconBgClass: "bg-pink-500/10",
    title: "Global Delivery",
    description: "Connect with users worldwide through optimized and stable WhatsApp routing."
  },
  {
    icon: BarChart3,
    iconColorClass: "text-amber-500",
    iconBgClass: "bg-amber-500/10",
    title: "Delivery Reports",
    description: "Granular tracking of pending, sent, delivered, and failed WhatsApp messages."
  }
];

// Stats Banner numbers
export interface StatItem {
  value: string;
  label: string;
}

export const stats: StatItem[] = [
  { value: "99.9%", label: "WhatsApp Uptime" },
  { value: "250M+", label: "Messages Delivered" },
  { value: "< 1s", label: "API Latency" },
  { value: "150+", label: "Connected Devices" }
];

// Solutions Section Cards
export interface Solution {
  icon: React.ComponentType<{ className?: string }>;
  iconColorClass: string;
  iconBgClass: string;
  title: string;
  description: string;
}

export const solutions: Solution[] = [
  {
    icon: Rocket,
    iconColorClass: "text-blue-500",
    iconBgClass: "bg-blue-500/10 border-blue-500/20",
    title: "Bulk Marketing Campaigns",
    description: "Send promotional WhatsApp messages or broadcast updates to thousands of customers instantly."
  },
  {
    icon: Target,
    iconColorClass: "text-indigo-500",
    iconBgClass: "bg-indigo-500/10 border-indigo-500/20",
    title: "Transactional Alerts",
    description: "Automate order updates, OTPs, and shipping notifications efficiently via our REST API."
  },
  {
    icon: Users,
    iconColorClass: "text-emerald-500",
    iconBgClass: "bg-emerald-500/10 border-emerald-500/20",
    title: "Multi-User Dashboards",
    description: "Let your team manage customer interactions and device health with role-based access."
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    iconColorClass: "text-amber-500",
    iconBgClass: "bg-amber-500/10 border-amber-500/20",
    title: "Detailed Analytics",
    description: "Track delivery health and engagement to optimize your broader WhatsApp strategy."
  }
];

// Pricing Plans
export interface PricingPlan {
  name: string;
  subtitle: string;
  price: { monthly: string; yearly: string };
  strikethrough: { monthly: string; yearly: string };
  discount: string;
  description: string;
  features: string[];
  cta: string;
  badge: string | null;
  type: "starter" | "pro" | "business";
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    subtitle: "The Shared API",
    price: { monthly: "1,199", yearly: "959" },
    strikethrough: { monthly: "1,499", yearly: "1,199" },
    discount: "20% OFF",
    description: "Send messages reliably from our system-provided company number.",
    features: [
      "From Company Number",
      "30,000 Messages/Month",
      "Essential Features Provided",
      "Standard Delivery Speed",
      "Email Support"
    ],
    cta: "Start Now",
    badge: null,
    type: "starter"
  },
  {
    name: "Pro",
    subtitle: "The Dedicated Session",
    price: { monthly: "1,999", yearly: "1,599" },
    strikethrough: { monthly: "2,499", yearly: "1,999" },
    discount: "20% OFF",
    description: "Link and send messages directly from your own business WhatsApp number.",
    features: [
      "From Your Own Number",
      "100,000 Messages/Month",
      "Dedicated Session Hosting",
      "Advanced API Access",
      "Priority Delivery Speed",
      "Premium Support"
    ],
    cta: "Get Started",
    badge: "Most Popular",
    type: "pro"
  },
  {
    name: "Business",
    subtitle: "The Enterprise Growth",
    price: { monthly: "2,399", yearly: "1,919" },
    strikethrough: { monthly: "2,999", yearly: "2,399" },
    discount: "20% OFF",
    description: "Bulk saving plan for long-term growth and high-volume automation.",
    features: [
      "Everything in Pro Included",
      "Multiple Number Support",
      "Unlimited API Access",
      "1 Year Duration (Save Big)",
      "Custom Python Integration",
      "Dedicated Account Manager"
    ],
    cta: "Go Big",
    badge: "Premium Choice",
    type: "business"
  }
];

// FAQs Data Structure
export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    title: "GENERAL QUESTIONS",
    items: [
      {
        question: "What is Notify?",
        answer: "BugRicer Notify is a next-generation WhatsApp API and bulk campaign platform that allows you to dispatch messages and webhooks with native integration and high deliverability."
      },
      {
        question: "How long does it take to set up?",
        answer: "Setup is instant. You can access the sandbox API immediately and begin sending test messages in less than 2 minutes."
      }
    ]
  },
  {
    title: "INTEGRATION & API",
    items: [
      {
        question: "Can I integrate this with my existing ERP or CRM?",
        answer: "Yes, our REST API is designed for easy integration with any CRM, ERP, or custom database solution. We support webhooks for real-time status updates."
      },
      {
        question: "Do you offer custom automation?",
        answer: "Yes! For Enterprise plans, our engineering team can build bespoke automation workflows and dedicated instances for your backend."
      }
    ]
  },
  {
    title: "TECHNICAL & NUMBER SAFETY",
    items: [
      {
        question: "Can I use my own WhatsApp number?",
        answer: "Absolutely. You can link your existing business phone number to Meta's Cloud API platform through our dashboard session hosting."
      },
      {
        question: "Will my number get banned?",
        answer: "We implement rate-limiting, smart queues, and meta-compliant template messaging to keep your number safe and compliant with Meta's policies."
      },
      {
        question: "Do I need to keep my phone connected to the internet?",
        answer: "No. Once authenticated via the QR code, your session is hosted in our high-availability cloud infrastructure. Your phone can go offline without affecting delivery."
      }
    ]
  },
  {
    title: "BILLING & PLANS",
    items: [
      {
        question: "What happens if I exceed my message limit?",
        answer: "If you exceed your plan's included messages, subsequent messages are billed at a very low pass-through rate, or you can easily upgrade to a higher tier."
      },
      {
        question: "Is there a discount for long-term plans?",
        answer: "Yes! Toggling to yearly billing automatically applies a flat 20% discount on all plans."
      },
      {
        question: "What is your refund policy?",
        answer: "We offer a 14-day money-back guarantee on all subscription plans if you are not satisfied with the platform performance."
      }
    ]
  }
];

// Services Page Data Structure
export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBgClass: string;
  iconColorClass: string;
  widthClass?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "enterprise",
    title: "Enterprise & Digital Development",
    description: "We build robust, scalable, and secure software systems designed to streamline your operations. As a Python-focused development firm, our backends are built for speed and reliability.",
    items: [
      {
        title: "ERP & CRM Systems",
        description: "Custom Enterprise Resource Planning and Customer Relationship Management tools tailored to your specific workflow.",
        icon: Settings,
        iconBgClass: "bg-blue-500/10",
        iconColorClass: "text-blue-500",
        widthClass: "w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)]"
      },
      {
        title: "LMS & HRM",
        description: "Advanced Learning Management Systems for educators and Human Resource Management platforms for growing teams.",
        icon: Users,
        iconBgClass: "bg-blue-500/10",
        iconColorClass: "text-blue-500",
        widthClass: "w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)]"
      },
      {
        title: "E-commerce Solutions",
        description: "High-performance online stores optimized for conversions and secure payments.",
        icon: ShoppingBag,
        iconBgClass: "bg-emerald-500/10",
        iconColorClass: "text-emerald-500",
        widthClass: "w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)]"
      },
      {
        title: "Business & Personal Portfolios",
        description: "Stunning, high-speed websites that showcase your brand or professional identity to the world.",
        icon: Globe,
        iconBgClass: "bg-blue-500/10",
        iconColorClass: "text-blue-500",
        widthClass: "w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)]"
      },
      {
        title: "Mobile Application Development",
        description: "Native and cross-platform mobile apps for Android and iOS to put your business in your customers' pockets.",
        icon: Smartphone,
        iconBgClass: "bg-indigo-500/10",
        iconColorClass: "text-indigo-500",
        widthClass: "w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)]"
      }
    ]
  },
  {
    id: "creative",
    title: "Creative Studio & Branding",
    description: "Great technology needs a great identity. Our creative team ensures your brand stands out with professional design and high-quality media.",
    items: [
      {
        title: "Product Designing",
        description: "UI/UX design that focuses on user experience and modern aesthetics.",
        icon: Palette,
        iconBgClass: "bg-red-500/10",
        iconColorClass: "text-red-500"
      },
      {
        title: "Logo & Branding",
        description: "Creating iconic visual identities and brand guidelines that resonate with your target audience.",
        icon: PenTool,
        iconBgClass: "bg-orange-500/10",
        iconColorClass: "text-orange-500"
      },
      {
        title: "Video Production",
        description: "Professional video content for advertisements, product demos, and social media storytelling.",
        icon: Video,
        iconBgClass: "bg-red-500/10",
        iconColorClass: "text-red-500"
      }
    ]
  },
  {
    id: "marketing",
    title: "Growth & Digital Marketing",
    description: "Building it is only half the battle. We help you reach your audience through data-driven marketing strategies.",
    items: [
      {
        title: "SEO (Search Engine Optimization)",
        description: "Rank higher on Google and drive organic traffic to your platform.",
        icon: TrendingUp,
        iconBgClass: "bg-emerald-500/10",
        iconColorClass: "text-emerald-500"
      },
      {
        title: "SEM & SMM",
        description: "Targeted Search Engine Marketing (Ads) and Social Media Marketing to build community and sales.",
        icon: BarChart3,
        iconBgClass: "bg-blue-500/10",
        iconColorClass: "text-blue-500"
      },
      {
        title: "Email & WhatsApp Marketing",
        description: "Using platforms like Notify to drive direct engagement and high open rates.",
        icon: Mail,
        iconBgClass: "bg-indigo-500/10",
        iconColorClass: "text-indigo-500"
      },
      {
        title: "Growth Hacking",
        description: "Strategic marketing funnels designed to scale your ROI rapidly.",
        icon: Zap,
        iconBgClass: "bg-orange-500/10",
        iconColorClass: "text-orange-500"
      }
    ]
  }
];
