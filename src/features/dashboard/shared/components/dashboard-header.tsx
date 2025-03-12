"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Search, Home, Menu, Moon, Sun, Languages } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useSidebar } from "@/components/ui/sidebar";

interface DashboardHeaderProps {
  title?: string;
  user: any;
}

export function DashboardHeader({ title, user }: DashboardHeaderProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const { setCollapsed } = useSidebar();

  // Generate breadcrumb segments from the current path
  const generateBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean);

    // Create breadcrumb items
    return segments.map((segment, index) => {
      // Build the path for this breadcrumb
      const path = `/${segments.slice(0, index + 1).join("/")}`;

      // Format the segment name to be more readable
      const name =
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

      // Check if this is the last segment (current page)
      const isCurrentPage = index === segments.length - 1;

      return { name, path, isCurrentPage };
    });
  };

  const breadcrumbs = generateBreadcrumbs();

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    if (typeof setCollapsed === "function") {
      setCollapsed(false);
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>

              {breadcrumbs.map((breadcrumb, index) => (
                <BreadcrumbItem key={breadcrumb.path}>
                  <BreadcrumbSeparator />
                  {breadcrumb.isCurrentPage ? (
                    <BreadcrumbPage>{breadcrumb.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={breadcrumb.path}>
                      {breadcrumb.name}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Language Selector */}
          <Button variant="ghost" size="icon">
            <Languages className="h-5 w-5" />
          </Button>

          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 rounded-full bg-background pl-8 md:w-80 lg:w-96"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
