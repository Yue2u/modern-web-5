import { useTheme } from "../context/ThemeContext";

export default function Header() {
    const { dark, toggleTheme } = useTheme();

    return (
        <header className="header">
            <span className="header-logo">Modern Web</span>
            <span className="header-subtitle">Лабораторные работы</span>
            <button className="theme-toggle" onClick={toggleTheme}>
                {dark ? "☀ День" : "☾ Ночь"}
            </button>
        </header>
    );
}
