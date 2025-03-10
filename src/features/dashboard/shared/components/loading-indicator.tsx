import { Loader2 } from "lucide-react";

interface LoadingIndicatorProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export function LoadingIndicator({
  size = "md",
  text = "Loading...",
}: LoadingIndicatorProps) {
  const sizeClass =
    size === "sm" ? "h-4 w-4" : size === "lg" ? "h-8 w-8" : "h-6 w-6";

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Loader2 className={`${sizeClass} animate-spin text-primary mb-2`} />
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
