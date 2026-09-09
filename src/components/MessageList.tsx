import { dummyMessages } from "@/data/dummyMessages"
import MessageBubble from "./MessageBubble";
import { useEffect, useRef } from "react";


function MessageList({chatId}:{chatId:number}){

     const bottomRef = useRef<HTMLDivElement>(null);
     const messages = dummyMessages.filter((msg)=> msg.chatId === chatId);
     
     // scroll to newest message whenever the chat or messages change
       useEffect(() => {
           bottomRef.current?.scrollIntoView({ behavior: "smooth" });
       }, [chatId, messages.length]);

    return(
      <div className="flex flex-col flex-4 min-h-0 overflow-y-auto p-4 
      scrollbar-thin 
      scrollbar-thumb-gray-600 
      scrollbar-track-transparent gap-2">


         {messages.map((msg)=>(<MessageBubble key={msg.id} message={msg}/>))}
        <div ref={bottomRef} />
      </div>
    )
}


export default MessageList