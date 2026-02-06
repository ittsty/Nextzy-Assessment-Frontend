type RewardHisItemProps = {
  rewarddesc: string;
  created_at: string;
};

const RewardHistoryItem = ({ rewarddesc, created_at }: RewardHisItemProps) => {
  const timestamp = new Date(created_at);

  return (
    <div className="border-b-2 border-gray-200 py-4 px-6 flex gap-4">
      <img src="favicon.ico" className="w-12" />
      <div className="h-full flex flex-col gap-2">
        <h2 className="font-semibold">
          ได้รับรางวัล {rewarddesc}
        </h2>
        <h2 className="font-light text-sm text-gray-600">
          ได้รับเมื่อ{" "}
          {timestamp.toLocaleString("th-TH", {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
          {"  "}น.
        </h2>
      </div>
    </div>
  );
};

export default RewardHistoryItem;
