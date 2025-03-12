import { ThemeProvider } from "@/components/theme-provider";
import { ModernSidebarNav } from "@/features/navigation/components/modern-sidebar-nav";
import { AIInsightsPanel } from "@/features/ai";
import { Toaster } from "@/components/ui/toaster";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DemoDashboard from "@/components/dashboard-demo";

export default function DemoDashboardPage() {
  // Create a demo user object for the sidebar
  const demoUser = {
    id: "demo-user",
    email: "demo@example.com",
    name: "Demo User",
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex h-screen w-full bg-background overflow-hidden">
        <SidebarProvider defaultCollapsed={true} defaultCollapsible="icon">
          <div className="fixed h-screen z-40">
            <ModernSidebarNav user={demoUser} />
          </div>
          <SidebarInset className="flex flex-col w-full h-full">
            <main className="flex-1 overflow-auto bg-muted/50 relative">
              <DemoDashboard />
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
