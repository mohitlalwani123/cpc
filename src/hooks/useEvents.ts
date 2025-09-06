import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  participants: number;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  status: 'upcoming' | 'live' | 'ended';
  prizePool?: string;
  category: string;
  maxParticipants: number;
}

export const useEvents = (filters?: any) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await apiService.getEvents(filters);
        setEvents(response.events);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [filters]);

  return { events, loading, error, refetch: () => fetchEvents() };
};

export const useEvent = (id: string) => {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await apiService.getEvent(id);
        setEvent(response);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  return { event, loading, error };
};