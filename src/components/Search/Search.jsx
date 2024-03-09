/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./Search.module.css";
import React, { useRef } from "react";

export function Search(props) {
    const inputRef = useRef(null);

    function handleClick() {
      const inputValue = inputRef.current.value;
      props.onSearch(inputValue);
    }

    function handleKeyPress(event) {
      if (event.key === "Enter") {
        handleClick();
      }
    }
  
    return (
      <div className={styles.search}>
        <input type="text" ref={inputRef} className={styles.searchBar} placeholder="Insertar búsqueda" onKeyPress={handleKeyPress} />
        <button onClick={handleClick} className={styles.button}>🔍︎</button>
      </div>
    );
}