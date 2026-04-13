export interface User {
  id: string;
  email: string;
  name?: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: number;
  instructor: string;
  image_url: string;
  price: number;
  is_premium: boolean;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: number;
  course_id: number;
  title: string;
  content: string;
  video_url?: string;
  order_index: number;
  is_premium: boolean;
  created_at: string;
  updated_at: string;
}

export interface PracticeExercise {
  id: number;
  lesson_id: number;
  title: string;
  description: string;
  difficulty: string;
  instructions: string;
  starter_code: string;
  solution: string;
  is_premium: boolean;
  created_at: string;
  updated_at: string;
}

export interface CourseEnrollment {
  id: number;
  user_id: string;
  course_id: number;
  enrolled_at: string;
  completed_at?: string;
}

export interface LearningProgress {
  id: number;
  user_id: string;
  lesson_id: number;
  completed: boolean;
  completed_at?: string;
  last_accessed: string;
}

export interface PracticeSubmission {
  id: number;
  user_id: string;
  exercise_id: number;
  code: string;
  output: string;
  is_correct: boolean;
  submitted_at: string;
}

export interface Badge {
  id: number;
  name: string;
  description: string;
  image_url: string;
  condition: string;
  points: number;
  created_at: string;
}

export interface Achievement {
  id: number;
  user_id: string;
  badge_id: number;
  earned_at: string;
}
