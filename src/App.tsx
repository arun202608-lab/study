// src/App.tsx
import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import AuthPage from './pages/AuthPage';
import CourseSelection from './components/onboarding/CourseSelection';
import AssessmentQuiz from './components/onboarding/AssessmentQuiz'; // This is the new component
import Dashboard from './components/dashboard/Dashboard';
import LoadingSpinner from './components/common/LoadingSpinner';

const AppContent: React.FC = () => {
  const { currentUser, userData, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner size="lg" message="Loading Eduzy..." />
      </div>
    );
  }

  // User not authenticated
  if (!currentUser) {
    return <AuthPage />;
  }

  // User authenticated but hasn't completed onboarding
  if (!userData?.selectedCourse) {
    return <CourseSelection />;
  }

  // User has selected a course but not completed the assessment
  if (userData.skillLevel === null) {
    return <AssessmentQuiz />;
  }

  // User authenticated and onboarded - show dashboard
  return (
    <ProgressProvider>
      <Dashboard />
    </ProgressProvider>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;