import { createClient } from "../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader, DashboardCard } from "@/features/dashboard/shared";
import { SettingsDialog } from "@/features/settings";

export default async function SettingsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <DashboardHeader title="Settings" user={user} />
      <main className="w-full p-4 md:p-6 space-y-6">
        <div className="max-w-4xl mx-auto">
          <DashboardCard
            title="Settings"
            description="Manage your dashboard preferences"
          >
            <div className="p-4 text-center">
              <p className="mb-4">
                Use the settings dialog to customize your dashboard experience.
              </p>
              <SettingsDialog />
            </div>
          </DashboardCard>
        </div>
      </main>
    </SubscriptionCheck>
  );
}
