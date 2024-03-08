import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar(){

    return(
        <header>
            <div>
                <h1 className={styles.title}>Game World</h1>
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li>
                        <Link className={styles.Link} to={"/user/profile"}><span>Perfil personal</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={"/search"}><span>Buscador</span></Link>
                    </li>       
                </ul>
            </nav>
        </header>
    );
}