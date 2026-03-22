// src/components/onboarding/AssessmentQuiz.tsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { assessmentQuestions } from '../../data/assessmentQuestions';
import { Check, ChevronRight, BarChart2, Star, Trophy, Zap, ArrowRight } from 'lucide-react';
import { User } from '../../types';

interface AssessmentResultState {
  beginnerScore: number;
  moderateScore: number;
  advancedScore: number;
  skillLevel: User['skillLevel'];
}

const AssessmentQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<AssessmentResultState | null>(null);
  const { processAssessmentResults, setSkillLevel } = useAuth();

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleContinue = () => {
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };
  
  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Correctly await the result from the async ML function
      const calculatedResults = await processAssessmentResults(answers);
      setResults(calculatedResults);
      setShowResults(true);
    } catch (error) {
      console.error("Failed to get assessment results:", error);
      // You can add an alert or a user-facing error message here
    } finally {
      setLoading(false);
    }
  };

  const handleStartLearning = async () => {
    if (!results?.skillLevel) return;
    setLoading(true);
    try {
      await setSkillLevel(results.skillLevel);
    } catch (error) {
      console.error('Error setting skill level:', error);
    } finally {
      setLoading(false);
    }
  };

  if (showResults && results) {
    const levelInfo = {
      beginner: { icon: Star, color: 'text-green-500', bgColor: 'bg-green-100', title: 'Beginner' },
      intermediate: { icon: Trophy, color: 'text-blue-500', bgColor: 'bg-blue-100', title: 'Intermediate' },
      advanced: { icon: Zap, color: 'text-purple-500', bgColor: 'bg-purple-100', title: 'Advanced' },
      null: { icon: Star, color: 'text-gray-500', bgColor: 'bg-gray-100', title: 'Not Set' },
    };
    const currentLevelInfo = levelInfo[results.skillLevel || 'null'];
    const Icon = currentLevelInfo.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
        <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${currentLevelInfo.bgColor}`}>
            <Icon className={`w-10 h-10 ${currentLevelInfo.color}`} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete!</h1>
          <p className="text-lg text-gray-600 mb-6">Here is a breakdown of your results.</p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4">
              <BarChart2 className="w-5 h-5 mr-2 text-gray-500" />
              Score Summary
            </h2>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Beginner Questions:</span>
              <span className="font-bold text-lg text-green-600">{results.beginnerScore} / 5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Moderate Questions:</span>
              <span className="font-bold text-lg text-blue-600">{results.moderateScore} / 5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Advanced Questions:</span>
              <span className="font-bold text-lg text-purple-600">{results.advancedScore} / 5</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mb-8 text-left">
            <h3 className="text-lg font-bold text-blue-800">Your Assigned Level is: {currentLevelInfo.title}</h3>
            <p className="text-blue-700 mt-1">Your learning path will be tailored for a {currentLevelInfo.title} level.</p>
          </div>

          <button
            onClick={handleStartLearning}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            <span>{loading ? 'Setting up your path...' : 'Start Learning'}</span>
            {!loading && <ArrowRight className="w-5 h-5" />}
          </button>
        </div>
      </div>
    );
  }
  
  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skill Assessment Quiz</h1>
          <p className="text-xl text-gray-600">
            Question {currentQuestionIndex + 1} of {assessmentQuestions.length}
          </p>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / assessmentQuestions.length) * 100}%` }}
          ></div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{currentQuestion.question}</h3>
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                  }`}>
                    {selectedAnswer === index && <div className="w-3 h-3 bg-white rounded-full"></div>}
                  </div>
                  <span className="font-medium text-gray-900">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={selectedAnswer === undefined || loading}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <span>
            {loading
              ? 'Calculating your skill level...'
              : currentQuestionIndex === assessmentQuestions.length - 1
              ? 'Finish & View Results'
              : 'Next Question'}
          </span>
          {!loading && (currentQuestionIndex === assessmentQuestions.length - 1 ? <Check /> : <ChevronRight />)}
        </button>
      </div>
    </div>
  );
};

export default AssessmentQuiz;