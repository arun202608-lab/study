import React, { useEffect, useState } from 'react';
import { javaModules } from '../../data/courseData';
import { useProgress } from '../../context/ProgressContext';
import { Clock, CheckCircle, Play } from 'lucide-react';
import QuizModal from './QuizModal';

interface ModuleViewerProps {
  moduleId: string;
}

const ModuleViewer: React.FC<ModuleViewerProps> = ({ moduleId }) => {
  const { progress } = useProgress();
  const [showQuiz, setShowQuiz] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  // All hooks must be called before any conditional returns
  useEffect(() => {
    setVideoEnded(false);
  }, [moduleId]);

  const module = javaModules.find(m => m.id === moduleId);
  
  if (!module) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Play className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Module not found</h3>
          <p className="text-gray-600">Please select a module from the sidebar</p>
        </div>
      </div>
    );
  }

  const isCompleted = progress?.completedModules.includes(moduleId) || false;
  const quizScore = progress?.quizScores[moduleId] || 0;
  const quizQuestions = module.quiz?.questions || [];
  const hasFiveQuestions = quizQuestions.length === 5;

  const handleTakeQuiz = () => {
    setShowQuiz(true);
  };

  const handleQuizComplete = () => {
    setShowQuiz(false);
    // Progress will be updated in the QuizModal component
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-6">
        {/* Module Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  module.skillLevel === 'beginner' 
                    ? 'bg-green-100 text-green-700'
                    : module.skillLevel === 'intermediate'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-purple-100 text-purple-700'
                }`}>
                  {module.skillLevel.charAt(0).toUpperCase() + module.skillLevel.slice(1)}
                </div>
                {isCompleted && (
                  <div className="flex items-center space-x-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{module.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{module.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{module.duration} minutes</span>
                </div>
                {quizScore > 0 && (
                  <div className="flex items-center space-x-1">
                    <span>Quiz Score: {quizScore}%</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Video Player */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
          <div className="aspect-video">
            <iframe
              src={module.videoUrl}
              title={module.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => {
                // Simulate video end for demo - in real app you'd track actual video progress
                setTimeout(() => setVideoEnded(true), 3000);
              }}
            />
          </div>
        </div>

        {/* Quiz Section */}
        {videoEnded && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isCompleted ? 'Quiz Completed!' : 'Attend Quiz to unlock next module'}
              </h2>
              {!hasFiveQuestions && (
                <div className="mb-4 text-red-600 font-semibold">This module's quiz does not have 5 questions. Please add 5 questions for a complete quiz.</div>
              )}
              <div className="space-y-4">
                <p className="text-gray-600">
                  {isCompleted
                    ? `You scored ${quizScore}%. You can retake the quiz to improve your score.`
                    : `Attend the quiz (5 questions) to unlock the next module. You need ${module.quiz.passingScore}% or higher to pass.`}
                </p>
                <button
                  onClick={handleTakeQuiz}
                  className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  disabled={!hasFiveQuestions}
                >
                  <Play className="w-5 h-5" />
                  <span>{isCompleted ? 'Retake Quiz' : 'Attend Quiz'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quiz Modal */}
      {showQuiz && (
        <QuizModal
          module={module}
          onClose={() => setShowQuiz(false)}
          onComplete={handleQuizComplete}
        />
      )}
    </div>
  );
};

export default ModuleViewer;