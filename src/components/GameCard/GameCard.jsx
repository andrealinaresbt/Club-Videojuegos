/* eslint-disable react/prop-types */
import styles from "./GameCard.module.css"

export  function GameCard(props) {
  return (
    <div className={styles.card}>
        <h1 className={styles.title}>{props.title}</h1>
        <h4>Género: {props.genre}</h4>
        <h4>{props.description}</h4>
    </div>
  )
}

