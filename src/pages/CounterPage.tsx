import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { increment, decrement, reset } from "../store/counterSlice";

export default function CounterPage() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Счётчик (Redux)</h2>
            <h3>Пример actions: increment / decrement / reset</h3>
            <div className="counter-block">
                <button className="btn btn-secondary" onClick={() => dispatch(decrement())}>−</button>
                <span className="counter-value">{count}</span>
                <button className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
            </div>
            <button className="btn btn-secondary" style={{ marginTop: "1rem" }} onClick={() => dispatch(reset())}>
                Сбросить
            </button>
        </>
    );
}
