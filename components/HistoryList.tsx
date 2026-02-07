import { useHistoryStore } from "@/stores/history.store";
import HistoryItem from "./HistoryItem";
import RewardHistoryItem from "./RewardHistoryItem";

type HistoryType = "PLAY" | "REWARD";

type HistoryListProps = {
  type: HistoryType;
};

const HistoryList = ({ type }: HistoryListProps) => {
  const { playHistory, rewardHistory } = useHistoryStore();

  if (type === "PLAY") {
    if (playHistory.length === 0) {
      return <div className="p-4 text-center text-gray-500">ไม่มีข้อมูล</div>;
    }
    return (
      <ul>
        {playHistory.map((item) => (
          <li key={item.id}>
            <HistoryItem point={item.point} created_at={item.created_at} />
          </li>
        ))}
      </ul>
    );
  }

  if (type === "REWARD") {
    if (rewardHistory.length === 0) {
      return <div className="p-4 text-center text-gray-500">ไม่มีข้อมูล</div>;
    }

    return (
      <ul>
        {rewardHistory.map((item) => (
          <li key={item.id}>
            <RewardHistoryItem rewarddesc={item.rewardid} created_at={item.created_at}/>
          </li>
        ))}
      </ul>
    );
  }
};
export default HistoryList;
