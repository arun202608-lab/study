// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User as FirebaseUser,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { User } from '../types';
import { assessmentQuestions } from '../data/assessmentQuestions';
import { predictSkillLevel } from '../ml/skillClassifier'; // <-- IMPORT THE NEW ML MODEL

interface AssessmentResult {
  beginnerScore: number;
  moderateScore: number;
  advancedScore: number;
  skillLevel: User['skillLevel'];
}

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userData: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, userData: Omit<User, 'uid'>) => Promise<void>;
  logout: () => Promise<void>;
  updateUserData: (data: Partial<User>) => Promise<void>;
  processAssessmentResults: (answers: Record<string, number>) => AssessmentResult;
  setSkillLevel: (level: User['skillLevel']) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // --- UPDATED FUNCTION USING THE NEW ML MODEL ---
  const processAssessmentResults = (answers: Record<string, number>): AssessmentResult => {
    // 1. Use the ML model to predict the skill level
    const predictedLevel = predictSkillLevel(answers);

    // 2. Calculate scores for display purposes (this is just for the UI)
    let beginnerScore = 0;
    let moderateScore = 0;
    let advancedScore = 0;
    assessmentQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        if (q.level === 'beginner') beginnerScore++;
        if (q.level === 'moderate') moderateScore++;
        if (q.level === 'advanced') advancedScore++;
      }
    });

    // 3. Return the scores and the predicted skill level
    return { beginnerScore, moderateScore, advancedScore, skillLevel: predictedLevel };
  };
  
  const signup = async (email: string, password: string, userData: Omit<User, 'uid'>) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const newUserData: User = { ...userData, uid: user.uid };
    await setDoc(doc(db, 'users', user.uid), newUserData);
    setUserData(newUserData);
  };
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const logout = async () => {
    await signOut(auth);
    setUserData(null);
  };
  const updateUserData = async (data: Partial<User>) => {
    if (!currentUser) return;
    const updatedData = { ...userData, ...data } as User;
    await setDoc(doc(db, 'users', currentUser.uid), updatedData, { merge: true });
    setUserData(updatedData);
  };
  const setSkillLevel = async (level: User['skillLevel']) => {
    await updateUserData({ skillLevel: level });
  };
  const fetchUserData = async (uid: string) => {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      setUserData(userDoc.data() as User);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        fetchUserData(user.uid).finally(() => setLoading(false));
      } else {
        setUserData(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    userData,
    login,
    signup,
    logout,
    updateUserData,
    processAssessmentResults,
    setSkillLevel,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};