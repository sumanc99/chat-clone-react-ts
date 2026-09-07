import ChatList from "../ChatList"
import LeftPanelBar from "../LeftPanelBar"
import SearchBar from "../SearchBar"

interface LeftPanelProps{
   selectedChatId : number|null;
   onSelectChat:(id:number)=>void;
}

function LeftPanel({selectedChatId,onSelectChat}:LeftPanelProps) {
  return (
     <div className=" border-r w-[35%] p-3 flex flex-col gap-1 min-h-0">
        {/* left panel bar */}
        <LeftPanelBar/>
        {/* search bar */}
        <SearchBar/>
        {/* chatlist */}
        <ChatList selectedChatId={selectedChatId} onSelectChat={onSelectChat}/>
     </div>
  )
}

export default LeftPanel
