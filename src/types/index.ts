// src/types/index.ts
export interface User {
  uid: string;
  email: string;
  displayName: string;
  skillLevel: 'beginner' | 'intermediate' | 'advanced' | null; // Allow null initially
  selectedCourse: string;
  createdAt: Date;
}

export interface UserProgress {
  userId: string;
  courseId: string;
  completedModules: string[];
  quizScores: Record<string, number>;
  currentModule: string;
  lastActiveModule: string;
  totalTimeSpent: number;
  lastCheerUpTime: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  order: number;
  duration: number;
  isLocked: boolean;
  quiz: Quiz;
}

export interface Quiz {
  id: string;
  moduleId: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface CheerUpActivity {
  id: string;
  type: 'quiz' | 'game' | 'motivational';
  title: string;
  content: string;
  options?: string[];
  correctAnswer?: number;
}

// Add this new type for the assessment questions
export interface AssessmentQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  level: 'beginner' | 'moderate' | 'advanced';
}