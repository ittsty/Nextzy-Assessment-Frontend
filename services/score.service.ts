const mockScores = [
  {
    uid: "user_001",
    totalpoint: 8000,
  },
  {
    uid: "user_002",
    totalpoint: 300,
  },
];

export const scoreService = {
  getUserScore: async (uid: string) => {
    return new Promise<{ uid: string; totalpoint: number }>((resolve, reject) => {
      setTimeout(() => {
        const userScore = mockScores.find((s) => s.uid === uid);

        if (!userScore) {
          reject(new Error("User not found"));
        }

        resolve(userScore!);
      }, 400);
    });
  },
};
