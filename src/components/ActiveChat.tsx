import ActiveChatHeader from "./ActiveChatHeader"
import MessageList from "./MessageList"


interface ActiveChatProps{
  selectedChatName:string|null
  chatId:number
}
function ActiveChat({ selectedChatName, chatId}:ActiveChatProps) {
  return (
    <div className="flex-1 flex flex-col min-h-0 p-2  ">
      {/* chat header */}
      <ActiveChatHeader selectedChatName={selectedChatName}/>
      {/* message list */}
      <MessageList chatId={chatId}/>
      {/* message input */}
       <div className="border flex-1 min-h-0 ">

      </div>
    </div>
  )
}

export default ActiveChat


{/* <div
        onClick={()=> onSelectChat(id)}
        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors 
            ${isActive ? "bg-accent" : "hover:bg-muted/50"}`}>
            <Avatar className="h-12 w-12 flex-shrink-0">
                <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                    <h4 className="text-sm font-semibold truncate text-foreground">{name}</h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{time}</span>
                </div>
                
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <div className="flex items-center gap-1 max-w-[85%]">
                        { isDelivered && <CheckCheck className="h-4 w-4 text-sky-500 flex-shrink-0"/>}
                        <span className="truncate text-base">{message}</span>
                    </div> 
                    
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                        {
                            unreadCount && unreadCount > 0 && (
                            <Badge className="h-5 min-w-[20px] rounded-full px-1.5 flex items-center justify-center bg-emerald-500 text-white text-[10px] hover:bg-emerald-600">
                                {unreadCount}
                            </Badge>
                            )
                        }
                    </div>

                </div>
            </div>
        </div> */}