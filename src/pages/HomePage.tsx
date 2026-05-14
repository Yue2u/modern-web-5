import { useEffect, useState } from "react";

export default function HomePage() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // useEffect пример: монтирование / размонтирование
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer); // размонтирование
    }, []);

    return (
        <>
            <h2>Главная</h2>
            <h3>Примеры useState и useEffect</h3>
            <p style={{ marginTop: "1rem" }}>
                Текущее время (useEffect + setInterval): <strong>{time}</strong>
            </p>
            <p style={{ marginTop: ".75rem", color: "#555", fontSize: ".9rem" }}>
                useEffect запускается при монтировании и очищает таймер при размонтировании.
            </p>
        </>
    );
}
