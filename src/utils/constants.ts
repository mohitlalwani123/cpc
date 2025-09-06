export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    ME: '/auth/me',
    PROFILE: '/auth/profile'
  },
  EVENTS: {
    LIST: '/events',
    DETAIL: '/events/:id',
    CREATE: '/events',
    REGISTER: '/events/:id/register'
  },
  COMMUNITY: {
    POSTS: '/community/posts',
    POST_DETAIL: '/community/posts/:id',
    LIKE: '/community/posts/:id/like',
    COMMENT: '/community/posts/:id/comment'
  },
  NEWS: {
    LIST: '/news',
    DETAIL: '/news/:id'
  },
  USERS: {
    LIST: '/users',
    DETAIL: '/users/:id',
    LEADERBOARD: '/users/leaderboard'
  }
};

export const EVENT_CATEGORIES = [
  { value: 'DSA', label: 'Data Structures & Algorithms' },
  { value: 'Web Development', label: 'Web Development' },
  { value: 'AI/ML', label: 'Artificial Intelligence & Machine Learning' },
  { value: 'Competitive Programming', label: 'Competitive Programming' },
  { value: 'Hackathon', label: 'Hackathon' }
];

export const EVENT_DIFFICULTIES = [
  { value: 'Easy', label: 'Easy', color: 'green' },
  { value: 'Medium', label: 'Medium', color: 'yellow' },
  { value: 'Hard', label: 'Hard', color: 'orange' },
  { value: 'Expert', label: 'Expert', color: 'red' }
];

export const EVENT_STATUSES = [
  { value: 'upcoming', label: 'Upcoming', color: 'blue' },
  { value: 'live', label: 'Live', color: 'green' },
  { value: 'ended', label: 'Ended', color: 'gray' }
];

export const COMMUNITY_CATEGORIES = [
  { value: 'dsa', label: 'DSA' },
  { value: 'web-dev', label: 'Web Development' },
  { value: 'ai-ml', label: 'AI/ML' },
  { value: 'competitive', label: 'Competitive Programming' },
  { value: 'general', label: 'General Discussion' }
];

export const NEWS_CATEGORIES = [
  { value: 'events', label: 'Event Updates' },
  { value: 'results', label: 'Results' },
  { value: 'announcements', label: 'Announcements' },
  { value: 'features', label: 'New Features' }
];

export const USER_ROLES = [
  { value: 'user', label: 'User' },
  { value: 'admin', label: 'Administrator' }
];

export const ACHIEVEMENT_TYPES = [
  { key: 'first_win', title: 'First Victory', description: 'Won your first competition', icon: 'trophy' },
  { key: 'speed_demon', title: 'Speed Demon', description: 'Fastest solution in a contest', icon: 'zap' },
  { key: 'problem_solver', title: 'Problem Solver', description: 'Solved 100+ problems', icon: 'target' },
  { key: 'community_helper', title: 'Community Helper', description: 'Helped 50+ community members', icon: 'users' },
  { key: 'streak_master', title: 'Streak Master', description: 'Participated in 10 consecutive events', icon: 'flame' }
];

export const PAGINATION_LIMITS = {
  EVENTS: 12,
  POSTS: 10,
  NEWS: 9,
  USERS: 20,
  LEADERBOARD: 50
};

export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 6,
  NAME_MAX_LENGTH: 100,
  EMAIL_MAX_LENGTH: 255,
  POST_TITLE_MAX_LENGTH: 200,
  POST_CONTENT_MAX_LENGTH: 10000,
  COMMENT_MAX_LENGTH: 1000,
  BIO_MAX_LENGTH: 500
};

export const THEME_COLORS = {
  primary: '#6C63FF',
  secondary: '#00C9A7',
  accent: {
    coral: '#FF6B6B',
    yellow: '#FFD93D'
  },
  gradients: {
    primary: 'from-indigo-600 to-purple-600',
    secondary: 'from-teal-500 to-blue-500',
    success: 'from-green-500 to-emerald-500',
    warning: 'from-yellow-500 to-orange-500',
    error: 'from-red-500 to-pink-500'
  }
};