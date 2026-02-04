const HistoryList = () => {
  return (
    <div className="border-b-2 border-gray-200 py-4 px-6 flex gap-4">
      <img src="favicon.ico" className="w-12" />
      <div className="h-full flex flex-col gap-2">
        {/* mockup  */}
        <h2 className="font-semibold"> ได้รับ 1,000 คะแนน</h2>
        <h2 className="font-light text-sm text-gray-600"> ได้รับเมื่อ 14/02/20 19:30น.</h2>
      </div>
    </div>
  );
};

export default HistoryList;
