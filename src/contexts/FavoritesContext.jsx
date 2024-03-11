import { createContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";
import { useFavorites } from "../controllers/hooks/favorites";

export const  FavoritesContext = createContext(null);
export const defaultList = {
    id:'',
    userId: '',
    listOfIds:[],
    club:[],
};

export function FavoritesProvider({children}){
    const[favoriteList, setClubList] = useState(defaultList);
    const[isLoading, setIsLoading] = useState(false);
    const {user} = useUser();
    const {getClubs} = useFavorites();

    const handleGetClubs= async()=>{
        try {
            const data =  getClubs(user.id);

        } catch (error) {
            
        }
    };

    useEffect(()=>{
        if (!isLoading) {
            handleGetClubs();
            
        }
    }, []);

    const handleFavoriteButton = async({clubId, isFavorite})=>{
        try {
            const{ updatedListofIds,favoriteListId }=await handleClubs({
                clubId,
                isFavorite,
                listOfIds: favoriteList.listOfIds,
                favoriteListId: favoriteList.club,
                userId: user.userId,
            });
            let updatedClub = [];
            if (updatedListofIds.length>0) {
                updatedClub = await getClubs(updatedListofIds);
                
            }
            setClubList({
                ...favoriteList,
                listOfIds:updatedListofIds,
                id: favoriteListId,
                club: updatedClub,
            });
        } catch (error) {
            console.error(error);
            
        }
    };
    return(
        <FavoritesContext.Provider
        
        value={{
            favoriteList,
            setClubList,
            isLoading,
            setIsLoading,
        }}
        >
{children}
            
        </FavoritesContext.Provider>
    );
}

export function useFavoritesContext(){
    return useContext(FavoritesContext);
}

    
    

