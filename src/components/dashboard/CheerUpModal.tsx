import React, { useState } from 'react';
import { CheerUpActivity } from '../../types';
import { X, Trophy, Zap, Heart, CheckCircle } from 'lucide-react';

interface CheerUpModalProps {
  activity: CheerUpActivity;
  onClose: () => void;
}

const CheerUpModal: React.FC<CheerUpModalProps> = ({ activity, onClose }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSubmit = () => {
    if (activity.type === 'quiz' || activity.type === 'game') {
      setShowResult(true);
    } else {
      onClose();
    }
  };

  const isCorrect = selectedAnswer === activity.correctAnswer;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center mb-6">
          {activity.type === 'motivational' ? (
            <Heart className="w-10 h-10 text-white" />
          ) : activity.type === 'quiz' ? (
            <Trophy className="w-10 h-10 text-white" />
          ) : (
            <Zap className="w-10 h-10 text-white" />
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">{activity.title}</h2>

        {!showResult ? (
          <>
            <p className="text-gray-600 mb-6 leading-relaxed">{activity.content}</p>

            {activity.options && (
              <div className="space-y-3 mb-6">
                {activity.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAnswer(index)}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === index
                        ? 'border-orange-500 bg-orange-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index
                          ? 'border-orange-500 bg-orange-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswer === index && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <span className="text-gray-800">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={handleAnswerSubmit}
              disabled={activity.options && selectedAnswer === null}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            >
              {activity.type === 'motivational' ? 'Thanks!' : 'Submit'}
            </button>
          </>
        ) : (
          <div className="space-y-6">
            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
              isCorrect ? 'bg-green-100' : 'bg-blue-100'
            }`}>
              <CheckCircle className={`w-8 h-8 ${isCorrect ? 'text-green-600' : 'text-blue-600'}`} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {isCorrect ? 'Excellent!' : 'Good try!'}
              </h3>
              <p className="text-gray-600">
                {isCorrect 
                  ? 'You got it right! Keep up the great work!'
                  : `The correct answer was: ${activity.options![activity.correctAnswer!]}`
                }
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 font-medium">
                💡 Remember: Every challenge makes you stronger. Keep coding and keep learning!
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Continue Learning
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheerUpModal;