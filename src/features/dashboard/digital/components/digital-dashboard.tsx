import { DashboardCard } from "@/features/dashboard/shared";
import {
  Globe,
  Cloud,
  Database,
  Smartphone,
  Laptop,
  BarChart,
  Lock,
  Zap,
  Link,
  FileText,
  Image,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DigitalDashboardProps {
  user: any;
}

export function DigitalDashboard({ user }: DigitalDashboardProps) {
  return (
    <div className="w-full p-4 md:p-6 space-y-6">
      {/* Summary Section */}
      <section className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Digital Workspace</h2>
            <p className="mb-4 max-w-2xl">
              Manage your digital assets, online presence, and technology
              resources.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="secondary">
              <Globe className="h-4 w-4 mr-2" />
              Add Resource
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Cloud Storage",
            value: "68%",
            icon: <Cloud className="h-5 w-5 text-blue-600" />,
          },
          {
            title: "Websites",
            value: "3",
            icon: <Globe className="h-5 w-5 text-violet-600" />,
          },
          {
            title: "Digital Assets",
            value: "248",
            icon: <Database className="h-5 w-5 text-green-600" />,
          },
          {
            title: "Connected Devices",
            value: "5",
            icon: <Smartphone className="h-5 w-5 text-amber-600" />,
          },
        ].map((stat, index) => (
          <DashboardCard key={index} title={stat.title} className="text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 rounded-full bg-gray-100 mb-3">
                {stat.icon}
              </div>
              <span className="text-3xl font-bold">{stat.value}</span>
            </div>
          </DashboardCard>
        ))}
      </section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          <DashboardCard
            title="Websites & Domains"
            description="Your online properties and status"
          >
            <div className="space-y-4">
              {[
                {
                  name: "Personal Portfolio",
                  url: "www.johndoe.com",
                  status: "Online",
                  expiry: "Mar 15, 2024",
                  traffic: "High",
                },
                {
                  name: "Business Website",
                  url: "www.acmecorp.com",
                  status: "Online",
                  expiry: "Jan 10, 2024",
                  traffic: "Medium",
                },
                {
                  name: "Blog",
                  url: "www.techthoughts.blog",
                  status: "Maintenance",
                  expiry: "Nov 22, 2023",
                  traffic: "Low",
                },
              ].map((website, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{website.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        website.status === "Online"
                          ? "bg-green-100 text-green-800"
                          : website.status === "Maintenance"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {website.status}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Globe className="h-4 w-4 mr-1" />
                    {website.url}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Domain Expiry: {website.expiry}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full ${
                        website.traffic === "High"
                          ? "bg-blue-100 text-blue-800"
                          : website.traffic === "Medium"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {website.traffic} Traffic
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Digital Assets"
            description="Your files, images, and documents"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium">Recent Files</h4>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              {[
                {
                  name: "Project Proposal.pdf",
                  type: "Document",
                  size: "2.4 MB",
                  modified: "Today",
                  icon: <FileText className="h-4 w-4 text-blue-600" />,
                },
                {
                  name: "Website Mockup.psd",
                  type: "Image",
                  size: "18.7 MB",
                  modified: "Yesterday",
                  icon: <Image className="h-4 w-4 text-purple-600" />,
                },
                {
                  name: "Analytics Report.xlsx",
                  type: "Spreadsheet",
                  size: "1.2 MB",
                  modified: "Oct 10, 2023",
                  icon: <BarChart className="h-4 w-4 text-green-600" />,
                },
                {
                  name: "App Source Code.zip",
                  type: "Archive",
                  size: "45.3 MB",
                  modified: "Oct 8, 2023",
                  icon: <Code className="h-4 w-4 text-gray-600" />,
                },
                {
                  name: "Client Presentation.pptx",
                  type: "Presentation",
                  size: "8.5 MB",
                  modified: "Oct 5, 2023",
                  icon: <FileText className="h-4 w-4 text-amber-600" />,
                },
              ].map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-gray-100 mr-3">
                      {file.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{file.name}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{file.type}</span>
                        <span className="mx-1">•</span>
                        <span>{file.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Modified: {file.modified}
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          <DashboardCard
            title="Storage Usage"
            description="Cloud storage allocation"
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <Cloud className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium">Total Storage</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-3xl font-bold">68%</div>
                  <div className="text-sm text-gray-500">13.6 GB of 20 GB</div>
                </div>
                <Button variant="outline" size="sm">
                  Upgrade
                </Button>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "68%" }}
                ></div>
              </div>

              <div className="border-t pt-4 mt-4">
                <h4 className="text-sm font-medium mb-3">By File Type</h4>
                <div className="space-y-3">
                  {[
                    {
                      name: "Images",
                      size: "5.2 GB",
                      percentage: 38,
                      color: "bg-purple-500",
                    },
                    {
                      name: "Documents",
                      size: "3.8 GB",
                      percentage: 28,
                      color: "bg-blue-500",
                    },
                    {
                      name: "Videos",
                      size: "2.7 GB",
                      percentage: 20,
                      color: "bg-green-500",
                    },
                    {
                      name: "Other",
                      size: "1.9 GB",
                      percentage: 14,
                      color: "bg-gray-500",
                    },
                  ].map((type, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm">
                        <span>{type.name}</span>
                        <span>{type.size}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className={`h-1.5 rounded-full ${type.color}`}
                          style={{ width: `${type.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 text-right">
                        {type.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard
            title="Connected Devices"
            description="Your linked technology"
          >
            <div className="space-y-3">
              {[
                {
                  name: "MacBook Pro",
                  type: "Laptop",
                  lastActive: "Now",
                  status: "Active",
                  icon: <Laptop className="h-4 w-4 text-gray-600" />,
                },
                {
                  name: "iPhone 13",
                  type: "Smartphone",
                  lastActive: "5 min ago",
                  status: "Active",
                  icon: <Smartphone className="h-4 w-4 text-gray-600" />,
                },
                {
                  name: "iPad Pro",
                  type: "Tablet",
                  lastActive: "3 hours ago",
                  status: "Inactive",
                  icon: <Smartphone className="h-4 w-4 text-gray-600" />,
                },
                {
                  name: "Home Desktop",
                  type: "Desktop",
                  lastActive: "2 days ago",
                  status: "Inactive",
                  icon: <Laptop className="h-4 w-4 text-gray-600" />,
                },
                {
                  name: "Android Tablet",
                  type: "Tablet",
                  lastActive: "1 week ago",
                  status: "Inactive",
                  icon: <Smartphone className="h-4 w-4 text-gray-600" />,
                },
              ].map((device, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-gray-100 mr-3">
                      {device.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{device.name}</p>
                      <div className="text-xs text-gray-500">{device.type}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        device.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {device.status}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      {device.lastActive}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Security Status"
            description="Digital security overview"
          >
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center mb-2">
                  <Lock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-800">
                    Security Status: Good
                  </span>
                </div>
                <p className="text-sm text-green-700">
                  Your digital security is in good standing. Continue to monitor
                  your accounts and update passwords regularly.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 text-amber-600 mr-2" />
                    <span className="text-sm">Password Health</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    Attention Needed
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Lock className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm">Two-Factor Auth</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                    Enabled
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Link className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm">Connected Apps</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                    12 Active
                  </span>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}
