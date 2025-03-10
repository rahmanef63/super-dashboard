import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/server";
import {
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Shield,
  Users,
  LayoutDashboard,
  Gauge,
  Briefcase,
  PieChart,
  Heart,
  Settings,
} from "lucide-react";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: plans, error } = await supabase.functions.invoke(
    "supabase-functions-get-plans",
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powerful Dashboard Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered modular dashboard framework adapts to your specific
              needs with specialized views and intelligent insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <LayoutDashboard className="w-6 h-6" />,
                title: "Modular Design",
                description: "Switch between specialized dashboards with ease",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Role-Based Access",
                description: "Control who sees what with granular permissions",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "AI Insights",
                description:
                  "Get intelligent recommendations based on your data",
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Customizable",
                description: "Tailor your dashboard with drag-and-drop widgets",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Specialized Dashboards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from multiple dashboard types designed for specific needs
              or create your own custom view.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Briefcase className="w-10 h-10" />,
                title: "Professional",
                description:
                  "Track projects, tasks, and team performance with comprehensive analytics",
              },
              {
                icon: <PieChart className="w-10 h-10" />,
                title: "Finance",
                description:
                  "Monitor financial metrics, budgets, and investment performance in real-time",
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Health",
                description:
                  "Keep track of wellness goals, activities, and health metrics in one place",
              },
            ].map((dashboard, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6">
                  {dashboard.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {dashboard.title}
                </h3>
                <p className="text-gray-600">{dashboard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Dashboard Types</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Customizable Widgets</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Personalized Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. No hidden fees.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans?.map((item: any) => (
              <PricingCard key={item.id} item={item} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who use our AI-powered dashboard to
            streamline their work and gain valuable insights.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Now
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
