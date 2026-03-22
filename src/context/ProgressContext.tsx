import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { UserProgress } from '../types';
import { useAuth } from './AuthContext';

interface ProgressContextType {
  progress: UserProgress | null;
  updateProgress: (updates: Partial<UserProgress>) => Promise<void>;
  completeModule: (moduleId: string) => Promise<void>;
  submitQuiz: (moduleId: string, score: number) => Promise<void>;
  loading: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, userData } = useAuth();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  const updateProgress = async (updates: Partial<UserProgress>) => {
    if (!currentUser || !progress) return;

    const updatedProgress = { ...progress, ...updates };
    await setDoc(doc(db, 'progress', currentUser.uid), updatedProgress, { merge: true });
    setProgress(updatedProgress);
  };

  const completeModule = async (moduleId: string) => {
    if (!progress) return;

    const completedModules = [...progress.completedModules];
    if (!completedModules.includes(moduleId)) {
      completedModules.push(moduleId);
    }

    await updateProgress({
      completedModules,
      lastActiveModule: moduleId
    });
  };

  const submitQuiz = async (moduleId: string, score: number) => {
    if (!progress) return;

    const quizScores = { ...progress.quizScores, [moduleId]: score };
    await updateProgress({ quizScores });

    // If quiz passed, complete the module
    if (score >= 70) {
      await completeModule(moduleId);
    }
  };

  const fetchProgress = async () => {
    if (!currentUser || !userData) return;

    const progressDoc = await getDoc(doc(db, 'progress', currentUser.uid));
    
    if (progressDoc.exists()) {
      setProgress(progressDoc.data() as UserProgress);
    } else {
      // Initialize progress for new user
      const initialProgress: UserProgress = {
        userId: currentUser.uid,
        courseId: userData.selectedCourse,
        completedModules: [],
        quizScores: {},
        currentModule: 'java-beginner-1',
        lastActiveModule: '',
        totalTimeSpent: 0,
        lastCheerUpTime: Date.now()
      };
      
      await setDoc(doc(db, 'progress', currentUser.uid), initialProgress);
      setProgress(initialProgress);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (currentUser && userData) {
      setLoading(false); // Show UI immediately
      fetchProgress(); // Fetch progress in background
    } else {
      setLoading(false);
    }
  }, [currentUser, userData]);

  const value: ProgressContextType = {
    progress,
    updateProgress,
    completeModule,
    submitQuiz,
    loading
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};