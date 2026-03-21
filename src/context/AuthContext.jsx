import React, { createContext, useContext, useState, useEffect } from 'react';
import { registerUser, findUserByEmail, authenticateUser } from '../services/userDb';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('pokedoc_user');
        return stored ? JSON.parse(stored) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('pokedoc_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('pokedoc_user');
        }
    }, [user]);

    const login = async (email, password) => {
        // ==========================================
        //  HOW TO CONNECT TO YOUR BACKEND API
        // ==========================================
        /*
        try {
            const res = await fetch('https://your-api.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Login failed');
            
            setUser(data.user); // or data.token if using JWT
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
        */

        // MOCK BACKEND LOGIC (Delete when using real API)
        const found = findUserByEmail(email);
        if (!found) {
            return { success: false, error: 'No account found with that email. Please sign up first.' };
        }
        const authedUser = authenticateUser(email, password);
        if (!authedUser) {
            return { success: false, error: 'Incorrect password. Please try again.' };
        }
        setUser({ ...authedUser });
        return { success: true };
    };

    const signup = async (userData) => {
        // ==========================================
        //  HOW TO CONNECT TO YOUR BACKEND API
        // ==========================================
        /*
        try {
            const res = await fetch('https://your-api.com/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Signup failed');
            
            setUser(data.user);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
        */

        // MOCK BACKEND LOGIC (Delete when using real API)
        const created = registerUser(userData);
        if (!created) {
            return { success: false, error: 'An account with that email already exists. Please log in instead.' };
        }
        setUser({ ...created });
        return { success: true };
    };

    const logout = async () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
