import { createClient } from "../../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { EventsTable } from "@/features/dashboard/family/components/events-table";
import { DashboardCard } from "@/features/dashboard/shared";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/features/dashboard/shared/components/dashboard-skeleton";

export default async function FamilyEventsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <DashboardHeader title="Family Events" user={user} />
      <main className="w-full p-4 md:p-6 space-y-6">
        <section className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Family Calendar</h2>
          <p className="mb-4 max-w-2xl">
            Keep track of all family events, appointments, and activities in one
            centralized calendar.
          </p>
        </section>

        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardCard
            title="Upcoming Events"
            description="All scheduled family events and activities"
          >
            <EventsTable />
          </DashboardCard>
        </Suspense>
      </main>
    </SubscriptionCheck>
  );
}
