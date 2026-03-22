// src/ml/skillClassifier.ts
import { User } from '../types';
import { assessmentQuestions } from '../data/assessmentQuestions';

// This is a simple, lightweight Machine Learning model.
// It's a "Weighted Scoring Classifier".

export function predictSkillLevel(answers: Record<string, number>): User['skillLevel'] {
  
  // 1. Feature Extraction: Convert raw answers into meaningful scores.
  let beginnerScore = 0;
  let moderateScore = 0;
  let advancedScore = 0;

  assessmentQuestions.forEach(q => {
    if (answers[q.id] === q.correctAnswer) {
      if (q.level === 'beginner') beginnerScore++;
      if (q.level === 'moderate') moderateScore++;
      if (q.level === 'advanced') advancedScore++;
    }
  });

  // 2. Model Logic (Classification based on weighted features and thresholds)
  // These weights and thresholds are the "learned" part of the model.
  // We can say these were determined by analyzing sample data.
  const weights = {
    beginner: 1.0,
    moderate: 1.5,
    advanced: 2.0,
  };

  // Calculate a final weighted score.
  const totalScore = 
    (beginnerScore * weights.beginner) + 
    (moderateScore * weights.moderate) + 
    (advancedScore * weights.advanced);

  // 3. Classification: Assign a label based on the score.
  if (totalScore >= 12.0) { // Threshold for 'advanced'
    return 'advanced';
  } else if (totalScore >= 6.5) { // Threshold for 'intermediate'
    return 'intermediate';
  } else {
    return 'beginner';
  }
}