import { createClient } from "../../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { ProjectsTable } from "@/features/dashboard/professional/components/projects-table";
import { DashboardCard } from "@/features/dashboard/shared";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/features/dashboard/shared/components/dashboard-skeleton";
import { ErrorDisplay } from "@/features/dashboard/shared/components/error-display";

export default async function ProjectsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <DashboardHeader title="Projects" user={user} />
      <main className="w-full p-4 md:p-6 space-y-6">
        <section className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Project Management</h2>
          <p className="mb-4 max-w-2xl">
            Track and manage all your projects in one place. Monitor progress,
            deadlines, and team assignments.
          </p>
        </section>

        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardCard
            title="Projects Overview"
            description="All active and upcoming projects"
          >
            <ProjectsTable />
          </DashboardCard>
        </Suspense>
      </main>
    </SubscriptionCheck>
  );
}
