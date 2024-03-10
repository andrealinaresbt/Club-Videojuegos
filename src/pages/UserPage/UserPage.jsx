import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import styles from "./UserPage.module.css";
import { EDIT_INFO } from "../../constants/urls";


export default function UserPage() {
  
  const { user } = useUser();
  const changeInfo = async () => {
    
    navigate(EDIT_INFO);
  };
  
  const navigate = useNavigate();
 
  return (
    <div className={styles.userCard}>
      <div className={styles.textCardInfo}>
        <h1 className={styles.title}>PERFIL DEL USUARIO</h1>
        <div className={styles.text}>
          <p>Nombre: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Membresias: {user.membresias}</p>
          <p>Juego favorito: {user.membresias}</p>
        </div>
        <div>
      <button type="submit" className={styles.submitBtn} onClick={changeInfo} >
          Editar
        </button>
      </div>
      </div>
      <div className={styles.profilePic}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile Picture"
        ></img>
        <Link className="Edit">
          <label>Cambiar foto de perfil</label>
        </Link>
      </div>
      
    </div>
  );
}
