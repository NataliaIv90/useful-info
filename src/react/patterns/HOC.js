// Overview:
// A Higher-Order Component is a function that takes a component and returns a new component with added functionality. It’s like wrapping a gift — your original component gets extra features without changing its code.

// Example:
// Let’s create an HOC that adds loading logic.

// withLoading.jsx (HOC)
import React from 'react';

function withLoading(WrappedComponent) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) return <p>Loading...</p>;
    return <WrappedComponent {...props} />;
  };
}

// UserProfile.jsx (Component using HOC)
import React from 'react';
import withLoading from './withLoading';

function UserProfile({ user }) {
  return <h2>{user.name}</h2>;
}

export default withLoading(UserProfile);

// App.jsx (Usage)
import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => setUser({ name: 'Alice' }), 2000); // Simulate fetch
  }, []);

  return <UserProfile isLoading={!user} user={user} />;
}

// Explanation:
// withLoading takes the UserProfile and adds a loading state check.
// If isLoading is true, it shows “Loading…”; otherwise, it renders UserProfile.
// Tradeoffs:
// ✅ Logic reuse — Avoids repeating code.
// ✅ Composable — Multiple HOCs can be combined.
// ❌ Naming collisions — Props may clash.
// ❌ Complexity — Can make debugging harder.
