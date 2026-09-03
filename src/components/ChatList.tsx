import { dummyChats } from "@/data/dummyChats"
import ChatTile from "./ChatTile"


function ChatList() {
  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
       {dummyChats.map((chat)=>(
            <ChatTile
            key={chat.id}
            name={chat.name} 
            isActive={chat.isActive}
            message={chat.message}
            isDelivered={chat.isDelivered}
            unreadCount={chat.unreadCount}
            time={chat.time}
            />
        ))}
    </div>
  )
}

export default ChatList
