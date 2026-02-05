import { useHistoryStore } from "@/stores/history.store";
import HistoryItem from "./HistoryItem";

type HistoryType = "PLAY" | "REWARD";

type HistoryListProps = {
  type: HistoryType;
};

const HistoryList = ({ type }: HistoryListProps) => {
  const { playHistory, rewardHistory } = useHistoryStore();
  const data = type === "PLAY" ? playHistory : rewardHistory;

  if (data.length === 0) {
    return <div className="p-4 text-center text-gray-500">ไม่มีข้อมูล</div>;
  }
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <HistoryItem point={item.point} created_at={item.created_at} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
