import { createClient } from "../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { ProfessionalDashboard } from "@/features/dashboard/professional";

export default async function ProfessionalDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <DashboardHeader title="Professional Dashboard" user={user} />
      <ProfessionalDashboard user={user} />
    </SubscriptionCheck>
  );
}
