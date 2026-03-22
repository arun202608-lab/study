import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { javaModules } from '../../data/courseData';
import { Lock, CheckCircle, PlayCircle, BookOpen, User, LogOut } from 'lucide-react';

interface SidebarProps {
  currentModule: string;
  onModuleSelect: (moduleId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentModule, onModuleSelect }) => {
  const { userData, logout } = useAuth();
  const { progress } = useProgress();

  const getVisibleModules = () => {
    if (!userData) return [];

    const userSkillLevel = userData.skillLevel;
    if (userSkillLevel === 'beginner') {
      // Beginners see all modules
      return javaModules;
    } else if (userSkillLevel === 'intermediate') {
      // Intermediates see only intermediate and advanced modules
      return javaModules.filter(module => module.skillLevel === 'intermediate' || module.skillLevel === 'advanced');
    } else if (userSkillLevel === 'advanced') {
      // Advanced see only advanced modules
      return javaModules.filter(module => module.skillLevel === 'advanced');
    }
    return [];
  };

  const visibleModules = getVisibleModules();

  // Helper to check if a module is unlocked
  const isModuleUnlocked = (moduleId: string) => {
    if (!progress) return false;
    const idx = visibleModules.findIndex((m) => m.id === moduleId);
    if (idx === 0) return true;
    // Previous module must be completed
    const prevModuleId = visibleModules[idx - 1]?.id;
    return progress.completedModules.includes(prevModuleId);
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Header (fixed) */}
      <div className="p-6 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Eduzy</h1>
            {userData?.displayName && (
              <p className="text-sm text-gray-700 mt-1">Hello, {userData.displayName} 👋</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div>
              <p className="font-medium text-gray-900">{userData?.displayName}</p>
              <p className="text-xs text-gray-500 capitalize">{userData?.skillLevel} Level</p>
            </div>
          </div>
        </div>
      {/* Modules List (scrollable) */}
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Java Course Modules
        </h2>
        <div className="space-y-2">
          {visibleModules.map((module) => {
            const isUnlocked = isModuleUnlocked(module.id);
            const isCompleted = progress?.completedModules.includes(module.id);
            const isActive = currentModule === module.id;
            return (
              <div
                key={module.id}
                onClick={() => isUnlocked && onModuleSelect(module.id)}
                className={`relative p-4 rounded-lg border transition-all duration-200 cursor-pointer group ${
                  isActive 
                    ? 'bg-blue-50 border-blue-200 shadow-md' 
                    : isUnlocked
                    ? 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-60'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isCompleted 
                      ? 'bg-green-100' 
                      : isActive
                      ? 'bg-blue-100'
                      : isUnlocked
                      ? 'bg-gray-100'
                      : 'bg-gray-50'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : isUnlocked ? (
                      <PlayCircle className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
                    ) : (
                      <Lock className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-medium truncate ${
                      isActive ? 'text-blue-900' : isUnlocked ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {module.title}
                    </h3>
                    <p className={`text-sm truncate ${
                      isActive ? 'text-blue-600' : isUnlocked ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      {module.duration} minutes
                    </p>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    module.skillLevel === 'beginner' 
                      ? 'bg-green-100 text-green-700'
                      : module.skillLevel === 'intermediate'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}>
                    {module.skillLevel}
                  </div>
                </div>
                {!isUnlocked && (
                  <div className="absolute inset-0 bg-gray-50 bg-opacity-75 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Lock className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-gray-500">Complete previous module</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Footer (fixed) */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;