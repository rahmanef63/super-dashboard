import { createClient } from "../../supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If user is logged in, redirect to dashboard, otherwise to demo
  if (user) {
    return redirect("/dashboard");
  } else {
    return redirect("/demo-dashboard");
  }
}
