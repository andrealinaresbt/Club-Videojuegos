import useClubs from "./clubs";
import { createFavoriteList, fetchClubesByUserId } from "./favorite-service";

export function useFavorites() {

    const addNewFavorite = async({clubId,listOfIds, clubListId})=>{
        const newList =[...listOfIds,clubId];
        await updateF(clubListId,{
            listOfIds: newList,
        });
        return{
updatedListOfIds: newList,
clubListId,
        };
            
    };

    const removeFavorite = async({clubId, listOfIds,clubListId})=>{
        const newList=listOfIds.filter((item)=>item!==clubId);

        await useClubs(clubListId,{
            listOfIds: newList,
        });
        return{
            updatedListOfIds: newList,
            clubListId,
        };
    };
    const handleClubs = async()=>({
        clubId,
        isClub,
        listOfIds=[],
        clubListId,
        userId,
        

    })=>{
        let currentClubs ={
            listOfIds,
            clubListId,
        };
        console.log({
            userId,
            clubListId,
            currentClubs,
        });


        if (!clubListId && userId) {
            const newList =  createFavoriteList({
                listOfIds: [],
                userId,
            });
            currentClubs={
                listOfIds: [],
                clubListId: newList.clubId,
            };
        }
         const payload={
            clubId,
            listOfIds,
            clubListId
         
          
        }
        if (isClub) {
            return removeFavorite(payload);
            
        }
        return addNewFavorite({
            clubId,
            listOfIds,
            clubListId,
        });
    };

    const getClubs = async (userId ='')=> {
        try {
            const clubData = await fetchClubesByUserId(userId);
            let clubList =[];
            if (listOfIds.length>0) {
                clubList = await getClubs(clubData?.listOfIds);
                
            }
            const data ={
                ...clubData,
                clubes: clubList,
            };
            return data;
            
        } catch (error) {
            console.error("FAILED");
            
        }
    };

    return{
        getClubs,
        addNewFavorite,
        removeFavorite,
        handleClubs,
    };
}