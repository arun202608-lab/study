import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Code, ChevronRight } from 'lucide-react';

const CourseSelection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [loading, setLoading] = useState(false);
  const { updateUserData } = useAuth();

  const courses = [
    {
      id: 'java',
      title: 'Java Programming',
      description: 'Master object-oriented programming with Java',
      icon: Code,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const handleContinue = async () => {
    if (!selectedCourse) return;

    setLoading(true);
    try {
  // Remove skillLevel so user is forced to select it next
  await updateUserData({ selectedCourse });
    } catch (error) {
      console.error('Error updating course selection:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Course</h1>
          <p className="text-xl text-gray-600">Select the programming language you'd like to master</p>
        </div>

        <div className="space-y-4 mb-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course.id)}
                className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedCourse === course.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                    <p className="text-gray-600 mt-1">{course.description}</p>
                  </div>
                  {selectedCourse === course.id && (
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedCourse || loading}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <span>{loading ? 'Setting up...' : 'Continue'}</span>
          {!loading && <ChevronRight className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default CourseSelection;