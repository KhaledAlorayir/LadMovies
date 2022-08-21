import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Favs = (set) => ({
  favs: [],
  addFav: (movie) =>
    set((state) => {
      const exist = state.favs.find((m) => m.id === movie.id);
      if (exist) return { favs: state.favs.filter((m) => m.id !== movie.id) };
      return { favs: [...state.favs, movie] };
    }),
  clearFav: () => set({ favs: [] }),
});

export const useFavs = create(
  persist(devtools(Favs), {
    name: "LadMovies",
    getStorage: () => AsyncStorage,
  })
);
