import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'navhub_favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      console.log('Loading favorites from localStorage:', stored);
      const parsed = stored ? JSON.parse(stored) : [];
      console.log('Parsed favorites:', parsed);
      return parsed;
    } catch (error) {
      console.error('Error loading favorites:', error);
      return [];
    }
  });

  useEffect(() => {
    console.log('Saving favorites to localStorage:', favorites);
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      console.log('Favorites saved successfully');
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }, [favorites]);

  const toggleFavorite = (slug: string | undefined) => {
    if (!slug) return;
    console.log('toggleFavorite called with slug:', slug);
    setFavorites(prev => {
      const newFavorites = prev.includes(slug) 
        ? prev.filter(fav => fav !== slug)
        : [...prev, slug];
      console.log('New favorites:', newFavorites);
      return newFavorites;
    });
  };

  const isFavorite = (slug: string | undefined) => {
    if (!slug) return false;
    const result = favorites.includes(slug);
    console.log(`isFavorite(${slug}):`, result);
    return result;
  };

  return { favorites, toggleFavorite, isFavorite };
};
