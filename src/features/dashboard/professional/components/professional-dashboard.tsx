import { DashboardCard } from "@/features/dashboard/shared";
import {
  Briefcase,
  CheckCircle2,
  Clock,
  CalendarDays,
  Users,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfessionalDashboardProps {
  user: any;
}

export function ProfessionalDashboard({ user }: ProfessionalDashboardProps) {
  return (
    <div className="w-full p-4 md:p-6 space-y-6">
      {/* Summary Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Professional Overview</h2>
            <p className="mb-4 max-w-2xl">
              Track your projects, tasks, and team performance all in one place.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="secondary">
              <Briefcase className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Active Projects",
            value: "5",
            icon: <Briefcase className="h-5 w-5 text-indigo-600" />,
          },
          {
            title: "Completed Tasks",
            value: "27",
            icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
          },
          {
            title: "Hours Tracked",
            value: "128",
            icon: <Clock className="h-5 w-5 text-blue-600" />,
          },
          {
            title: "Team Members",
            value: "8",
            icon: <Users className="h-5 w-5 text-purple-600" />,
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
        {/* Projects Column */}
        <div className="lg:col-span-2 space-y-6">
          <DashboardCard
            title="Current Projects"
            description="Your active project portfolio"
          >
            <div className="space-y-4">
              {[
                {
                  name: "Website Redesign",
                  progress: 75,
                  status: "On Track",
                  dueDate: "Oct 15",
                },
                {
                  name: "Mobile App Development",
                  progress: 40,
                  status: "At Risk",
                  dueDate: "Nov 30",
                },
                {
                  name: "Marketing Campaign",
                  progress: 90,
                  status: "On Track",
                  dueDate: "Oct 5",
                },
                {
                  name: "Product Launch",
                  progress: 20,
                  status: "Delayed",
                  dueDate: "Dec 10",
                },
              ].map((project, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{project.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${project.status === "On Track" ? "bg-green-100 text-green-800" : project.status === "At Risk" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    Due: {project.dueDate}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${project.status === "On Track" ? "bg-green-600" : project.status === "At Risk" ? "bg-yellow-500" : "bg-red-500"}`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Task Overview"
            description="Your tasks by status"
          >
            <div className="h-64 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">To Do (8)</span>
                  <span className="text-sm font-medium">In Progress (5)</span>
                  <span className="text-sm font-medium">Completed (12)</span>
                </div>
                <div className="flex h-8 mb-4">
                  <div className="bg-gray-300 w-8/25 rounded-l-lg"></div>
                  <div className="bg-blue-500 w-5/25"></div>
                  <div className="bg-green-500 w-12/25 rounded-r-lg"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                    <span className="text-sm">To Do</span>
                    <span className="text-sm ml-auto">32%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">In Progress</span>
                    <span className="text-sm ml-auto">20%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Completed</span>
                    <span className="text-sm ml-auto">48%</span>
                  </div>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          <DashboardCard
            title="Team Performance"
            description="Weekly productivity metrics"
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <BarChart className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm font-medium">Productivity Score</span>
              </div>
              <div className="text-3xl font-bold">87%</div>
              <div className="text-sm text-green-600">↑ 12% from last week</div>

              <div className="border-t pt-4 mt-4">
                <h4 className="text-sm font-medium mb-3">Top Performers</h4>
                <div className="space-y-3">
                  {[
                    { name: "Alex Johnson", role: "Designer", score: 95 },
                    { name: "Sam Taylor", role: "Developer", score: 92 },
                    { name: "Jamie Smith", role: "Manager", score: 88 },
                  ].map((member, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        {member.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">
                            {member.name}
                          </span>
                          <span className="text-sm">{member.score}%</span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {member.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Upcoming Deadlines"
            description="Tasks and projects due soon"
          >
            <div className="space-y-3">
              {[
                {
                  title: "Client Presentation",
                  date: "Tomorrow",
                  priority: "High",
                },
                { title: "Team Meeting", date: "Oct 3", priority: "Medium" },
                {
                  title: "Project Milestone",
                  date: "Oct 10",
                  priority: "High",
                },
                {
                  title: "Quarterly Review",
                  date: "Oct 15",
                  priority: "Medium",
                },
              ].map((deadline, index) => (
                <div
                  key={index}
                  className="flex items-start pb-3 border-b last:border-0 last:pb-0"
                >
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">{deadline.title}</p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${deadline.priority === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {deadline.priority}
                      </span>
                    </div>
                    <div className="flex items-center mt-1">
                      <CalendarDays className="h-3 w-3 text-gray-500 mr-1" />
                      <span className="text-xs text-gray-500">
                        {deadline.date}
                      </span>
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
