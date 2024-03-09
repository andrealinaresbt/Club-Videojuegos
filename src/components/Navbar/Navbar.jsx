import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HOME_URL, LOGIN_URL, REGISTER_URL, SEARCH_URL, USER_URL } from "../../constants/urls";
import { logout } from "../../firebase/auth-service";
import { useUser } from "../../contexts/UserContext";

export function Navbar(){
    const {user} = useUser();
    console.log(user);
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
                    <Link className={styles.Link} to={SEARCH_URL}><span>Buscador</span></Link>
                    </li>      
                    <li>
                    <Link className={styles.Link} to={HOME_URL}><span>Página Principal</span></Link>
                    </li>      
                    {user&& (
                        <>
                        <li>
                        <Link className={styles.Link} to={USER_URL}><span>Bienvenido, {user.name}</span></Link>
                    </li>
                    <li>
                        <button type= "button" onClick={handleLogout}>Cerrar sesión</button>
                    </li>
                    
                        </>)}
                         

                    {!user && (
                        <>
                    <li>
                    <Link className={styles.Link} to={LOGIN_URL}><span>Iniciar sesión</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={REGISTER_URL}><span>Registrate</span></Link>
                    </li>  
                        </>
)}

                    
                </ul>
            </nav>
        </header>
    );
}