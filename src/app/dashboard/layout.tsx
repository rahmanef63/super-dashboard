import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarNav } from "@/features/navigation/components/sidebar-nav";
import { BreadcrumbNav } from "@/features/navigation/components/breadcrumb-nav";
import { AIInsightsPanel } from "@/features/ai";
import { Toaster } from "@/components/ui/toaster";

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
        <SidebarNav user={user} />
        <div className="flex-1 pl-0 lg:pl-64 w-full">
          <main className="min-h-screen w-full max-w-full">
            <div className="pt-4">
              <BreadcrumbNav />
            </div>
            {children}
          </main>
        </div>
        <AIInsightsPanel />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
