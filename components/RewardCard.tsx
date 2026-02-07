"use client";

import { useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { useScoreStore } from "@/stores/score.store";
import { useUserStore } from "@/stores/user.store";

const RewardCard = () => {
  const { totalScore, loading, fetchScore } = useScoreStore();
  const uid = useUserStore((s) => s.uid);

  useEffect(() => {
    if (!uid) return;
    fetchScore(uid);
  }, [uid, fetchScore]);

  return (
    <div className="w-dvw md:max-w-100 max-h-58 bg-gray-100 text-black p-4">
      <div className="bg-white rounded-2xl border-2 h-full flex flex-col justify-center text-end px-2 py-6">
        <h1 className="text-lg font-semibold">สะสมคะแนน</h1>
        <h2 className="text-sm">คะแนนครบ 10,000 รับรางวัลใหญ่</h2>

        {loading ? (
          <div className="text-gray-400">กำลังโหลดคะแนน...</div>
        ) : (
          <h1 className="text-2xl font-semibold text-red-500">
            {(totalScore ?? 0).toLocaleString()}/10,000
          </h1>
        )}

        <ProgressBar uid={uid} />
      </div>
    </div>
  );
};

export default RewardCard;
