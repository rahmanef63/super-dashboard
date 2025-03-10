import { DashboardCard } from "@/features/dashboard/shared";
import {
  Heart,
  Activity,
  Utensils,
  Moon,
  Timer,
  TrendingUp,
  BarChart,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HealthDashboardProps {
  user: any;
}

export function HealthDashboard({ user }: HealthDashboardProps) {
  return (
    <div className="w-full p-4 md:p-6 space-y-6">
      {/* Summary Section */}
      <section className="bg-gradient-to-r from-red-500 to-pink-600 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Health Overview</h2>
            <p className="mb-4 max-w-2xl">
              Track your fitness, nutrition, and wellness goals all in one
              place.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="secondary">
              <Activity className="h-4 w-4 mr-2" />
              Log Activity
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Daily Steps",
            value: "8,742",
            icon: <Activity className="h-5 w-5 text-red-600" />,
          },
          {
            title: "Calories",
            value: "1,842",
            icon: <Utensils className="h-5 w-5 text-orange-600" />,
          },
          {
            title: "Sleep",
            value: "7.5h",
            icon: <Moon className="h-5 w-5 text-indigo-600" />,
          },
          {
            title: "Active Minutes",
            value: "48",
            icon: <Timer className="h-5 w-5 text-green-600" />,
          },
        ].map((stat, index) => (
          <DashboardCard key={index} title={stat.title} className="text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-gray-100 mb-3">
                {stat.icon}
              </div>
              <span className="text-3xl font-bold">{stat.value}</span>
            </div>
          </DashboardCard>
        ))}
      </section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          <DashboardCard
            title="Activity Trends"
            description="Your weekly activity summary"
          >
            <div className="h-64 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Steps</span>
                  <span className="text-sm font-medium">Active Minutes</span>
                  <span className="text-sm font-medium">Calories</span>
                </div>
                <div className="flex h-8 mb-4">
                  <div className="bg-blue-500 w-10/25 rounded-l-lg"></div>
                  <div className="bg-green-500 w-6/25"></div>
                  <div className="bg-orange-500 w-9/25 rounded-r-lg"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">Steps</span>
                    <span className="text-sm ml-auto">8,742 (40%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Active Minutes</span>
                    <span className="text-sm ml-auto">48 (24%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                    <span className="text-sm">Calories</span>
                    <span className="text-sm ml-auto">1,842 (36%)</span>
                  </div>
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Recent Activities"
            description="Your latest workouts and activities"
          >
            <div className="space-y-4">
              {[
                {
                  name: "Morning Run",
                  duration: "32 min",
                  date: "Today",
                  calories: "320",
                  type: "Cardio",
                },
                {
                  name: "Strength Training",
                  duration: "45 min",
                  date: "Yesterday",
                  calories: "280",
                  type: "Strength",
                },
                {
                  name: "Yoga Session",
                  duration: "60 min",
                  date: "Sep 28",
                  calories: "180",
                  type: "Flexibility",
                },
                {
                  name: "Evening Walk",
                  duration: "25 min",
                  date: "Sep 27",
                  calories: "140",
                  type: "Cardio",
                },
                {
                  name: "Swimming",
                  duration: "40 min",
                  date: "Sep 25",
                  calories: "350",
                  type: "Cardio",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-red-100 mr-3">
                      <Activity className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{activity.name}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{activity.date}</span>
                        <span className="mx-1">•</span>
                        <span>{activity.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{activity.duration}</p>
                    <p className="text-xs text-gray-500">
                      {activity.calories} cal
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          <DashboardCard
            title="Goal Progress"
            description="Your health and fitness goals"
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-sm font-medium">Weekly Goals</span>
              </div>

              <div className="border-t pt-4 mt-2">
                <div className="space-y-4">
                  {[
                    {
                      name: "Steps",
                      current: 61240,
                      target: 70000,
                      percentage: 87,
                    },
                    {
                      name: "Active Minutes",
                      current: 210,
                      target: 300,
                      percentage: 70,
                    },
                    {
                      name: "Workouts",
                      current: 3,
                      target: 5,
                      percentage: 60,
                    },
                    {
                      name: "Sleep",
                      current: 52,
                      target: 56,
                      percentage: 93,
                    },
                  ].map((goal, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm">
                        <span>{goal.name}</span>
                        <span>
                          {goal.current} / {goal.target}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className={`h-1.5 rounded-full ${goal.percentage > 90 ? "bg-green-500" : goal.percentage > 60 ? "bg-yellow-500" : "bg-red-500"}`}
                          style={{ width: `${goal.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Nutrition Summary"
            description="Today's nutrition intake"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Calories Consumed</span>
                <span className="text-lg font-bold">1,842 / 2,200</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "84%" }}
                ></div>
              </div>

              <div className="border-t pt-4 mt-2">
                <h4 className="text-sm font-medium mb-3">Macronutrients</h4>
                <div className="space-y-3">
                  {[
                    {
                      name: "Protein",
                      value: "98g",
                      percentage: 40,
                      color: "bg-blue-500",
                    },
                    {
                      name: "Carbs",
                      value: "210g",
                      percentage: 45,
                      color: "bg-green-500",
                    },
                    {
                      name: "Fat",
                      value: "65g",
                      percentage: 15,
                      color: "bg-yellow-500",
                    },
                  ].map((nutrient, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${nutrient.color} mr-2`}
                      ></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm">{nutrient.name}</span>
                          <span className="text-sm">{nutrient.value}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {nutrient.percentage}% of daily intake
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
