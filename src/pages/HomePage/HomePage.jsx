import { Outlet } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main>
        
        <section className={styles.middlebox}>
            <Outlet />
              <h1 className={styles.title}>Game World</h1>
              <h4 className={styles.description}>Descubre tus clubes de videojuegos favoritos</h4>
        </section>
        <section className={styles.cardbox}>
          <Card name="Club de Aventureros" description="Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura." games="The Witcher 3: Wild Hunt, The Legend of Zelda: Breath of the Wild, Assassin's Creed Valhalla"/>
          <Card name="Club de Estrategia" description="Reúnete con estrategas brillantes para debatir tácticas, resolver enigmas y conquistar mundos virtuales." games="Dark Souls III, League of Legends, Genshin Impact"/>
          <Card name="Club de Constructores" description="Comparte tus creaciones en Minecraft, diseña estructuras asombrosas y colabora en proyectos épicos." games="Minecraft, Fortnite, Animal Crossing: New Horizons"/>
          <Card name="Club de Fútbol Virtual" description="Forma parte de un equipo virtual, compite en torneos y demuestra tus habilidades en FIFA 22." games="FIFA 22, Call of Duty: Warzone, World of Warcraft"/>
          <Card name="Club de Cazadores de Zombis" description="Únete a otros supervivientes en la lucha contra hordas de no muertos en juegos como Left 4 Dead o Resident Evil." games="Red Dead Redemption 2, Among Us, Apex Legends"/>

        </section>
        
    </main>
  )
}

