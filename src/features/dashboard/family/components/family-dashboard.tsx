import { DashboardCard } from "@/features/dashboard/shared";
import {
  Users,
  Calendar,
  School,
  CreditCard,
  ClipboardList,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FamilyDashboardProps {
  user: any;
}

export function FamilyDashboard({ user }: FamilyDashboardProps) {
  return (
    <div className="w-full p-4 md:p-6 space-y-6">
      {/* Summary Section */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Family Overview</h2>
            <p className="mb-4 max-w-2xl">
              Manage your family calendar, tasks, and important information in
              one place.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="secondary">
              <Calendar className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Family Members",
            value: "4",
            icon: <Users className="h-5 w-5 text-purple-600" />,
          },
          {
            title: "Upcoming Events",
            value: "8",
            icon: <Calendar className="h-5 w-5 text-blue-600" />,
          },
          {
            title: "Shared Tasks",
            value: "12",
            icon: <ClipboardList className="h-5 w-5 text-green-600" />,
          },
          {
            title: "Monthly Budget",
            value: "$2,450",
            icon: <CreditCard className="h-5 w-5 text-amber-600" />,
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
        {/* Calendar Column */}
        <div className="lg:col-span-2 space-y-6">
          <DashboardCard
            title="Family Calendar"
            description="Upcoming events and activities"
          >
            <div className="space-y-4">
              {[
                {
                  title: "School Parent-Teacher Meeting",
                  date: "Oct 15, 2023",
                  time: "4:00 PM - 6:00 PM",
                  assignee: "Parents",
                  type: "School",
                },
                {
                  title: "Sarah's Soccer Practice",
                  date: "Oct 17, 2023",
                  time: "3:30 PM - 5:00 PM",
                  assignee: "Sarah",
                  type: "Sports",
                },
                {
                  title: "Family Movie Night",
                  date: "Oct 20, 2023",
                  time: "7:00 PM - 9:30 PM",
                  assignee: "Everyone",
                  type: "Entertainment",
                },
                {
                  title: "Dentist Appointment - Michael",
                  date: "Oct 22, 2023",
                  time: "10:00 AM - 11:00 AM",
                  assignee: "Michael",
                  type: "Health",
                },
              ].map((event, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{event.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        event.type === "School"
                          ? "bg-blue-100 text-blue-800"
                          : event.type === "Sports"
                            ? "bg-green-100 text-green-800"
                            : event.type === "Entertainment"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="ml-5">{event.time}</span>
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-gray-500">Assigned to:</span>
                    <span className="font-medium">{event.assignee}</span>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Shared Tasks"
            description="Family to-do list and responsibilities"
          >
            <div className="space-y-3">
              {[
                {
                  task: "Grocery Shopping",
                  dueDate: "Today",
                  assignee: "Mom",
                  status: "In Progress",
                },
                {
                  task: "Mow the Lawn",
                  dueDate: "Tomorrow",
                  assignee: "Dad",
                  status: "Not Started",
                },
                {
                  task: "Clean Bedroom",
                  dueDate: "Today",
                  assignee: "Kids",
                  status: "Not Started",
                },
                {
                  task: "Pay Utility Bills",
                  dueDate: "Oct 18, 2023",
                  assignee: "Dad",
                  status: "Not Started",
                },
                {
                  task: "Plan Weekend Trip",
                  dueDate: "Oct 19, 2023",
                  assignee: "Everyone",
                  status: "Not Started",
                },
              ].map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-full ${
                        task.status === "Completed"
                          ? "bg-green-100"
                          : task.status === "In Progress"
                            ? "bg-blue-100"
                            : "bg-gray-100"
                      } mr-3`}
                    >
                      <ClipboardList
                        className={`h-4 w-4 ${
                          task.status === "Completed"
                            ? "text-green-600"
                            : task.status === "In Progress"
                              ? "text-blue-600"
                              : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{task.task}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>Due: {task.dueDate}</span>
                        <span className="mx-1">•</span>
                        <span>Assigned to: {task.assignee}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`text-xs px-2 py-1 rounded-full ${
                      task.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : task.status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {task.status}
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          <DashboardCard
            title="Family Members"
            description="Contact information and details"
          >
            <div className="space-y-4">
              {[
                {
                  name: "John Smith",
                  role: "Dad",
                  phone: "(555) 123-4567",
                  email: "john@example.com",
                },
                {
                  name: "Sarah Smith",
                  role: "Mom",
                  phone: "(555) 123-4568",
                  email: "sarah@example.com",
                },
                {
                  name: "Michael Smith",
                  role: "Son",
                  phone: "(555) 123-4569",
                  email: "michael@example.com",
                },
                {
                  name: "Emma Smith",
                  role: "Daughter",
                  phone: "(555) 123-4570",
                  email: "emma@example.com",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex items-center border-b pb-3 last:border-0 last:pb-0"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 text-purple-600 font-medium">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{member.name}</span>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                        {member.role}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      <div className="flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {member.phone}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Children's Education"
            description="School updates and academic progress"
          >
            <div className="space-y-4">
              {[
                {
                  child: "Michael Smith",
                  school: "Lincoln High School",
                  grade: "10th Grade",
                  gpa: "3.8",
                  nextEvent: "Math Test (Oct 18)",
                },
                {
                  child: "Emma Smith",
                  school: "Washington Elementary",
                  grade: "5th Grade",
                  gpa: "4.0",
                  nextEvent: "Science Fair (Oct 25)",
                },
              ].map((education, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <School className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">
                      {education.child}
                    </span>
                  </div>
                  <div className="pl-6 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">School:</span>
                      <span>{education.school}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Grade:</span>
                      <span>{education.grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">GPA:</span>
                      <span>{education.gpa}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Upcoming:</span>
                      <span className="text-blue-600">
                        {education.nextEvent}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Emergency Contacts"
            description="Important numbers and information"
          >
            <div className="space-y-3">
              {[
                {
                  name: "Dr. Johnson",
                  role: "Family Doctor",
                  phone: "(555) 867-5309",
                  address: "123 Medical Center Dr",
                },
                {
                  name: "Grandma Smith",
                  role: "Emergency Contact",
                  phone: "(555) 234-5678",
                  address: "456 Elder Ave",
                },
                {
                  name: "Poison Control",
                  role: "Emergency Service",
                  phone: "(800) 222-1222",
                  address: "",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">{contact.name}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-800">
                        {contact.role}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {contact.phone}
                      </div>
                      {contact.address && (
                        <div className="mt-1 ml-4">{contact.address}</div>
                      )}
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
