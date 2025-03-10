"use client";

import { useState } from "react";
import { DataTable } from "@/features/dashboard/shared/components/data-table";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, CheckCircle2, Clock, User } from "lucide-react";

type Task = {
  id: string;
  title: string;
  dueDate: string;
  assignee: string;
  priority: "High" | "Medium" | "Low";
  status: "To Do" | "In Progress" | "Completed";
  project: string;
  estimatedTime: string;
};

const columns = [
  {
    accessorKey: "title",
    header: "Task",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <p className="font-medium">{row.getValue("title")}</p>
        <p className="text-xs text-gray-500">{row.getValue("project")}</p>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          className={`${
            status === "Completed"
              ? "bg-green-100 text-green-800 hover:bg-green-100"
              : status === "In Progress"
                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                : "bg-gray-100 text-gray-800 hover:bg-gray-100"
          }`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as string;
      return (
        <Badge
          className={`${
            priority === "High"
              ? "bg-red-100 text-red-800 hover:bg-red-100"
              : priority === "Medium"
                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                : "bg-green-100 text-green-800 hover:bg-green-100"
          }`}
        >
          {priority}
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
  {
    accessorKey: "assignee",
    header: "Assignee",
    cell: ({ row }) => (
      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-xs">
          {row.getValue("assignee").charAt(0)}
        </div>
        <span>{row.getValue("assignee")}</span>
      </div>
    ),
  },
  {
    accessorKey: "estimatedTime",
    header: "Est. Time",
    cell: ({ row }) => (
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="h-3.5 w-3.5 mr-1" />
        {row.getValue("estimatedTime")}
      </div>
    ),
  },
];

const demoTasks: Task[] = [
  {
    id: "1",
    title: "Design Homepage Mockup",
    dueDate: "Tomorrow",
    assignee: "Alex Johnson",
    priority: "High",
    status: "In Progress",
    project: "Website Redesign",
    estimatedTime: "4h",
  },
  {
    id: "2",
    title: "Implement User Authentication",
    dueDate: "Oct 5",
    assignee: "Sam Taylor",
    priority: "High",
    status: "To Do",
    project: "Mobile App Development",
    estimatedTime: "8h",
  },
  {
    id: "3",
    title: "Create Social Media Graphics",
    dueDate: "Oct 3",
    assignee: "Jamie Smith",
    priority: "Medium",
    status: "To Do",
    project: "Marketing Campaign",
    estimatedTime: "3h",
  },
  {
    id: "4",
    title: "Write Product Descriptions",
    dueDate: "Oct 10",
    assignee: "Taylor Reed",
    priority: "Medium",
    status: "To Do",
    project: "Product Launch",
    estimatedTime: "5h",
  },
  {
    id: "5",
    title: "Finalize Logo Design",
    dueDate: "Sep 30",
    assignee: "Alex Johnson",
    priority: "High",
    status: "Completed",
    project: "Branding Project",
    estimatedTime: "2h",
  },
  {
    id: "6",
    title: "Database Schema Design",
    dueDate: "Oct 7",
    assignee: "Sam Taylor",
    priority: "High",
    status: "In Progress",
    project: "CRM Integration",
    estimatedTime: "6h",
  },
  {
    id: "7",
    title: "QA Testing",
    dueDate: "Oct 12",
    assignee: "Morgan Lee",
    priority: "Medium",
    status: "To Do",
    project: "Mobile App Development",
    estimatedTime: "10h",
  },
  {
    id: "8",
    title: "Create User Documentation",
    dueDate: "Oct 15",
    assignee: "Jamie Smith",
    priority: "Low",
    status: "To Do",
    project: "Product Launch",
    estimatedTime: "4h",
  },
];

export function TasksTable() {
  const [tasks, setTasks] = useState<Task[]>(demoTasks);

  return (
    <DataTable
      columns={columns}
      data={tasks}
      searchColumn="title"
      filterPlaceholder="Search tasks..."
    />
  );
}
