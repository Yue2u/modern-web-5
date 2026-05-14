import { useDispatch } from "react-redux";
import { useTheme } from "../context/ThemeContext";
import { useLoginState } from "../hooks/useLoginState";
import { logout } from "../store/authSlice";

export default function Header() {
    const { dark, toggleTheme } = useTheme();
    const { isLoggedIn, username } = useLoginState();
    const dispatch = useDispatch();

    return (
        <header className="header">
            <span className="header-logo">Modern Web</span>
            <span className="header-subtitle">Лабораторные работы</span>
            <button className="theme-toggle" onClick={toggleTheme}>
                {dark ? "☀ День" : "☾ Ночь"}
            </button>
            {isLoggedIn && (
                <div className="user-profile">
                    <span className="user-name">👤 {username}</span>
                    <button className="btn-logout" onClick={() => dispatch(logout())}>
                        Выйти
                    </button>
                </div>
            )}
        </header>
    );
}
