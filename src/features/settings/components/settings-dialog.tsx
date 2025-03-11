"use client";

import { useState, useEffect } from "react";
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
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Check,
  Moon,
  Sun,
  Monitor,
  Palette,
  Type,
  Layout,
  Eye,
} from "lucide-react";

interface SettingsDialogProps {
  trigger?: React.ReactNode;
}

type ColorTheme = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
};

type FontSetting = {
  size: number;
  family: string;
  lineHeight: number;
};

type UISettings = {
  notifications: boolean;
  emailAlerts: boolean;
  activitySummary: boolean;
  compactMode: boolean;
  autoSave: boolean;
  showAIInsights: boolean;
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: number;
  fontFamily: string;
  lineHeight: number;
  colorTheme: string;
  customColors: ColorTheme;
  borderRadius: number;
  density: "compact" | "comfortable" | "spacious";
};

const predefinedThemes: Record<string, ColorTheme> = {
  default: {
    name: "Default",
    primary: "hsl(0 0% 9%)",
    secondary: "hsl(0 0% 96.1%)",
    accent: "hsl(0 0% 96.1%)",
    background: "hsl(0 0% 100%)",
  },
  blue: {
    name: "Blue",
    primary: "hsl(221.2 83.2% 53.3%)",
    secondary: "hsl(210 40% 96.1%)",
    accent: "hsl(217.2 91.2% 59.8%)",
    background: "hsl(0 0% 100%)",
  },
  green: {
    name: "Green",
    primary: "hsl(142.1 76.2% 36.3%)",
    secondary: "hsl(138 76.5% 96.7%)",
    accent: "hsl(142.1 70.6% 45.3%)",
    background: "hsl(0 0% 100%)",
  },
  purple: {
    name: "Purple",
    primary: "hsl(262.1 83.3% 57.8%)",
    secondary: "hsl(260 60% 98%)",
    accent: "hsl(263.4 70% 50.4%)",
    background: "hsl(0 0% 100%)",
  },
  orange: {
    name: "Orange",
    primary: "hsl(24.6 95% 53.1%)",
    secondary: "hsl(30 100% 96.5%)",
    accent: "hsl(20 90% 50%)",
    background: "hsl(0 0% 100%)",
  },
};

const fontFamilies = [
  "Inter",
  "System UI",
  "Arial",
  "Helvetica",
  "Georgia",
  "Times New Roman",
  "Courier New",
  "Roboto",
  "Open Sans",
];

