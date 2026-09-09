import type { Message } from "@/interfaces/Message";
import { CheckCheck } from "lucide-react";



function MessageBubble({message}:{message:Message}) {
    const isMe = message.senderId === "me";
  return (
    <div className={`flex ${isMe ? "justify-end":"justify-start" }`}>
     <div
        className={`max-w-[65%] rounded-lg px-3 py-2 text-sm ${
          isMe ? "bg-emerald-600 text-white" : "bg-muted"
        }`}
      >
        <p>
        {message.text}
        </p>
         <div className="flex items-center justify-end gap-1 mt-1 text-[10px] opacity-70">
          <span>
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          {isMe && message.isDelivered && <CheckCheck className="h-3 w-3" />}
        </div>
      </div>
    </div>
  )
}

export default MessageBubble
