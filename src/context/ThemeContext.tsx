import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ThemeContextType = {
    dark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    dark: false,
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [dark, setDark] = useState(false);
    const toggleTheme = () => setDark((d) => !d);

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
