/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import { Search } from "../../components/Search/Search";
import styles from "./SearchPage.module.css";
import useGames from "../../controllers/hooks/games";
import { GameCard } from "../../components/GameCard/GameCard";
import React, { useState } from "react";


export default function SearchPage() {
  const allGames = useGames();
  const [filteredGames, setFilteredGames] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (inputValue) => {
    setSearched(true);

    if (inputValue.trim() !== "") {
      const filtered = allGames.filter(
        (game) =>
          game.titulo.toLowerCase().includes(inputValue.toLowerCase()) ||
          game.genero.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames([]);
    }
  };

  return (
    <section className={styles.middlebox}>
      <Outlet />
      <h1 className={styles.title}>Buscador de videojuegos</h1>
      <Search onSearch={handleSearch} />
      <section className={styles.cardbox}>
        {searched && filteredGames.length === 0 ? (
          <p className={styles.msg}>No se encontraron juegos.</p>
        ) : (
          filteredGames.map((game, index) => (
            <GameCard
              key={index}
              title={game.titulo}
              genre={game.genero}
              description={game.descripcion}
            />
          ))
        )}
      </section>
    </section>
  );
}

