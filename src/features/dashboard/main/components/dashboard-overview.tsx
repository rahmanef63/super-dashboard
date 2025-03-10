import { DashboardCard } from "@/features/dashboard/shared";
import {
  LayoutDashboard,
  Briefcase,
  PieChart,
  Heart,
  ArrowRight,
  Gauge,
  Users,
  GraduationCap,
  Bookmark,
  Palette,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { dashboardTypes } from "@/features/dashboard/shared";

interface DashboardOverviewProps {
  user: any;
}

export function DashboardOverview({ user }: DashboardOverviewProps) {
  return (
    <div className="w-full p-4 md:p-6 space-y-6">
      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">
          Welcome to your AI-Powered Dashboard
        </h2>
        <p className="mb-4 max-w-3xl">
          Customize your experience by switching between specialized dashboards,
          adding widgets, and exploring AI-generated insights.
        </p>
        <Button variant="secondary" asChild>
          <Link href="/dashboard/settings">Customize Dashboard</Link>
        </Button>
      </section>

      {/* Dashboard Types */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Your Dashboards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dashboardTypes.map((dashboard) => (
            <Link href={dashboard.path} key={dashboard.id}>
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow cursor-pointer h-full">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
                    {dashboard.icon}
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">{dashboard.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {dashboard.menuItems[0].description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Widgets Grid */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Overview</h2>
          <Button variant="outline" size="sm">
            Add Widget
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashboardCard
            title="Activity Summary"
            description="Your recent activity across all dashboards"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm">Professional</span>
                </div>
                <span className="text-sm font-medium">42%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "42%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Finance</span>
                </div>
                <span className="text-sm font-medium">28%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "28%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm">Health</span>
                </div>
                <span className="text-sm font-medium">30%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Recent Updates"
            description="Latest changes to your dashboards"
          >
            <div className="space-y-3">
              {[
                {
                  title: "New Finance Widget",
                  time: "2 hours ago",
                  dashboard: "Finance",
                },
                {
                  title: "Task Completed",
                  time: "Yesterday",
                  dashboard: "Professional",
                },
                {
                  title: "Health Goal Achieved",
                  time: "3 days ago",
                  dashboard: "Health",
                },
              ].map((update, index) => (
                <div
                  key={index}
                  className="flex items-start pb-3 border-b last:border-0 last:pb-0"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium">{update.title}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-gray-500">
                        {update.time}
                      </span>
                      <span className="mx-2 text-gray-300 dark:text-gray-600">
                        •
                      </span>
                      <span className="text-xs text-gray-500">
                        {update.dashboard}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Quick Stats"
            description="Key metrics across your dashboards"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Gauge className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Tasks
                  </span>
                </div>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  12
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  4 completed
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <PieChart className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                    Budget
                  </span>
                </div>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                  68%
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  On track
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                    Team
                  </span>
                </div>
                <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  8
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  Active members
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Heart className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                    Health
                  </span>
                </div>
                <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                  85%
                </p>
                <p className="text-xs text-amber-600 dark:text-amber-400">
                  Goal progress
                </p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </section>
    </div>
  );
}
