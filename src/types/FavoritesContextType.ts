export type FavoritesContextType = {
  storedFavorites: number[];
  toggleFavorite: (id: number) => void;
};
