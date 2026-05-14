import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../store/feedbackSlice";
import { useLoginState } from "../hooks/useLoginState";
import type { RootState } from "../store/store";

type FormData = {
    message: string;
};

export default function FeedbackPage() {
    const dispatch = useDispatch();
    const { username } = useLoginState();
    const reviews = useSelector((state: RootState) => state.feedback.reviews);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit = useCallback(
        (data: FormData) => {
            dispatch(addReview({ author: username, message: data.message }));
            reset();
        },
        [dispatch, username, reset]
    );

    return (
        <>
            <h2>Обратная связь</h2>
            <h3>Оставьте отзыв</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="feedback-form" noValidate>
                <div className="field">
                    <label>Сообщение</label>
                    <textarea
                        {...register("message", {
                            required: "Сообщение не может быть пустым",
                            minLength: { value: 5, message: "Минимум 5 символов" },
                        })}
                        rows={3}
                        placeholder="Напишите ваш отзыв..."
                    />
                    {errors.message && <span className="error">{errors.message.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
            </form>

            <div className="reviews">
                <h3 style={{ margin: "1.5rem 0 .75rem" }}>
                    Отзывы {reviews.length > 0 && `(${reviews.length})`}
                </h3>
                {reviews.length === 0 ? (
                    <p className="no-reviews">Отзывов пока нет.</p>
                ) : (
                    reviews.map((r) => (
                        <div key={r.id} className="review-card">
                            <span className="review-author">{r.author}</span>
                            <p>{r.message}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}
