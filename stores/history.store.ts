import { historyService } from "@/services/history.service";
import { create } from "zustand";

export type HistoryType = "PLAY" | "REWARD";

type PlayHistory = {
  id: string;
  point: number;
  created_at: string;
};

type HistoryState = {
  playHistory: PlayHistory[];
  rewardHistory: [];
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
      console.log("loading");

      if (type === "PLAY") {
        console.log("using playhistory");
        const data = await historyService.getPlayHistory();
        set({ playHistory: data });
        console.log(data)
      }
      if (type === "REWARD") {
        console.log("using rewardhistory");
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
