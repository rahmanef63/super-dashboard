import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarNav } from "@/features/navigation/components/sidebar-nav";
import { BreadcrumbNav } from "@/features/navigation/components/breadcrumb-nav";
import { AIInsightsPanel } from "@/features/ai";

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
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
        <SidebarNav user={user} />
        <div className="flex-1 pl-0 lg:pl-64">
          <div className="pt-4">
            <BreadcrumbNav />
          </div>
          <main className="min-h-screen">{children}</main>
        </div>
        <AIInsightsPanel />
      </div>
    </ThemeProvider>
  );
}
