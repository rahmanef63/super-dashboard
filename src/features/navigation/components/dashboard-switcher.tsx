"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronsUpDown, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  dashboardTypes,
  type DashboardType,
} from "@/features/dashboard/shared";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Ensure this is correctly imported
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function DashboardSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeDashboard, setActiveDashboard] = useState<DashboardType | null>(
    null,
  );

  // Determine which dashboard type is active based on the pathname
  useEffect(() => {
    if (pathname) {
      const dashboardPath = "/" + pathname.split("/").slice(1, 3).join("/");
      const found = dashboardTypes.find((dt) => dt.path === dashboardPath);
      setActiveDashboard(found || dashboardTypes[0]);
    }
  }, [pathname]);

  const handleDashboardChange = (dashboard: DashboardType) => {
    router.push(dashboard.path);
  };

  if (!activeDashboard) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                {activeDashboard.icon}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {activeDashboard.name}
                </span>
                <span className="truncate text-xs">AI-Powered</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            sideOffset={4}
          >
            {dashboardTypes.map((dashboard) => (
              <DropdownMenuItem
                key={dashboard.id}
                onClick={() => handleDashboardChange(dashboard)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-sm border">
                  {dashboard.icon}
                </div>
                {dashboard.name}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/customize">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-gray-400 hover:text-white hover:bg-gray-800">
                  <Plus className="h-5 w-5" />
                  <span>Add Dashboard</span>
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
