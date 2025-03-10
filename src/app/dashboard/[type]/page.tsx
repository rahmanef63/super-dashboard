import { createClient } from "../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { DashboardOverview } from "@/features/dashboard/main";
import { ProfessionalDashboard } from "@/features/dashboard/professional";
import { FinanceDashboard } from "@/features/dashboard/finance";
import { HealthDashboard } from "@/features/dashboard/health";
import { notFound } from "next/navigation";

export default async function DynamicDashboard({
  params,
}: {
  params: { type: string };
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Determine which dashboard to render based on the type parameter
  const renderDashboard = () => {
    switch (params.type) {
      case "professional":
        return (
          <>
            <DashboardHeader title="Professional Dashboard" user={user} />
            <ProfessionalDashboard user={user} />
          </>
        );
      case "finance":
        return (
          <>
            <DashboardHeader title="Finance Dashboard" user={user} />
            <FinanceDashboard user={user} />
          </>
        );
      case "health":
        return (
          <>
            <DashboardHeader title="Health Dashboard" user={user} />
            <HealthDashboard user={user} />
          </>
        );
      // Add more dashboard types as needed
      default:
        // If the type doesn't match any known dashboard, return 404
        return notFound();
    }
  };

  return <SubscriptionCheck>{renderDashboard()}</SubscriptionCheck>;
}
