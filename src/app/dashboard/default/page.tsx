import { createClient } from "../../../../supabase/server";
import { redirect } from "next/navigation";
import { DashboardHeader } from "@/features/dashboard/shared";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LayoutDashboard,
  Briefcase,
  PieChart,
  Heart,
  Users,
  GraduationCap,
  Bookmark,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default async function DefaultDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="w-full">
      <DashboardHeader title="Dashboard Selection" user={user} />
      <main className="w-full p-4 md:p-6 space-y-6">
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">
            Welcome to Your AI-Powered Dashboard
          </h2>
          <p className="mb-4 max-w-3xl">
            Select a specialized dashboard below to get started, or customize
            your experience in settings.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Professional",
              description: "Track projects, tasks, and team performance",
              icon: <Briefcase className="h-6 w-6" />,
              path: "/dashboard/professional",
              color:
                "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300",
            },
            {
              title: "Finance",
              description: "Monitor financial metrics and budgets",
              icon: <PieChart className="h-6 w-6" />,
              path: "/dashboard/finance",
              color:
                "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300",
            },
            {
              title: "Health",
              description: "Track wellness goals and health metrics",
              icon: <Heart className="h-6 w-6" />,
              path: "/dashboard/health",
              color:
                "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300",
            },
            {
              title: "Family",
              description: "Manage family calendar and activities",
              icon: <Users className="h-6 w-6" />,
              path: "/dashboard/family",
              color:
                "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300",
            },
            {
              title: "Study",
              description: "Track educational courses and learning",
              icon: <GraduationCap className="h-6 w-6" />,
              path: "/dashboard/study",
              color:
                "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
            },
            {
              title: "Spiritual",
              description: "Track spiritual practices and growth",
              icon: <Bookmark className="h-6 w-6" />,
              path: "/dashboard/spiritual",
              color:
                "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-300",
            },
            {
              title: "Hobbies",
              description: "Organize personal hobbies and projects",
              icon: <Bookmark className="h-6 w-6" />,
              path: "/dashboard/hobbies",
              color:
                "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300",
            },
            {
              title: "Digital",
              description: "Manage digital assets and online presence",
              icon: <Globe className="h-6 w-6" />,
              path: "/dashboard/digital",
              color:
                "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300",
            },
            {
              title: "Custom Dashboard",
              description: "Create your own personalized dashboard",
              icon: <LayoutDashboard className="h-6 w-6" />,
              path: "/dashboard/settings",
              color:
                "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
            },
          ].map((dashboard, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow cursor-pointer"
            >
              <Link href={dashboard.path} className="block h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-full ${dashboard.color} mb-2`}>
                      {dashboard.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{dashboard.title}</CardTitle>
                  <CardDescription>{dashboard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 hover:bg-transparent hover:underline"
                  >
                    Open Dashboard
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
