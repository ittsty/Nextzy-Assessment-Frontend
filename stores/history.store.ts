import { historyService } from "@/services/history.service";
import { create } from "zustand";

type HistoryType = "PLAY" | "REWARD";

type PlayHistory = {
  id: string;
  point: number;
  created_at: string;
};

type RewardHistory = {
  id: string;
  rewardid: string;
  rewarddesc: string;
  created_at: string;
};

type HistoryState = {
  playHistory: PlayHistory[];
  rewardHistory: RewardHistory[];
  loading: boolean;
  error?: string;

  fetchHistory: (type: HistoryType) => Promise<void>;
  clear: () => void;
};

export const useHistoryStore = create<HistoryState>((set) => ({
  playHistory: [],
  rewardHistory: [],
  loading: false,
  error: undefined,

  fetchHistory: async (type) => {
    try {
      set({ loading: true, error: undefined });
      if (type === "PLAY") {
        const data = await historyService.getPlayHistory();
        set({ playHistory: data.data });
      }
      if (type === "REWARD") {
        const data = await historyService.getRewardHistory();
        set({ rewardHistory: data.data });
      }
    } catch (err) {
      set({ error: "ไม่สามารถโหลดประวัติได้" });
    } finally {
      set({ loading: false });
    }
  },

  clear: () =>
    set({
      playHistory: [],
      rewardHistory: [],
      loading: false,
      error: undefined,
    }),
}));
