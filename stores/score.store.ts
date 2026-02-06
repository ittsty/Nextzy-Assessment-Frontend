import { scoreService } from "@/services/score.service";
import { create } from "zustand";

type ScoreState = {
  totalScore: number;
  loading: boolean;
  error?: string;
  fetchScore: (uid: string) => Promise<void>;
  clear: () => void;
};

export const useScoreStore = create<ScoreState>((set) => ({
  totalScore: 0,
  loading: false,
  error: undefined,
  fetchScore: async (uid) => {
    try {
      set({ loading: true, error: undefined });
      const res = await scoreService.getUserScore(uid);
      set({ totalScore: res.totalpoint });
    } catch (error) {
      set({ error: "ไม่สามารถโหลดประวัติได้" });
    } finally {
      set({ loading: false });
    }
  },
  clear: () =>
    set({
      totalScore: 0,
      loading: false,
      error: undefined,
    }),
}));
