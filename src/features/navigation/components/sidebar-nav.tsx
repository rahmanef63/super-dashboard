"use client";

import { useState, useEffect } from "react";
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
  Menu,
  X,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { dashboardTypes } from "@/features/dashboard/shared";
import { DashboardSwitcher } from "./dashboard-switcher";

interface SidebarNavProps {
  user?: any;
}

export function SidebarNav({ user }: SidebarNavProps = {}) {
  const pathname = usePathname();
  const [activeDashboard, setActiveDashboard] = useState<string>("main");
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    Platform: true,
    Projects: true,
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  // Determine which dashboard type is active based on the pathname
  useEffect(() => {
    const dashboardPath = pathname.split("/").slice(0, 3).join("/");
    const found = dashboardTypes.find((dt) => dt.path === dashboardPath);
    if (found) {
      setActiveDashboard(found.id);
    }
  }, [pathname]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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
          "fixed inset-y-0 left-0 z-40 w-64 bg-[#111111] text-white border-r border-gray-800 transition-transform duration-300 ease-in-out transform lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Dashboard Header */}
          <DashboardSwitcher />

          <div className="flex-1 overflow-y-auto">
            {/* Platform Section */}
            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-gray-400 px-3 py-2 uppercase">
                Platform
              </div>
              <div className="space-y-1">
                <Link href="/dashboard">
                  <div
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                      pathname === "/dashboard"
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                    )}
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Playground</span>
                    <ChevronDown className="h-4 w-4 ml-auto" />
                  </div>
                </Link>
                <div className="pl-10 space-y-1">
                  <Link href="/dashboard/history">
                    <div
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm transition-colors",
                        pathname.includes("/history")
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800",
                      )}
                    >
                      <span>History</span>
                    </div>
                  </Link>
                  <Link href="/dashboard/starred">
                    <div
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm transition-colors",
                        pathname.includes("/starred")
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800",
                      )}
                    >
                      <span>Starred</span>
                    </div>
                  </Link>
                  <Link href="/dashboard/settings">
                    <div
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm transition-colors",
                        pathname.includes("/settings")
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800",
                      )}
                    >
                      <span>Settings</span>
                    </div>
                  </Link>
                </div>
                <Link href="/models">
                  <div
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                      pathname.includes("/models")
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                    )}
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Models</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </div>
                </Link>
                <Link href="/documentation">
                  <div
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                      pathname.includes("/documentation")
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                    )}
                  >
                    <FileText className="h-5 w-5" />
                    <span>Documentation</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </div>
                </Link>
                <Link href="/settings">
                  <div
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                      pathname.includes("/settings") &&
                        !pathname.includes("/dashboard/settings")
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                    )}
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Projects Section */}
            <div className="px-3 py-2 mt-4">
              <div className="text-xs font-semibold text-gray-400 px-3 py-2 uppercase">
                Dashboards
              </div>
              <div className="space-y-1">
                {dashboardTypes.map((dashboard) => (
                  <Link key={dashboard.id} href={dashboard.path}>
                    <div
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                        pathname.includes(dashboard.path)
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800",
                      )}
                    >
                      {dashboard.icon}
                      <span>{dashboard.name}</span>
                    </div>
                  </Link>
                ))}
                <Link href="/dashboard/customize">
                  <div
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                      pathname.includes("/dashboard/customize")
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                    )}
                  >
                    <Plus className="h-5 w-5" />
                    <span>Add Dashboard</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-800 mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {user?.email?.charAt(0).toUpperCase() || "U"}
              </div>
              <div>
                <div className="font-semibold">
                  {user?.email?.split("@")[0] || "User"}
                </div>
                <div className="text-xs text-gray-400">
                  {user?.email || "user@example.com"}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 ml-auto"
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
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
