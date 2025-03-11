import { DashboardCard } from "@/features/dashboard/shared";
import {
  Palette,
  Clock,
  Calendar,
  BookOpen,
  Sparkles,
  Users,
  BarChart,
  Camera,
  Music,
  Code,
  Brush,
  Scissors,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HobbiesDashboardProps {
  user: any;
}

export function HobbiesDashboard({ user }: HobbiesDashboardProps) {
  return (
    <div className="w-full p-4 md:p-6 space-y-6">
      {/* Summary Section */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Hobbies & Interests</h2>
            <p className="mb-4 max-w-2xl">
              Organize and track your personal hobbies, projects, and creative
              pursuits.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="secondary">
              <Palette className="h-4 w-4 mr-2" />
              Add Hobby
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Active Hobbies",
            value: "5",
            icon: <Palette className="h-5 w-5 text-pink-600" />,
          },
          {
            title: "Time Invested",
            value: "12h",
            icon: <Clock className="h-5 w-5 text-blue-600" />,
          },
          {
            title: "Projects",
            value: "8",
            icon: <Sparkles className="h-5 w-5 text-purple-600" />,
          },
          {
            title: "Community Events",
            value: "3",
            icon: <Users className="h-5 w-5 text-green-600" />,
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
            title="My Hobbies"
            description="Your active interests and creative pursuits"
          >
            <div className="space-y-4">
              {[
                {
                  name: "Photography",
                  category: "Creative",
                  lastActivity: "Yesterday",
                  progress: 75,
                  icon: <Camera className="h-4 w-4 text-blue-600" />,
                },
                {
                  name: "Guitar",
                  category: "Music",
                  lastActivity: "3 days ago",
                  progress: 60,
                  icon: <Music className="h-4 w-4 text-purple-600" />,
                },
                {
                  name: "Coding",
                  category: "Technical",
                  lastActivity: "Today",
                  progress: 85,
                  icon: <Code className="h-4 w-4 text-green-600" />,
                },
                {
                  name: "Painting",
                  category: "Creative",
                  lastActivity: "1 week ago",
                  progress: 40,
                  icon: <Brush className="h-4 w-4 text-pink-600" />,
                },
                {
                  name: "Crafting",
                  category: "DIY",
                  lastActivity: "2 days ago",
                  progress: 65,
                  icon: <Scissors className="h-4 w-4 text-amber-600" />,
                },
              ].map((hobby, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-gray-100 mr-3">
                        {hobby.icon}
                      </div>
                      <h3 className="font-medium">{hobby.name}</h3>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                      {hobby.category}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    Last activity: {hobby.lastActivity}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full bg-pink-500"
                      style={{ width: `${hobby.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Skill Level</span>
                    <span>{hobby.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Current Projects"
            description="Your ongoing hobby projects and creations"
          >
            <div className="space-y-3">
              {[
                {
                  title: "Wildlife Photography Collection",
                  category: "Photography",
                  deadline: "Nov 15, 2023",
                  progress: 60,
                  status: "In Progress",
                },
                {
                  title: "Learn Jazz Guitar Standards",
                  category: "Music",
                  deadline: "Ongoing",
                  progress: 45,
                  status: "In Progress",
                },
                {
                  title: "Personal Portfolio Website",
                  category: "Coding",
                  deadline: "Oct 30, 2023",
                  progress: 80,
                  status: "Almost Complete",
                },
                {
                  title: "Landscape Oil Painting Series",
                  category: "Painting",
                  deadline: "Dec 10, 2023",
                  progress: 30,
                  status: "Just Started",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">{project.title}</p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          project.status === "Almost Complete"
                            ? "bg-green-100 text-green-800"
                            : project.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-gray-500">
                        {project.category} • Due: {project.deadline}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                      <div
                        className="h-1.5 rounded-full bg-pink-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-end mt-1">
                      <span className="text-xs text-gray-500">
                        {project.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          <DashboardCard
            title="Activity Tracker"
            description="Time spent on your hobbies"
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <BarChart className="h-5 w-5 text-pink-600 mr-2" />
                <span className="text-sm font-medium">Weekly Activity</span>
              </div>
              <div className="text-3xl font-bold">12h 30m</div>
              <div className="text-sm text-green-600">↑ 2h from last week</div>

              <div className="border-t pt-4 mt-2">
                <h4 className="text-sm font-medium mb-3">By Hobby</h4>
                <div className="space-y-3">
                  {[
                    {
                      name: "Photography",
                      hours: 4.5,
                      percentage: 36,
                    },
                    {
                      name: "Coding",
                      hours: 3.75,
                      percentage: 30,
                    },
                    {
                      name: "Guitar",
                      hours: 2.25,
                      percentage: 18,
                    },
                    {
                      name: "Painting",
                      hours: 1.0,
                      percentage: 8,
                    },
                    {
                      name: "Crafting",
                      hours: 1.0,
                      percentage: 8,
                    },
                  ].map((hobby, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm">
                        <span>{hobby.name}</span>
                        <span>{hobby.hours}h</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className="h-1.5 rounded-full bg-pink-500"
                          style={{ width: `${hobby.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 text-right">
                        {hobby.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Upcoming Events"
            description="Hobby-related gatherings and workshops"
          >
            <div className="space-y-3">
              {[
                {
                  title: "Photography Meetup",
                  date: "Oct 14, 2023",
                  time: "10:00 AM - 1:00 PM",
                  location: "City Park",
                },
                {
                  title: "Guitar Workshop",
                  date: "Oct 21, 2023",
                  time: "6:30 PM - 8:30 PM",
                  location: "Music Center",
                },
                {
                  title: "Coding Hackathon",
                  date: "Oct 28-29, 2023",
                  time: "All Day",
                  location: "Tech Hub",
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
            title="Learning Resources"
            description="Tutorials and materials for your hobbies"
          >
            <div className="space-y-3">
              {[
                {
                  title: "Advanced Photography Techniques",
                  type: "Online Course",
                  source: "Skillshare",
                  lastAccessed: "2 days ago",
                },
                {
                  title: "Jazz Guitar Essentials",
                  type: "E-Book",
                  source: "Music Library",
                  lastAccessed: "1 week ago",
                },
                {
                  title: "Modern Web Development",
                  type: "Video Series",
                  source: "YouTube",
                  lastAccessed: "Yesterday",
                },
                {
                  title: "Oil Painting for Beginners",
                  type: "Tutorial",
                  source: "Creative Arts Hub",
                  lastAccessed: "3 days ago",
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 border rounded-lg"
                >
                  <div className="p-2 rounded-full bg-pink-100 mr-3">
                    <BookOpen className="h-4 w-4 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium text-sm">{resource.title}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100">
                        {resource.type}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Source: {resource.source}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Last accessed: {resource.lastAccessed}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
