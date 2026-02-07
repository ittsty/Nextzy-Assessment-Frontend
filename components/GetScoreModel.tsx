"use client";

type scoreModelProps = {
  isOpen: boolean;
  onClose: () => void;
  point: number;
};

const GetScoreModel = ({ isOpen, onClose, point }: scoreModelProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-[320px] rounded-2xl bg-white p-6 shadow-xl text-center">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          x
        </button>

        <h2 className="text-xl font-semibold text-gray-800">ได้รับ</h2>
        <p className="mt-1 text-gray-600">{point.toLocaleString()} คะแนน</p>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-yellow-400 py-2 font-medium text-white hover:shadow-lg hover:opacity-90 transition"
        >
          ปิด
        </button>
      </div>
    </div>
  );
};

export default GetScoreModel;
