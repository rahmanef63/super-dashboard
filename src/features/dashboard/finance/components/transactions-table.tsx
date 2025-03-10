"use client";

import { useState } from "react";
import { DataTable } from "@/features/dashboard/shared/components/data-table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

type Transaction = {
  id: string;
  name: string;
  amount: string;
  date: string;
  category: string;
  type: "income" | "expense";
  account: string;
};

const columns = [
  {
    accessorKey: "name",
    header: "Description",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <div className="flex items-center">
          <div
            className={`p-2 rounded-full ${type === "income" ? "bg-green-100" : "bg-red-100"} mr-3`}
          >
            {type === "income" ? (
              <TrendingUp
                className={`h-4 w-4 ${type === "income" ? "text-green-600" : "text-red-600"}`}
              />
            ) : (
              <TrendingDown
                className={`h-4 w-4 ${type === "income" ? "text-green-600" : "text-red-600"}`}
              />
            )}
          </div>
          <div>
            <p className="font-medium text-sm">{row.getValue("name")}</p>
            <p className="text-xs text-gray-500">{row.getValue("category")}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <div
          className={`font-medium ${type === "income" ? "text-green-600" : "text-red-600"}`}
        >
          {type === "income" ? "+" : "-"}
          {row.getValue("amount")}
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Badge variant="outline">{row.getValue("category")}</Badge>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <Badge
          className={`${type === "income" ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-red-100 text-red-800 hover:bg-red-100"}`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
      );
    },
  },
  {
    accessorKey: "account",
    header: "Account",
  },
];

const demoTransactions: Transaction[] = [
  {
    id: "1",
    name: "Grocery Store",
    amount: "$86.42",
    date: "Today",
    category: "Food",
    type: "expense",
    account: "Credit Card",
  },
  {
    id: "2",
    name: "Salary Deposit",
    amount: "$4,250.00",
    date: "Yesterday",
    category: "Income",
    type: "income",
    account: "Checking",
  },
  {
    id: "3",
    name: "Electric Bill",
    amount: "$124.79",
    date: "Sep 28",
    category: "Utilities",
    type: "expense",
    account: "Checking",
  },
  {
    id: "4",
    name: "Investment Dividend",
    amount: "$32.50",
    date: "Sep 27",
    category: "Investment",
    type: "income",
    account: "Investment",
  },
  {
    id: "5",
    name: "Restaurant",
    amount: "$65.30",
    date: "Sep 25",
    category: "Dining",
    type: "expense",
    account: "Credit Card",
  },
  {
    id: "6",
    name: "Freelance Payment",
    amount: "$850.00",
    date: "Sep 24",
    category: "Income",
    type: "income",
    account: "Checking",
  },
  {
    id: "7",
    name: "Internet Bill",
    amount: "$79.99",
    date: "Sep 22",
    category: "Utilities",
    type: "expense",
    account: "Checking",
  },
  {
    id: "8",
    name: "Gas Station",
    amount: "$45.23",
    date: "Sep 20",
    category: "Transportation",
    type: "expense",
    account: "Credit Card",
  },
];

export function TransactionsTable() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(demoTransactions);

  return (
    <DataTable
      columns={columns}
      data={transactions}
      searchColumn="name"
      filterPlaceholder="Search transactions..."
    />
  );
}
