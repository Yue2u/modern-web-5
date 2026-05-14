const links = ["Главная", "О нас", "Контакты"];

export default function Navbar() {
    return (
        <nav className="navbar">
            <span className="navbar-logo">MyApp</span>
            <ul className="navbar-links">
                {links.map((link) => (
                    <li key={link}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
