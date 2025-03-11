"use client";

import { useState, useEffect } from "react";
import { Bell, Search, Moon, Sun, Settings, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { DashboardSwitcher } from "./dashboard-switcher";
import { SettingsDialog } from "@/features/settings";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "../../../../../supabase/client";

interface DashboardHeaderProps {
  title: string;
  user: any;
}

export function DashboardHeader({ title, user }: DashboardHeaderProps) {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(3);
  const { toast } = useToast();
  const supabase = createClient();
  const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
      variant: "default",
    });
  };

  const handleMarkAllAsRead = () => {
    setNotifications(0);
    toast({
      title: "Notifications cleared",
      description: "All notifications have been marked as read.",
      variant: "success",
    });
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold hidden md:block">{title}</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 rounded-full bg-background pl-8 md:w-80 lg:w-96"
            />
          </div>

          {/* Theme toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === "dark" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="h-4 w-4 mr-2" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="h-4 w-4 mr-2" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setSettingsDialogOpen(true)}>
                <Palette className="h-4 w-4 mr-2" />
                Customize UI
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {notifications}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-medium">Notifications</h3>
                <Button variant="ghost" size="sm" onClick={handleMarkAllAsRead}>
                  Mark all as read
                </Button>
              </div>
              <div className="py-2">
                {notifications > 0 ? (
                  <>
                    <DropdownMenuItem className="p-4 cursor-pointer">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">
                          New dashboard available
                        </p>
                        <p className="text-xs text-muted-foreground">
                          The Finance dashboard is now available
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          2 hours ago
                        </p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-4 cursor-pointer">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">AI insights ready</p>
                        <p className="text-xs text-muted-foreground">
                          New AI-powered insights are available for your data
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Yesterday
                        </p>
                      </div>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <div className="p-4 text-center text-muted-foreground text-sm">
                    No new notifications
                  </div>
                )}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings */}
          <SettingsDialog
            trigger={
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            }
          />

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id || "user123"}`}
                    alt={user?.email || "User"}
                  />
                  <AvatarFallback>
                    {user?.email?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="px-2 py-1.5 text-sm font-medium">
                {user?.email}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="h-4 w-4 mr-2" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSettingsDialogOpen(true)}>
                <Palette className="h-4 w-4 mr-2" />
                UI Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Settings Dialog (controlled version) */}
      <SettingsDialog trigger={null} />
    </header>
  );
}
