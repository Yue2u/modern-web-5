import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    title?: string;
};

export default function Container({ children, title }: Props) {
    return (
        <div className="container">
            {title && <h2 className="container-title">{title}</h2>}
            {children}
        </div>
    );
}
