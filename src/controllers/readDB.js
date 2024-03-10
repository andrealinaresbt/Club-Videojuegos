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
export async function getUserData(userId) {
    const usersCollection = collection(db, 'users');
    const usersDocs = await getDocs(usersCollection);
    const users = usersDocs.docs.map((doc) => doc.data());
    // Use find method to retrieve the user with the specified ID
    const foundUser = users.find((user) => user.uid === userId);
  
    return foundUser;
  }