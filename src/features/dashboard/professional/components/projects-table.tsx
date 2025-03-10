"use client";

import { useState } from "react";
import { DataTable } from "@/features/dashboard/shared/components/data-table";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type Project = {
  id: string;
  name: string;
  progress: number;
  status: "On Track" | "At Risk" | "Delayed";
  dueDate: string;
  assignee: string;
  budget: string;
};

const columns = [
  {
    accessorKey: "name",
    header: "Project Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          className={`${status === "On Track" ? "bg-green-100 text-green-800 hover:bg-green-100" : status === "At Risk" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" : "bg-red-100 text-red-800 hover:bg-red-100"}`}
        >
          {status}
        </Badge>
      );
    },
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
            indicatorClassName={`${status === "On Track" ? "bg-green-600" : status === "At Risk" ? "bg-yellow-500" : "bg-red-500"}`}
          />
        </div>
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
  },
  {
    accessorKey: "budget",
    header: "Budget",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("budget")}</div>
    ),
  },
];

const demoProjects: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    progress: 75,
    status: "On Track",
    dueDate: "Oct 15",
    assignee: "Alex Johnson",
    budget: "$12,500",
  },
  {
    id: "2",
    name: "Mobile App Development",
    progress: 40,
    status: "At Risk",
    dueDate: "Nov 30",
    assignee: "Sam Taylor",
    budget: "$45,000",
  },
  {
    id: "3",
    name: "Marketing Campaign",
    progress: 90,
    status: "On Track",
    dueDate: "Oct 5",
    assignee: "Jamie Smith",
    budget: "$8,750",
  },
  {
    id: "4",
    name: "Product Launch",
    progress: 20,
    status: "Delayed",
    dueDate: "Dec 10",
    assignee: "Taylor Reed",
    budget: "$32,000",
  },
  {
    id: "5",
    name: "CRM Integration",
    progress: 60,
    status: "On Track",
    dueDate: "Nov 15",
    assignee: "Morgan Lee",
    budget: "$18,500",
  },
  {
    id: "6",
    name: "Data Migration",
    progress: 35,
    status: "At Risk",
    dueDate: "Dec 5",
    assignee: "Casey Kim",
    budget: "$9,200",
  },
  {
    id: "7",
    name: "Security Audit",
    progress: 85,
    status: "On Track",
    dueDate: "Oct 20",
    assignee: "Jordan Patel",
    budget: "$7,500",
  },
];

export function ProjectsTable() {
  const [projects, setProjects] = useState<Project[]>(demoProjects);

  return (
    <DataTable
      columns={columns}
      data={projects}
      searchColumn="name"
      filterPlaceholder="Search projects..."
    />
  );
}
