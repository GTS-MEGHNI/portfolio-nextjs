// noinspection HtmlUnknownAnchorTarget

export function Navbar() {
    return (
        <nav className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 border-b border-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#tech-stack" className="nav-link">Tech Stack</a></li>
                        <li><a href="#projects" className="nav-link">Projects</a></li>
                        <li><a href="#experience" className="nav-link">Experience</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">MM</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#tech-stack" className="nav-link">Tech Stack</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#experience" className="nav-link">Experience</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </div>

            <div className="navbar-end">{/* Optional: theme toggle */}</div>
        </nav>
    );
}