import { Navbar } from "../../components/Navbar/Navbar";
import { REGISTER_URL } from "../../constants/urls";
import styles from './SignInPage.module.css';
import { Link } from "react-router-dom";

export default function SignInPage() {
  return (
    <div>
       {/* //NOTE - Parte de arriba de la ventana de log in*/}
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Inicio de sesión</h1>
        <p className={styles.welcomeMes}>
          ¡Bienvenido! Por favor ingresa tus datos para inicio de sesión.
        </p>


        {/*SECTION - EMAIL*/}
        <div className={styles.inputContainer}>
        <label htmlFor='email'>
            <span>Ingresa tu email</span>
          </label>
          <input
          type='email'
          name='email'
          id='email'
          placeholder='Ex. jolly@gmail.com'
          />
        </div>

        {/*SECTION - PASSWORD*/}
        <div className={styles.inputContainer}>
        <label htmlFor='email'>
            <span>Ingresa tu contraseña</span>
          </label>
          <input
          type='password'
          name='password'
          id='password'
          placeholder='*************'
          />
        </div>

        {/*ANCHOR - BUTTONS*/}

        <button type= "submit" className={styles.submitBtn}>
          Siguiente
        </button>
        <button type= "button" className={styles.googleBtn}>
          Registrarme con Google
        </button>

        {/*ANCHOR - LINK*/}
        <Link to={REGISTER_URL} className={styles.SignUpPageRedirect}>
          ¿No estás registrado?{' '}
          <span className={styles.redirectLink}>Inicia sesión</span>
        </Link>

      </form>
    </div>
  

    </div>
  )
}
