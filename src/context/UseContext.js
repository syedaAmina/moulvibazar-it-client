import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from './../firebase/firebase.init';

export  const AuthContext = createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()

const UserContext = ({children}) => {
     
    const [user, setUser] = useState(null)
    const [loading, setLoading]  = useState(true)

    const createUser = (email, password) =>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const signWithPopUp = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const signInWithGitHub = () =>{
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }
    const updateUserProfile = profile =>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
       }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log('current user is', currentUser)
            setUser(currentUser);
            setLoading(false)
        })
        return () => unSubscribe;
    } , [])
    
    const authInfo = {user, createUser,signIn,logOut, loading,signWithPopUp,signInWithGitHub,updateUserProfile};


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;