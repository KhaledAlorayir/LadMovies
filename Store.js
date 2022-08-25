import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Favs = (set) => ({
  favs: [],
  addFav: (movie) =>
    set((state) => {
      const exist = state.favs.find((m) => m.id === movie.id);
      if (exist) {
        useAlert.getState().setAlert("movie has been removed!", 1);
        return { favs: state.favs.filter((m) => m.id !== movie.id) };
      }
      useAlert.getState().setAlert("movie has been added!", 1);
      return { favs: [...state.favs, movie] };
    }),
  clearFav: () =>
    set((state) => {
      if (state.favs.length > 0) {
        useAlert.getState().setAlert("cleared!", 1);
        return { favs: [] };
      }
      return {};
    }),
});

export const useFavs = create(
  persist(devtools(Favs), {
    name: "LadMovies",
    getStorage: () => AsyncStorage,
  })
);

export const useAlert = create((set) => ({
  alert: null,
  setAlert: (message, type) => set({ alert: { message, type } }),
  clearAlert: () => set({ alert: null }),
}));
