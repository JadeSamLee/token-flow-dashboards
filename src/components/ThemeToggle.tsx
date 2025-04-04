
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-tdp-light-gray/50 hover:bg-tdp-light-gray transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-tdp-yellow" />
      ) : (
        <Moon className="h-5 w-5 text-tdp-dark-gray" />
      )}
    </button>
  );
};

export default ThemeToggle;
