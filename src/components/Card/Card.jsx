/* eslint-disable react/prop-types */
import styles from "./Card.module.css"
import { useNavigate } from "react-router-dom";
import { CLUB_URL } from "../../constants/urls";

export  function Card(props) {
  const { name, description, games } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(CLUB_URL, {
      state: {
        name,
        description,
        games,
      },
    });
  };

  return (
    <div className={styles.card}>
        <h1 className={styles.title}>{props.name}</h1>
        <h4>{props.description}</h4>
        <h5>Juegos: {props.games}</h5>
        <div className={styles.buttons}>
          <button onClick={handleClick} className={styles.button}>
            Más información
          </button>
          <button className={styles.button}>Unirse</button>
        </div>      
    </div>
  )
}