import styles from "./Footer.module.css"

export  function Footer() {
  return (
    <div className={styles.container}>
      <div>
          <p className={styles.direccion}>Contacto</p>
          <p className={styles.descripcion}>+58 123-5678</p>
          <p className={styles.descripcion}>gameworld@gmail.com</p>
      </div>
      <div>
          <p className={styles.copyright}>Copyright © 2024</p>
          <p className={styles.copyright}>Todos los derechos reservados.</p>
      </div>
      <div>
          <p className={styles.direccion} >Dirección</p>
          <p className={styles.descripcion} > Caracas </p>
          <p className={styles.descripcion} >1060, Miranda, Venezuela</p>
      </div>

    </div>
  )
}
