export default function Header() {
    return (
        <nav>
            <div className="nav-wrapper header__nav">
                <a href="#" className="brand-logo">
                    React practice
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="#">By Movie</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
