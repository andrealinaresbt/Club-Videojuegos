/* eslint-disable react/prop-types */
import styles from "./GameCard.module.css"

export  function GameCard(props) {
  return (
    <div className={styles.card}>
        <h1 className={styles.title}>{props.title}</h1>
        <h5>Género: {props.genre}</h5>
        <h4>{props.description}</h4>
        <button className={styles.button}>Más información</button>
    </div>
  )
}