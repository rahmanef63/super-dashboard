import { createClient } from "../../../../../supabase/server";
import { redirect } from "next/navigation";
import { SubscriptionCheck } from "@/components/subscription-check";
import { DashboardHeader } from "@/features/dashboard/shared";
import { DashboardCard } from "@/features/dashboard/shared";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/features/dashboard/shared/components/dashboard-skeleton";
import { ExpenseTable } from "@/features/dashboard/finance/components/expense-table";

export default async function ExpenseTrackerPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <SubscriptionCheck>
      <DashboardHeader title="Expense Tracker" user={user} />
      <main className="w-full p-4 md:p-6 space-y-6">
        <section className="bg-gradient-to-r from-green-500 to-emerald-700 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Expense Tracking</h2>
          <p className="mb-4 max-w-2xl">
            Monitor and categorize your expenses. Track spending patterns and
            identify areas for savings.
          </p>
        </section>

        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardCard
            title="Expense History"
            description="Recent expenses across all categories"
          >
            <ExpenseTable />
          </DashboardCard>
        </Suspense>
      </main>
    </SubscriptionCheck>
  );
}
