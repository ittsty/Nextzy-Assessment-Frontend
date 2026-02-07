export const playService = {
  play: async (uid: string) => {
    const res = await fetch("http://localhost:3000/play", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid }),
    });
    if (!res.ok) {
      const err = await res.json();
      throw err;
    }

    return res.json();
  },
};
