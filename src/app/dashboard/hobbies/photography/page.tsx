import { createClient } from "../../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { DashboardCard } from "@/features/dashboard/shared";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/features/dashboard/shared/components/dashboard-skeleton";
import { ErrorDisplay } from "@/features/dashboard/shared/components/error-display";

export default async function PhotographyPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <DashboardHeader title="Photography" user={user} />
      <main className="w-full p-4 md:p-6 space-y-6">
        <section className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Photography Collection</h2>
          <p className="mb-4 max-w-2xl">
            Organize and showcase your photography projects, equipment, and
            inspiration.
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
                message="The Photography collection feature is coming soon. Check back later for updates."
              />
            </div>
          </DashboardCard>
        </Suspense>
      </main>
    </SubscriptionCheck>
  );
}
