type HistoryItemProps = {
  point: number;
  created_at: string;
};

const HistoryItem = ({ point, created_at }: HistoryItemProps) => {
  const timestamp = new Date(created_at);

  return (
    <div className="border-b-2 border-gray-200 py-4 px-6 flex gap-4">
     <div className="w-12 h-12 rounded-full bg-linear-to-br from-red-400 to-red-700"/>
      <div className="h-full flex flex-col gap-2">
        <h2 className="font-semibold"> เล่นได้ {point.toLocaleString()} คะแนน</h2>
        <h2 className="font-light text-sm text-gray-600">
          เล่นเมื่อ{" "}
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

export default HistoryItem;