import { useEffect } from "react";
import { useParams } from "react-router-dom";
import labs from "../labs";

export default function LabPage() {
    const { id } = useParams();
    const lab = labs.find((l) => l.id === Number(id));

    // useEffect пример: монтирование и размонтирование
    useEffect(() => {
        document.title = lab ? `Лаб. ${lab.id} — ${lab.title}` : "Лабораторные";
        return () => {
            document.title = "Modern Web";
        };
    }, [lab]);

    if (!lab) return <p>Лабораторная не найдена.</p>;

    return (
        <>
            <h2>Лабораторная работа №{lab.id}</h2>
            <h3>{lab.title}</h3>
            <ul className="task-list">
                {lab.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                ))}
            </ul>
        </>
    );
}
