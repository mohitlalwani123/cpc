import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

interface Post {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    achievements: Array<{ title: string; icon: string }>;
  };
  category: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo: string;
  isLiked: boolean;
  tags: string[];
}

export const usePosts = (filters?: any) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await apiService.getPosts(filters);
        setPosts(response.posts);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [filters]);

  const likePost = async (postId: string) => {
    try {
      const response = await apiService.likePost(postId);
      setPosts(posts.map(post => 
        post.id === postId 
          ? { ...post, likes: response.likes, isLiked: response.isLiked }
          : post
      ));
    } catch (err: any) {
      setError(err.message);
    }
  };

  const addComment = async (postId: string, content: string) => {
    try {
      await apiService.addComment(postId, content);
      // Refetch posts to get updated comment count
      const response = await apiService.getPosts(filters);
      setPosts(response.posts);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { posts, loading, error, likePost, addComment };
};