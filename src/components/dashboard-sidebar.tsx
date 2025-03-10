"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Briefcase,
  PieChart,
  Heart,
  Settings,
  ChevronDown,
  ChevronRight,
  Plus,
  Gauge,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type DashboardType = {
  id: string;
  name: string;
  icon: React.ReactNode;
  path: string;
};

const dashboardTypes: DashboardType[] = [
  {
    id: "main",
    name: "Main Dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    path: "/dashboard",
  },
  {
    id: "professional",
    name: "Professional",
    icon: <Briefcase className="h-5 w-5" />,
    path: "/dashboard/professional",
  },
  {
    id: "finance",
    name: "Finance",
    icon: <PieChart className="h-5 w-5" />,
    path: "/dashboard/finance",
  },
  {
    id: "health",
    name: "Health",
    icon: <Heart className="h-5 w-5" />,
    path: "/dashboard/health",
  },
];

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const defaultMenuSections: Record<string, MenuSection[]> = {
  main: [
    {
      title: "Overview",
      items: [
        {
          name: "Dashboard",
          icon: <LayoutDashboard className="h-5 w-5" />,
          path: "/dashboard",
        },
        {
          name: "Analytics",
          icon: <Gauge className="h-5 w-5" />,
          path: "/dashboard/analytics",
        },
        {
          name: "Settings",
          icon: <Settings className="h-5 w-5" />,
          path: "/dashboard/settings",
        },
      ],
    },
  ],
  professional: [
    {
      title: "Work",
      items: [
        {
          name: "Overview",
          icon: <LayoutDashboard className="h-5 w-5" />,
          path: "/dashboard/professional",
        },
        {
          name: "Projects",
          icon: <Briefcase className="h-5 w-5" />,
          path: "/dashboard/professional/projects",
        },
        {
          name: "Tasks",
          icon: <Gauge className="h-5 w-5" />,
          path: "/dashboard/professional/tasks",
        },
      ],
    },
  ],
  finance: [
    {
      title: "Finance",
      items: [
        {
          name: "Overview",
          icon: <LayoutDashboard className="h-5 w-5" />,
          path: "/dashboard/finance",
        },
        {
          name: "Budgets",
          icon: <PieChart className="h-5 w-5" />,
          path: "/dashboard/finance/budgets",
        },
        {
          name: "Investments",
          icon: <Gauge className="h-5 w-5" />,
          path: "/dashboard/finance/investments",
        },
      ],
    },
  ],
  health: [
    {
      title: "Health",
      items: [
        {
          name: "Overview",
          icon: <LayoutDashboard className="h-5 w-5" />,
          path: "/dashboard/health",
        },
        {
          name: "Activity",
          icon: <Heart className="h-5 w-5" />,
          path: "/dashboard/health/activity",
        },
        {
          name: "Metrics",
          icon: <Gauge className="h-5 w-5" />,
          path: "/dashboard/health/metrics",
        },
      ],
    },
  ],
};

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [activeDashboard, setActiveDashboard] = useState<string>("main");
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    Overview: true,
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  // Determine which dashboard type is active based on the pathname
  const getCurrentDashboardType = () => {
    const dashboardPath = pathname.split("/").slice(0, 3).join("/");
    const found = dashboardTypes.find((dt) => dt.path === dashboardPath);
    return found?.id || "main";
  };

  // Update active dashboard when pathname changes
  const currentDashboard = getCurrentDashboardType();
  if (currentDashboard !== activeDashboard) {
    setActiveDashboard(currentDashboard);
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const menuSections =
    defaultMenuSections[activeDashboard] || defaultMenuSections.main;

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon" onClick={toggleMobileMenu}>
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out transform lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Dashboard Switcher */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Dashboards</h2>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1">
              {dashboardTypes.map((dashboard) => (
                <Link
                  key={dashboard.id}
                  href={dashboard.path}
                  onClick={() => {
                    setActiveDashboard(dashboard.id);
                    setMobileOpen(false);
                  }}
                >
                  <div
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname === dashboard.path ||
                        activeDashboard === dashboard.id
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    )}
                  >
                    {dashboard.icon}
                    <span className="ml-3">{dashboard.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Separator />

          {/* Menu Sections */}
          <div className="flex-1 overflow-y-auto p-4">
            {menuSections.map((section) => (
              <div key={section.title} className="mb-6">
                <div
                  className="flex items-center justify-between mb-2 cursor-pointer"
                  onClick={() => toggleSection(section.title)}
                >
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {section.title}
                  </h3>
                  {expandedSections[section.title] ? (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-gray-500" />
                  )}
                </div>

                {expandedSections[section.title] && (
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setMobileOpen(false)}
                      >
                        <div
                          className={cn(
                            "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                            pathname === item.path
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          )}
                        >
                          {item.icon}
                          <span className="ml-3">{item.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Customize Menu Button */}
          <div className="p-4 border-t border-gray-200">
            <Button variant="outline" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-2" />
              Customize Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
