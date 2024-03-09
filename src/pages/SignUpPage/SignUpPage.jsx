import { HOME_URL, LOGIN_URL, USER_URL } from "../../constants/urls";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth-service";
import styles from "./SignUpPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Selector } from "../../components/Selector/Selector";

export default function SignUpPage() {
  
  const videogames = [
    {
      ID: "1",
      titulo: "The Witcher 3: Wild Hunt",
      genero: "RPG",
      descripcion:
        "Un épico juego de rol de mundo abierto con una trama envolvente y gráficos impresionantes.",
    },
    {
      ID: "2",
      titulo: "Red Dead Redemption 2",
      genero: "Acción/Aventura",
      descripcion:
        "Un juego de vaqueros ambientado en el Salvaje Oeste con una narrativa profunda y un vasto mundo abierto.",
    },
    {
      ID: "3",
      titulo: "The Legend of Zelda: Breath of the Wild",
      genero: "Aventura",
      descripcion:
        "Una aventura épica con un vasto mundo, rompecabezas desafiantes y una historia cautivadora.",
    },
    {
      ID: "4",
      titulo: "Dark Souls III",
      genero: "Acción/RPG",
      descripcion:
        "Un juego desafiante con combates intensos y un mundo oscuro y misterioso.",
    },
    {
      ID: "5",
      titulo: "Super Mario Odyssey",
      genero: "Plataformas",
      descripcion:
        "Una colorida aventura de plataformas con un fontanero saltarín y mundos imaginativos.",
    },
    {
      ID: "6",
      titulo: "Overwatch",
      genero: "FPS",
      descripcion:
        "Un juego de disparos en equipo con héroes únicos y emocionantes partidas.",
    },
    {
      ID: "7",
      titulo: "Minecraft",
      genero: "Sandbox",
      descripcion:
        "Un mundo abierto de construcción y exploración donde puedes crear tus propias aventuras.",
    },
    {
      ID: "8",
      titulo: "Fortnite",
      genero: "Battle Royale",
      descripcion:
        "Un juego de supervivencia en línea con construcción y combates intensos.",
    },
    {
      ID: "9",
      titulo: "FIFA 22",
      genero: "Deportes",
      descripcion:
        "El simulador de fútbol más popular con equipos reales y modos de juego variados.",
    },
    {
      ID: "10",
      titulo: "Call of Duty: Warzone",
      genero: "Battle Royale",
      descripcion:
        "Un juego de disparos en línea con acción frenética y mapas enormes.",
    },
    {
      ID: "11",
      titulo: "Assassin's Creed Valhalla",
      genero: "Acción/Aventura",
      descripcion:
        "Una aventura vikinga con combates, exploración y una historia intrigante.",
    },
    {
      ID: "12",
      titulo: "Cyberpunk 2077",
      genero: "RPG",
      descripcion:
        "Un futuro distópico lleno de tecnología, crimen y decisiones morales.",
    },
    {
      ID: "13",
      titulo: "Among Us",
      genero: "Multijugador",
      descripcion:
        "Un juego de engaño y deducción en el espacio con amigos o desconocidos.",
    },
    {
      ID: "14",
      titulo: "Animal Crossing: New Horizons",
      genero: "Simulación",
      descripcion:
        "Una vida tranquila en una isla paradisíaca con actividades relajantes.",
    },
    {
      ID: "15",
      titulo: "League of Legends",
      genero: "MOBA",
      descripcion:
        "Batallas estratégicas en línea con campeones y habilidades únicas.",
    },
    {
      ID: "16",
      titulo: "Genshin Impact",
      genero: "Acción/RPG",
      descripcion:
        "Un mundo de fantasía con personajes elementales y una jugabilidad cautivadora.",
    },
    {
      ID: "17",
      titulo: "Apex Legends",
      genero: "Battle Royale",
      descripcion:
        "Combates en equipo en un mundo futurista con héroes y habilidades únicas.",
    },
    {
      ID: "18",
      titulo: "World of Warcraft",
      genero: "MMORPG",
      descripcion:
        "Un vasto mundo de fantasía con razas, clases y misiones épicas.",
    },
    {
      ID: "19",
      titulo: "Control",
      genero: "Acción/Aventura",
      descripcion:
        "Explora una agencia secreta y descubre poderes sobrenaturales en este juego intrigante.",
    },
    {
      ID: "20",
      titulo: "Hades",
      genero: "Roguelike",
      descripcion:
        "Embárcate en un viaje al inframundo y desafía a los dioses en este juego de acción y mitología.",
    },
  ];

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    videoGame: 0,
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
        <div className={styles.myDiv + ' ' + styles.selectContainer}>
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
