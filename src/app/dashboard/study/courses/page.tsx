import { createClient } from "../../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { CoursesTable } from "@/features/dashboard/study/components/courses-table";
import { DashboardCard } from "@/features/dashboard/shared";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/features/dashboard/shared/components/dashboard-skeleton";

export default async function CoursesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <DashboardHeader title="Courses" user={user} />
      <main className="w-full p-4 md:p-6 space-y-6">
        <section className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Course Management</h2>
          <p className="mb-4 max-w-2xl">
            Track your educational courses, progress, and learning goals. Manage
            deadlines and assignments efficiently.
          </p>
        </section>

        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardCard
            title="All Courses"
            description="Your current and completed courses"
          >
            <CoursesTable />
          </DashboardCard>
        </Suspense>
      </main>
    </SubscriptionCheck>
  );
}
