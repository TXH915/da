import { create } from 'zustand';
import { User, Course, Lesson, PracticeExercise, Badge, Achievement } from '../types';
import { supabase } from '../supabase/client';

interface Store {
  // User state
  user: User | null;
  isLoading: boolean;
  error: string | null;
  
  // Course state
  courses: Course[];
  currentCourse: Course | null;
  lessons: Lesson[];
  
  // Practice state
  exercises: PracticeExercise[];
  
  // Achievement state
  badges: Badge[];
  achievements: Achievement[];
  
  // Actions
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Course actions
  fetchCourses: () => Promise<void>;
  fetchCourseById: (id: number) => Promise<void>;
  fetchLessons: (courseId: number) => Promise<void>;
  
  // Practice actions
  fetchExercises: (lessonId: number) => Promise<void>;
  
  // Achievement actions
  fetchBadges: () => Promise<void>;
  fetchAchievements: () => Promise<void>;
  
  // Auth actions
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useStore = create<Store>((set, get) => ({
  // Initial state
  user: null,
  isLoading: false,
  error: null,
  courses: [],
  currentCourse: null,
  lessons: [],
  exercises: [],
  badges: [],
  achievements: [],
  
  // Actions
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  
  // Course actions
  fetchCourses: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*');
      
      if (error) throw error;
      set({ courses: data || [], isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  
  fetchCourseById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      set({ currentCourse: data, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  
  fetchLessons: async (courseId) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('course_id', courseId)
        .order('order_index');
      
      if (error) throw error;
      set({ lessons: data || [], isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  
  // Practice actions
  fetchExercises: async (lessonId) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('practice_exercises')
        .select('*')
        .eq('lesson_id', lessonId);
      
      if (error) throw error;
      set({ exercises: data || [], isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  
  // Achievement actions
  fetchBadges: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('badges')
        .select('*');
      
      if (error) throw error;
      set({ badges: data || [], isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  
  fetchAchievements: async () => {
    const user = get().user;
    if (!user) return;
    
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .eq('user_id', user.id);
      
      if (error) throw error;
      set({ achievements: data || [], isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  
  // Auth actions
  signUp: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name }
        }
      });
      
      if (error) throw error;
      
      // Create user in users table
      if (data.user) {
        await supabase
          .from('users')
          .insert({
            id: data.user.id,
            email: data.user.email,
            name: data.user.user_metadata.name,
            role: 'free'
          });
        
        set({ user: {
          id: data.user.id,
          email: data.user.email || '',
          name: data.user.user_metadata.name,
          role: 'free',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, isLoading: false });
      }
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  
  signIn: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      // Get user from users table
      if (data.user) {
        const { data: userData } = await supabase
          .from('users')
          .select('*')
          .eq('id', data.user.id)
          .single();
        
        if (userData) {
          set({ user: userData, isLoading: false });
        }
      }
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
  
  signOut: async () => {
    set({ isLoading: true, error: null });
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  }
}));
