import { create } from "zustand";

type AlphabetStore = {
  activeLetter: string;
  setLetter: (letter: string) => void;
  reset: () => void;
};

export const useAlphabetStore = create<AlphabetStore>((set) => ({
  activeLetter: "",
  setLetter: (letter) =>
    set((s) => ({ activeLetter: s.activeLetter === letter ? "" : letter })),
  reset: () => set({ activeLetter: "" }),
}));
