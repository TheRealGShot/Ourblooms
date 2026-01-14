import { Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css";

function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <p className="display"><Link to="/" className="display">Our Blooms</Link></p>
                <ul className={styles.ul}>
                    <li className="caption1">
                        <Link to="/gallery" className="caption1">GALLERY</Link>
                    </li>
                    <li className="caption1"><Link to="/about" className="caption1">ABOUT</Link></li>
                    <li className="caption1">CONTACT</li>
                </ul>
            </nav>
            <hr />
        </>
    );
}

export default Navbar;