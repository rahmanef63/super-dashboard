import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { DashboardCard } from "./dashboard-card";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  up?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export function StatsCard({
  title,
  value,
  change,
  up,
  icon,
  className,
}: StatsCardProps) {
  return (
    <DashboardCard title={title} className={className}>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold">{value}</div>
          {change && (
            <div
              className={`text-sm flex items-center ${up ? "text-green-600" : "text-red-600"}`}
            >
              {up ? (
                <ArrowUpRight className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDownRight className="h-3 w-3 mr-1" />
              )}
              {change}
            </div>
          )}
        </div>
        {icon && <div className="p-3 rounded-full bg-gray-100">{icon}</div>}
      </div>
    </DashboardCard>
  );
}
