import ProgressBar from "./ProgressBar";

const RewardCard = () => {
  return (
    <div className="w-dvw md:max-w-100 min-h-58 bg-gray-100 text-black p-4">
      <div className=" bg-white rounded-2xl border-2 h-full flex flex-col justify-center text-end p-2">
        <h1> สะสมคะแนน</h1>
        <h2> คะแนนครบ 10,000 รับรางวัลใหญ่</h2>
        <h1 className=" text-xl font-semibold text-red-500"> 8,500/10,000</h1>
        <ProgressBar/>
      </div>
    </div>
  );
};

export default RewardCard;
