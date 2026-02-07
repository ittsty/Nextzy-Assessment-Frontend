export const rewardService = {

  redeemReward: async (uid: string, rewardID: string) => {
    const res = await fetch("http://localhost:3000/redeem", {
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
