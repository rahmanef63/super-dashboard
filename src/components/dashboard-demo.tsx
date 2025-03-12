import { DashboardHeader } from "@/features/dashboard/shared";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LayoutDashboard,
  Briefcase,
  PieChart,
  Heart,
  Users,
  GraduationCap,
  Bookmark,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll";

export default function DemoDashboard() {
  // Demo user for the header
  const demoUser = {
    id: "demo-user",
    email: "demo@example.com",
    name: "Demo User",
  };

  return (
    <div className="w-full">
      <DashboardHeader title="Demo Dashboard" user={demoUser} />
      <main className="w-full p-4 md:p-6 space-y-12">
        {/* Hero Section */}
        <section
          id="hero"
          className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-6 text-white"
        >
          <h2 className="text-2xl font-bold mb-2">
            Welcome to the Demo Dashboard
          </h2>
          <p className="mb-4 max-w-3xl">
            This is a preview of our AI-powered dashboard. Sign in to access all
            features and personalized content.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/sign-in">
              <Button variant="secondary">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button
                variant="outline"
                className="bg-white/20 hover:bg-white/30 text-white hover:text-white"
              >
                Create Account
              </Button>
            </Link>
            <SmoothScrollLink
              href="#features"
              className="inline-flex items-center px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white"
            >
              Explore Features
            </SmoothScrollLink>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="space-y-6">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Get personalized recommendations and analytics based on your
                  usage patterns and preferences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Multiple Dashboard Types</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Switch between specialized dashboards for different aspects of
                  your life and work.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customizable Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Personalize your experience with themes, layouts, and widget
                  configurations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dashboards Section */}
        <section id="dashboards" className="space-y-6">
          <h2 className="text-2xl font-bold">Available Dashboards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Professional Dashboard",
                description: "Track projects, tasks, and team performance",
                icon: <Briefcase className="h-6 w-6" />,
                color:
                  "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300",
              },
              {
                title: "Finance Dashboard",
                description: "Monitor financial metrics and budgets",
                icon: <PieChart className="h-6 w-6" />,
                color:
                  "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300",
              },
              {
                title: "Health Dashboard",
                description: "Track wellness goals and health metrics",
                icon: <Heart className="h-6 w-6" />,
                color:
                  "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300",
              },
              {
                title: "Family Dashboard",
                description: "Manage family calendar and activities",
                icon: <Users className="h-6 w-6" />,
                color:
                  "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300",
              },
              {
                title: "Study Dashboard",
                description: "Track educational courses and learning",
                icon: <GraduationCap className="h-6 w-6" />,
                color:
                  "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
              },
              {
                title: "Digital Dashboard",
                description: "Manage digital assets and online presence",
                icon: <Globe className="h-6 w-6" />,
                color:
                  "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300",
              },
            ].map((dashboard, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-full ${dashboard.color} mb-2`}>
                      {dashboard.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{dashboard.title}</CardTitle>
                  <CardDescription>{dashboard.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/sign-in">
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-2 hover:bg-muted/50"
                    >
                      Sign in to access
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="space-y-6">
          <h2 className="text-2xl font-bold">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <div className="text-3xl font-bold mt-2">$0</div>
                <CardDescription>
                  Basic features for personal use
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2" /> 3 Dashboard Types
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2" /> Basic Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2" /> Standard Support
                  </li>
                </ul>
                <Button className="w-full mt-4">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="border-blue-500 dark:border-blue-400">
              <CardHeader>
                <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full w-fit mb-2">
                  POPULAR
                </div>
                <CardTitle>Pro</CardTitle>
                <div className="text-3xl font-bold mt-2">$9.99</div>
                <CardDescription>
                  Advanced features for professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2" /> All Dashboard Types
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2" /> Advanced Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2" /> Priority Support
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2" /> AI Insights
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <div className="text-3xl font-bold mt-2">Custom</div>
                <CardDescription>
                  Custom solutions for organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2" /> Custom Dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2" /> Team Management
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2" /> Dedicated Support
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2" /> API Access
                  </li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Sign up today and transform how you manage your personal and
            professional life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" variant="secondary">
                Create Free Account
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white hover:text-white"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 text-green-500 ${className}`}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
