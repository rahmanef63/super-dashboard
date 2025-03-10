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
            {/* Dashboard Menu Section */}
            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-gray-400 px-3 py-2 uppercase">
                Dashboard Menu
              </div>
              <div className="space-y-1">
                {(() => {
                  const currentDashboard = dashboardTypes.find(
                    (d) => d.id === activeDashboard,
                  );
                  if (!currentDashboard) return null;

                  return currentDashboard.menuItems.map((item) => (
                    <Link key={item.id} href={item.path}>
                      <div
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                          pathname === item.path
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-800",
                        )}
                      >
                        {item.icon && item.icon}
                        <span>{item.name}</span>
                      </div>
                    </Link>
                  ));
                })()}
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
