"use client";

import {
  ChevronsUpDown,
  Keyboard,
  LogOut,
  HelpCircle,
  MessageSquare,
  Bell,
  Lock,
  User as UserIcon,
  Settings,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { USER_MENU_ITEMS, User } from "./config";

// Map icon names to actual components
const getIconByName = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    HelpCircle: <HelpCircle className="mr-2 h-4 w-4" />,
    MessageSquare: <MessageSquare className="mr-2 h-4 w-4" />,
    Bell: <Bell className="mr-2 h-4 w-4" />,
    Lock: <Lock className="mr-2 h-4 w-4" />,
    User: <UserIcon className="mr-2 h-4 w-4" />,
    Settings: <Settings className="mr-2 h-4 w-4" />,
  };
  return iconMap[iconName] || null;
};

interface NavUserProps {
  user?: User;
}

export function NavUser({ user }: NavUserProps) {
  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Initialize media query on client side only
  useEffect(() => {
    // Check for mobile view
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsMobile(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const handleDropdownChange = (open: boolean) => {
    setDropdownOpen(open);
  };

  // Mock utility functions
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  const showKeyboardShortcuts = () => {
    toast({
      title: "Keyboard Shortcuts",
      description: "Press ? to view keyboard shortcuts",
    });
  };

  // Default user if none provided
  const defaultUser = {
    name: "User",
    email: "user@example.com",
  };

  const displayUser = user || defaultUser;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu open={dropdownOpen} onOpenChange={handleDropdownChange}>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={displayUser?.avatar ?? ""}
                  alt={displayUser?.name ?? "User"}
                />
                <AvatarFallback className="rounded-lg">
                  {displayUser?.name
                    ? displayUser.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    : "U"}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {displayUser?.name ?? "User"}
                </span>
                <span className="truncate text-xs">
                  {displayUser?.email ?? ""}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto h-4 w-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={displayUser?.avatar ?? ""}
                    alt={displayUser?.name ?? "User"}
                  />
                  <AvatarFallback className="rounded-lg">
                    {displayUser?.name
                      ? displayUser.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      : "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {displayUser?.name ?? "User"}
                  </span>
                  <span className="truncate text-xs">
                    {displayUser?.email ?? ""}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {USER_MENU_ITEMS.map(({ type, iconName, label, shortcut }) => (
                <DropdownMenuItem key={type}>
                  {getIconByName(iconName)}
                  {label}
                  {shortcut && (
                    <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
                  )}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem onClick={() => showKeyboardShortcuts()}>
                <Keyboard className="mr-2 h-4 w-4" />
                Keyboard shortcuts
                <DropdownMenuShortcut>?</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
