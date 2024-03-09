import { signInWithPopup, signOut, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth, googleProvider } from "./config";
import { createUserProfile } from "./users-service";

{/*ANCHOR - TODOS LOS METODOS PARA AUTENTICAR*/}

export const signInWithGoogle = async () =>{
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result);
        console.log("hi");
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