import { createClient } from "../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { DashboardOverview } from "@/features/dashboard/main";
import { ProfessionalDashboard } from "@/features/dashboard/professional";
import { FinanceDashboard } from "@/features/dashboard/finance";
import { HealthDashboard } from "@/features/dashboard/health";
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
              <div className="w-full p-4 md:p-6 space-y-6">
                <section className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Family Overview</h2>
                  <p className="mb-4 max-w-2xl">
                    Manage your family calendar, tasks, and important
                    information in one place.
                  </p>
                </section>
              </div>
            </>
          );
        case "study":
          return (
            <>
              <DashboardHeader title="Study Dashboard" user={user} />
              <div className="w-full p-4 md:p-6 space-y-6">
                <section className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Study Overview</h2>
                  <p className="mb-4 max-w-2xl">
                    Track your courses, study progress, and learning goals in
                    one place.
                  </p>
                </section>
              </div>
            </>
          );
        case "spiritual":
          return (
            <>
              <DashboardHeader title="Spiritual Dashboard" user={user} />
              <div className="w-full p-4 md:p-6 space-y-6">
                <section className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Spiritual Journey</h2>
                  <p className="mb-4 max-w-2xl">
                    Track your spiritual practices, prayers, and personal
                    growth.
                  </p>
                </section>
              </div>
            </>
          );
        case "hobbies":
          return (
            <>
              <DashboardHeader title="Hobbies Dashboard" user={user} />
              <div className="w-full p-4 md:p-6 space-y-6">
                <section className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">
                    Hobbies & Interests
                  </h2>
                  <p className="mb-4 max-w-2xl">
                    Organize and track your personal hobbies, projects, and
                    creative pursuits.
                  </p>
                </section>
              </div>
            </>
          );
        case "digital":
          return (
            <>
              <DashboardHeader title="Digital Dashboard" user={user} />
              <div className="w-full p-4 md:p-6 space-y-6">
                <section className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Digital Workspace</h2>
                  <p className="mb-4 max-w-2xl">
                    Manage your digital assets, online presence, and technology
                    resources.
                  </p>
                </section>
              </div>
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
