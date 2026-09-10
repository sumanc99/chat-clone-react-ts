import { dummyChats } from "@/data/dummyChats"
import ChatTile from "./ChatTile"
import type { Message } from "@/interfaces/Message"
import { useChatStore } from "@/store/chatStore"



function ChatList() {

  const messages = useChatStore((state)=> state.messages);

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
       {dummyChats.map((chat)=>{
        const chatMessages = messages.filter((m) => m.chatId === chat.id);
        const lastMessage = chatMessages[chatMessages.length - 1];

         return(<ChatTile
              id= {chat.id}
              key={chat.id}
              name={chat.name} 
              message={lastMessage?lastMessage.text:chat.message}
              isDelivered={lastMessage?lastMessage.isDelivered:chat.isDelivered}
              unreadCount={chat.unreadCount}
              time={chat.time}
            
              />
             
          )
        }
      )}
    </div>
  )
}

export default ChatList
