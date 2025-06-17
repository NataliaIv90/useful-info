// 5. Provider Pattern
// Overview:
// The Provider pattern uses React’s Context API to share data (like themes or user info) across your app without passing props manually through every level.

// Example:
// Let’s share a theme across components.

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);
// Explanation:
// In this example, we use React Context to provide a theme state that can be accessed anywhere in the component tree. The ThemeProvider component wraps the application and provides the theme state, avoiding prop drilling. The ThemedComponent retrieves the current theme using useContext and allows users to toggle between light and dark modes.

// Tradeoffs:
// ✅ Avoids prop drilling — Cleaner component trees.
// ✅ Centralized state — Good for global data (e.g., theme, auth).
// ❌ Overuse issues — Can make components less reusable.
