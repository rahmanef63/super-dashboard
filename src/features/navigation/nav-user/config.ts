// User configuration for navigation

// Define User type locally since shared/types/global doesn't exist
export interface User {
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  role?: string;
}

// Define menu item type
export type UserMenuType =
  | "help"
  | "messages"
  | "notifications"
  | "privacy"
  | "profile"
  | "settings";

// Menu items configuration
export const USER_MENU_ITEMS = [
  {
    type: "help" as const,
    iconName: "HelpCircle",
    label: "Help & Support",
    shortcut: "⇧⌘H",
  },
  {
    type: "messages" as const,
    iconName: "MessageSquare",
    label: "Messages",
    shortcut: "⇧⌘M",
  },
  {
    type: "notifications" as const,
    iconName: "Bell",
    label: "Notifications",
    shortcut: "⇧⌘N",
  },
  {
    type: "privacy" as const,
    iconName: "Lock",
    label: "Privacy Settings",
    shortcut: "⇧⌘V",
  },
  {
    type: "profile" as const,
    iconName: "User",
    label: "Profile",
    shortcut: "⇧⌘P",
  },
  {
    type: "settings" as const,
    iconName: "Settings",
    label: "Settings",
    shortcut: "⇧⌘S",
  },
];
