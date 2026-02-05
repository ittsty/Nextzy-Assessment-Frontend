export const mockPlayHistory = [
  {
    id: "ph_001",
    point: 100,
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

export const historyService = {
  getPlayHistory: async() => {
    return mockPlayHistory;
  },
};
