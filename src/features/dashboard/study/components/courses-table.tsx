"use client";

import { useState } from "react";
import { DataTable } from "@/features/dashboard/shared/components/data-table";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, GraduationCap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type Course = {
  id: string;
  name: string;
  progress: number;
  instructor: string;
  nextLesson: string;
  dueDate: string;
  category: string;
  status: "Not Started" | "In Progress" | "Completed";
};

const columns = [
  {
    accessorKey: "name",
    header: "Course Name",
    cell: ({ row }) => (
      <div className="flex items-center">
        <div className="p-2 rounded-full bg-blue-100 mr-3">
          <GraduationCap className="h-4 w-4 text-blue-600" />
        </div>
        <div>
          <p className="font-medium">{row.getValue("name")}</p>
          <p className="text-xs text-gray-500">{row.getValue("category")}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "instructor",
    header: "Instructor",
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      const progress = parseInt(row.getValue("progress"));
      const status = row.getValue("status") as string;
      return (
        <div className="w-full">
          <div className="flex justify-between text-xs mb-1">
            <span>{progress}%</span>
          </div>
          <Progress
            value={progress}
            className="h-2"
            indicatorClassName={`${status === "Completed" ? "bg-green-600" : status === "In Progress" ? "bg-blue-600" : "bg-gray-400"}`}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          className={`${status === "Completed" ? "bg-green-100 text-green-800 hover:bg-green-100" : status === "In Progress" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : "bg-gray-100 text-gray-800 hover:bg-gray-100"}`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => (
      <div className="flex items-center text-sm text-gray-500">
        <CalendarDays className="h-3.5 w-3.5 mr-1" />
        {row.getValue("dueDate")}
      </div>
    ),
  },
];

const demoCourses: Course[] = [
  {
    id: "1",
    name: "Web Development Bootcamp",
    progress: 75,
    instructor: "Dr. Angela Yu",
    nextLesson: "Advanced React Hooks",
    dueDate: "Oct 15",
    category: "Programming",
    status: "In Progress",
  },
  {
    id: "2",
    name: "Machine Learning Fundamentals",
    progress: 45,
    instructor: "Andrew Ng",
    nextLesson: "Neural Networks",
    dueDate: "Oct 20",
    category: "Data Science",
    status: "In Progress",
  },
  {
    id: "3",
    name: "UX/UI Design Principles",
    progress: 60,
    instructor: "Sarah Johnson",
    nextLesson: "User Testing Methods",
    dueDate: "Oct 18",
    category: "Design",
    status: "In Progress",
  },
  {
    id: "4",
    name: "JavaScript Fundamentals",
    progress: 100,
    instructor: "Maximilian Schwarzmüller",
    nextLesson: "Course Completed",
    dueDate: "Completed",
    category: "Programming",
    status: "Completed",
  },
  {
    id: "5",
    name: "Python for Data Science",
    progress: 100,
    instructor: "Jose Portilla",
    nextLesson: "Course Completed",
    dueDate: "Completed",
    category: "Data Science",
    status: "Completed",
  },
  {
    id: "6",
    name: "Advanced CSS and Sass",
    progress: 0,
    instructor: "Jonas Schmedtmann",
    nextLesson: "Introduction to Sass",
    dueDate: "Not Started",
    category: "Web Development",
    status: "Not Started",
  },
  {
    id: "7",
    name: "Digital Marketing Masterclass",
    progress: 0,
    instructor: "Robin Sharma",
    nextLesson: "Introduction to SEO",
    dueDate: "Not Started",
    category: "Marketing",
    status: "Not Started",
  },
];

export function CoursesTable() {
  const [courses, setCourses] = useState<Course[]>(demoCourses);

  return (
    <DataTable
      columns={columns}
      data={courses}
      searchColumn="name"
      filterPlaceholder="Search courses..."
    />
  );
}
