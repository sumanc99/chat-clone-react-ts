import { useState } from "react"
import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"


function ChatContainer() {

  const [selectedChatId, setSelectedChatId] = useState<number|null>(null)

  return (
    <div className="flex flex-1 min-h-0 rounded ">
        {/* left panel */}
        <LeftPanel selectedChatId={selectedChatId} onSelectChat={setSelectedChatId}/>
        {/* right panel */}
        <RightPanel selectedChatId={selectedChatId}/>
    </div>
  )
}

export default ChatContainer
