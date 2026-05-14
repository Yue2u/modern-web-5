import type { Lab } from "../labs";

type Props = { lab: Lab };

export default function Content({ lab }: Props) {
    return (
        <section className="content">
            <h2>Лабораторная работа №{lab.id}</h2>
            <h3>{lab.title}</h3>
            <ul className="task-list">
                {lab.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                ))}
            </ul>
        </section>
    );
}
