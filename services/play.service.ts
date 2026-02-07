const API = process.env.NEXT_PUBLIC_BACKEND_API;
export const playService = {
  play: async (uid: string) => {
    const res = await fetch(`${API}/play`, {
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
