import { EllipsisVertical, Phone, Search, Video } from "lucide-react"
import { Avatar, AvatarFallback } from "./ui/avatar"

function ActiveChatHeader({ selectedChatName}:{ selectedChatName:string|null}) {
  return (
    // sticky top-0 z-10
     <div className="p-2 flex flex-row shadow-md  items-center justify-between gap-2 bg-muted/30">
        <div className="flex items-center gap-2 min-w-0">
          <Avatar className="h-12 w-12 flex-shrink-0">
              <AvatarFallback>{selectedChatName.slice(0, 2).toUpperCase() ?? "?"}</AvatarFallback>
          </Avatar>
         <p className="truncate">{selectedChatName}</p>
        </div>
        <div className="flex gap-3">
          <Phone/>
          <Video/>
          <Search/>
          <EllipsisVertical/>
        </div>
        
      </div>
  )
}

export default ActiveChatHeader
