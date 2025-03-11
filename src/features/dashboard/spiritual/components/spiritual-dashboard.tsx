import { DashboardCard } from "@/features/dashboard/shared";
import {
  Bookmark,
  Calendar,
  Clock,
  BookOpen,
  Heart,
  PieChart,
  Compass,
  Scroll,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpiritualDashboardProps {
  user: any;
}

export function SpiritualDashboard({ user }: SpiritualDashboardProps) {
  return (
    <div className="w-full p-4 md:p-6 space-y-6">
      {/* Summary Section */}
      <section className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Spiritual Journey</h2>
            <p className="mb-4 max-w-2xl">
              Track your spiritual practices, prayers, and personal growth.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="secondary">
              <Bookmark className="h-4 w-4 mr-2" />
              Add Practice
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Daily Prayers",
            value: "5/5",
            icon: <Bookmark className="h-5 w-5 text-teal-600" />,
          },
          {
            title: "Meditation",
            value: "28 min",
            icon: <Clock className="h-5 w-5 text-purple-600" />,
          },
          {
            title: "Scripture Reading",
            value: "12 pages",
            icon: <BookOpen className="h-5 w-5 text-blue-600" />,
          },
          {
            title: "Gratitude",
            value: "7 items",
            icon: <Heart className="h-5 w-5 text-red-600" />,
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
            title="Daily Practices"
            description="Your spiritual routine and habits"
          >
            <div className="space-y-4">
              {[
                {
                  name: "Morning Prayer",
                  time: "6:00 AM",
                  duration: "15 min",
                  status: "Completed",
                  type: "Prayer",
                },
                {
                  name: "Scripture Study",
                  time: "7:00 AM",
                  duration: "30 min",
                  status: "Completed",
                  type: "Study",
                },
                {
                  name: "Midday Reflection",
                  time: "12:00 PM",
                  duration: "10 min",
                  status: "Completed",
                  type: "Meditation",
                },
                {
                  name: "Evening Prayer",
                  time: "8:00 PM",
                  duration: "15 min",
                  status: "Upcoming",
                  type: "Prayer",
                },
                {
                  name: "Gratitude Journal",
                  time: "9:00 PM",
                  duration: "10 min",
                  status: "Upcoming",
                  type: "Reflection",
                },
              ].map((practice, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{practice.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        practice.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {practice.status}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Clock className="h-4 w-4 mr-1" />
                    {practice.time} • {practice.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        practice.type === "Prayer"
                          ? "bg-teal-100 text-teal-800"
                          : practice.type === "Study"
                            ? "bg-blue-100 text-blue-800"
                            : practice.type === "Meditation"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {practice.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Scripture Study"
            description="Your reading progress and insights"
          >
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Current Reading</h3>
                <div className="flex items-center text-sm mb-3">
                  <BookOpen className="h-4 w-4 mr-1 text-blue-600" />
                  <span>Sacred Text - Chapter 12</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-blue-600"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Progress</span>
                  <span>45%</span>
                </div>
                <div className="mt-4 pt-3 border-t">
                  <h4 className="text-sm font-medium mb-2">Recent Insights</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Sparkles className="h-4 w-4 mr-2 text-amber-500 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        "The importance of daily gratitude in spiritual growth."
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Sparkles className="h-4 w-4 mr-2 text-amber-500 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        "Finding peace through mindful meditation practices."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          <DashboardCard
            title="Spiritual Growth"
            description="Your journey and progress"
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <Compass className="h-5 w-5 text-teal-600 mr-2" />
                <span className="text-sm font-medium">Growth Areas</span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: "Mindfulness",
                    progress: 85,
                    description: "Daily meditation practice",
                  },
                  {
                    name: "Compassion",
                    progress: 70,
                    description: "Acts of kindness and service",
                  },
                  {
                    name: "Knowledge",
                    progress: 60,
                    description: "Scripture study and learning",
                  },
                  {
                    name: "Community",
                    progress: 75,
                    description: "Participation and connection",
                  },
                ].map((area, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm">
                      <span>{area.name}</span>
                      <span>{area.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div
                        className="h-1.5 rounded-full bg-teal-500"
                        style={{ width: `${area.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {area.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Upcoming Events"
            description="Spiritual gatherings and observances"
          >
            <div className="space-y-3">
              {[
                {
                  title: "Community Meditation",
                  date: "Tomorrow",
                  time: "7:00 PM - 8:30 PM",
                  location: "Community Center",
                },
                {
                  title: "Sacred Text Study Group",
                  date: "Oct 15, 2023",
                  time: "6:30 PM - 8:00 PM",
                  location: "Virtual Meeting",
                },
                {
                  title: "Spiritual Retreat",
                  date: "Oct 21-23, 2023",
                  time: "All Day",
                  location: "Mountain Sanctuary",
                },
                {
                  title: "Mindfulness Workshop",
                  date: "Oct 28, 2023",
                  time: "10:00 AM - 12:00 PM",
                  location: "Wellness Center",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 border rounded-lg"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event.title}</p>
                    <div className="flex items-center mt-1">
                      <Calendar className="h-3 w-3 text-gray-500 mr-1" />
                      <span className="text-xs text-gray-500">
                        {event.date}, {event.time}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Location: {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Daily Wisdom"
            description="Inspirational quotes and teachings"
          >
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center mb-3">
                  <Scroll className="h-5 w-5 text-amber-600 mr-2" />
                  <span className="text-sm font-medium">Quote of the Day</span>
                </div>
                <p className="text-sm italic text-gray-700 mb-2">
                  "Peace comes not from the absence of trouble, but from the
                  presence of God."
                </p>
                <p className="text-xs text-right text-gray-500">- Anonymous</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center mb-3">
                  <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm font-medium">Reflection Prompt</span>
                </div>
                <p className="text-sm text-gray-700">
                  "How have you experienced gratitude in your daily life this
                  week? Take a moment to reflect on three things you're thankful
                  for today."
                </p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
