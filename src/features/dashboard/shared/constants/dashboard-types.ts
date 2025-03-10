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
} from "lucide-react";
import { ReactNode } from "react";
import React from "react";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  path: string;
  icon?: ReactNode;
};

export type DashboardType = {
  id: string;
  name: string;
  icon: ReactNode;
  path: string;
  menuItems: MenuItem[];
};

export const dashboardTypes: DashboardType[] = [
  {
    id: "main",
    name: "Main Dashboard",
    icon: React.createElement(LayoutDashboard, { className: "h-5 w-5" }),
    path: "/dashboard",
    menuItems: [
      {
        id: "overview",
        name: "Overview",
        description:
          "Provides a summary of recent activities, notifications, and quick insights.",
        path: "/dashboard",
        icon: React.createElement(LayoutDashboard, { className: "h-5 w-5" }),
      },
      {
        id: "notifications",
        name: "Notifications",
        description:
          "Displays alerts and important updates from all dashboards.",
        path: "/dashboard/notifications",
      },
      {
        id: "recent_activity",
        name: "Recent Activity",
        description:
          "Shows logs of completed tasks, messages, and system updates.",
        path: "/dashboard/activity",
      },
      {
        id: "quick_access",
        name: "Quick Access",
        description:
          "Allows fast navigation to frequently used features and tools.",
        path: "/dashboard/quick-access",
      },
      {
        id: "settings",
        name: "Settings",
        description:
          "Manages user preferences, appearance, and global configurations.",
        path: "/dashboard/settings",
      },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    icon: React.createElement(Briefcase, { className: "h-5 w-5" }),
    path: "/dashboard/professional",
    menuItems: [
      {
        id: "switch_company",
        name: "Switch Company",
        description:
          "Changes the active company, updating all related menu items dynamically.",
        path: "/dashboard/professional",
      },
      {
        id: "project_management",
        name: "Project Management",
        description:
          "Organizes tasks, deadlines, and milestones for ongoing projects.",
        path: "/dashboard/professional/projects",
      },
      {
        id: "task_assignments",
        name: "Task Assignments",
        description: "Manages task distribution among team members.",
        path: "/dashboard/professional/tasks",
      },
      {
        id: "client_database",
        name: "Client Database",
        description:
          "Stores client contacts, projects, and interaction history.",
        path: "/dashboard/professional/clients",
      },
      {
        id: "time_tracking",
        name: "Time Tracking",
        description: "Monitors working hours, productivity, and billable time.",
        path: "/dashboard/professional/time",
      },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    icon: React.createElement(PieChart, { className: "h-5 w-5" }),
    path: "/dashboard/finance",
    menuItems: [
      {
        id: "expense_tracker",
        name: "Expense Tracker",
        description: "Logs daily spending and categorizes transactions.",
        path: "/dashboard/finance",
      },
      {
        id: "income_reports",
        name: "Income Reports",
        description: "Summarizes revenue streams and earnings over time.",
        path: "/dashboard/finance/income",
      },
      {
        id: "investment_portfolio",
        name: "Investment Portfolio",
        description: "Tracks stocks, cryptocurrencies, and other investments.",
        path: "/dashboard/finance/investments",
      },
      {
        id: "subscription_management",
        name: "Subscription Management",
        description: "Lists and manages recurring payments for services.",
        path: "/dashboard/finance/subscriptions",
      },
      {
        id: "financial_goals",
        name: "Financial Goals",
        description:
          "Sets and monitors savings targets and debt repayment plans.",
        path: "/dashboard/finance/goals",
      },
    ],
  },
  {
    id: "health",
    name: "Health",
    icon: React.createElement(Heart, { className: "h-5 w-5" }),
    path: "/dashboard/health",
    menuItems: [
      {
        id: "daily_health_stats",
        name: "Daily Health Stats",
        description:
          "Monitors key health metrics such as heart rate and blood sugar.",
        path: "/dashboard/health",
      },
      {
        id: "medical_records",
        name: "Medical Records",
        description:
          "Stores and organizes health reports, prescriptions, and history.",
        path: "/dashboard/health/records",
      },
      {
        id: "fitness_tracker",
        name: "Fitness Tracker",
        description: "Logs workouts, step counts, and activity progress.",
        path: "/dashboard/health/fitness",
      },
      {
        id: "meal_planner",
        name: "Meal Planner",
        description: "Schedules and tracks daily food intake.",
        path: "/dashboard/health/meals",
      },
      {
        id: "medication_reminders",
        name: "Medication Reminders",
        description:
          "Sets notifications for taking prescribed medicines on time.",
        path: "/dashboard/health/medications",
      },
    ],
  },
  {
    id: "family",
    name: "Family",
    icon: React.createElement(Users, { className: "h-5 w-5" }),
    path: "/dashboard/family",
    menuItems: [
      {
        id: "family_calendar",
        name: "Family Calendar",
        description:
          "Schedules and syncs important events for the whole family.",
        path: "/dashboard/family",
      },
      {
        id: "children_education",
        name: "Children's Education",
        description: "Tracks academic achievements and school updates.",
        path: "/dashboard/family/education",
      },
      {
        id: "household_expenses",
        name: "Household Expenses",
        description:
          "Manages shared bills and family-related financial planning.",
        path: "/dashboard/family/expenses",
      },
      {
        id: "shared_tasks",
        name: "Shared Notes & Tasks",
        description:
          "Collaborative to-do lists and reminders for family members.",
        path: "/dashboard/family/tasks",
      },
      {
        id: "emergency_contacts",
        name: "Emergency Contacts",
        description:
          "Quick access to medical, police, and other emergency numbers.",
        path: "/dashboard/family/emergency",
      },
    ],
  },
  {
    id: "study",
    name: "Study",
    icon: React.createElement(GraduationCap, { className: "h-5 w-5" }),
    path: "/dashboard/study",
    menuItems: [
      {
        id: "switch_course",
        name: "Switch Course",
        description:
          "Selects a different active course, updating related study materials dynamically.",
        path: "/dashboard/study",
      },
      {
        id: "course_progress",
        name: "Course Progress",
        description: "Monitors learning advancements and pending modules.",
        path: "/dashboard/study/progress",
      },
      {
        id: "notes_library",
        name: "Book & Notes Library",
        description: "Stores study materials and personal notes.",
        path: "/dashboard/study/library",
      },
      {
        id: "study_schedule",
        name: "Study Schedule",
        description: "Manages exam dates, deadlines, and daily learning plans.",
        path: "/dashboard/study/schedule",
      },
      {
        id: "certification_tracker",
        name: "Certification Tracker",
        description:
          "Keeps track of completed courses and earned certificates.",
        path: "/dashboard/study/certifications",
      },
    ],
  },
  {
    id: "spiritual",
    name: "Spiritual",
    icon: React.createElement(Bookmark, { className: "h-5 w-5" }),
    path: "/dashboard/spiritual",
    menuItems: [
      {
        id: "daily_prayers",
        name: "Daily Prayers",
        description: "Schedules prayer times with reminders.",
        path: "/dashboard/spiritual",
      },
      {
        id: "quran_study",
        name: "Quran Study",
        description: "Provides a section for Quran reading and tafsir study.",
        path: "/dashboard/spiritual/quran",
      },
      {
        id: "charity_donations",
        name: "Charity & Donations",
        description:
          "Logs and tracks charity contributions and sadaqah history.",
        path: "/dashboard/spiritual/charity",
      },
      {
        id: "religious_events",
        name: "Religious Events",
        description:
          "Lists upcoming Islamic events, fasting days, and lectures.",
        path: "/dashboard/spiritual/events",
      },
      {
        id: "duas_collection",
        name: "Duas Collection",
        description:
          "Saves personal and recommended duas for daily supplications.",
        path: "/dashboard/spiritual/duas",
      },
    ],
  },
  {
    id: "hobbies",
    name: "Hobbies",
    icon: React.createElement(Palette, { className: "h-5 w-5" }),
    path: "/dashboard/hobbies",
    menuItems: [
      {
        id: "hobby_tracker",
        name: "Hobby Tracker",
        description: "Logs progress on various hobbies and interests.",
        path: "/dashboard/hobbies",
      },
      {
        id: "project_workspace",
        name: "Project Workspace",
        description: "Manages creative or personal projects.",
        path: "/dashboard/hobbies/projects",
      },
      {
        id: "learning_resources",
        name: "Learning Resources",
        description: "Compiles tutorials, guides, and helpful materials.",
        path: "/dashboard/hobbies/resources",
      },
      {
        id: "community_events",
        name: "Community & Events",
        description: "Finds groups, meetups, and social gatherings.",
        path: "/dashboard/hobbies/events",
      },
      {
        id: "inspiration_board",
        name: "Inspiration Board",
        description: "Saves ideas, references, and inspirations for hobbies.",
        path: "/dashboard/hobbies/inspiration",
      },
    ],
  },
  {
    id: "digital",
    name: "Digital",
    icon: React.createElement(Globe, { className: "h-5 w-5" }),
    path: "/dashboard/digital",
    menuItems: [
      {
        id: "website_management",
        name: "Website Management",
        description: "Monitors and edits personal or business websites.",
        path: "/dashboard/digital",
      },
      {
        id: "app_integrations",
        name: "App Integrations",
        description: "Manages connected apps and third-party services.",
        path: "/dashboard/digital/integrations",
      },
      {
        id: "cloud_storage",
        name: "Cloud Storage",
        description: "Accesses and organizes digital files and backups.",
        path: "/dashboard/digital/storage",
      },
      {
        id: "digital_assets",
        name: "Digital Assets",
        description: "Stores and categorizes important online assets.",
        path: "/dashboard/digital/assets",
      },
      {
        id: "ai_agent_settings",
        name: "AI Agent Settings",
        description:
          "Configures personal AI settings and automation preferences.",
        path: "/dashboard/digital/ai-settings",
      },
    ],
  },
];
