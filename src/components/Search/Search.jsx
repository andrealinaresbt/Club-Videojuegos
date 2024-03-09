/* eslint-disable no-unused-vars */
import styles from "./Search.module.css";
import React, { useRef } from "react";

export function Search() {
    const inputRef = useRef(null);

    function handleClick() {
      const inputValue = inputRef.current.value;
      console.log(inputValue);
    }
  
    return (
      <div className={styles.search}>
        <input type="text" ref={inputRef} className={styles.searchBar} placeholder="Insertar búsqueda" />
        <button onClick={handleClick} className={styles.button}>🔍︎</button>
      </div>
    );
}