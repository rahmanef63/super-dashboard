"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { dashboardTypes, type DashboardType } from "../data/dashboard-data";

export function DashboardSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeDashboard, setActiveDashboard] = useState<DashboardType | null>(
    null,
  );

  // Determine which dashboard type is active based on the pathname
  useEffect(() => {
    const dashboardPath = pathname.split("/").slice(0, 3).join("/");
    const found = dashboardTypes.find((dt) => dt.path === dashboardPath);
    setActiveDashboard(found || dashboardTypes[0]);
  }, [pathname]);

  const handleDashboardChange = (dashboard: DashboardType) => {
    router.push(dashboard.path);
  };

  if (!activeDashboard) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {activeDashboard.icon}
          <span>{activeDashboard.name}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {dashboardTypes.map((dashboard) => (
          <DropdownMenuItem
            key={dashboard.id}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleDashboardChange(dashboard)}
          >
            {dashboard.icon}
            <span>{dashboard.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
