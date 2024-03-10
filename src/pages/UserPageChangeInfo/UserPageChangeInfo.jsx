import { useNavigate } from "react-router-dom";
import styles from './UserPageChangeInfo.module.css';
import { Selector } from "../../components/Selector/Selector";
import useGames from "../../controllers/hooks/games";
import { useUser } from "../../contexts/UserContext";
import { useState } from "react";
import { doc, getDoc,  updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { USER_URL } from "../../constants/urls";

export default function UserPageChangeInfo() {
  

  const {user} = useUser();
  const [updatedUser, setUpdatedUser] = useState(null);
  
  
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        videoGame: 0,
        membresias: [],
      });
     
  const videogames = useGames();
  const navigate = useNavigate();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();

    const { name, videoGame, ...extraData } = formData;
  
    const userRef = doc(db, "users", user.id);
  
    try {
      // Update specific fields of the user document while preserving existing values
      await updateDoc(userRef, {
        name: name,
        videoGame: videoGame,
        ...extraData,
      });
      console.log("User data updated successfully!");
  
      // Retrieve the updated user data
      const updatedUserSnapshot = await getDoc(userRef);
      const updatedUser = updatedUserSnapshot.data();
      console.log(updatedUser);

      navigate(USER_URL);
      
      location.reload();
  
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };
  
  
  return (
    <div>
    <div className={styles.userCard}>
      <div className={styles.textCardInfo}>
        <h1 className={styles.title}>INFORMACIÓN ACTUAL</h1>
        <div className={styles.text}>
          <p>Nombre: {updatedUser ? updatedUser.name : user.name}</p>
          <p>Email: {updatedUser ? updatedUser.email : user.email}</p>
          <p>Membresias: {updatedUser ? updatedUser.membresias : user.membresias}</p>
          <p>Juego favorito: {updatedUser ? updatedUser.videoGame : user.videoGame}</p>
        </div>
      </div>
    
    

  
    
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Edita tu información</h1>
        <p className={styles.welcomeMes}>
           Por favor ingresa tus datos a modificar.
        </p>

        {/*SECTION - NAMES*/}
        <div className={styles.inputContainer}>
          <label htmlFor="first_name">
            <span>Ingresa tu nombre</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ex. Gabriel Brito"
            onChange={handleOnChange}
          />
        </div>

        {/*SECTION - FAVORITE VIDEO GAME*/}
        <div className={styles.myDiv + " " + styles.selectContainer}>
          <label htmlFor="videoGame">
            <span>Escoge tu juego favorito</span>
          </label>
          <Selector
            className={styles.bigSelect}
            label=""
            options={videogames}
            changeValue={(event) => {
              handleOnChange({
                target: { name: "videoGame", value: event.target.value },
              });
            }}
            />
        </div>

        {/*ANCHOR - BUTTONS*/}

        <button type="submit" className={styles.submitBtn} onClick={onSubmit}>
          Guardar
        </button>

      </form>
    </div>
    </div>
            </div>
)}