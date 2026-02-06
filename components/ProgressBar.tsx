"use client";

import { useState } from "react";
import ClaimRewardModel from "./ClaimRewardModel";

type ProgressBarProps = {
  current: number;
  max: number;
};

type Checkpoint = {
  id: string;
  value: number;
};

export default function RewardProgress({ current, max }: ProgressBarProps) {
  const checkpoints = [
    { id: "A", value: 5000 },
    { id: "B", value: 7500 },
    { id: "C", value: 10000 },
  ];

  const getPercent = (value: number) => {
    const p = (value / max) * 100;
    return p;
  };

  const claimedRewardIds = ["A"];
  const getCheckpointState = (cp: Checkpoint) => {
    if (claimedRewardIds.includes(cp.id)) return "CLAIMED";
    if (current >= cp.value) return "ACTIVE";
    return "LOCKED";
  };

  const [openReward, setOpenReward] = useState<Checkpoint | null>(null);

  return (
    <div className="pl-4 pr-8">
      <div className="relative w-full max-w-xl mx-auto py-12 ">
        <div className="relative h-3 bg-orange-200 rounded-full">
          <div
            className="h-full bg-orange-500 rounded-full"
            style={{ width: `${(current / max) * 100}%` }}
          />
          <div
            className="absolute top-1/2 w-5 h-5 bg-red-500 rounded-full -translate-y-1/2 -translate-1/2"
            style={{ left: `${(current / max) * 100}%` }}
          />
          
        {checkpoints.map((cp) => {
          const state = getCheckpointState(cp);

          return (
            <div
              key={cp.id}
              className="absolute flex flex-col items-center -translate-y-1/2 -translate-x-1/2"
              style={{
                left: `${getPercent(cp.value)}%`,
              }}
            >
              <div className="mb-2 text-xs text-gray-500">
                {cp.value.toLocaleString()}
              </div>

              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center
                ${state === "CLAIMED" && "bg-green-600 text-white"}
                ${state === "ACTIVE" && "bg-red-500"}
                ${state === "LOCKED" && "bg-gray-300"}`}
              >
                ✓
              </div>

              <button
                disabled={state !== "ACTIVE"}
                className={`mt-2 py-1 px-1 w-fit rounded-full text-[10px] font-medium whitespace-nowrap transition
                ${state === "CLAIMED" && "bg-red-200 text-white cursor-default"}
                ${state === "ACTIVE" && "bg-red-500 text-white hover:shadow-md"}
                ${state === "LOCKED" && "bg-gray-300 text-gray-400 cursor-not-allowed"}`}
                onClick={() => setOpenReward(cp)}
              >
                {state === "CLAIMED" && `ได้รางวัล ${cp.id} แล้ว`}
                {state === "ACTIVE" && `กดรับรางวัล ${cp.id}`}
                {state === "LOCKED" && `กดรับรางวัล ${cp.id}`}
              </button>
            </div>
          );
        })}
        </div>
      </div>

      <ClaimRewardModel
        isOpen={!!openReward}
        reward={openReward}
        onClose={() => setOpenReward(null)}
      />
    </div>
  );
}
