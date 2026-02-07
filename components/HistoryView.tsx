"use client";
import { useEffect, useState } from "react";
import HistoryList from "./HistoryList";
import { useHistoryStore } from "@/stores/history.store";

type HistoryType = "PLAY" | "REWARD";

const HistoryView = () => {
  const [type, setType] = useState<HistoryType>("PLAY");
  const { fetchHistory, loading } = useHistoryStore();

  useEffect(() => {
    fetchHistory(type);
  }, [type]);

  return (
    <div className=" w-dvw grow md:max-w-100 overflow-auto text-black relative">
      <div className="w-full h-14 border-b-2 border-gray-200 flex items-center gap-2 p-2 sticky top-0 bg-white">
        <button
          className={`p-2 border rounded-full text-sm hover:shadow-md ${type === "PLAY" ? "text-red-600 border-red-600" : "text-gray-600 border-gray-600"}`}
          onClick={() => setType("PLAY")}
        >
          ประวัติการเล่น
        </button>
        <button
          className={`p-2 border rounded-full text-sm hover:shadow-md ${type === "REWARD" ? "text-red-600 border-red-600" : "text-gray-600 border-gray-600"}`}
          onClick={() => setType("REWARD")}
        >
          ประวัติรางวัล
        </button>
      </div>
      {loading ? (
        <div className="p-4 text-center">กำลังโหลด...</div>
      ) : (
        <HistoryList type={type} />
      )}
    </div>
  );
};

export default HistoryView;
