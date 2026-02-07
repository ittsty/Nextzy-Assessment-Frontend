const API = process.env.NEXT_PUBLIC_BACKEND_API;
export const scoreService = {
  getUserScore: async (uid: string) => {
    try {
      const res = await fetch(`${API}/users/${uid}/point`);
      return res.json();
    } catch (error) {
      throw new Error("fetch point failed");
    }
  },
};