export function SettingsDialog({ trigger }: SettingsDialogProps) {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState<UISettings>({
    notifications: true,
    emailAlerts: true,
    activitySummary: true,
    compactMode: false,
    autoSave: true,
    showAIInsights: true,
    reducedMotion: false,
    highContrast: false,
    fontSize: 16,
    fontFamily: "Inter",
    lineHeight: 1.5,
    colorTheme: "default",
    customColors: predefinedThemes.default,
    borderRadius: 0.5,
    density: "comfortable",
  });

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("uiSettings");
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
      } catch (error) {
        console.error("Failed to parse saved settings", error);
      }
    }
  }, []);

  // Apply settings to the document
  useEffect(() => {
    // Apply font size to root element
    document.documentElement.style.setProperty(
      "--font-size-base",
      `${settings.fontSize}px`,
    );
    document.documentElement.style.setProperty(
      "--line-height",
      `${settings.lineHeight}`,
    );
    document.documentElement.style.setProperty(
      "--font-family",
      settings.fontFamily,
    );
    document.documentElement.style.setProperty(
      "--radius",
      `${settings.borderRadius}rem`,
    );

    // Apply density settings
    const densityValues = {
      compact: {
        spacing: "0.5rem",
        padding: "0.5rem",
      },
      comfortable: {
        spacing: "1rem",
        padding: "0.75rem",
      },
      spacious: {
        spacing: "1.5rem",
        padding: "1rem",
      },
    };

    document.documentElement.style.setProperty(
      "--content-spacing",
      densityValues[settings.density].spacing,
    );
    document.documentElement.style.setProperty(
      "--content-padding",
      densityValues[settings.density].padding,
    );

    // Apply reduced motion if enabled
    if (settings.reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }

    // Apply high contrast if enabled
    if (settings.highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [settings]);

  const handleToggle = (key: keyof UISettings) => {
    setSettings((prev) => {
      const newSettings = {
        ...prev,
        [key]: !prev[key as keyof typeof prev],
      };
      localStorage.setItem("uiSettings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  const handleChange = (key: keyof UISettings, value: any) => {
    setSettings((prev) => {
      const newSettings = {
        ...prev,
        [key]: value,
      };
      localStorage.setItem("uiSettings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleColorThemeChange = (themeKey: string) => {
    setSettings((prev) => {
      const newSettings = {
        ...prev,
        colorTheme: themeKey,
        customColors: predefinedThemes[themeKey],
      };
      localStorage.setItem("uiSettings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  const handleSave = () => {
    localStorage.setItem("uiSettings", JSON.stringify(settings));
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">Settings</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto overscroll-contain">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Customize your dashboard experience and preferences.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="general" className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              <span>General</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span>Appearance</span>
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              <span>Typography</span>
            </TabsTrigger>
            <TabsTrigger
              value="accessibility"
              className="flex items-center gap-2"
            >
              <Eye className="h-4 w-4" />
              <span>Accessibility</span>
            </TabsTrigger>
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

            <div className="space-y-2">
              <Label>UI Density</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Control the spacing and padding of UI elements
              </p>
              <RadioGroup
                value={settings.density}
                onValueChange={(value) => handleChange("density", value)}
                className="flex space-x-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="density-compact" />
                  <Label htmlFor="density-compact">Compact</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="comfortable"
                    id="density-comfortable"
                  />
                  <Label htmlFor="density-comfortable">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="spacious" id="density-spacious" />
                  <Label htmlFor="density-spacious">Spacious</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="border-radius">Border Radius</Label>
              <div className="flex items-center space-x-4">
                <Slider
                  id="border-radius"
                  min={0}
                  max={2}
                  step={0.1}
                  value={[settings.borderRadius]}
                  onValueChange={(value) =>
                    handleChange("borderRadius", value[0])
                  }
                  className="flex-1"
                />
                <span className="w-12 text-center">
                  {settings.borderRadius}rem
                </span>
              </div>
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
          <TabsContent value="appearance" className="space-y-6 mt-4">
            <div className="space-y-4">
              <Label>Theme Mode</Label>
              <div className="grid grid-cols-3 gap-4">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  className="flex flex-col items-center justify-center h-24 gap-2"
                  onClick={() => handleThemeChange("light")}
                >
                  <Sun className="h-8 w-8" />
                  <span>Light</span>
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  className="flex flex-col items-center justify-center h-24 gap-2"
                  onClick={() => handleThemeChange("dark")}
                >
                  <Moon className="h-8 w-8" />
                  <span>Dark</span>
                </Button>
                <Button
                  variant={theme === "system" ? "default" : "outline"}
                  className="flex flex-col items-center justify-center h-24 gap-2"
                  onClick={() => handleThemeChange("system")}
                >
                  <Monitor className="h-8 w-8" />
                  <span>System</span>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Color Theme</Label>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(predefinedThemes).map(([key, colorTheme]) => (
                  <Button
                    key={key}
                    variant={
                      settings.colorTheme === key ? "default" : "outline"
                    }
                    className="relative h-24 overflow-hidden"
                    onClick={() => handleColorThemeChange(key)}
                  >
                    <div className="absolute inset-0 flex flex-col">
                      <div
                        className="h-1/2 w-full flex items-center justify-center"
                        style={{
                          backgroundColor: colorTheme.primary,
                          color: "white",
                        }}
                      >
                        Primary
                      </div>
                      <div
                        className="h-1/2 w-full flex items-center justify-center"
                        style={{
                          backgroundColor: colorTheme.secondary,
                          color: "black",
                        }}
                      >
                        Secondary
                      </div>
                    </div>
                    {settings.colorTheme === key && (
                      <div className="absolute top-1 right-1 bg-background rounded-full p-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Custom Colors</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Customize individual color values
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: settings.customColors.primary }}
                    />
                    <Input
                      id="primary-color"
                      value={settings.customColors.primary}
                      onChange={(e) =>
                        handleChange("customColors", {
                          ...settings.customColors,
                          primary: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondary-color">Secondary Color</Label>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{
                        backgroundColor: settings.customColors.secondary,
                      }}
                    />
                    <Input
                      id="secondary-color"
                      value={settings.customColors.secondary}
                      onChange={(e) =>
                        handleChange("customColors", {
                          ...settings.customColors,
                          secondary: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accent-color">Accent Color</Label>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: settings.customColors.accent }}
                    />
                    <Input
                      id="accent-color"
                      value={settings.customColors.accent}
                      onChange={(e) =>
                        handleChange("customColors", {
                          ...settings.customColors,
                          accent: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="background-color">Background Color</Label>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{
                        backgroundColor: settings.customColors.background,
                      }}
                    />
                    <Input
                      id="background-color"
                      value={settings.customColors.background}
                      onChange={(e) =>
                        handleChange("customColors", {
                          ...settings.customColors,
                          background: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Typography Settings */}
          <TabsContent value="typography" className="space-y-6 mt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    id="font-size"
                    min={12}
                    max={24}
                    step={1}
                    value={[settings.fontSize]}
                    onValueChange={(value) =>
                      handleChange("fontSize", value[0])
                    }
                    className="flex-1"
                  />
                  <span className="w-12 text-center">
                    {settings.fontSize}px
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="line-height">Line Height</Label>
                <div className="flex items-center space-x-4">
                  <Slider
                    id="line-height"
                    min={1}
                    max={2}
                    step={0.1}
                    value={[settings.lineHeight]}
                    onValueChange={(value) =>
                      handleChange("lineHeight", value[0])
                    }
                    className="flex-1"
                  />
                  <span className="w-12 text-center">
                    {settings.lineHeight}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="font-family">Font Family</Label>
                <Select
                  value={settings.fontFamily}
                  onValueChange={(value) => handleChange("fontFamily", value)}
                >
                  <SelectTrigger id="font-family">
                    <SelectValue placeholder="Select a font" />
                  </SelectTrigger>
                  <SelectContent>
                    {fontFamilies.map((font) => (
                      <SelectItem key={font} value={font}>
                        <span style={{ fontFamily: font }}>{font}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="p-4 border rounded-md mt-4">
                <h3 className="text-lg font-semibold mb-2">Preview</h3>
                <p
                  className="mb-2"
                  style={{
                    fontSize: `${settings.fontSize}px`,
                    lineHeight: settings.lineHeight,
                    fontFamily: settings.fontFamily,
                  }}
                >
                  This is how your text will appear throughout the dashboard.
                </p>
                <p
                  className="text-sm text-muted-foreground"
                  style={{
                    fontSize: `${settings.fontSize - 2}px`,
                    lineHeight: settings.lineHeight,
                    fontFamily: settings.fontFamily,
                  }}
                >
                  This is smaller text, like descriptions and secondary
                  information.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Accessibility Settings */}
          <TabsContent value="accessibility" className="space-y-4 mt-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="reduced-motion">Reduced Motion</Label>
                <p className="text-sm text-muted-foreground">
                  Minimize animations and transitions
                </p>
              </div>
              <Switch
                id="reduced-motion"
                checked={settings.reducedMotion}
                onCheckedChange={() => handleToggle("reducedMotion")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="high-contrast">High Contrast</Label>
                <p className="text-sm text-muted-foreground">
                  Increase contrast for better readability
                </p>
              </div>
              <Switch
                id="high-contrast"
                checked={settings.highContrast}
                onCheckedChange={() => handleToggle("highContrast")}
              />
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
