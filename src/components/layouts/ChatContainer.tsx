import { useState } from "react"
import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"


function ChatContainer() {

  const [selectedChatId, setSelectedChatId] = useState<number|null>(null)
  const [selectedChatName, setSelectedChatName] = useState<string|null>(null)

  return (
    <div className="flex flex-1 min-h-0 rounded ">
        {/* left panel */}
        <LeftPanel 
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
          onSelectChatName ={setSelectedChatName}
        />
        {/* right panel */}
        <RightPanel selectedChatId={selectedChatId} selectedChatName={selectedChatName}/>
    </div>
  )
}

export default ChatContainer
