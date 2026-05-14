import type { Lab } from "../labs";

type Props = {
    labs: Lab[];
    selected: number;
    onSelect: (id: number) => void;
};

export default function Menu({ labs, selected, onSelect }: Props) {
    return (
        <nav className="menu">
            <p className="menu-title">Лабораторные</p>
            <ul className="menu-list">
                {labs.map((lab) => (
                    <li key={lab.id}>
                        <button
                            className={`menu-item${selected === lab.id ? " active" : ""}`}
                            onClick={() => onSelect(lab.id)}
                        >
                            Лаб. {lab.id} — {lab.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
