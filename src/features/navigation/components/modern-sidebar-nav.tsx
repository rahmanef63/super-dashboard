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
  LogOut,
  User as UserIcon,
  Palette,
  Users,
  GraduationCap,
  Bookmark,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { dashboardTypes } from "@/features/dashboard/shared";
import { createClient } from "../../../../supabase/client";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SettingsDialog } from "@/features/settings";

interface ModernSidebarNavProps {
  user?: any;
}

export function ModernSidebarNav({ user }: ModernSidebarNavProps = {}) {
  const pathname = usePathname();
  const [activeDashboard, setActiveDashboard] = useState<string>("main");
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    Platform: true,
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { toast } = useToast();
  const supabase = createClient();

  // Determine which dashboard type is active based on the pathname
  useEffect(() => {
    if (pathname) {
      const dashboardPath = pathname.split("/").slice(0, 3).join("/");
      const found = dashboardTypes.find((dt) => dt.path === dashboardPath);
      if (found) {
        setActiveDashboard(found.id);
      }
    }
  }, [pathname]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
      variant: "default",
    });
  };

  // Get the current dashboard's menu items
  const getCurrentDashboardMenuItems = () => {
    const currentDashboard = dashboardTypes.find(
      (d) => d.id === activeDashboard,
    );
    return currentDashboard?.menuItems || [];
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <DashboardSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard Menu</SidebarGroupLabel>
          <SidebarMenu>
            {getCurrentDashboardMenuItems().map((item) => (
              <Collapsible
                key={item.id}
                asChild
                defaultOpen={pathname.includes(item.path)}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.name}>
                      {item.icon && item.icon}
                      <span>{item.name}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.path && (
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            onClick={() => (window.location.href = item.path)}
                          >
                            <span>Overview</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )}
                      {/* Add sub-items if they exist */}
                      {item.description && (
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            onClick={() => (window.location.href = item.path)}
                          >
                            <span>Details</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id || "user123"}`}
                      alt={user?.email || "User"}
                    />
                    <AvatarFallback className="rounded-lg">
                      {user?.email?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {user?.email?.split("@")[0] || "User"}
                    </span>
                    <span className="truncate text-xs">
                      {user?.email || "user@example.com"}
                    </span>
                  </div>
                  <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />

      {/* Settings Dialog */}
      <SettingsDialog trigger={null} />
    </Sidebar>
  );
}

function DashboardSwitcher() {
  const { isMobile } = useSidebar();
  const pathname = usePathname();
  const [activeDashboard, setActiveDashboard] = useState(dashboardTypes[0]);

  // Determine which dashboard type is active based on the pathname
  useEffect(() => {
    if (pathname) {
      const dashboardPath = "/" + pathname.split("/").slice(1, 3).join("/");
      const found = dashboardTypes.find((dt) => dt.path === dashboardPath);
      setActiveDashboard(found || dashboardTypes[0]);
    }
  }, [pathname]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                {activeDashboard.icon}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeDashboard.name}
                </span>
                <span className="truncate text-xs">Dashboard</span>
              </div>
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuItem className="text-xs text-muted-foreground">
              Dashboards
            </DropdownMenuItem>
            {dashboardTypes.map((dashboard, index) => (
              <DropdownMenuItem
                key={dashboard.id}
                className="gap-2 p-2"
                onClick={() => (window.location.href = dashboard.path)}
              >
                <div className="flex size-6 items-center justify-center rounded-sm border mr-2">
                  {dashboard.icon}
                </div>
                {dashboard.name}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">
                Add dashboard
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
