export default function RewardProgress() {
  const current = 8500;
  const max = 10000;

  const checkpoints = [
    { id: "A", value: 5000 },
    { id: "B", value: 7500 },
    { id: "C", value: 10000 }
  ];


  const getPercent = (value :number) => {
    const p = (value / max) * 100;
    return p;
  };

  return (
<div className="pl-4 pr-8">
      <div className="relative w-full max-w-xl mx-auto py-12 ">
      {/* progress bar */}
      <div className="relative h-3 bg-orange-200 rounded-full">
        <div
          className="h-full bg-orange-500 rounded-full"
          style={{ width: `${(current / max) * 100}%` }}
        />
      </div>

      {checkpoints.map((cp) => {
        return (
          <div
            key={cp.id}
            className="absolute flex flex-col items-center"
            style={{
              left: `${getPercent(cp.value)}%`,
              transform: "translateX(-50%) translateY(-50%)"
            }}
          >
            <div className="mb-3 text-xs text-gray-500">
              {cp.value.toLocaleString()}
            </div>

            <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-green-300`}>
              {"✓"}
            </div>

            <button className={`mt-3 px-2 py-1 rounded-full text-xs font-medium min-w-15 bg-red-400`}>
              รับรางวัล
            </button>
          </div>
        );
      })}
    </div>
</div>
  );
}
