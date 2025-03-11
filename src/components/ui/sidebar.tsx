"use client";

import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

interface SidebarContextValue {
  isMobile: boolean;
  isCollapsed: boolean;
  collapsible: "icon" | "full" | false;
  setCollapsible: (collapsible: "icon" | "full" | false) => void;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextValue>(
  {} as SidebarContextValue,
);

export function useSidebar() {
  return useContext(SidebarContext);
}

interface SidebarProviderProps {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
  defaultCollapsible?: "icon" | "full" | false;
}

export function SidebarProvider({
  children,
  defaultCollapsed = false,
  defaultCollapsible = false,
}: SidebarProviderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [collapsible, setCollapsible] = useState<"icon" | "full" | false>(
    defaultCollapsible,
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isMobile,
        isCollapsed,
        collapsible,
        setCollapsible,
        setIsCollapsed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

const sidebarVariants = cva(
  "group/sidebar-wrapper relative flex h-full w-full flex-col overflow-hidden bg-sidebar border-r border-border",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        accent: "bg-muted",
      },
      collapsed: {
        true: "",
        false: "",
      },
      collapsible: {
        icon: "transition-[width] duration-300 ease-in-out data-[collapsed=true]:w-[--sidebar-icon-width] data-[collapsed=false]:w-[--sidebar-width]",
        full: "transition-[width,transform] duration-300 ease-in-out data-[collapsed=true]:w-0 data-[collapsed=true]:translate-x-[-100%] data-[collapsed=false]:w-[--sidebar-width] data-[collapsed=false]:translate-x-0",
        false: "w-[--sidebar-width]",
      },
    },
    defaultVariants: {
      variant: "default",
      collapsed: false,
      collapsible: false,
    },
  },
);

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  collapsible?: "icon" | "full" | false;
}

export function Sidebar({
  className,
  variant,
  collapsible = false,
  ...props
}: SidebarProps) {
  const { isCollapsed, setCollapsible } = useSidebar();

  useEffect(() => {
    setCollapsible(collapsible);
  }, [collapsible, setCollapsible]);

  return (
    <aside
      className={cn(
        sidebarVariants({ variant, collapsed: isCollapsed, collapsible }),
        className,
      )}
      data-collapsed={isCollapsed}
      data-collapsible={collapsible}
      {...props}
    />
  );
}

export function SidebarHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <header className={cn("px-2 py-2", className)} {...props} />;
}

export function SidebarContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-1 flex-col overflow-hidden", className)}
      {...props}
    />
  );
}

export function SidebarFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <footer className={cn("px-2 py-2", className)} {...props} />;
}

export function SidebarRail({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute inset-y-0 right-0 w-[3px] bg-transparent transition-colors duration-300 group-hover/sidebar-wrapper:bg-border",
        className,
      )}
      {...props}
    />
  );
}

export function SidebarGroup({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-2 py-2", className)} {...props} />;
}

export function SidebarGroupLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-4 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function SidebarMenu({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-1", className)} {...props} />;
}

export function SidebarMenuItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative", className)} {...props} />;
}

const sidebarMenuButtonVariants = cva(
  "group/menu-button flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 text-sm font-medium outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
        ghost: "hover:bg-transparent hover:text-accent-foreground",
      },
      size: {
        default: "h-9",
        sm: "h-8",
        lg: "h-10",
      },
      active: {
        true: "bg-accent text-accent-foreground",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      active: false,
    },
  },
);

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean;
  tooltip?: string;
}

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      className,
      variant,
      size,
      active,
      asChild = false,
      tooltip,
      children,
      ...props
    },
    ref,
  ) => {
    const { isCollapsed, collapsible } = useSidebar();

    if (asChild) {
      return (
        <button
          ref={ref}
          className={cn(
            sidebarMenuButtonVariants({ variant, size, active }),
            className,
          )}
          title={isCollapsed && collapsible === "icon" ? tooltip : undefined}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          sidebarMenuButtonVariants({ variant, size, active }),
          className,
        )}
        title={isCollapsed && collapsible === "icon" ? tooltip : undefined}
        {...props}
      >
        {children}
      </button>
    );
  },
);
SidebarMenuButton.displayName = "SidebarMenuButton";

export function SidebarMenuAction({
  className,
  showOnHover = false,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & { showOnHover?: boolean }) {
  return (
    <button
      className={cn(
        "absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground opacity-100 outline-none ring-offset-background transition-opacity hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group-data-[collapsible=icon]/sidebar-wrapper:hidden",
        showOnHover &&
          "opacity-0 group-hover/menu-button:opacity-100 group-focus-within/menu-button:opacity-100",
        className,
      )}
      {...props}
    />
  );
}

export function SidebarMenuSub({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid gap-1 px-6 py-1 group-data-[collapsible=icon]/sidebar-wrapper:px-2",
        className,
      )}
      {...props}
    />
  );
}

export function SidebarMenuSubItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("relative", className)} {...props} />;
}

const sidebarMenuSubButtonVariants = cva(
  "group/sub-button flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
        ghost: "hover:bg-transparent hover:text-accent-foreground",
      },
      active: {
        true: "bg-accent text-accent-foreground",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      active: false,
    },
  },
);

interface SidebarMenuSubButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuSubButtonVariants> {
  asChild?: boolean;
}

export const SidebarMenuSubButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuSubButtonProps
>(
  (
    { className, variant, active, asChild = false, children, ...props },
    ref,
  ) => {
    if (asChild) {
      return (
        <button
          ref={ref}
          className={cn(
            sidebarMenuSubButtonVariants({ variant, active }),
            className,
          )}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          sidebarMenuSubButtonVariants({ variant, active }),
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export function SidebarInset({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isCollapsed, collapsible } = useSidebar();

  return (
    <div
      className={cn(
        "flex h-full flex-1 flex-col overflow-hidden transition-[margin] duration-300 ease-in-out",
        collapsible === "icon" &&
          (isCollapsed ? "ml-[--sidebar-icon-width]" : "ml-[--sidebar-width]"),
        collapsible === "full" && !isCollapsed && "ml-[--sidebar-width]",
        className,
      )}
      {...props}
    />
  );
}

interface SidebarTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SidebarTrigger({
  className,
  children,
  ...props
}: SidebarTriggerProps) {
  const { isCollapsed, setIsCollapsed, collapsible } = useSidebar();

  if (!collapsible) {
    return null;
  }

  return (
    <button
      className={cn(
        "flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground outline-none ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      onClick={() => setIsCollapsed(!isCollapsed)}
      {...props}
    >
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <path d="M9 3v18" />
          <path d="m14 9 3 3-3 3" />
        </svg>
      )}
    </button>
  );
}
