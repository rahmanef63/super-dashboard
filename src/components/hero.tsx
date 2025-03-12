import {
  ArrowUpRight,
  Check,
  LayoutDashboard,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <LayoutDashboard className="w-4 h-4 mr-1" />
                AI-Powered Dashboard Framework
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mx-3">
                Intelligent
              </span>
              Dashboard Solution
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              A modular, AI-enhanced dashboard that adapts to your needs with
              specialized views for professional, finance, health and more. Gain
              valuable insights and customize your experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/demo-dashboard" passHref>
                <Button size="lg" variant="outline" className="text-lg">
                  Try Demo
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link href="/sign-up" passHref>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg"
                >
                  Sign Up Free
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <SmoothScrollLink
                href="#pricing"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
              >
                View Pricing
              </SmoothScrollLink>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Multiple dashboard types</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>AI-powered insights</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Fully customizable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
