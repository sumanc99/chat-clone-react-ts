import ChatList from "../ChatList"
import LeftPanelBar from "../LeftPanelBar"
import SearchBar from "../SearchBar"


function LeftPanel() {
  return (
     <div className="border-r border-l  w-[35%] p-3 flex flex-col gap-1 min-h-0">
        {/* left panel bar */}
        <LeftPanelBar/>
        {/* search bar */}
        <SearchBar/>
        {/* chatlist */}
        <ChatList/>
     </div>
  )
}

export default LeftPanel
