"use client";

import { useState } from "react";
import { DataTable } from "@/features/dashboard/shared/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Activity, Calendar } from "lucide-react";

type ActivityRecord = {
  id: string;
  name: string;
  duration: string;
  date: string;
  calories: string;
  type: string;
  intensity: "Low" | "Medium" | "High";
};

const columns = [
  {
    accessorKey: "name",
    header: "Activity",
    cell: ({ row }) => (
      <div className="flex items-center">
        <div className="p-2 rounded-full bg-red-100 mr-3">
          <Activity className="h-4 w-4 text-red-600" />
        </div>
        <div>
          <p className="font-medium text-sm">{row.getValue("name")}</p>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="h-3 w-3 mr-1" />
            {row.getValue("date")}
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <Badge variant="outline">{row.getValue("type")}</Badge>,
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("duration")}</div>
    ),
  },
  {
    accessorKey: "calories",
    header: "Calories",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("calories")} cal</div>
    ),
  },
  {
    accessorKey: "intensity",
    header: "Intensity",
    cell: ({ row }) => {
      const intensity = row.getValue("intensity") as string;
      return (
        <Badge
          className={`${intensity === "High" ? "bg-red-100 text-red-800 hover:bg-red-100" : intensity === "Medium" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" : "bg-green-100 text-green-800 hover:bg-green-100"}`}
        >
          {intensity}
        </Badge>
      );
    },
  },
];

const demoActivities: ActivityRecord[] = [
  {
    id: "1",
    name: "Morning Run",
    duration: "32 min",
    date: "Today",
    calories: "320",
    type: "Cardio",
    intensity: "High",
  },
  {
    id: "2",
    name: "Strength Training",
    duration: "45 min",
    date: "Yesterday",
    calories: "280",
    type: "Strength",
    intensity: "Medium",
  },
  {
    id: "3",
    name: "Yoga Session",
    duration: "60 min",
    date: "Sep 28",
    calories: "180",
    type: "Flexibility",
    intensity: "Low",
  },
  {
    id: "4",
    name: "Evening Walk",
    duration: "25 min",
    date: "Sep 27",
    calories: "140",
    type: "Cardio",
    intensity: "Low",
  },
  {
    id: "5",
    name: "Swimming",
    duration: "40 min",
    date: "Sep 25",
    calories: "350",
    type: "Cardio",
    intensity: "Medium",
  },
  {
    id: "6",
    name: "HIIT Workout",
    duration: "25 min",
    date: "Sep 24",
    calories: "310",
    type: "Cardio",
    intensity: "High",
  },
  {
    id: "7",
    name: "Cycling",
    duration: "50 min",
    date: "Sep 22",
    calories: "420",
    type: "Cardio",
    intensity: "Medium",
  },
  {
    id: "8",
    name: "Pilates",
    duration: "45 min",
    date: "Sep 20",
    calories: "200",
    type: "Flexibility",
    intensity: "Low",
  },
];

export function ActivitiesTable() {
  const [activities, setActivities] =
    useState<ActivityRecord[]>(demoActivities);

  return (
    <DataTable
      columns={columns}
      data={activities}
      searchColumn="name"
      filterPlaceholder="Search activities..."
    />
  );
}
