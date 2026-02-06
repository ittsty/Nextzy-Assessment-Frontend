import HistoryView from "@/components/HistoryView";
import ResetBotton from "@/components/ResetBotton";
import RewardCard from "@/components/RewardCard";

const Homeview = () => {
  return (
    <main className="h-dvh bg-white flex flex-col justify-end items-center">
      <RewardCard />
      <ResetBotton />
      <HistoryView />
      <div className="w-dvw md:max-w-100 p-4 bg-white rounded-t-2xl shadow-lg h-22 ">
        <button className=" rounded-full w-full h-12 bg-yellow-400 text-white text-xl font-bold hover:shadow-md">
          ไปเล่นเกม
        </button>
      </div>
    </main>
  );
};

export default Homeview;
