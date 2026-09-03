import { CheckCheck } from "lucide-react"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Badge } from "./ui/badge"


interface ChatTileProps{
    name:string
    message:string
    time:string
    unreadCount?:number
    isDelivered?:boolean
    isActive?:boolean
}

function ChatTile({name,isActive,message,time,unreadCount,isDelivered}:ChatTileProps){
    return(
        <div
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
        </div>
    )
}


export default ChatTile