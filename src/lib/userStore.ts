import { create } from "zustand";

interface UserProfile {
  name: string;
  email: string;
  password: string;
}

interface UserStore {
  profile: UserProfile | null;
  accessToken: string | null;
  setProfile: (profile: UserProfile) => void;
  clearProfile: () => void;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  profile: null,
  accessToken:
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null,
  setProfile: (profile) => set({ profile }),
  clearProfile: () => set({ profile: null }),
  setAccessToken: (token) => {
    set({ accessToken: token });
    if (typeof window !== "undefined") {
      localStorage.setItem("access_token", token);
    }
  },
  clearAccessToken: () => {
    set({ accessToken: null });
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
    }
  },
}));
