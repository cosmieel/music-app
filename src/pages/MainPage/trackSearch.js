export const trackSearch = (query, tracksList) => {
  if (!query) return tracksList;

  const lowerCaseQuery = query.toLowerCase();

  return tracksList.filter(
    track =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery),
  );
};