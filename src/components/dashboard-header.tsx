"use client";

import { useState } from "react";
import { Bell, Search, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";

interface DashboardHeaderProps {
  title: string;
  user: any;
}

export default function DashboardHeader({ title, user }: DashboardHeaderProps) {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(3);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
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
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

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
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setNotifications(0)}
                >
                  Mark all as read
                </Button>
              </div>
              <div className="py-2">
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
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=user123"
                    alt={user?.email || "User"}
                  />
                  <AvatarFallback>
                    {user?.email?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
