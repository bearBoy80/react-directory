import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'navhub_favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() => {
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

  const toggleFavorite = (id: number) => {
    console.log('toggleFavorite called with id:', id);
    setFavorites(prev => {
      const newFavorites = prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id];
      console.log('New favorites:', newFavorites);
      return newFavorites;
    });
  };

  const isFavorite = (id: number) => {
    const result = favorites.includes(id);
    console.log(`isFavorite(${id}):`, result);
    return result;
  };

  return { favorites, toggleFavorite, isFavorite };
};
