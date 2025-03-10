import { createClient } from "../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { FinanceDashboard } from "@/features/dashboard/finance";

export default async function FinanceDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <DashboardHeader title="Finance Dashboard" user={user} />
      <FinanceDashboard user={user} />
    </SubscriptionCheck>
  );
}
