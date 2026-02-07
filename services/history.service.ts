const API = process.env.NEXT_PUBLIC_BACKEND_API;
export const historyService = {
  getPlayHistory: async () => {
    try {
      const res = await fetch(`${API}/history/play`);
      return res.json();
    } catch (error) {
      throw new Error("Failed to fetch play history");
    }
  },
  getRewardHistory: async () => {
    try {
      const res = await fetch(`${API}/history/reward`);
      return res.json();
    } catch (error) {
      throw new Error("Failed to fetch reward history");
    }
  },
};
