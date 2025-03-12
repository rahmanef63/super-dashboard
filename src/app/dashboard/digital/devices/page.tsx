import { createClient } from "../../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { DashboardCard } from "@/features/dashboard/shared";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/features/dashboard/shared/components/dashboard-skeleton";
import { ErrorDisplay } from "@/features/dashboard/shared/components/error-display";

export default async function DevicesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <DashboardHeader title="Devices" user={user} />
      <main className="w-full p-4 md:p-6 space-y-6">
        <section className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Connected Devices</h2>
          <p className="mb-4 max-w-2xl">
            Manage your connected devices, monitor their status, and control
            access permissions.
          </p>
        </section>

        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardCard
            title="Coming Soon"
            description="This feature is currently under development"
          >
            <div className="p-6 text-center">
              <ErrorDisplay
                title="Under Construction"
                message="The Devices management feature is coming soon. Check back later for updates."
              />
            </div>
          </DashboardCard>
        </Suspense>
      </main>
    </SubscriptionCheck>
  );
}
