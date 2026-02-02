import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('shopsphere_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (userData) => {
        // Dummy validation logic would go here
        const userToSave = { ...userData, id: Date.now() };
        setUser(userToSave);
        localStorage.setItem('shopsphere_user', JSON.stringify(userToSave));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('shopsphere_user');
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
