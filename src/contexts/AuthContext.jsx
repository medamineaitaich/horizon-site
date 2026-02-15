
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useLocalStorage('users', []);
  const [currentUser, setCurrentUser] = useLocalStorage('currentUser', null);
  const [authToken, setAuthToken] = useLocalStorage('authToken', null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const emailExists = (email) => {
    return users.some(user => user.email.toLowerCase() === email.toLowerCase());
  };

  const register = async ({ firstName, lastName, email, password, confirmPassword, agreeToTerms }) => {
    if (!agreeToTerms) {
      throw new Error('You must agree to the Terms of Use and Privacy Policy');
    }

    if (!firstName || !lastName || !email || !password) {
      throw new Error('All fields are required');
    }

    if (!validateEmail(email)) {
      throw new Error('Please enter a valid email address');
    }

    if (emailExists(email)) {
      throw new Error('An account with this email already exists');
    }

    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const newUser = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email: email.toLowerCase(),
      password,
      username: email.split('@')[0],
      phone: '',
      address: '',
      country: '',
      isAdmin: users.length === 0,
      createdAt: new Date().toISOString()
    };

    setUsers([...users, newUser]);
    
    const token = btoa(`${newUser.id}:${Date.now()}`);
    setAuthToken(token);
    setCurrentUser(newUser);

    return newUser;
  };

  const login = async ({ email, password }) => {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const token = btoa(`${user.id}:${Date.now()}`);
    setAuthToken(token);
    setCurrentUser(user);

    return user;
  };

  const logout = () => {
    setAuthToken(null);
    setCurrentUser(null);
  };

  const updateProfile = async (updates) => {
    if (!currentUser) {
      throw new Error('No user logged in');
    }

    if (updates.email && updates.email !== currentUser.email) {
      if (!validateEmail(updates.email)) {
        throw new Error('Please enter a valid email address');
      }
      if (emailExists(updates.email)) {
        throw new Error('An account with this email already exists');
      }
    }

    if (updates.phone && !/^\d*$/.test(updates.phone)) {
      throw new Error('Phone number must contain only digits');
    }

    const updatedUser = { ...currentUser, ...updates };
    
    const updatedUsers = users.map(u => u.id === currentUser.id ? updatedUser : u);
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);

    return updatedUser;
  };

  const changePassword = async ({ newPassword, confirmPassword, confirmed }) => {
    if (!currentUser) {
      throw new Error('No user logged in');
    }

    if (!confirmed) {
      throw new Error('You must confirm the password change');
    }

    if (!newPassword || !confirmPassword) {
      throw new Error('Both password fields are required');
    }

    if (newPassword !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    if (newPassword.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const updatedUser = { ...currentUser, password: newPassword };
    const updatedUsers = users.map(u => u.id === currentUser.id ? updatedUser : u);
    
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);

    return updatedUser;
  };

  const value = {
    currentUser,
    authToken,
    isAuthenticated: !!currentUser,
    isAdmin: currentUser?.isAdmin || false,
    register,
    login,
    logout,
    updateProfile,
    changePassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
