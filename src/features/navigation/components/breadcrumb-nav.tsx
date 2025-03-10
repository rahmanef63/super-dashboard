"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";

interface RouteSegment {
  name: string;
  href: string;
  isCurrentPage: boolean;
}

const routeNameMap: Record<string, string> = {
  dashboard: "Dashboard",
  professional: "Professional",
  finance: "Finance",
  health: "Health",
  settings: "Settings",
  projects: "Projects",
  tasks: "Tasks",
  budgets: "Budgets",
  investments: "Investments",
  activity: "Activity",
  metrics: "Metrics",
  analytics: "Analytics",
};

export function BreadcrumbNav() {
  const pathname = usePathname();

  // Skip rendering breadcrumbs on the main page
  if (pathname === "/") return null;

  // Example breadcrumb for the image
  if (pathname.includes("/dashboard")) {
    return (
      <div className="flex items-center gap-2 px-4 md:px-6 text-sm text-gray-500 dark:text-gray-400">
        <span>Building Your Application</span>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-gray-900 dark:text-white">
          Data Fetching
        </span>
      </div>
    );
  }

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbSegments: RouteSegment[] = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const isCurrentPage = index === segments.length - 1;
    const name =
      routeNameMap[segment] ||
      segment.charAt(0).toUpperCase() + segment.slice(1);

    return {
      name,
      href,
      isCurrentPage,
    };
  });

  return (
    <Breadcrumb className="mb-4 px-4 md:px-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        {breadcrumbSegments.map((segment, index) => (
          <BreadcrumbItem key={segment.href}>
            {segment.isCurrentPage ? (
              <BreadcrumbPage>{segment.name}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink asChild>
                  <Link href={segment.href}>{segment.name}</Link>
                </BreadcrumbLink>
                {index < breadcrumbSegments.length - 1 && (
                  <BreadcrumbSeparator />
                )}
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
