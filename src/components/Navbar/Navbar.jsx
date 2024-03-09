import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { LOGIN_URL, SEARCH_URL, USER_URL } from "../../constants/urls";
import { logout } from "../../firebase/auth-service";
import { useUserContext } from "../../contexts/UserContext";

export function Navbar(){
    const { user, isLoadingUser } = useUserContext();
    
    const handleLogout = async() =>{
        console.log("saliendo")
        await logout();
    }
    return(
        <header>
            <div>
                <h1 className={styles.title}>Game World</h1>
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    
                    <li>
                        <Link className={styles.Link} to={USER_URL}><span>Perfil personal</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={SEARCH_URL}><span>Buscador</span></Link>
                    </li>       
                    <li>
                    <Link className={styles.Link} to={LOGIN_URL}><span>Log</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={SEARCH_URL}><span>Buscador</span></Link>
                    </li>  

                    
                </ul>
            </nav>
        </header>
    );
}