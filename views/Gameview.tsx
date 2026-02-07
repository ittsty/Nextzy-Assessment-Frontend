"use client";

import GetScoreModel from "@/components/GetScoreModel";
import { playService } from "@/services/play.service";
import { useScoreStore } from "@/stores/score.store";
import { useUserStore } from "@/stores/user.store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type GameState = "START" | "PLAYING" | "FINISH";
const ALL_POINTS = [300, 500, 1000, 3000];

const Gameview = () => {
  const router = useRouter();
  const uid = useUserStore((s) => s.uid);
  const [gameState, setGameState] = useState<GameState>("START");
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const [visiblePoints, setVisiblePoints] = useState<number[]>(ALL_POINTS);
  const [fadedPoints, setFadedPoints] = useState<number[]>([]);
  const [openReward, setOpenReward] = useState(false);
  const { totalScore, fetchScore } = useScoreStore();
  const handlePlay = async () => {
    try {
      setGameState("PLAYING");
      setVisiblePoints(ALL_POINTS);
      setFadedPoints([]);

      const res = await playService.play(uid);
      const finalPoint = res.data.point;

      let remaining = [...ALL_POINTS];

      const interval = setInterval(() => {
        if (remaining.length <= 1) {
          clearInterval(interval);

          setSelectedPoint(finalPoint);
          setGameState("FINISH");
          setOpenReward(true);
          fetchScore(uid);
          return;
        }

        const candidates = remaining.filter((p) => p !== finalPoint);
        const fadeOne =
          candidates[Math.floor(Math.random() * candidates.length)];

        setFadedPoints((prev) => [...prev, fadeOne]);
        remaining = remaining.filter((p) => p !== fadeOne);
      }, 350);
    } catch (err) {
      console.error(err);
      alert("สุ่มคะแนนไม่สำเร็จ");
      setGameState("START");
    }
  };

  const resetGame = () => {
    setGameState("START");
    setSelectedPoint(null);
    setFadedPoints([]);
    setVisiblePoints(ALL_POINTS);
  };
  useEffect(() => {
    fetchScore(uid);
  }, [fetchScore]);
  return (
    <main className="h-dvh bg-linear-to-b from-orange-50 to-orange-100 flex flex-col justify-end items-center">
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold text-black">
          คะแนนสะสม {(totalScore ?? 0).toLocaleString()}/10,000
        </h1>
      </div>
      <div className="flex gap-4 justify-center mt-auto">
        {visiblePoints.map((p) => {
          const isFaded = fadedPoints.includes(p);
          const isWinner = selectedPoint === p;

          return (
            <div
              key={p}
              className={`px-4 py-2 rounded-full font-bold text-white transition-all duration-500
              ${isFaded ? "opacity-20 scale-90 blur-[1px]" : "opacity-100 scale-100"}
              ${isWinner ? "bg-red-500 scale-125 shadow-lg" : "bg-green-500"}`}
            >
              {p}
            </div>
          );
        })}
      </div>

      <div className="mb-auto mt-6">
        {gameState === "START" && (
          <button
            className="px-6 py-2 rounded-full bg-red-500 text-white font-bold hover:shadow-md disabled:opacity-40"
            onClick={handlePlay}
          >
            สุ่มคะแนน
          </button>
        )}

        {gameState === "PLAYING" && (
          <button className="px-6 py-2 rounded-full bg-red-300 text-white font-bold cursor-wait">
            กำลังสุ่ม...
          </button>
        )}
      </div>

      <div className="w-dvw md:max-w-100 p-4 bg-white rounded-t-2xl shadow-lg h-22 ">
        <button
          className=" rounded-full w-full h-12 bg-yellow-400 text-white text-xl font-bold hover:shadow-md"
          onClick={() => router.push("/")}
        >
          ไปหน้าหลัก
        </button>
      </div>

      <GetScoreModel
        isOpen={openReward}
        onClose={() => {
          setOpenReward(false);
          resetGame();
          fetchScore(uid);
        }}
        point={selectedPoint ?? 0}
      />
    </main>
  );
};

export default Gameview;
