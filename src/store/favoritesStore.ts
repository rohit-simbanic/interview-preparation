import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoriteIds: [],
      toggleFavorite: (id) => {
        const { favoriteIds } = get();
        const isFav = favoriteIds.includes(id);
        const nextIds = isFav
          ? favoriteIds.filter((favId) => favId !== id)
          : [...favoriteIds, id];
        set({ favoriteIds: nextIds });
      },
    }),
    {
      name: 'devprep-favorites', // unique key for localStorage
    }
  )
);
