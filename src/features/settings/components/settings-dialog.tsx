"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";

interface SettingsDialogProps {
  trigger?: React.ReactNode;
}

export function SettingsDialog({ trigger }: SettingsDialogProps) {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    activitySummary: true,
    compactMode: false,
    autoSave: true,
    showAIInsights: true,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">Settings</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Customize your dashboard experience and preferences.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="general" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="compact-mode">Compact Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Display more content with less spacing
                </p>
              </div>
              <Switch
                id="compact-mode"
                checked={settings.compactMode}
                onCheckedChange={() => handleToggle("compactMode")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-save">Auto Save</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically save changes as you work
                </p>
              </div>
              <Switch
                id="auto-save"
                checked={settings.autoSave}
                onCheckedChange={() => handleToggle("autoSave")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="ai-insights">AI Insights</Label>
                <p className="text-sm text-muted-foreground">
                  Show AI-powered recommendations and insights
                </p>
              </div>
              <Switch
                id="ai-insights"
                checked={settings.showAIInsights}
                onCheckedChange={() => handleToggle("showAIInsights")}
              />
            </div>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications in the dashboard
                </p>
              </div>
              <Switch
                id="notifications"
                checked={settings.notifications}
                onCheckedChange={() => handleToggle("notifications")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-alerts">Email Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Receive important updates via email
                </p>
              </div>
              <Switch
                id="email-alerts"
                checked={settings.emailAlerts}
                onCheckedChange={() => handleToggle("emailAlerts")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="activity-summary">Weekly Summary</Label>
                <p className="text-sm text-muted-foreground">
                  Receive a weekly summary of your activity
                </p>
              </div>
              <Switch
                id="activity-summary"
                checked={settings.activitySummary}
                onCheckedChange={() => handleToggle("activitySummary")}
              />
            </div>
          </TabsContent>

          {/* Appearance Settings */}
          <TabsContent value="appearance" className="space-y-4 mt-4">
            <div>
              <Label htmlFor="theme">Theme</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setTheme("light")}
                >
                  Light
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </Button>
                <Button
                  variant={theme === "system" ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setTheme("system")}
                >
                  System
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
