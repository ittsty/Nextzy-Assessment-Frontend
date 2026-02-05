type HistoryItemProps = {
  point: number;
  created_at: string;
};


const HistoryItem = ({ point, created_at }: HistoryItemProps) => {
  return (
    <div className="border-b-2 border-gray-200 py-4 px-6 flex gap-4">
      <img src="favicon.ico" className="w-12" />
      <div className="h-full flex flex-col gap-2">
        <h2 className="font-semibold"> เล่นได้ {point} คะแนน</h2>
        <h2 className="font-light text-sm text-gray-600">
          ได้รับเมื่อ {created_at}.
        </h2>
      </div>
    </div>
  );
};

export default HistoryItem;
