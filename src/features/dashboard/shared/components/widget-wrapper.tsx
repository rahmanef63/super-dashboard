import { ReactNode } from "react";
import { DashboardCard } from "./dashboard-card";
import { WidgetErrorBoundary } from "./widget-error-boundary";
import { LoadingIndicator } from "./loading-indicator";
import { ErrorDisplay } from "./error-display";

interface WidgetWrapperProps {
  title: string;
  description?: string;
  isLoading?: boolean;
  error?: Error | null;
  onRetry?: () => void;
  children: ReactNode;
  className?: string;
}

export function WidgetWrapper({
  title,
  description,
  isLoading = false,
  error = null,
  onRetry,
  children,
  className,
}: WidgetWrapperProps) {
  return (
    <DashboardCard
      title={title}
      description={description}
      className={className}
    >
      <WidgetErrorBoundary>
        {isLoading ? (
          <LoadingIndicator />
        ) : error ? (
          <ErrorDisplay
            title="Failed to load data"
            message={error.message}
            onRetry={onRetry}
          />
        ) : (
          children
        )}
      </WidgetErrorBoundary>
    </DashboardCard>
  );
}
