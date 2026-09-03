import { Bot, FileText, Laptop, UserPlus, Video } from "lucide-react"
import { Button } from "../ui/button"
import RightPanelHero from "../RightPanelHero"

function RightPanel() {
   return(
        <div className="flex-1 p-2 flex flex-col items-center">
            {/* <div className="flex-1 flex flex-col justify-between items-center h-full p-8 bg-muted/20">
            
            </div> */}

        {/* Hero Feature Card */}
        <RightPanelHero/>

        {/* Bottom Action Grid */}
      <div className="grid grid-cols-4 gap-3 w-full max-w-xl">
        <ActionButton icon={FileText} label="Send document" />
        <ActionButton icon={UserPlus} label="Add contact" />
        <ActionButton icon={Video} label="New call" />
        <ActionButton icon={Bot} label="Ask Meta AI" />
      </div>

      
    </div>
    )
}


/* Helper Action Button Component */
function ActionButton({
  icon: Icon,
  label,
}: {
  icon: React.ElementType
  label: string
}) {
  return (
    <button className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className="p-3.5 rounded-full bg-muted group-hover:bg-accent transition-colors border">
        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
      </div>
      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
        {label}
      </span>
    </button>
  )
}

export default RightPanel
