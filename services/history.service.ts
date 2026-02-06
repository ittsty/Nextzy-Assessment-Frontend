const mockPlayHistory = [
  {
    id: "ph_001",
    point: 1000,
    created_at: "2024-01-01T10:00:00Z",
  },
  {
    id: "ph_002",
    point: 300,
    created_at: "2024-01-02T14:30:00Z",
  },
  {
    id: "ph_003",
    point: 50,
    created_at: "2024-01-03T09:15:00Z",
  },
  {
    id: "ph_004",
    point: 500,
    created_at: "2024-01-04T18:45:00Z",
  },
];

const mockRewardHistory = [
  {
    id: "rh_001",
    rewardid: "reward_001",
    rewarddesc: "A",
    created_at: "2024-01-01T11:00:00Z",
  },
  {
    id: "rh_002",
    rewardid: "reward_002",
    rewarddesc: "B",
    created_at: "2024-01-03T16:20:00Z",
  },
  {
    id: "rh_003",
    rewardid: "reward_003",
    rewarddesc: "C",
    created_at: "2024-01-05T19:45:00Z",
  },
  {
    id: "rh_004",
    rewardid: "reward_001",
    rewarddesc: "A",
    created_at: "2024-01-07T09:10:00Z",
  },
];

export const historyService = {
  getPlayHistory: async () => {
    return mockPlayHistory;
  },
  getRewardHistory: async () => {
    return mockRewardHistory;
  },
};
