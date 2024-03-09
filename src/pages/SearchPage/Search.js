const searchGames = (searchTerm, games) => {
    const filteredGames = [];
    for (let i = 0; i < games.length; i++) {
      if (
        games[i].titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        games[i].genero.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        filteredGames.push(games[i]);
      }
    }
    return filteredGames;
  };

  