import type { Message } from "@/interfaces/Message";
import { useState } from "react"


interface MessageInputProps{
    currentChatId:number
    onSendMessage:(msg:Message)=>void
}

function MessageInput({currentChatId,onSendMessage}:MessageInputProps) {

    const [userInput, setUserInput] = useState("");

    function handleSend(){

        if(!userInput.trim()) return;
        onSendMessage({
            id: Date.now(),
            chatId:currentChatId,
            senderId: "me",  // "me" or the other person's id — determines bubble side
            text:userInput,
            timestamp: new Date().toISOString(), // ISO string, e.g. "2026-08-31T14:22:00"
        })

        setUserInput("");
    }


  return (
    <div className="p-3 flex items-center gap-2 ">
        <input
        type="text"
        value={userInput}
        onChange={(e) => (setUserInput(e.target.value))}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type a message"
        className="flex-1 bg-muted rounded-full px-4 py-2 outline-none"
      />
    <button onClick={handleSend} className="p-2 rounded-full bg-emerald-600 text-white">
        Send
      </button>
    </div>
  )
}

export default MessageInput
