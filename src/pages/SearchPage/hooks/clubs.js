import { useEffect, useState } from "react";
import { getClubs } from "../../../controllers/readDB";
export default function useClubs(){
    const [clubs, setClubs]= useState(null);

    useEffect(()=> {
        const load= async ()=>{
            const clubs=await getClubs();
            setClubs(clubs)
            console.log(clubs);
        };
        load();
    }, []);
    return clubs;
}
        

