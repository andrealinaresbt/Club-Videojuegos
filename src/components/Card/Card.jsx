/* eslint-disable react/prop-types */
import styles from "./Card.module.css"

export  function Card(props) {
  return (
    <div className={styles.card}>
        <h1 className={styles.title}>{props.name}</h1>
        <h4>{props.description}</h4>
        <h5>Juegos: {props.games}</h5>
        <button className={styles.button}>Más información</button>
    </div>



  )
}