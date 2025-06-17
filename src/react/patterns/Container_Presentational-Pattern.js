// 1. Container/Presentational Pattern
// Overview:
// The Container/Presentational pattern splits your components into two types: Container components handle logic (data fetching, state management), while Presentational components focus on UI (how things look). This separation makes your code easier to reuse and test.

// Example:
// Imagine you’re building a user list app.

// UserListContainer.jsx (Container Component)
import React, { useState, useEffect } from 'react';
import UserList from './UserList';

function UserListContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return <UserList users={users} />;
}

// UserList.jsx (Presentational Component)
import React from 'react';

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
// Explanation:
// UserListContainer fetches data and manages state. It doesn’t care about how the list looks.
// UserList takes the users prop and renders it. It’s reusable and doesn’t know where the data comes from.
// Tradeoffs:
// ✅ Separation of concerns — Easier to maintain and test.
// ✅ Reusability — Presentational components can be reused.
// ❌ Boilerplate — Can lead to extra files and complexity for small apps. You might end up with too many components.
