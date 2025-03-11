import { DashboardCard } from "@/features/dashboard/shared";
import {
  GraduationCap,
  BookOpen,
  Clock,
  Calendar,
  Award,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface StudyDashboardProps {
  user: any;
}

export function StudyDashboard({ user }: StudyDashboardProps) {
  return (
    <div className="w-full p-4 md:p-6 space-y-6">
      {/* Summary Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Study Overview</h2>
            <p className="mb-4 max-w-2xl">
              Track your courses, study progress, and learning goals in one
              place.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="secondary">
              <BookOpen className="h-4 w-4 mr-2" />
              Add Course
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Active Courses",
            value: "3",
            icon: <BookOpen className="h-5 w-5 text-blue-600" />,
          },
          {
            title: "Study Hours",
            value: "42",
            icon: <Clock className="h-5 w-5 text-green-600" />,
          },
          {
            title: "Completed Courses",
            value: "8",
            icon: <Award className="h-5 w-5 text-amber-600" />,
          },
          {
            title: "Upcoming Exams",
            value: "2",
            icon: <Calendar className="h-5 w-5 text-red-600" />,
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
            title="Current Courses"
            description="Your active learning journey"
          >
            <div className="space-y-4">
              {[
                {
                  name: "Web Development Bootcamp",
                  progress: 75,
                  instructor: "Dr. Angela Yu",
                  nextLesson: "Advanced React Hooks",
                  dueDate: "Oct 15",
                },
                {
                  name: "Machine Learning Fundamentals",
                  progress: 45,
                  instructor: "Andrew Ng",
                  nextLesson: "Neural Networks",
                  dueDate: "Oct 20",
                },
                {
                  name: "UX/UI Design Principles",
                  progress: 60,
                  instructor: "Sarah Johnson",
                  nextLesson: "User Testing Methods",
                  dueDate: "Oct 18",
                },
              ].map((course, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{course.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                      In Progress
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    Instructor: {course.instructor}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full bg-blue-600"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="mt-3 pt-3 border-t flex justify-between text-sm">
                    <span>Next: {course.nextLesson}</span>
                    <span className="text-blue-600">Due: {course.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Study Schedule"
            description="Your upcoming study sessions and exams"
          >
            <div className="space-y-3">
              {[
                {
                  title: "React Hooks Study Session",
                  date: "Today",
                  time: "7:00 PM - 9:00 PM",
                  course: "Web Development",
                  type: "Study",
                },
                {
                  title: "Machine Learning Quiz",
                  date: "Tomorrow",
                  time: "2:00 PM - 3:30 PM",
                  course: "Machine Learning",
                  type: "Exam",
                },
                {
                  title: "UX Design Project Work",
                  date: "Oct 16, 2023",
                  time: "6:00 PM - 8:00 PM",
                  course: "UX/UI Design",
                  type: "Project",
                },
                {
                  title: "Neural Networks Lecture",
                  date: "Oct 18, 2023",
                  time: "10:00 AM - 12:00 PM",
                  course: "Machine Learning",
                  type: "Lecture",
                },
                {
                  title: "Final Project Deadline",
                  date: "Oct 25, 2023",
                  time: "11:59 PM",
                  course: "Web Development",
                  type: "Deadline",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">{event.title}</p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          event.type === "Exam"
                            ? "bg-red-100 text-red-800"
                            : event.type === "Study"
                              ? "bg-green-100 text-green-800"
                              : event.type === "Project"
                                ? "bg-purple-100 text-purple-800"
                                : event.type === "Lecture"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center mt-1">
                      <Calendar className="h-3 w-3 text-gray-500 mr-1" />
                      <span className="text-xs text-gray-500">
                        {event.date}, {event.time}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Course: {event.course}
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
            title="Course Progress"
            description="Overall learning achievements"
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <BarChart className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium">Overall Progress</span>
              </div>
              <div className="text-3xl font-bold">62%</div>
              <div className="text-sm text-green-600">↑ 8% from last month</div>

              <div className="border-t pt-4 mt-2">
                <h4 className="text-sm font-medium mb-3">By Course</h4>
                <div className="space-y-3">
                  {[
                    {
                      name: "Web Development",
                      progress: 75,
                      modules: "9/12 completed",
                    },
                    {
                      name: "Machine Learning",
                      progress: 45,
                      modules: "5/11 completed",
                    },
                    {
                      name: "UX/UI Design",
                      progress: 60,
                      modules: "6/10 completed",
                    },
                  ].map((course, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm">
                        <span>{course.name}</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className="h-1.5 rounded-full bg-blue-600"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 text-right">
                        {course.modules}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Certification Tracker"
            description="Your completed courses and certificates"
          >
            <div className="space-y-3">
              {[
                {
                  name: "JavaScript Fundamentals",
                  issuer: "Udemy",
                  date: "Aug 15, 2023",
                  credential: "UC-123456",
                },
                {
                  name: "Python for Data Science",
                  issuer: "Coursera",
                  date: "Jun 22, 2023",
                  credential: "CERT-789012",
                },
                {
                  name: "UI Design Principles",
                  issuer: "Interaction Design Foundation",
                  date: "Apr 10, 2023",
                  credential: "IDF-345678",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 border rounded-lg"
                >
                  <div className="p-2 rounded-full bg-amber-100 mr-3">
                    <Award className="h-4 w-4 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{cert.name}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{cert.issuer}</span>
                      <span className="mx-1">•</span>
                      <span>{cert.date}</span>
                    </div>
                    <div className="text-xs text-blue-600 mt-1">
                      Credential: {cert.credential}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Book & Notes Library"
            description="Your study materials and resources"
          >
            <div className="space-y-3">
              {[
                {
                  title: "React - The Complete Guide",
                  type: "E-Book",
                  author: "Maximilian Schwarzmüller",
                  lastAccessed: "Yesterday",
                },
                {
                  title: "Machine Learning Notes",
                  type: "Notes",
                  author: "Self",
                  lastAccessed: "Today",
                },
                {
                  title: "Design Thinking Handbook",
                  type: "PDF",
                  author: "InVision",
                  lastAccessed: "3 days ago",
                },
                {
                  title: "Neural Networks Cheat Sheet",
                  type: "Notes",
                  author: "Self",
                  lastAccessed: "1 week ago",
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 border rounded-lg"
                >
                  <div className="p-2 rounded-full bg-blue-100 mr-3">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium text-sm">{resource.title}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100">
                        {resource.type}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {resource.author}
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
