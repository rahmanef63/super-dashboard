import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { ModernSidebarNav } from "@/features/navigation/components/modern-sidebar-nav";
import { BreadcrumbNav } from "@/features/navigation/components/breadcrumb-nav";
import { AIInsightsPanel } from "@/features/ai";
import { Toaster } from "@/components/ui/toaster";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex min-h-screen bg-background overflow-hidden">
        <SidebarProvider defaultCollapsed={false} defaultCollapsible="icon">
          <ModernSidebarNav user={user} />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="/dashboard">
                        Dashboard
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Overview</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <main className="min-h-[calc(100vh-4rem)] flex-1 rounded-xl bg-muted/50 md:min-h-min">
              <div className="pt-4">
                <BreadcrumbNav />
              </div>
              {children}
            </main>
            <AIInsightsPanel />
          </SidebarInset>
        </SidebarProvider>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
