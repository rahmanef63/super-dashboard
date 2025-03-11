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
  LogOut,
  User as UserIcon,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { dashboardTypes } from "@/features/dashboard/shared";
import { DashboardSwitcher } from "./dashboard-switcher";
import { SettingsDialog } from "@/features/settings";
import { createClient } from "../../../../supabase/client";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

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
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { toast } = useToast();
  const supabase = createClient();

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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
      variant: "default",
    });
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
          "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r border-border transition-transform duration-300 ease-in-out transform lg:translate-x-0 overflow-hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Dashboard Header */}
          <div className="flex-1 overflow-y-auto">
            {/* Dashboard Switcher */}
            <div className="p-4">
              <DashboardSwitcher />
            </div>

            {/* Dashboard Menu Section */}
            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-muted-foreground px-3 py-2 uppercase">
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
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
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
          <div className="p-4 border-t border-border mt-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-muted/50">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                    {user?.email?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <div>
                    <div className="font-medium text-sm">
                      {user?.email?.split("@")[0] || "User"}
                    </div>
                    <div className="text-xs text-muted-foreground truncate max-w-[140px]">
                      {user?.email || "user@example.com"}
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground ml-auto" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="top" className="w-56">
                <DropdownMenuItem className="cursor-pointer">
                  <UserIcon className="h-4 w-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setSettingsOpen(true)}
                >
                  <Palette className="h-4 w-4 mr-2" />
                  UI Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="h-4 w-4 mr-2" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer text-destructive focus:text-destructive"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Settings Dialog */}
      <SettingsDialog trigger={null} />

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
