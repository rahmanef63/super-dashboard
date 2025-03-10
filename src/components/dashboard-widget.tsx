import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";

interface DashboardWidgetProps {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export default function DashboardWidget({
  title,
  description,
  className,
  children,
}: DashboardWidgetProps) {
  return (
    <Card className={cn("h-full overflow-hidden", className)}>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="p-4 pt-2">{children}</CardContent>
    </Card>
  );
}
