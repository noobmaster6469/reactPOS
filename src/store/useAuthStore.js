import { LogIn } from "lucide-react";
import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,

  checkAuth: async () => {
    set({ authUser: true });
  },

  LogIn: async () => {},
  SingUp: async () => {},
}));
