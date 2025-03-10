import { createClient } from "../../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { TasksTable } from "@/features/dashboard/professional/components/tasks-table";
import { DashboardCard } from "@/features/dashboard/shared";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/features/dashboard/shared/components/dashboard-skeleton";

export default async function TasksPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <DashboardHeader title="Tasks" user={user} />
      <main className="w-full p-4 md:p-6 space-y-6">
        <section className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Task Management</h2>
          <p className="mb-4 max-w-2xl">
            Organize and prioritize your tasks. Track progress and meet
            deadlines efficiently.
          </p>
        </section>

        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardCard
            title="Tasks Overview"
            description="All tasks across projects"
          >
            <TasksTable />
          </DashboardCard>
        </Suspense>
      </main>
    </SubscriptionCheck>
  );
}
