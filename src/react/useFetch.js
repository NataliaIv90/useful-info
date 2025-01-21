import { useState, useEffect } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState < T | null > (null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState < Error | null > (null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;


// usage

const { data, loading, error } = useFetch < User[] > ('/api/users');

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

return <ul>{data?.map(user => <li key={user.id}>{user.name}</li>)}</ul>;