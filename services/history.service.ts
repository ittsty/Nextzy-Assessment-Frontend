export const historyService = {
  getPlayHistory: async () => {
    try {
      const res = await fetch("http://localhost:3000/history/play");
      return res.json();
    } catch (error) {}
  },
  getRewardHistory: async () => {
    try {
      const res = await fetch("http://localhost:3000/history/reward");
      return res.json();
    } catch (error) {}
  },
};
