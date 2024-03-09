import { Navbar } from "../../components/Navbar/Navbar";
import { LOGIN_URL } from "../../constants/urls";
import styles from './SignUpPage.module.css';
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <>
    <Navbar/>
      {/*//NOTE - Parte de arriba de la ventana de log in*/}
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Crea una nueva cuenta</h1>
        <p className={styles.welcomeMes}>
          ¡Bienvenido! Por favor ingresa tus datos para crear una cuenta.
        </p>

        {/*SECTION - NAMES*/}
        <div className={styles.inputContainer}>
        <label htmlFor='first_name'>
            <span>Ingresa tu nombre</span>
          </label>
          <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='Ex. Gabriel Brito'
          />
        </div>

        {/*SECTION - USERNAME*/}
        <div className={styles.inputContainer}>
          <label htmlFor='username'>
            <span>Ingresa tu usuario</span>
          </label>
          <input
          type='text'
          name='username'
          id='username'
          placeholder='Ex. andrealinaresb'
          />
        </div>

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

         {/**/} 
        {/*SECTION - FAVORITE VIDEO GAME*/}
      
        {/*ANCHOR - BUTTONS*/}

        <button type= "submit" className={styles.submitBtn}>
          Siguiente
        </button>
        <button type= "button" className={styles.googleBtn}>
          Registrarme con Google
        </button>

        {/*ANCHOR - LINK*/}
        <Link to={LOGIN_URL} className={styles.loginRedirect}>
          ¿Ya estás registrado?{' '}
          <span className={styles.redirectLink}>Inicia sesión</span>
        </Link>

      </form>
    </div>
    </>
  );
  
  
}
