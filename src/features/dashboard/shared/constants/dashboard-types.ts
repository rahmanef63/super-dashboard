import React from "react";
import {
  LayoutDashboard,
  Briefcase,
  PieChart,
  Heart,
  Users,
  GraduationCap,
  Bookmark,
  Palette,
  Globe,
  Settings,
  FileText,
  CreditCard,
  DollarSign,
  Activity,
  Calendar,
  ClipboardList,
  BookOpen,
  Zap,
  Camera,
  Laptop,
  Presentation,
  Building,
  Star,
  Info,
  ShoppingCart,
  HelpCircle,
} from "lucide-react";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  path: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

export interface DashboardType {
  id: string;
  name: string;
  icon: React.ReactNode;
  path: string;
  menuItems: MenuItem[];
  organizations?: boolean; // Flag to indicate if this dashboard supports organization switching
}

// Create icon elements separately to avoid JSX parsing issues
const presentationIcon = React.createElement(Presentation, {
  className: "h-4 w-4",
});
const layoutDashboardIcon = React.createElement(LayoutDashboard, {
  className: "h-4 w-4",
});
const settingsIcon = React.createElement(Settings, { className: "h-4 w-4" });
const briefcaseIcon = React.createElement(Briefcase, { className: "h-4 w-4" });
const fileTextIcon = React.createElement(FileText, { className: "h-4 w-4" });
const clipboardListIcon = React.createElement(ClipboardList, {
  className: "h-4 w-4",
});
const pieChartIcon = React.createElement(PieChart, { className: "h-4 w-4" });
const creditCardIcon = React.createElement(CreditCard, {
  className: "h-4 w-4",
});
const dollarSignIcon = React.createElement(DollarSign, {
  className: "h-4 w-4",
});
const heartIcon = React.createElement(Heart, { className: "h-4 w-4" });
const activityIcon = React.createElement(Activity, { className: "h-4 w-4" });
const usersIcon = React.createElement(Users, { className: "h-4 w-4" });
const calendarIcon = React.createElement(Calendar, { className: "h-4 w-4" });
const graduationCapIcon = React.createElement(GraduationCap, {
  className: "h-4 w-4",
});
const bookOpenIcon = React.createElement(BookOpen, { className: "h-4 w-4" });
const bookmarkIcon = React.createElement(Bookmark, { className: "h-4 w-4" });
const zapIcon = React.createElement(Zap, { className: "h-4 w-4" });
const paletteIcon = React.createElement(Palette, { className: "h-4 w-4" });
const cameraIcon = React.createElement(Camera, { className: "h-4 w-4" });
const globeIcon = React.createElement(Globe, { className: "h-4 w-4" });
const laptopIcon = React.createElement(Laptop, { className: "h-4 w-4" });
const starIcon = React.createElement(Star, { className: "h-4 w-4" });
const infoIcon = React.createElement(Info, { className: "h-4 w-4" });
const shoppingCartIcon = React.createElement(ShoppingCart, {
  className: "h-4 w-4",
});
const helpCircleIcon = React.createElement(HelpCircle, {
  className: "h-4 w-4",
});

