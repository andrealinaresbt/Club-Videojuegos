import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export async function getClubs(){
    const clubsCollection =collection(db, 'clubes');
    const clubDocs = await getDocs(clubsCollection);
    const clubs= clubDocs.docs.map((doc) => doc.data());
    return clubs;
}

export async function getGames(){
    const gamesCollection =collection(db, 'videojuegos');
    const gameDocs = await getDocs(gamesCollection);
    const games= gameDocs.docs.map((doc) => doc.data());
    return games;
}
