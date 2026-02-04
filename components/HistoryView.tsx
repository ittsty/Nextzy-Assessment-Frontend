import HistoryList from "./HistoryList"

const HistoryView = () => {
  return (
    <div className=" w-dvw grow md:max-w-100 overflow-auto text-black relative">
        <div className="w-full h-14 border-b-2 border-gray-200 flex items-center gap-2 p-2 sticky top-0 bg-white">
            <button className="p-2 text-gray-600 border-gray-600 border rounded-full text-sm">ประวัติการเล่น</button>
            <button className="p-2 text-gray-600 border-gray-600 border rounded-full text-sm">ประวัติรางวัล</button>
        </div>
        <HistoryList/>
        <HistoryList/>
        <HistoryList/>
        <HistoryList/>
        <HistoryList/>
        <HistoryList/>
        <HistoryList/>
        <HistoryList/>
        <HistoryList/>
        <HistoryList/>
        <HistoryList/>
    </div>
  )
}

export default HistoryView