export const dashboardTypes: DashboardType[] = [
  {
    id: "demo",
    name: "Demo Dashboard",
    path: "/dashboard/demo",
    icon: presentationIcon,
    menuItems: [
      {
        id: "overview",
        name: "Overview",
        path: "/dashboard/demo",
        icon: layoutDashboardIcon,
      },
      {
        id: "features",
        name: "Features",
        path: "/dashboard/demo#features",
        icon: starIcon,
      },
      {
        id: "dashboards",
        name: "Dashboards",
        path: "/dashboard/demo#dashboards",
        icon: layoutDashboardIcon,
      },
      {
        id: "pricing",
        name: "Pricing",
        path: "/dashboard/demo#pricing",
        icon: shoppingCartIcon,
      },
      {
        id: "cta",
        name: "Get Started",
        path: "/dashboard/demo#cta",
        icon: helpCircleIcon,
      },
    ],
  },
  {
    id: "main",
    name: "Main Dashboard",
    path: "/dashboard",
    icon: layoutDashboardIcon,
    menuItems: [
      {
        id: "overview",
        name: "Overview",
        path: "/dashboard",
        icon: layoutDashboardIcon,
      },
      {
        id: "settings",
        name: "Settings",
        path: "/dashboard/settings",
        icon: settingsIcon,
      },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    path: "/dashboard/professional",
    icon: briefcaseIcon,
    menuItems: [
      {
        id: "overview",
        name: "Overview",
        path: "/dashboard/professional",
        icon: layoutDashboardIcon,
      },
      {
        id: "projects",
        name: "Projects",
        path: "/dashboard/professional/projects",
        icon: fileTextIcon,
      },
      {
        id: "tasks",
        name: "Tasks",
        path: "/dashboard/professional/tasks",
        icon: clipboardListIcon,
      },
    ],
    organizations: true, // Enable organization switching for professional dashboard
  },
  {
    id: "finance",
    name: "Finance",
    path: "/dashboard/finance",
    icon: pieChartIcon,
    menuItems: [
      {
        id: "overview",
        name: "Overview",
        path: "/dashboard/finance",
        icon: layoutDashboardIcon,
      },
      {
        id: "transactions",
        name: "Transactions",
        path: "/dashboard/finance/transactions",
        icon: creditCardIcon,
      },
      {
        id: "expense-tracker",
        name: "Expense Tracker",
        path: "/dashboard/finance/expense-tracker",
        icon: dollarSignIcon,
      },
    ],
  },
  {
    id: "health",
    name: "Health",
    path: "/dashboard/health",
    icon: heartIcon,
    menuItems: [
      {
        id: "overview",
        name: "Overview",
        path: "/dashboard/health",
        icon: layoutDashboardIcon,
      },
      {
        id: "activities",
        name: "Activities",
        path: "/dashboard/health/activities",
        icon: activityIcon,
      },
    ],
  },
  {
    id: "family",
    name: "Family",
    path: "/dashboard/family",
    icon: usersIcon,
    menuItems: [
      {
        id: "overview",
        name: "Overview",
        path: "/dashboard/family",
        icon: layoutDashboardIcon,
      },
      {
        id: "events",
        name: "Events",
        path: "/dashboard/family/events",
        icon: calendarIcon,
      },
    ],
  },
  {
    id: "study",
    name: "Study",
    path: "/dashboard/study",
    icon: graduationCapIcon,
    menuItems: [
      {
        id: "overview",
        name: "Overview",
        path: "/dashboard/study",
        icon: layoutDashboardIcon,
      },
      {
        id: "courses",
        name: "Courses",
        path: "/dashboard/study/courses",
        icon: bookOpenIcon,
      },
    ],
  },
  {
    id: "spiritual",
    name: "Spiritual",
    path: "/dashboard/spiritual",
    icon: bookmarkIcon,
    menuItems: [
      {
        id: "overview",
        name: "Overview",
        path: "/dashboard/spiritual",
        icon: layoutDashboardIcon,
      },
      {
        id: "practices",
        name: "Practices",
        path: "/dashboard/spiritual/practices",
        icon: zapIcon,
      },
    ],
  },
  {
    id: "hobbies",
    name: "Hobbies",
    path: "/dashboard/hobbies",
    icon: paletteIcon,
    menuItems: [
      {
        id: "overview",
        name: "Overview",
        path: "/dashboard/hobbies",
        icon: layoutDashboardIcon,
      },
      {
        id: "photography",
        name: "Photography",
        path: "/dashboard/hobbies/photography",
        icon: cameraIcon,
      },
    ],
  },
  {
    id: "digital",
    name: "Digital",
    path: "/dashboard/digital",
    icon: globeIcon,
    menuItems: [
      {
        id: "overview",
        name: "Overview",
        path: "/dashboard/digital",
        icon: layoutDashboardIcon,
      },
      {
        id: "devices",
        name: "Devices",
        path: "/dashboard/digital/devices",
        icon: laptopIcon,
      },
    ],
  },
];
