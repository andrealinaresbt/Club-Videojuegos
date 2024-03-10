import { useState } from "react";
import { HOME_URL, REGISTER_URL } from "../../constants/urls";
import {
  loginWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth-service";
import styles from "./SignInPage.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignWithGoogle = async () => {
    await signInWithGoogle();
    navigate(HOME_URL);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;
    await loginWithEmailAndPassword(email, password);
    navigate(HOME_URL);
  };
  return (
    <div>
      {/* //NOTE - Parte de arriba de la ventana de log in*/}
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h1 className={styles.title}>Inicio de sesión</h1>
          <p className={styles.welcomeMes}>
            ¡Bienvenido! Por favor ingresa tus datos para inicio de sesión.
          </p>

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

          {/*ANCHOR - BUTTONS*/}

          <button type="submit" className={styles.submitBtn} onClick={onSubmit}>
            Siguiente
          </button>
          <button
            type="button"
            className={styles.googleBtn}
            onClick={handleSignWithGoogle}
          >
            Iniciar sesion con Google
          </button>

          {/*ANCHOR - LINK*/}
          <Link to={REGISTER_URL} className={styles.SignUpPageRedirect}>
            ¿No estás registrado?{" "}
            <span className={styles.redirectLink}>Crear usuario</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
