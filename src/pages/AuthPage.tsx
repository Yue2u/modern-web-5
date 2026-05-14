import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

type FormData = {
    username: string;
    password: string;
    confirmPassword?: string;
};

export default function AuthPage() {
    const [mode, setMode] = useState<"login" | "register">("login");
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = useCallback(
        (data: FormData) => {
            dispatch(login(data.username));
            reset();
        },
        [dispatch, reset]
    );

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2>{mode === "login" ? "Вход" : "Регистрация"}</h2>

                <div className="auth-tabs">
                    <button
                        className={`auth-tab${mode === "login" ? " active" : ""}`}
                        onClick={() => { setMode("login"); reset(); }}
                    >
                        Войти
                    </button>
                    <button
                        className={`auth-tab${mode === "register" ? " active" : ""}`}
                        onClick={() => { setMode("register"); reset(); }}
                    >
                        Регистрация
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="auth-form" noValidate>
                    <div className="field">
                        <label>Логин</label>
                        <input
                            {...register("username", {
                                required: "Логин обязателен",
                                minLength: { value: 3, message: "Минимум 3 символа" },
                            })}
                            placeholder="Введите логин"
                        />
                        {errors.username && <span className="error">{errors.username.message}</span>}
                    </div>

                    <div className="field">
                        <label>Пароль</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Пароль обязателен",
                                minLength: { value: 4, message: "Минимум 4 символа" },
                            })}
                            placeholder="Введите пароль"
                        />
                        {errors.password && <span className="error">{errors.password.message}</span>}
                    </div>

                    {mode === "register" && (
                        <div className="field">
                            <label>Подтвердите пароль</label>
                            <input
                                type="password"
                                {...register("confirmPassword", {
                                    required: "Подтвердите пароль",
                                    validate: (val) =>
                                        val === watch("password") || "Пароли не совпадают",
                                })}
                                placeholder="Повторите пароль"
                            />
                            {errors.confirmPassword && (
                                <span className="error">{errors.confirmPassword.message}</span>
                            )}
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                        {mode === "login" ? "Войти" : "Зарегистрироваться"}
                    </button>
                </form>
            </div>
        </div>
    );
}
