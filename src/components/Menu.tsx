import { NavLink } from "react-router-dom";
import labs from "../labs";

export default function Menu() {
    return (
        <nav className="menu">
            <p className="menu-title">Навигация</p>
            <ul className="menu-list">
                <li>
                    <NavLink to="/" end className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/counter" className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}>
                        Счётчик (Redux)
                    </NavLink>
                </li>
            </ul>

            <p className="menu-title" style={{ marginTop: "1rem" }}>Лабораторные</p>
            <ul className="menu-list">
                {labs.map((lab) => (
                    <li key={lab.id}>
                        <NavLink
                            to={`/lab/${lab.id}`}
                            className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}
                        >
                            Лаб. {lab.id} — {lab.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
