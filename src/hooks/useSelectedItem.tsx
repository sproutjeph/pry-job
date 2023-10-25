import { create } from "zustand";

type State = {
  savedItems: string[];
  saveItem: (promoCode: string) => void;
};

const useSelectedItemStore = create<State>((set) => ({
  savedItems: [],

  saveItem: (item: string) => {
    set((state) => ({
      savedItems: [...state.savedItems, item],
    }));
  },
}));

export default useSelectedItemStore;
