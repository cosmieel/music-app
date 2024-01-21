import { Track } from '../../types/types';

export const trackSearch = (query: string, tracksList: Track[]): Track[] => {
  if (!query) return tracksList;

  const lowerCaseQuery = query.toLowerCase();

  return tracksList.filter(
    track =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery),
  );
};