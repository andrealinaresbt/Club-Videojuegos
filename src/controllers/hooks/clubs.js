import { useEffect, useState } from "react";
import { getClubs } from "../readDB";
export default function useClubs(){
    const[club, setClub]= useState([]);
    const [clubs, setClubs]= useState(null);

    useEffect(()=> {
        const load= async ()=>{
            const clubs=await getClubs();
            setClubs(clubs)
        };
        load();
    }, []);
    return clubs;
}
        

