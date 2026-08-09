"use client";

import { create } from "zustand";

export type NavView = "home" | "network" | "jobs";

interface AppState {
  activeView: NavView;
  setActiveView: (view: NavView) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeView: "home",
  setActiveView: (view) => set({ activeView: view }),
}));
