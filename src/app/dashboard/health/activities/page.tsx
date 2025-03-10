import { createClient } from "../../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { ActivitiesTable } from "@/features/dashboard/health/components/activities-table";
import { DashboardCard } from "@/features/dashboard/shared";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/features/dashboard/shared/components/dashboard-skeleton";

export default async function ActivitiesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <DashboardHeader title="Activities" user={user} />
      <main className="w-full p-4 md:p-6 space-y-6">
        <section className="bg-gradient-to-r from-red-500 to-pink-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Activity Tracking</h2>
          <p className="mb-4 max-w-2xl">
            Monitor your workouts, exercises, and physical activities. Track
            calories burned and progress toward fitness goals.
          </p>
        </section>

        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardCard
            title="Activity History"
            description="All recorded workouts and physical activities"
          >
            <ActivitiesTable />
          </DashboardCard>
        </Suspense>
      </main>
    </SubscriptionCheck>
  );
}
