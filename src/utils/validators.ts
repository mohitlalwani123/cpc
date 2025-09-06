import { VALIDATION_RULES } from './constants';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= VALIDATION_RULES.EMAIL_MAX_LENGTH;
};

export const validatePassword = (password: string): { isValid: boolean; message?: string } => {
  if (password.length < VALIDATION_RULES.PASSWORD_MIN_LENGTH) {
    return {
      isValid: false,
      message: `Password must be at least ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} characters long`
    };
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one lowercase letter'
    };
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one uppercase letter'
    };
  }
  
  if (!/(?=.*\d)/.test(password)) {
    return {
      isValid: false,
      message: 'Password must contain at least one number'
    };
  }
  
  return { isValid: true };
};

export const validateName = (name: string): { isValid: boolean; message?: string } => {
  if (!name.trim()) {
    return { isValid: false, message: 'Name is required' };
  }
  
  if (name.length > VALIDATION_RULES.NAME_MAX_LENGTH) {
    return {
      isValid: false,
      message: `Name must be less than ${VALIDATION_RULES.NAME_MAX_LENGTH} characters`
    };
  }
  
  return { isValid: true };
};

export const validatePostTitle = (title: string): { isValid: boolean; message?: string } => {
  if (!title.trim()) {
    return { isValid: false, message: 'Title is required' };
  }
  
  if (title.length > VALIDATION_RULES.POST_TITLE_MAX_LENGTH) {
    return {
      isValid: false,
      message: `Title must be less than ${VALIDATION_RULES.POST_TITLE_MAX_LENGTH} characters`
    };
  }
  
  return { isValid: true };
};

export const validatePostContent = (content: string): { isValid: boolean; message?: string } => {
  if (!content.trim()) {
    return { isValid: false, message: 'Content is required' };
  }
  
  if (content.length > VALIDATION_RULES.POST_CONTENT_MAX_LENGTH) {
    return {
      isValid: false,
      message: `Content must be less than ${VALIDATION_RULES.POST_CONTENT_MAX_LENGTH} characters`
    };
  }
  
  return { isValid: true };
};

export const validateComment = (comment: string): { isValid: boolean; message?: string } => {
  if (!comment.trim()) {
    return { isValid: false, message: 'Comment cannot be empty' };
  }
  
  if (comment.length > VALIDATION_RULES.COMMENT_MAX_LENGTH) {
    return {
      isValid: false,
      message: `Comment must be less than ${VALIDATION_RULES.COMMENT_MAX_LENGTH} characters`
    };
  }
  
  return { isValid: true };
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
};