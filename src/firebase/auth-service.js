import { signInWithPopup, signOut, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth, googleProvider } from "./config";

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

export const registerWithEmailAndPassword = async(email, password) =>{
    try {
        const result= await createUserWithEmailAndPassword(auth, email, password);
        console.log("REGISTER W EMAIL AND PASSWORD", result);
    } catch (error) {
        console.error(error);
        
    }
};



export const logout =async()=>{
    try {
        await signOut(auth);
    } catch (error) {
        console.error({error});
        
    }
};