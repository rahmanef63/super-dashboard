import { createClient } from "../../supabase/server";
import { redirect } from "next/navigation";
import Hero from "@/components/hero";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If user is logged in, redirect to dashboard, otherwise show marketing page
  if (user) {
    return redirect("/dashboard/default");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      {/* Add more marketing sections here */}
    </div>
  );
}
