import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { User, UserCircle } from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/demo-dashboard" prefetch className="text-xl font-bold">
          DashboardAI
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            href="/demo-dashboard#features"
            className="text-gray-600 hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            href="/demo-dashboard#dashboards"
            className="text-gray-600 hover:text-gray-900"
          >
            Dashboards
          </Link>
          <Link
            href="/demo-dashboard#pricing"
            className="text-gray-600 hover:text-gray-900"
          >
            Pricing
          </Link>
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Button>Dashboard</Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
              >
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
