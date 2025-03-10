"use client";

import { useState } from "react";
import { DataTable } from "@/features/dashboard/shared/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

type FamilyEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  assignee: string;
  type: "School" | "Sports" | "Entertainment" | "Health" | "Other";
  location: string;
};

const columns = [
  {
    accessorKey: "title",
    header: "Event",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <p className="font-medium">{row.getValue("title")}</p>
        <p className="text-xs text-gray-500">{row.getValue("location")}</p>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <Badge
          className={`${
            type === "School"
              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
              : type === "Sports"
                ? "bg-green-100 text-green-800 hover:bg-green-100"
                : type === "Entertainment"
                  ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                  : type === "Health"
                    ? "bg-red-100 text-red-800 hover:bg-red-100"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-100"
          }`}
        >
          {type}
        </Badge>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="flex items-center text-sm text-gray-500">
        <Calendar className="h-3.5 w-3.5 mr-1" />
        {row.getValue("date")}
      </div>
    ),
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => (
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="h-3.5 w-3.5 mr-1" />
        {row.getValue("time")}
      </div>
    ),
  },
  {
    accessorKey: "assignee",
    header: "Assigned To",
    cell: ({ row }) => (
      <div className="flex items-center text-sm">
        <User className="h-3.5 w-3.5 mr-1 text-gray-500" />
        {row.getValue("assignee")}
      </div>
    ),
  },
];

const demoEvents: FamilyEvent[] = [
  {
    id: "1",
    title: "School Parent-Teacher Meeting",
    date: "Oct 15, 2023",
    time: "4:00 PM - 6:00 PM",
    assignee: "Parents",
    type: "School",
    location: "Lincoln High School",
  },
  {
    id: "2",
    title: "Sarah's Soccer Practice",
    date: "Oct 17, 2023",
    time: "3:30 PM - 5:00 PM",
    assignee: "Sarah",
    type: "Sports",
    location: "Community Field",
  },
  {
    id: "3",
    title: "Family Movie Night",
    date: "Oct 20, 2023",
    time: "7:00 PM - 9:30 PM",
    assignee: "Everyone",
    type: "Entertainment",
    location: "Home",
  },
  {
    id: "4",
    title: "Dentist Appointment - Michael",
    date: "Oct 22, 2023",
    time: "10:00 AM - 11:00 AM",
    assignee: "Michael",
    type: "Health",
    location: "Smile Dental Clinic",
  },
  {
    id: "5",
    title: "Emma's Piano Recital",
    date: "Oct 25, 2023",
    time: "5:00 PM - 7:00 PM",
    assignee: "Emma",
    type: "Entertainment",
    location: "Community Center",
  },
  {
    id: "6",
    title: "Science Fair",
    date: "Oct 28, 2023",
    time: "9:00 AM - 2:00 PM",
    assignee: "Michael",
    type: "School",
    location: "Washington Elementary",
  },
  {
    id: "7",
    title: "Family Dinner with Grandparents",
    date: "Oct 30, 2023",
    time: "6:00 PM - 8:30 PM",
    assignee: "Everyone",
    type: "Entertainment",
    location: "Grandparents' House",
  },
];

export function EventsTable() {
  const [events, setEvents] = useState<FamilyEvent[]>(demoEvents);

  return (
    <DataTable
      columns={columns}
      data={events}
      searchColumn="title"
      filterPlaceholder="Search events..."
    />
  );
}
