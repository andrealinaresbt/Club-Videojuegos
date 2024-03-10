import { HOME_URL, LOGIN_URL, USER_URL } from "../../constants/urls";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth-service";
import styles from "./SignUpPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Selector } from "../../components/Selector/Selector";
import useGames from "../../controllers/hooks/games";

export default function SignUpPage() {
  const videogames = useGames();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    videoGame: 0,
    membresias: [],
  });
  const handleSignWithGoogle = async () => {
    await signInWithGoogle();
    navigate(HOME_URL);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { email, password, ...extraData } = formData;
    registerWithEmailAndPassword(email, password, extraData);
    navigate(HOME_URL);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Crea una nueva cuenta</h1>
        <p className={styles.welcomeMes}>
          ¡Bienvenido! Por favor ingresa tus datos para crear una cuenta.
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

        {/*SECTION - USERNAME*/}
        <div className={styles.inputContainer}>
          <label htmlFor="username">
            <span>Ingresa tu usuario</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Ex. andrealinaresb"
            onChange={handleOnChange}
          />
        </div>

        {/*SECTION - EMAIL*/}
        <div className={styles.inputContainer}>
          <label htmlFor="email">
            <span>Ingresa tu email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ex. jolly@gmail.com"
            onChange={handleOnChange}
          />
        </div>

        {/*SECTION - PASSWORD*/}
        <div className={styles.inputContainer}>
          <label htmlFor="email">
            <span>Ingresa tu contraseña</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*************"
            onChange={handleOnChange}
          />
        </div>

        {/**/}
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
          Siguiente
        </button>
        <button
          type="button"
          className={styles.googleBtn}
          onClick={handleSignWithGoogle}
        >
          Registrarme con Google
        </button>

        {/*ANCHOR - LINK*/}
        <Link to={LOGIN_URL} className={styles.loginRedirect}>
          ¿Ya estás registrado?{" "}
          <span className={styles.redirectLink}>Inicia sesión</span>
        </Link>
      </form>
    </div>
  );
}