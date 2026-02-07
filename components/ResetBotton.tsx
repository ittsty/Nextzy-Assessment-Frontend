import { useHistoryStore } from "@/stores/history.store";
import { useScoreStore } from "@/stores/score.store";
import { useUserStore } from "@/stores/user.store";

const ResetBotton = () => {
  const resetUser = useUserStore((s) => s.resetUser);
  const resetScore = useScoreStore((s) => s.clear)
  const resetHistory = useHistoryStore((s) => s.clear)
  const handleReset = async () => {
    await resetUser();
    await resetScore();
    await resetHistory();
  };
  return (
    <button
      className="my-4 bg-blue-600 px-3 py-2 rounded-full text-md font-bold"
      onClick={handleReset}
    >
      RESET
    </button>
  );
};

export default ResetBotton;
