import { Outlet } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import styles from "./HomePage.module.css";
import useClubs from "../../controllers/hooks/clubs";

export default function HomePage() {
  const clubs=useClubs();


  // Verifica si clubs es null o undefined antes de acceder a sus propiedades
  if (!clubs) {
    return <p>Cargando...</p>; // Puedes mostrar un mensaje de carga mientras se obtienen los datos
  }
  
  return (
    <main>  
        <section className={styles.middlebox}>
            <Outlet />
              <h1 className={styles.title}>Game World</h1>
              <h4 className={styles.description}>Descubre tus clubes de videojuegos favoritos</h4>
        </section>
        <section className={styles.cardbox}>
          <Card name={clubs[0].nombre} description={clubs[0].descripcion} games={clubs[0].videojuegos}/>
          <Card name={clubs[1].nombre} description={clubs[1].descripcion} games={clubs[1].videojuegos}/>
          <Card name={clubs[2].nombre} description={clubs[2].descripcion} games={clubs[2].videojuegos}/>
          <Card name={clubs[3].nombre} description={clubs[3].descripcion} games={clubs[3].videojuegos}/>
          <Card name={clubs[4].nombre} description={clubs[4].descripcion} games={clubs[4].videojuegos}/>
        </section>
        
    </main>
  )
}

