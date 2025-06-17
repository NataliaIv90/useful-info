// 4. Hooks Pattern
// Overview:
// Hooks (introduced in React 16.8) let you use state and other React features in functional components. They’re a modern way to handle logic without classes or HOCs.

// Example:
// Let’s create a custom hook for fetching data.

// useFetch.js (Custom Hook)
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// UserCard.jsx (Usage)
import React from 'react';
import { useFetch } from './useFetch';

function UserCard() {
  const { data, loading } = useFetch('https://api.example.com/user/1');

  if (loading) return <p>Loading...</p>;
  return <h2>{data.name}</h2>;
}
// Explanation:
// useFetch encapsulates fetching logic and returns data and loading.
// UserCard uses the hook to display a user’s name.
// Tradeoffs:
// ✅ Simpler components — No class boilerplate.
// ✅ Reusable logic — Custom hooks (e.g., useFetch).
// ❌ Learning curve – Requires understanding closures & dependencies.
