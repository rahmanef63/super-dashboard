import { DashboardStats, DashboardWidget } from "../types/dashboard-types";

/**
 * Format a number as currency
 */
export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Format a number with commas
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

/**
 * Calculate percentage change between two values
 */
export function calculatePercentageChange(
  current: number,
  previous: number,
): number {
  if (previous === 0) return current > 0 ? 100 : 0;
  return ((current - previous) / previous) * 100;
}

/**
 * Format a percentage value
 */
export function formatPercentage(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Get a color class based on a value's trend (positive/negative)
 */
export function getTrendColor(value: number): string {
  if (value > 0) return "text-green-600";
  if (value < 0) return "text-red-600";
  return "text-gray-600";
}

/**
 * Sort widgets by position
 */
export function sortWidgetsByPosition(
  widgets: DashboardWidget[],
): DashboardWidget[] {
  return [...widgets].sort((a, b) => {
    if (a.position.y === b.position.y) {
      return a.position.x - b.position.x;
    }
    return a.position.y - b.position.y;
  });
}

/**
 * Group stats by category
 */
export function groupStatsByCategory(
  stats: DashboardStats[],
  categoryKey: string,
): Record<string, DashboardStats[]> {
  return stats.reduce(
    (acc, stat) => {
      const category = (stat as any)[categoryKey] || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(stat);
      return acc;
    },
    {} as Record<string, DashboardStats[]>,
  );
}
