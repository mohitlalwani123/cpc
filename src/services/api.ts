const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class ApiService {
  private baseURL: string;
  private token: string | null;

  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('token');
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth methods
  async login(email: string, password: string) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (data.token) {
      this.token = data.token;
      localStorage.setItem('token', data.token);
    }
    
    return data;
  }

  async register(name: string, email: string, password: string) {
    const data = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    
    if (data.token) {
      this.token = data.token;
      localStorage.setItem('token', data.token);
    }
    
    return data;
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }

  // Events methods
  async getEvents(params?: any) {
    const queryString = params ? new URLSearchParams(params).toString() : '';
    return this.request(`/events${queryString ? `?${queryString}` : ''}`);
  }

  async getEvent(id: string) {
    return this.request(`/events/${id}`);
  }

  async createEvent(eventData: any) {
    return this.request('/events', {
      method: 'POST',
      body: JSON.stringify(eventData),
    });
  }

  async registerForEvent(eventId: string) {
    return this.request(`/events/${eventId}/register`, {
      method: 'POST',
    });
  }

  // Community methods
  async getPosts(params?: any) {
    const queryString = params ? new URLSearchParams(params).toString() : '';
    return this.request(`/community/posts${queryString ? `?${queryString}` : ''}`);
  }

  async getPost(id: string) {
    return this.request(`/community/posts/${id}`);
  }

  async createPost(postData: any) {
    return this.request('/community/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }

  async likePost(postId: string) {
    return this.request(`/community/posts/${postId}/like`, {
      method: 'POST',
    });
  }

  async addComment(postId: string, content: string) {
    return this.request(`/community/posts/${postId}/comment`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  }

  // News methods
  async getNews(params?: any) {
    const queryString = params ? new URLSearchParams(params).toString() : '';
    return this.request(`/news${queryString ? `?${queryString}` : ''}`);
  }

  async getNewsArticle(id: string) {
    return this.request(`/news/${id}`);
  }

  // Users methods
  async getLeaderboard(limit?: number) {
    return this.request(`/users/leaderboard${limit ? `?limit=${limit}` : ''}`);
  }

  async getUser(id: string) {
    return this.request(`/users/${id}`);
  }

  async updateProfile(data: any) {
    return this.request('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async getUsers(params?: any) {
    const queryString = params ? new URLSearchParams(params).toString() : '';
    return this.request(`/users${queryString ? `?${queryString}` : ''}`);
  }
}

export const apiService = new ApiService();