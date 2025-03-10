import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="w-full p-4 md:p-6 space-y-6">
      {/* Header Skeleton */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 animate-pulse">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="space-y-3 w-full max-w-md">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="mt-4 md:mt-0">
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>

      {/* Stats Row Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 animate-pulse"
            >
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <Skeleton className="h-12 w-12 rounded-full" />
              </div>
            </div>
          ))}
      </div>

      {/* Main Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 animate-pulse">
            <div className="space-y-2 mb-4">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-3 w-60" />
            </div>
            <div className="space-y-4">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-16 rounded-full" />
                    </div>
                    <Skeleton className="h-3 w-full mb-3" />
                    <Skeleton className="h-2 w-full rounded-full" />
                    <div className="flex justify-between mt-2">
                      <Skeleton className="h-2 w-12" />
                      <Skeleton className="h-2 w-8" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 animate-pulse">
            <div className="space-y-2 mb-4">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-3 w-48" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <div className="border-t pt-4 mt-4">
                <Skeleton className="h-4 w-28 mb-3" />
                <div className="space-y-3">
                  {Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index}>
                        <div className="flex justify-between">
                          <Skeleton className="h-3 w-20" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                        <Skeleton className="h-2 w-full mt-1 rounded-full" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
