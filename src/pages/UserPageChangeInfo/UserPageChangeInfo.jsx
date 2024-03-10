import { useNavigate } from "react-router-dom";
import styles from './UserPageChangeInfo.module.css';
import { Selector } from "../../components/Selector/Selector";
import useGames from "../../controllers/hooks/games";
import { useUser } from "../../contexts/UserContext";

export default function UserPageChangeInfo() {
     const {user} = useUser();
  const videogames = useGames();
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    const { email, password, ...extraData } = formData;
    registerWithEmailAndPassword(email, password, extraData);
    navigate(HOME_URL);
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.userCard}>
    <div className={styles.textCardInfo}>
      <h1 className={styles.title}>INFORMACIÓN ACTUAL</h1>
      <div className={styles.text}>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Membresias: {user.membresias}</p>
        <p>Juego favorito: {user.membresias}</p>
      </div>
      <div>
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
)}