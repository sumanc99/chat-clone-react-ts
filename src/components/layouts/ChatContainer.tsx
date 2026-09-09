import { useState } from "react"
import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"
import type { Message } from "@/interfaces/Message"
import { dummyMessages } from "@/data/dummyMessages"


function ChatContainer() {

  const [selectedChatId, setSelectedChatId] = useState<number|null>(null)
  const [selectedChatName, setSelectedChatName] = useState<string|null>(null)

   const [messages, setMessages] = useState<Message[]>(dummyMessages);
    function handleSendMessage(newMsg: Message) {
        setMessages([...messages, newMsg]);
    }

  return (
    <div className="flex flex-1 min-h-0 rounded ">
        {/* left panel */}
        <LeftPanel 
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
          onSelectChatName ={setSelectedChatName}
          messages={messages}
        />
        {/* right panel */}
        <RightPanel 
          selectedChatId={selectedChatId} 
          selectedChatName={selectedChatName}
          messages={messages}
          onSendMessage={handleSendMessage}
        />
    </div>
  )
}

export default ChatContainer
