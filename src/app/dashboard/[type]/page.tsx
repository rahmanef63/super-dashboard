import { createClient } from "../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import {
  DashboardOverview,
  ProfessionalDashboard,
  FinanceDashboard,
  HealthDashboard,
  FamilyDashboard,
  StudyDashboard,
  SpiritualDashboard,
  HobbiesDashboard,
  DigitalDashboard,
} from "@/features/dashboard";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

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
    try {
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
        case "family":
          return (
            <>
              <DashboardHeader title="Family Dashboard" user={user} />
              <FamilyDashboard user={user} />
            </>
          );
        case "study":
          return (
            <>
              <DashboardHeader title="Study Dashboard" user={user} />
              <StudyDashboard user={user} />
            </>
          );
        case "spiritual":
          return (
            <>
              <DashboardHeader title="Spiritual Dashboard" user={user} />
              <SpiritualDashboard user={user} />
            </>
          );
        case "hobbies":
          return (
            <>
              <DashboardHeader title="Hobbies Dashboard" user={user} />
              <HobbiesDashboard user={user} />
            </>
          );
        case "digital":
          return (
            <>
              <DashboardHeader title="Digital Dashboard" user={user} />
              <DigitalDashboard user={user} />
            </>
          );
        default:
          // If the type doesn't match any known dashboard, show error message
          return (
            <>
              <DashboardHeader title="Dashboard Not Found" user={user} />
              <div className="w-full p-4 md:p-6 space-y-6">
                <Alert variant="destructive" className="max-w-2xl mx-auto">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Dashboard Not Found</AlertTitle>
                  <AlertDescription>
                    The dashboard type "{params.type}" does not exist. Please
                    select a valid dashboard from the sidebar.
                  </AlertDescription>
                  <div className="mt-4">
                    <Button asChild variant="outline">
                      <Link href="/dashboard">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Return to Main Dashboard
                      </Link>
                    </Button>
                  </div>
                </Alert>
              </div>
            </>
          );
      }
    } catch (error) {
      // Handle any errors that might occur during dashboard rendering
      console.error("Error rendering dashboard:", error);
      return (
        <>
          <DashboardHeader title="Dashboard Error" user={user} />
          <div className="w-full p-4 md:p-6 space-y-6">
            <Alert variant="destructive" className="max-w-2xl mx-auto">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error Loading Dashboard</AlertTitle>
              <AlertDescription>
                There was an error loading the {params.type} dashboard. Please
                try again or select a different dashboard.
              </AlertDescription>
              <div className="mt-4">
                <Button asChild variant="outline">
                  <Link href="/dashboard">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Return to Main Dashboard
                  </Link>
                </Button>
              </div>
            </Alert>
          </div>
        </>
      );
    }
  };

  return <SubscriptionCheck>{renderDashboard()}</SubscriptionCheck>;
}
