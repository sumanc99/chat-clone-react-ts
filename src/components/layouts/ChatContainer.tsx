import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"


function ChatContainer() {
  return (
    <div className="flex flex-1 min-h-0 rounded ">
        {/* left panel */}
        <LeftPanel/>
        {/* right panel */}
        <RightPanel/>
    </div>
  )
}

export default ChatContainer
