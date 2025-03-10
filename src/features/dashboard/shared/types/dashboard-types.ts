export interface DashboardUser {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
}

export interface DashboardStats {
  id: string;
  title: string;
  value: string | number;
  change?: string;
  up?: boolean;
  icon?: React.ReactNode;
}

export interface DashboardWidget {
  id: string;
  title: string;
  description?: string;
  type: string;
  size: "small" | "medium" | "large";
  position: { x: number; y: number };
  data?: any;
}

export interface DashboardConfig {
  id: string;
  name: string;
  widgets: DashboardWidget[];
  layout?: any;
  theme?: string;
  createdAt: string;
  updatedAt: string;
}
