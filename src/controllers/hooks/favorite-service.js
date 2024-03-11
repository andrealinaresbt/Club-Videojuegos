import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export async function createFavoriteList(data){
    return addDoc(collection(db,'favorite',data));
}

export async function fetchClubesByUserId(userId) {
    const favoriteQuery =query(
        collection(db, 'favorites'),
        where('userId', '==', userId)
    );

    const result = await getDocs(favoriteQuery);
    if (result.size>0) {
        const clubListId =result.docs.map((item)=>({
            ...item.data(),
            id: item.id,
        }));

        return clubListId[0];
    }else{
        return null;
    }
        
    }

    export async function updatedListOfIds(clubListId, data){
        const listRef = doc(db, 'membresias',clubListId);
        return updateDoc(listRef, data);
    }
    
