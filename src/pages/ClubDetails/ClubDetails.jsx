import styles from "./ClubDetails.module.css";
import { useLocation } from "react-router-dom";


export default function ClubDetails() {
  const location = useLocation();
  const { name, description, games } = location.state || {};
  console.log(name+'nombre');

  return (
    <main>  
        <section className={styles.middlebox}>
        <h1 className={styles.title}>{name}</h1>
              <div className={styles.info}>
                <div>
                  <h4 className={styles.description}>{description}</h4>
                  <h4 className={styles.description}>Juegos: {games}</h4>
                </div>
                <div className={styles.buttonContainer}>
                  <button className={styles.button}>Unirse</button>
                </div>
              </div>
              
        </section>
        
        
    </main>
  )
}
