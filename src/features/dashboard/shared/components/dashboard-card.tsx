import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
  headerAction?: React.ReactNode;
}

export function DashboardCard({
  title,
  description,
  className,
  children,
  headerAction,
}: DashboardCardProps) {
  return (
    <Card className={cn("h-full overflow-hidden", className)}>
      <CardHeader className="p-4 pb-2 card-content">
        <div className="flex justify-between items-start">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-medium truncate">
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="truncate">
                {description}
              </CardDescription>
            )}
          </div>
          {headerAction && (
            <div className="ml-4 flex-shrink-0">{headerAction}</div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 card-content overflow-auto">
        {children}
      </CardContent>
    </Card>
  );
}
