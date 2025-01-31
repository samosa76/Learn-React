import { Link } from 'react-router-dom';
import style from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={style.container_navbar}>
            <div className={style.nav_logo}>
                <h1>Al Fatih</h1>
            </div>

            <ul className={style.nav_menu}>

                <Link to="/" className={style.link}>
                    <li>Home</li>
                </Link>

                <Link to="/" className={style.link}>
                    <li>News</li>
                </Link>

                <Link to="/" className={style.link}>
                    <li>Unit Pendidikan</li>
                </Link>

                <Link to="/Pendaftaran" className={style.link}>
                    <li>Pendaftaran</li>

                </Link>

                <Link to="/Kerjasama" className={style.link}>
                    <li>Kerjasama</li>
                </Link>

            </ul>

        </nav>
    )
}

export default Navbar;