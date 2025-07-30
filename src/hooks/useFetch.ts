import { useState, useEffect } from 'react';

type FetchFunction<T, P extends unknown[]> = (...params: P) => Promise<T>;

export const useFetch = <T, P extends unknown[]>(fetchFn: FetchFunction<T, P>, ...params: P) => {
  const [fetchedData, setFetchedData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [prevParams, setPrevParams] = useState<P | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await fetchFn(...params);
        setFetchedData(data);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : 'Failed to fetch data.');
      }

      setIsLoading(false);
    };

    if (JSON.stringify(prevParams) !== JSON.stringify(params)) {
      fetchData();
      setPrevParams(params);
    }
  }, [params]);

  return {
    fetchedData,
    isLoading,
    error,
  };
};
