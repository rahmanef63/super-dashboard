import { useState, useEffect } from "react";

type DataState<T> = {
  data: T[] | null;
  isLoading: boolean;
  error: Error | null;
};

export function useDashboardData<T>(
  fetchFn: () => Promise<T[]>,
  initialData: T[] = [],
) {
  const [state, setState] = useState<DataState<T>>({
    data: initialData,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setState((prev) => ({ ...prev, isLoading: true }));
        const data = await fetchFn();

        if (isMounted) {
          setState({
            data,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            isLoading: false,
            error: error instanceof Error ? error : new Error(String(error)),
          });
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [fetchFn]);

  const refresh = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      const data = await fetchFn();
      setState({
        data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error instanceof Error ? error : new Error(String(error)),
      });
    }
  };

  return { ...state, refresh };
}
