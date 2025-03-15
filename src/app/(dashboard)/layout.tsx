import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { ModernSidebarNav } from "@/features/navigation/components/modern-sidebar-nav";
import { AIInsightsPanel } from "@/features/ai";
import { Toaster } from "@/components/ui/toaster";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/features/dashboard/shared";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Allow access to demo dashboard without authentication
  const { headers } = await import("next/headers");
  const pathname = headers().get("x-pathname") || "";
  const isDemoDashboard = pathname.includes("/dashboard/demo");

  if (!user && !isDemoDashboard) {
    return redirect("/sign-in");
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex h-screen w-full bg-background overflow-hidden">
        <SidebarProvider defaultCollapsed={true} defaultCollapsible="icon">
          <div className="fixed h-screen z-40">
            <ModernSidebarNav user={user} />
          </div>
          <SidebarInset className="flex flex-col w-full h-full">
            <main className="flex-1 overflow-auto bg-muted/50 relative">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
        <div className="fixed bottom-4 right-4 z-50">
          <AIInsightsPanel />
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
