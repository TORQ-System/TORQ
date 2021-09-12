import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(null); //nul means not logged in
    return (
        <AuthenticationContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (e) {
                        alert('error');
                    }
                },
                signup: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (e) {
                        alert('error');
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut()
                    } catch (e) {
                        alert('error');
                    }
                }
            }}>
            {children}
        </AuthenticationContext.Provider>
    )
}