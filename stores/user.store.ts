import { create } from "zustand";
import { persist } from "zustand/middleware";
import { scoreService } from "@/services/score.service";

type UserState = {
  uid: string;
  initUser: () => Promise<void>;
  resetUser: () => Promise<void>;
};

/** 🔐 generate UID แบบปลอดภัยใน browser */
const generateUID = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return `u_${crypto.randomUUID()}`;
  }
  return `u_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
};

export const useUserStore = create(
  persist<UserState>(
    (set, get) => ({
      uid: "",

      initUser: async () => {
        let uid = get().uid;

        if (!uid) {
          uid = generateUID();
          set({ uid });
        }

        // 🔁 ยิง backend ให้แน่ใจว่ามี user
        await scoreService.getUserScore(uid);
      },

      resetUser: async () => {
        const uid = generateUID();
        set({ uid });

        await scoreService.getUserScore(uid);
      },
    }),
    {
      name: "user-storage",
    }
  )
);
