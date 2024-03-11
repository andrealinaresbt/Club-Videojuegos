import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import styles from "./UserPage.module.css";
import { EDIT_INFO } from "../../constants/urls";
import { getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function UserPage() {
  
  
  const { user } = useUser();
  const [updatedUser, setUpdatedUser] = useState(null);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    videoGame: 0,
    membresias: [],
  });
  console.log(user.videoGame);
  const [filteredGames, setFilteredGames] = useState([]);
  const navigate = useNavigate();

  

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  
    useEffect(() => {
      setFormData({
        name: user.name,
        email: user.email,
        password: "",
        videoGame: user.videoGame,
        membresias: user.membresias,
      });
    }, [user]);
  const changeInfo = async () => {
 
  navigate(EDIT_INFO);
  };
  
  return (
    <div className={styles.userCard}>
      <div className={styles.textCardInfo}>
        <h1 className={styles.title}>PERFIL DEL USUARIO</h1>
        <div className={styles.text}>
        <p>Nombre: {updatedUser ? updatedUser.name : user.name}</p>
          <p>Email: {updatedUser ? updatedUser.email : user.email}</p>
          <p>Membresias: {updatedUser ? updatedUser.membresias : user.membresias}</p>
          <p>ID Juego favorito: {updatedUser ? updatedUser.videoGame : user.videoGame}</p>
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
