import { EllipsisVertical, MessageSquarePlus } from "lucide-react"
import Header from "./Header"


function LeftPanelBar() {
  return (
    <div className="flex justify-between">
            <Header/>
            <div className="flex gap-2">
               <MessageSquarePlus/>
               <EllipsisVertical/>
            </div>
        </div>
  )
}

export default LeftPanelBar
