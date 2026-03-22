import React, { useState } from 'react';
import { Module } from '../../types';
import { useProgress } from '../../context/ProgressContext';
import { X, CheckCircle, XCircle, Trophy } from 'lucide-react';

interface QuizModalProps {
  module: Module;
  onClose: () => void;
  onComplete: (score: number) => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ module, onClose, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const { submitQuiz } = useProgress();

  const questions = module.quiz.questions;

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = async () => {
    const correctAnswers = answers.reduce((count, answer, index) => {
      return answer === questions[index].correctAnswer ? count + 1 : count;
    }, 0);

    const percentage = Math.round((correctAnswers / questions.length) * 100);
    setScore(percentage);
    setShowResults(true);

    // Submit quiz results
    await submitQuiz(module.id, percentage);
  };

  const handleFinish = () => {
    onComplete(score);
  };

  if (showResults) {
    const passed = score >= module.quiz.passingScore;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${
            passed ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {passed ? (
              <Trophy className="w-10 h-10 text-green-600" />
            ) : (
              <XCircle className="w-10 h-10 text-red-600" />
            )}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {passed ? 'Congratulations!' : 'Keep Learning!'}
          </h2>

          <div className="mb-6">
            <div className="text-4xl font-bold text-gray-900 mb-2">{score}%</div>
            <p className="text-gray-600">
              {passed 
                ? `You passed! Next module unlocked.`
                : `You need ${module.quiz.passingScore}% to pass. Try again!`
              }
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Correct Answers</span>
                  <div className="font-semibold text-green-600">
                    {answers.filter((answer, index) => answer === questions[index].correctAnswer).length}/{questions.length}
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Passing Score</span>
                  <div className="font-semibold text-blue-600">{module.quiz.passingScore}%</div>
                </div>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                passed 
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {passed ? 'Continue Learning' : 'Try Again'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Module Quiz</h2>
            <p className="text-gray-600 mt-1">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h3>

          <div className="space-y-3 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswer === index && <div className="w-3 h-3 bg-white rounded-full"></div>}
                  </div>
                  <span className="font-medium text-gray-900">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-2 text-gray-600 font-medium hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === undefined}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;