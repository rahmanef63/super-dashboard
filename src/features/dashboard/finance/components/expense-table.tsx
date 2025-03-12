"use client";

import { useState } from "react";
import { DataTable } from "@/features/dashboard/shared/components/data-table";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Calendar, Tag } from "lucide-react";

type Expense = {
  id: string;
  description: string;
  amount: string;
  date: string;
  category: string;
  paymentMethod: string;
};

const columns = [
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="flex items-center">
        <div className="p-2 rounded-full bg-red-100 mr-3">
          <TrendingDown className="h-4 w-4 text-red-600" />
        </div>
        <div>
          <p className="font-medium text-sm">{row.getValue("description")}</p>
          <p className="text-xs text-gray-500">{row.getValue("category")}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <div className="font-medium text-red-600">-{row.getValue("amount")}</div>
    ),
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
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="flex items-center">
        <Tag className="h-3.5 w-3.5 mr-1 text-gray-500" />
        <Badge variant="outline">{row.getValue("category")}</Badge>
      </div>
    ),
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
  },
];

const demoExpenses: Expense[] = [
  {
    id: "1",
    description: "Grocery Shopping",
    amount: "$86.42",
    date: "Today",
    category: "Food & Groceries",
    paymentMethod: "Credit Card",
  },
  {
    id: "2",
    description: "Electric Bill",
    amount: "$124.79",
    date: "Yesterday",
    category: "Utilities",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "3",
    description: "Restaurant Dinner",
    amount: "$65.30",
    date: "Sep 28",
    category: "Dining Out",
    paymentMethod: "Credit Card",
  },
  {
    id: "4",
    description: "Gas Station",
    amount: "$45.23",
    date: "Sep 27",
    category: "Transportation",
    paymentMethod: "Debit Card",
  },
  {
    id: "5",
    description: "Internet Bill",
    amount: "$79.99",
    date: "Sep 25",
    category: "Utilities",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "6",
    description: "Clothing Purchase",
    amount: "$120.50",
    date: "Sep 24",
    category: "Shopping",
    paymentMethod: "Credit Card",
  },
  {
    id: "7",
    description: "Movie Tickets",
    amount: "$32.00",
    date: "Sep 22",
    category: "Entertainment",
    paymentMethod: "Debit Card",
  },
  {
    id: "8",
    description: "Pharmacy",
    amount: "$28.75",
    date: "Sep 20",
    category: "Health",
    paymentMethod: "Credit Card",
  },
];

export function ExpenseTable() {
  const [expenses, setExpenses] = useState<Expense[]>(demoExpenses);

  return (
    <DataTable
      columns={columns}
      data={expenses}
      searchColumn="description"
      filterPlaceholder="Search expenses..."
    />
  );
}
