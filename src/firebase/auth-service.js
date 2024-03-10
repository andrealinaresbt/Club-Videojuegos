import {
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAdditionalUserInfo,
  } from "firebase/auth";
  import { auth, googleProvider } from "./config";
import { createUserProfile } from "./users-service";

{/*ANCHOR - TODOS LOS METODOS PARA AUTENTICAR*/}

export const signInWithGoogle = async () =>{
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const {isNewUser} = getAdditionalUserInfo(result);
        if (isNewUser) {
            await createUserProfile(result.user.uid,{
                email: result.user.email,
                name: result.user.displayName,
                username: "",
                videoGame: 0,
                membresias: [],
            });
            
        }
        console.log("SIGN IN WITH GOOGLE", result);
    } catch (error) {
        console.error(error);
    }
};

export const registerWithEmailAndPassword = async(email, password, extraData) =>{
    try {
        const result= await createUserWithEmailAndPassword(auth, email, password);
        console.log("REGISTER W EMAIL AND PASSWORD", result);
        await createUserProfile(result.user.uid, {
            email,
            ...extraData,
        });
    } catch (error) {
        console.error(error);
        
    }
};

export const loginWithEmailAndPassword = async(email, password) =>{
    try {
        
        const result = await signInWithEmailAndPassword(auth, email,password);
        console.log("LOGIN: ", result);
    } catch (error) {
        console.error(error);
    }
}

export const logout =async()=>{
    try {
        await signOut(auth);
    } catch (error) {
        console.error({error});
        
    }
};