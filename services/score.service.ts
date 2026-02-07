export const scoreService = {
  getUserScore: async (uid: string) => {
    try {
      const res = await fetch(`http://localhost:3000/users/u1/point`);
      return res.json();
    } catch (error) {
      throw new Error("fetch point failed");
    }
  },
};
