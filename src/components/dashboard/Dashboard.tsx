import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { javaModules, cheerUpActivities } from '../../data/courseData';
import Sidebar from './Sidebar';
import ModuleViewer from './ModuleViewer';
import { Play } from 'lucide-react';
import QuizModal from './QuizModal';
import Chatbot from './Chatbot';
import CheerUpModal from './CheerUpModal';
import LoadingSpinner from '../common/LoadingSpinner';

const Dashboard: React.FC = () => {
  const { userData } = useAuth();
  const { progress, updateProgress } = useProgress();
  const [currentModule, setCurrentModule] = useState('');
  const [cheerUpActivity, setCheerUpActivity] = useState<any>(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    if (userData && progress) {
      // Get the first unlocked module based on skill level
      const userSkillLevel = userData.skillLevel;
      let visibleModules = javaModules;
      if (userSkillLevel === 'beginner') {
        visibleModules = javaModules;
      } else if (userSkillLevel === 'intermediate') {
        visibleModules = javaModules.filter(module => module.skillLevel === 'intermediate' || module.skillLevel === 'advanced');
      } else if (userSkillLevel === 'advanced') {
        visibleModules = javaModules.filter(module => module.skillLevel === 'advanced');
      }

      if (visibleModules.length > 0) {
        const firstUncompletedModule = visibleModules.find(
          module => !progress.completedModules.includes(module.id)
        );
        setCurrentModule(firstUncompletedModule?.id || visibleModules[0].id);
      }
    }
  }, [userData, progress]);

  useEffect(() => {
    const checkCheerUpTime = () => {
      const now = Date.now();
      const timeSinceStart = now - startTime;
      const lastCheerUp = progress?.lastCheerUpTime || 0;
      const timeSinceLastCheerUp = now - lastCheerUp;

      // Show cheer up every 3 minutes (180000ms) - demo duration
      // In production, change to 25 minutes (1500000ms)
      if (timeSinceStart > 180000 && timeSinceLastCheerUp > 180000) {
        const randomActivity = cheerUpActivities[Math.floor(Math.random() * cheerUpActivities.length)];
        setCheerUpActivity(randomActivity);
        updateProgress({ lastCheerUpTime: now });
      }
    };

    const interval = setInterval(checkCheerUpTime, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [startTime, progress, updateProgress]);

  if (!userData || !progress) {
    return <LoadingSpinner size="lg" message="Loading your dashboard..." />;
  }

  // Find the current module object
  const currentModuleObj = javaModules.find(m => m.id === currentModule);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Nav Bar */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 shadow-sm z-20" style={{ marginLeft: '20rem' }}>
        <div className="text-2xl font-bold text-blue-700">Eduzy Dashboard</div>
        <button
          onClick={() => setShowQuiz(true)}
          className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <Play className="w-5 h-5" />
          <span>Attend Quiz</span>
        </button>
      </div>
      {/* Sidebar (fixed) */}
      <div className="fixed top-0 left-0 h-screen w-80 z-30">
        <Sidebar
          currentModule={currentModule}
          onModuleSelect={setCurrentModule}
        />
      </div>
      {/* Main Content (with left margin for sidebar) */}
      <div className="ml-80 pt-24 min-h-screen">
        <ModuleViewer moduleId={currentModule} />
        <Chatbot />
        {cheerUpActivity && (
          <CheerUpModal
            activity={cheerUpActivity}
            onClose={() => setCheerUpActivity(null)}
          />
        )}
        {/* Quiz Modal from Nav Bar */}
        {showQuiz && currentModuleObj && (
          <QuizModal
            module={currentModuleObj}
            onClose={() => setShowQuiz(false)}
            onComplete={() => setShowQuiz(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;