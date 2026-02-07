const API = process.env.NEXT_PUBLIC_BACKEND_API;
export const rewardService = {
  redeemReward: async (uid: string, rewardID: string) => {
    const res = await fetch(`${API}/redeem`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid, rewardID }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw err;
    }

    return res.json();
  },
};
