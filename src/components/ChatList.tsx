import { dummyChats } from "@/data/dummyChats"
import ChatTile from "./ChatTile"

interface ChatListProps{
   selectedChatId : number|null
   onSelectChat:(id:number)=>void
   onSelectChatName:(name:string)=>void;
}

function ChatList({selectedChatId,onSelectChat,onSelectChatName}:ChatListProps) {
  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
       {dummyChats.map((chat)=>(
           
               <ChatTile
                id= {chat.id}
                selectedChatId={selectedChatId}
                onSelectChat={onSelectChat}
                onSelectChatName= {onSelectChatName}
                key={chat.id}
                name={chat.name} 
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
