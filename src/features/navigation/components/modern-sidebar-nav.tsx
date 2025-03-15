"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  Bell,
  Moon,
  Search,
  Building,
  LogIn,
  Sun,
  Languages,
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
import { useTheme } from "next-themes";
import { SignInDialog } from "@/components/sign-in-dialog";
import { SignUpDialog } from "@/components/sign-up-dialog";

interface ModernSidebarNavProps {
  user?: any;
}

export function ModernSidebarNav({ user }: ModernSidebarNavProps = {}) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeDashboard, setActiveDashboard] = useState<string>("main");
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    Platform: true,
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCompany, setActiveCompany] = useState("company-a");
  const { toast } = useToast();
  const supabase = createClient();
  const { collapsed, state, setCollapsed } = useSidebar();
  const [isMobileView, setIsMobileView] = useState(false);
  const { theme, setTheme } = useTheme();
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);

    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

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

  // Collapse sidebar by default
  useEffect(() => {
    if (typeof setCollapsed === "function") {
      setCollapsed(true);
    }
  }, [setCollapsed]);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await supabase.auth.signOut();
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
        variant: "default",
      });
      // Force reload to clear any user state
      window.location.href = "/sign-in";
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Get the current dashboard's menu items
  const getCurrentDashboardMenuItems = () => {
    const currentDashboard = dashboardTypes.find(
      (d) => d.id === activeDashboard,
    );
    return currentDashboard?.menuItems || [];
  };

  // Filter out demo dashboard if user is logged in
  const filteredDashboardTypes = dashboardTypes.filter((dashboard) => {
    if (user && dashboard.id === "demo") {
      return false;
    }
    return true;
  });

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Sidebar collapsible="icon" className="h-full">
      <SidebarHeader>
        <DashboardSwitcher user={user} />
      </SidebarHeader>
      <SidebarContent className="flex-1 overflow-y-auto">
        <div>
          {/* Company Switcher - Only show for Professional dashboard */}
          {activeDashboard === "professional" && (
            <SidebarGroup>
              <SidebarGroupLabel>Organization</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton tooltip="Switch Organization">
                        <Building className="h-4 w-4" />
                        <span
                          className={cn(
                            "transition-opacity",
                            collapsed
                              ? "opacity-0 w-0 absolute"
                              : "opacity-100 relative",
                          )}
                        >
                          {activeCompany === "company-a"
                            ? "Company A"
                            : activeCompany === "company-b"
                              ? "Company B"
                              : "Freelance"}
                        </span>
                        <ChevronDown
                          className={cn(
                            "ml-auto transition-opacity",
                            collapsed
                              ? "opacity-0 w-0 absolute"
                              : "opacity-100 relative",
                          )}
                        />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      side="right"
                      className="w-56"
                    >
                      <DropdownMenuItem
                        onClick={() => setActiveCompany("company-a")}
                      >
                        <Building className="h-4 w-4 mr-2" />
                        Company A
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setActiveCompany("company-b")}
                      >
                        <Building className="h-4 w-4 mr-2" />
                        Company B
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setActiveCompany("freelance")}
                      >
                        <UserIcon className="h-4 w-4 mr-2" />
                        Freelance
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          )}

          {/* Dashboard Menu */}
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarMenu>
              {getCurrentDashboardMenuItems().map((item) => {
                // Check if this item has children or sub-items
                const hasChildren =
                  item.description ||
                  (item.children && item.children.length > 0);

                // For demo dashboard, handle smooth scrolling
                if (activeDashboard === "demo") {
                  return (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        tooltip={item.name}
                        onClick={() => {
                          if (item.id !== "overview") {
                            // Smooth scroll to section
                            const sectionId = item.id;
                            const element = document.getElementById(sectionId);
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          } else {
                            // Overview just goes to the top
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                      >
                        {item.icon || <LayoutDashboard className="h-4 w-4" />}
                        <span
                          className={cn(
                            "ml-2 transition-all duration-200",
                            collapsed
                              ? "opacity-0 w-0 absolute -left-10"
                              : "opacity-100 relative left-0",
                          )}
                        >
                          {item.name}
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }

                return hasChildren ? (
                  <Collapsible
                    key={item.id}
                    asChild
                    defaultOpen={pathname.includes(item.path)}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.name}>
                          {item.icon || <LayoutDashboard className="h-4 w-4" />}
                          <span
                            className={cn(
                              "ml-2 transition-all duration-200",
                              collapsed
                                ? "opacity-0 w-0 absolute -left-10"
                                : "opacity-100 relative left-0",
                            )}
                          >
                            {item.name}
                          </span>
                          <ChevronRight
                            className={cn(
                              "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90",
                              collapsed
                                ? "opacity-0 w-0 absolute"
                                : "opacity-100 relative",
                            )}
                          />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.path && (
                            <SidebarMenuSubItem>
                              <SidebarMenuSubButton
                                onClick={() => router.push(item.path)}
                              >
                                <span>Overview</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          )}
                          {/* Add sub-items if they exist */}
                          {item.description && (
                            <SidebarMenuSubItem>
                              <SidebarMenuSubButton
                                onClick={() => router.push(item.path)}
                              >
                                <span>Details</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          )}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      tooltip={item.name}
                      onClick={() => router.push(item.path)}
                    >
                      {item.icon || <LayoutDashboard className="h-4 w-4" />}
                      <span
                        className={cn(
                          "transition-opacity",
                          collapsed
                            ? "opacity-0 w-0 absolute"
                            : "opacity-100 relative",
                        )}
                      >
                        {item.name}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        </div>

        {/* Settings and Tools Section - positioned right above user profile */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Settings & Tools</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setSettingsOpen(true)}>
                <Settings className="h-4 w-4" />
                <span
                  className={cn(
                    "ml-2 transition-all duration-200",
                    collapsed
                      ? "opacity-0 w-0 absolute -left-10"
                      : "opacity-100 relative left-0",
                  )}
                >
                  Settings
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setNotificationsOpen(true)}>
                <Bell className="h-4 w-4" />
                <span
                  className={cn(
                    "ml-2 transition-all duration-200",
                    collapsed
                      ? "opacity-0 w-0 absolute -left-10"
                      : "opacity-100 relative left-0",
                  )}
                >
                  Notifications
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={toggleTheme}>
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                <span
                  className={cn(
                    "ml-2 transition-all duration-200",
                    collapsed
                      ? "opacity-0 w-0 absolute -left-10"
                      : "opacity-100 relative left-0",
                  )}
                >
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setSearchOpen(true)}>
                <Search className="h-4 w-4" />
                <span
                  className={cn(
                    "ml-2 transition-all duration-200",
                    collapsed
                      ? "opacity-0 w-0 absolute -left-10"
                      : "opacity-100 relative left-0",
                  )}
                >
                  Search
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Languages className="h-4 w-4" />
                <span
                  className={cn(
                    "ml-2 transition-all duration-200",
                    collapsed
                      ? "opacity-0 w-0 absolute -left-10"
                      : "opacity-100 relative left-0",
                  )}
                >
                  Language
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
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
                      src={
                        user
                          ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id || "user123"}`
                          : undefined
                      }
                      alt={user?.email || "User"}
                    />
                    <AvatarFallback className="rounded-lg">
                      {user?.email?.charAt(0).toUpperCase() || "G"}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={cn(
                      "ml-2 grid flex-1 text-left text-sm leading-tight transition-all duration-200",
                      collapsed
                        ? "opacity-0 w-0 absolute -left-10"
                        : "opacity-100 relative left-0",
                    )}
                  >
                    <span className="truncate font-semibold">
                      {user?.email?.split("@")[0] || "Guest"}
                    </span>
                    <span className="truncate text-xs">
                      {user?.email || "Not signed in"}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "ml-auto h-4 w-4 transition-opacity",
                      collapsed
                        ? "opacity-0 w-0 absolute"
                        : "opacity-100 relative",
                    )}
                  />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="top" className="w-56">
                {user ? (
                  // User is logged in
                  <>
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
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Signing out...
                        </div>
                      ) : (
                        <>
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </>
                      )}
                    </DropdownMenuItem>
                  </>
                ) : (
                  // User is not logged in
                  <>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setSignInOpen(true)}
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      Sign In
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setSignUpOpen(true)}
                    >
                      <UserIcon className="h-4 w-4 mr-2" />
                      Sign Up
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />

      {/* Settings Dialog */}
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />

      {/* Sign In Dialog */}
      <SignInDialog open={signInOpen} onOpenChange={setSignInOpen} />

      {/* Sign Up Dialog */}
      <SignUpDialog open={signUpOpen} onOpenChange={setSignUpOpen} />
    </Sidebar>
  );
}

function DashboardSwitcher({ user }: { user?: any }) {
  const { isMobile, collapsed } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();
  const [activeDashboard, setActiveDashboard] = useState(dashboardTypes[0]);

  // Filter out demo dashboard if user is logged in
  const filteredDashboardTypes = dashboardTypes.filter((dashboard) => {
    if (user && dashboard.id === "demo") {
      return false;
    }
    return true;
  });

  // Determine which dashboard type is active based on the pathname
  useEffect(() => {
    if (pathname) {
      const dashboardPath = "/" + pathname.split("/").slice(1, 3).join("/");
      const found = dashboardTypes.find((dt) => dt.path === dashboardPath);
      setActiveDashboard(found || dashboardTypes[0]);
    }
  }, [pathname]);

  // Handle smooth scrolling for demo dashboard
  const handleDemoScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <div
                className={cn(
                  "grid flex-1 text-left text-sm leading-tight transition-opacity",
                  collapsed ? "opacity-0 w-0 absolute" : "opacity-100 relative",
                )}
              >
                <span className="truncate font-semibold">
                  {activeDashboard.name}
                </span>
                <span className="truncate text-xs">Switch dashboard here</span>
              </div>
              <ChevronDown
                className={cn(
                  "ml-auto transition-opacity",
                  collapsed ? "opacity-0 w-0 absolute" : "opacity-100 relative",
                )}
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuItem className="text-xs text-muted-foreground">
              Switch Dashboard
            </DropdownMenuItem>
            {filteredDashboardTypes.map((dashboard, index) => (
              <DropdownMenuItem
                key={dashboard.id}
                className="gap-2 p-2"
                onClick={() => {
                  if (dashboard.id === "demo") {
                    // For demo dashboard, just navigate
                    router.push(dashboard.path);
                  } else if (user) {
                    // For other dashboards, check if user is logged in
                    router.push(dashboard.path);
                  } else {
                    // If not logged in and not demo, prompt to sign in
                    router.push("/sign-in");
                  }
                }}
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
