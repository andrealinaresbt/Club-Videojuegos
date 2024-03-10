import { useEffect, useState } from "react";
import { getGames } from "../readDB";
export default function useGames(){
    const [games, setGames]= useState(null);

    useEffect(()=> {
        const load= async ()=>{
            const games=await getGames();
            setGames(games)
        };
        load();
    }, []);
    return games;
}
  