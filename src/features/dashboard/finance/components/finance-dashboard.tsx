import { DashboardCard } from "@/features/dashboard/shared";
import {
  PieChart,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Wallet,
  CreditCard,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinanceDashboardProps {
  user: any;
}

export function FinanceDashboard({ user }: FinanceDashboardProps) {
  return (
    <div className="w-full p-4 md:p-6 space-y-6">
      {/* Summary Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-700 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Financial Overview</h2>
            <p className="mb-4 max-w-2xl">
              Track your finances, investments, and budget all in one place.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="secondary">
              <DollarSign className="h-4 w-4 mr-2" />
              Add Transaction
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Total Balance",
            value: "$24,562.00",
            change: "+2.5%",
            up: true,
            icon: <Wallet className="h-5 w-5 text-green-600" />,
          },
          {
            title: "Monthly Income",
            value: "$8,350.00",
            change: "+4.3%",
            up: true,
            icon: <TrendingUp className="h-5 w-5 text-green-600" />,
          },
          {
            title: "Monthly Expenses",
            value: "$5,240.00",
            change: "-1.2%",
            up: false,
            icon: <TrendingDown className="h-5 w-5 text-red-600" />,
          },
          {
            title: "Savings Rate",
            value: "37.2%",
            change: "+2.1%",
            up: true,
            icon: <PieChart className="h-5 w-5 text-blue-600" />,
          },
        ].map((stat, index) => (
          <DashboardCard key={index} title={stat.title} className="">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div
                  className={`text-sm flex items-center ${stat.up ? "text-green-600" : "text-red-600"}`}
                >
                  {stat.up ? (
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="p-3 rounded-full bg-gray-100">{stat.icon}</div>
            </div>
          </DashboardCard>
        ))}
      </section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          <DashboardCard
            title="Monthly Cash Flow"
            description="Income vs. Expenses"
          >
            <div className="h-64 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Income</span>
                  <span className="text-sm font-medium">Expenses</span>
                  <span className="text-sm font-medium">Savings</span>
                </div>
                <div className="flex h-8 mb-4">
                  <div className="bg-green-500 w-10/25 rounded-l-lg"></div>
                  <div className="bg-red-500 w-6/25"></div>
                  <div className="bg-blue-500 w-9/25 rounded-r-lg"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Income</span>
                    <span className="text-sm ml-auto">$8,350.00 (40%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm">Expenses</span>
                    <span className="text-sm ml-auto">$5,240.00 (24%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">Savings</span>
                    <span className="text-sm ml-auto">$3,110.00 (36%)</span>
                  </div>
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Recent Transactions"
            description="Your latest financial activity"
          >
            <div className="space-y-4">
              {[
                {
                  name: "Grocery Store",
                  amount: "$86.42",
                  date: "Today",
                  category: "Food",
                  type: "expense",
                },
                {
                  name: "Salary Deposit",
                  amount: "$4,250.00",
                  date: "Yesterday",
                  category: "Income",
                  type: "income",
                },
                {
                  name: "Electric Bill",
                  amount: "$124.79",
                  date: "Sep 28",
                  category: "Utilities",
                  type: "expense",
                },
                {
                  name: "Investment Dividend",
                  amount: "$32.50",
                  date: "Sep 27",
                  category: "Investment",
                  type: "income",
                },
                {
                  name: "Restaurant",
                  amount: "$65.30",
                  date: "Sep 25",
                  category: "Dining",
                  type: "expense",
                },
              ].map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-full ${transaction.type === "income" ? "bg-green-100" : "bg-red-100"} mr-3`}
                    >
                      {transaction.type === "income" ? (
                        <TrendingUp
                          className={`h-4 w-4 ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
                        />
                      ) : (
                        <TrendingDown
                          className={`h-4 w-4 ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{transaction.name}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{transaction.date}</span>
                        <span className="mx-1">•</span>
                        <span>{transaction.category}</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`font-medium ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
                  >
                    {transaction.type === "income" ? "+" : "-"}
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          <DashboardCard
            title="Budget Status"
            description="Monthly budget tracking"
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <PieChart className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm font-medium">Overall Budget</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-3xl font-bold">68%</div>
                  <div className="text-sm text-gray-500">$5,240 of $7,700</div>
                </div>
                <div className="text-sm text-green-600">On track</div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "68%" }}
                ></div>
              </div>

              <div className="border-t pt-4 mt-4">
                <h4 className="text-sm font-medium mb-3">Category Breakdown</h4>
                <div className="space-y-3">
                  {[
                    {
                      name: "Housing",
                      spent: "$1,800",
                      budget: "$2,000",
                      percentage: 90,
                    },
                    {
                      name: "Food",
                      spent: "$850",
                      budget: "$1,000",
                      percentage: 85,
                    },
                    {
                      name: "Transportation",
                      spent: "$420",
                      budget: "$600",
                      percentage: 70,
                    },
                    {
                      name: "Entertainment",
                      spent: "$380",
                      budget: "$500",
                      percentage: 76,
                    },
                  ].map((category, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm">
                        <span>{category.name}</span>
                        <span>
                          {category.spent} / {category.budget}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className={`h-1.5 rounded-full ${category.percentage > 90 ? "bg-red-500" : category.percentage > 75 ? "bg-yellow-500" : "bg-green-500"}`}
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Investment Portfolio"
            description="Current investment performance"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Total Value</span>
                <span className="text-lg font-bold">$42,384.72</span>
              </div>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+$1,245.30 (2.94%) this month</span>
              </div>

              <div className="border-t pt-4 mt-2">
                <h4 className="text-sm font-medium mb-3">Asset Allocation</h4>
                <div className="space-y-3">
                  {[
                    {
                      name: "Stocks",
                      value: "$25,430.45",
                      percentage: 60,
                      color: "bg-blue-500",
                    },
                    {
                      name: "Bonds",
                      value: "$8,476.94",
                      percentage: 20,
                      color: "bg-green-500",
                    },
                    {
                      name: "Real Estate",
                      value: "$6,357.71",
                      percentage: 15,
                      color: "bg-yellow-500",
                    },
                    {
                      name: "Cash",
                      value: "$2,119.62",
                      percentage: 5,
                      color: "bg-gray-500",
                    },
                  ].map((asset, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${asset.color} mr-2`}
                      ></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm">{asset.name}</span>
                          <span className="text-sm">{asset.value}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {asset.percentage}% of portfolio
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
